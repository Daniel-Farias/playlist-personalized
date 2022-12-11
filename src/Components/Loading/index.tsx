import * as S from './styles';

interface Props {
	isShow: boolean;
}

export function Loading({ isShow }: Props) {
	return (
		<S.Container className={isShow === false ? 'hidden' : ''}>
			<S.Animation />
			<S.Text>Carregando Informações...</S.Text>
		</S.Container>
	);
};