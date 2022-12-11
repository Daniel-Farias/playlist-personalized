import { Genre } from '../../../utils/interfaces';
import * as S from './styles';

interface Props {
  data: Genre;
  isSelected: boolean;
  onSelect: (genre: string) => void;
}

export function GenresCard({ data, isSelected, onSelect }: Props) {
  return (
    <S.Container className={isSelected ? 'active' : ''} onClick={() => onSelect(data.name)}>
      <S.Name>{data.nameTranslated}</S.Name>
    </S.Container>
  );
};