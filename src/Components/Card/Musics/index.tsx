import { Track } from '../../../utils/interfaces';
import * as S from './styles';

interface Props {
	data: Track;
	isSelected?: boolean;
	onSelect: (track: Track) => void;
}

export function MusicsCard({ data, isSelected, onSelect }: Props) {
	return (
		<S.Container className={isSelected ? 'active' : ''} onClick={() => onSelect(data)}>
			<S.Image src={data.album.images[0].url} />
			<S.InfoContainer>
				<S.ArtistName>{data.artists[0].name}</S.ArtistName>
				<S.TrackName>{data.name}</S.TrackName>
			</S.InfoContainer>
		</S.Container>
	);
};