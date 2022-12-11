import axios from 'axios';
import qs from 'qs';
import { Artist, Track } from '../utils/interfaces';

const baseURL = 'https://api.spotify.com/v1';
let token: string;

export async function getArtistsFromSpotify(genre: string) {
	const { data } = await axios.get(baseURL + `/search`, {
		headers: { Authorization: `Bearer ${token}` },
		params: {
			market: "BR",
			type: "artist",
			q: `genre:${genre}`,
			limit: 10
		}
	});
	return data.artists.items;
}

export async function getArtistsRelatedFromSpotify(artist: Artist) {
	const { data } = await axios.get(baseURL + `/artists/${artist.id}/related-artists`, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return data.artists;
}

export async function getTracksFromSpotify(artist: Artist) {
	const { data } = await axios.get(baseURL + `/artists/${artist.id}/top-tracks`, {
		headers: { Authorization: `Bearer ${token}` },
		params: {
			market: "BR",
		}
	});

	return data.tracks;
}

export async function getPlaylist(artistSelected: Artist, allArtists: Artist[], artistsRelated: Artist[]) {
	let playlist = [];
	const AllTracks: Track[] = await getTracksFromSpotify(artistSelected);
	for (let index = 0; index < 5; index++) {
		playlist.push(AllTracks[0 + index]);
	}

	allArtists.forEach(async (artist: Artist) => {
		if (artist.name !== artistSelected.name) {
			const AllTracks: Track[] = await getTracksFromSpotify(artist);
			playlist.push(AllTracks[0]);
		}
	});

	for (let index = 0; index < 5; index++) {
		const AllTracks: Track[] = await getTracksFromSpotify(artistsRelated[index]);
		playlist.push(AllTracks[0]);
	}

	playlist = playlist.filter((value: Track, index: number, self: Track[]) =>
		index === self.findIndex((t: Track) => (
			t.name === value.name
		)));

	return shuffle(playlist);
}

export async function getToken() {
	const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
	const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
	const auth_token = btoa(`${client_id}:${client_secret}`);

	try {
		const token_url = 'https://accounts.spotify.com/api/token';
		const data = qs.stringify({ 'grant_type': 'client_credentials' });

		const response = await axios.post(token_url, data, {
			headers: {
				'Authorization': `Basic ${auth_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})

		token = response.data.access_token;
	} catch (error) {
		console.log(error);
	}
}

function shuffle(array: Track[]) {
	let currentIndex = array.length, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}