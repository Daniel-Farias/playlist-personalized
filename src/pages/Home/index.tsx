import { useInfo } from '../../Contexts/Info';
import { Loading } from '../../Components/Loading';
import { SelectScreen } from '../../Components/SelectScreen';
import * as S from './styles';

export function Home() {
  const { isLoading, stage } = useInfo();

  return (
    <S.Container>
      <Loading isShow={isLoading} />
      <SelectScreen stage={stage} />
    </S.Container>
  );
}