import { useEffect, useRef, useState } from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from 'react-icons/fi';
import { Track } from '../../utils/interfaces';
import noImage from '../../assets/images/no-image.png';
import * as S from './styles';

interface Props {
	onChangeTrack: (action: string) => void;
	track: Track | any;
	canNext: boolean;
	canPrev: boolean;
}

export function Player({ onChangeTrack, track, canNext, canPrev }: Props) {
	const [isPaused, setIsPaused] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	function togglePlayer() {
		setIsPaused(!isPaused);

		if (audioRef.current) {
			isPaused ? audioRef.current.play() : audioRef.current.pause();
		}
	}

	useEffect(() => {
		if (!!track.album) {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.load();
				audioRef.current.play();
			}

			setIsPaused(false);
		}
	}, [track]);

	return (
		<S.Container>
			<S.AlbumPhotoContainer>
				<S.AlbumPhoto src={!!track.album ? track.album.images[0].url : noImage} />
			</S.AlbumPhotoContainer>
			<S.Infos>
				<S.ArtistName>{!!track.name && track.artists[0].name}</S.ArtistName>
				<S.TrackName>{!!track.name && track.name}</S.TrackName>
				<S.ActionsContainer>
					<S.Action onClick={() => onChangeTrack("prev")} disabled={!canPrev}>
						<FiSkipBack />
					</S.Action>

					<S.Action onClick={togglePlayer} disabled={track.album === undefined}>
						{isPaused ? <FiPlay /> : <FiPause />}
					</S.Action>

					<S.Action onClick={() => onChangeTrack("next")} disabled={!canNext}>
						<FiSkipForward />
					</S.Action>
					{track.preview_url && (
						<audio ref={audioRef} onEnded={() => onChangeTrack("next")}>
							<source src={track.preview_url} type='audio/mpeg' />
						</audio>
					)}
				</S.ActionsContainer>
			</S.Infos>
		</S.Container>
	);
};