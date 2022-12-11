import { Artist } from '../../../utils/interfaces';
import * as S from './styles';

interface Props {
  data: Artist;
  isSelected: boolean;
  onSelect?: (artist: Artist) => void;
}

export function ArtistsCard({ data, isSelected, onSelect }: Props) {
  return (
    <S.Container className={isSelected ? 'active' : ''} onClick={() => onSelect && onSelect(data)}>
      <S.Thumb src={data.images[0].url} />
      <S.ContainerName>
        <S.Name>{data.name}</S.Name>
      </S.ContainerName>
    </S.Container>
  );
};