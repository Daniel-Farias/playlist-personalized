import { GenresCard, ArtistsCard, MusicsCard } from '../../Components/Card';
import { ProgressBar } from '../../Components/ProgressBar';
import { Player } from '../../Components/Player';
import { useInfo } from '../../Contexts/Info';
import { Artist, Genre, Track } from '../../utils/interfaces';
import genres from "../../utils/genres.json";
import * as S from './styles';

interface Props {
  stage: number;
}

export function SelectScreen({ stage }: Props) {
  const { addGenre, constructPlaylist, selectTrack, changeTrack, genresSelected, artists, tracks, activeTrack } = useInfo();

  return (
    <S.Container>
      {stage === 1 && (
        <>
          <S.Title>Escolha {3 - genresSelected.length} Gênero(s)</S.Title>
          <ProgressBar items={genresSelected.length} />
          <S.Content>
            {genres.length > 0 && genres.map((genre: Genre) => (
              <GenresCard
                data={genre}
                onSelect={addGenre}
                key={genre.name}
                isSelected={genresSelected.includes(genre.name)} />
            ))}
          </S.Content>
        </>
      )}

      {stage === 2 && (
        <>
          <S.Title>Escolha O Seu Artista Preferido</S.Title>
          <S.Content>
            {artists.length > 0 && artists.map((artist: Artist) => (
              <ArtistsCard
                data={artist}
                onSelect={constructPlaylist}
                key={artist.name}
                isSelected={false}
              />
            ))}
          </S.Content>
        </>
      )}

      {stage === 3 && (
        <>
          <S.Title>Sua Playlist:</S.Title>
          <S.Content>
            <S.Playlist>
              {tracks.length > 0 && tracks.map((track: Track) => (
                <MusicsCard
                  data={track}
                  key={track.name}
                  onSelect={selectTrack}
                  isSelected={activeTrack !== null && tracks[activeTrack].name === track.name}
                />
              ))}
            </S.Playlist>
            <Player
              track={activeTrack !== null && tracks[activeTrack]}
              onChangeTrack={changeTrack}
              canPrev={activeTrack !== null && activeTrack !== 0}
              canNext={activeTrack !== null && activeTrack + 1 !== tracks.length}
            />
          </S.Content>
        </>
      )}
    </S.Container>
  );
}