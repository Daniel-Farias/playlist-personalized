import { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
import { getArtistsFromSpotify, getArtistsRelatedFromSpotify, getPlaylist, getToken } from '../utils/spotifyApi';
import { Artist, Track } from '../utils/interfaces';

interface infoContextData {
  isLoading: boolean;
  genresSelected: string[];
  activeTrack: number;
  artists: Artist[];
  tracks: Track[];
  stage: number;
  addGenre(genre: string): void;
  selectTrack(trackSelected: Track): void;
  changeTrack(action: string): void;
  constructPlaylist(artist: Artist): void;
};

export const InfoContext = createContext<infoContextData>({} as infoContextData);

export function InfoProvider({ children }: PropsWithChildren) {
  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [genresSelected, setGenresSelected] = useState<string[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [activeTrack, setActiveTrack] = useState<number>(null as any);

  useEffect(() => {
    getToken();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (genresSelected.length > 2) {
      getArtists();
    }
    // eslint-disable-next-line
  }, [genresSelected]);
  
  function addGenre(genre: string) {
    if (!genresSelected.includes(genre)) {
      setGenresSelected([...genresSelected, genre]);
    } else {
      let genres = genresSelected.filter(e => e !== genre);
      setGenresSelected(genres);
    }
  }

  async function getArtists() {
    try {
      let list: Artist[] = [];
      setIsLoading(true);

      for (let index = 0; index < genresSelected.length; index++) {
        const newArtists = await getArtistsFromSpotify(genresSelected[index]);
        await newArtists.forEach((newArtist: Artist) => {
          const found = list.find(artist => artist.name === newArtist.name);
          if(!found) {
            list.push(newArtist);
          }
        })

      }
      setArtists(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setStage(2);
    }
  }
  
  async function constructPlaylist(artist: Artist) {
    try {
      setIsLoading(true);      
      const artistsRelated = await getArtistsRelatedFromSpotify(artist);
      const playlist = await getPlaylist(artist, artists, artistsRelated);
      setTracks(playlist);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setStage(3);
    }
  }

  function selectTrack(trackSelected: Track) {
    const trackIndex = tracks.findIndex(track => {
      return trackSelected.name === track.name;
    });

    setActiveTrack(trackIndex);
  }

  function changeTrack(action: string) {
    setActiveTrack(action === 'prev' ? activeTrack - 1 : activeTrack + 1);
  }

  return (
    <InfoContext.Provider value={{
      addGenre, selectTrack, changeTrack, constructPlaylist,
      stage, isLoading, genresSelected, artists, tracks, activeTrack
    }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export function useInfo(): infoContextData {
  const context = useContext(InfoContext);
  return context;
}