import * as S from './styles';

interface Props {
	items: number;
}

export function ProgressBar({ items }: Props) {
  return (
    <S.Container>
      <S.Content style={{ width: 33.33 * items + "%" }} />
    </S.Container>
  );
};