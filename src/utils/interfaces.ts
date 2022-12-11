export interface Genre {
	nameTranslated: string;
	name: string;
};

export interface Artist {
	id: string;
	images: {
		url: string;
	}[],
	name: string;
};

export interface Track {
	album: {
		id: string;
		images: {
			url: string;
		}[];
		name: string;
		release_date: string;
		type: string;
	},
	id: string;
	name: string;
	is_playable: boolean;
	popularity: number;
	type: string;
	uri: string;
	preview_url: string;
	artists: {
		name: string;
	}[];
};