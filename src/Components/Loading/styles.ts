import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/loading-note.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice"
	}
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
	max-height: 100vh;
  display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;
	background: #000;
	position: fixed;
	z-index: 10000;
	overflow: hidden;

	&.hidden {
  	display: none;
  	transition: all 250ms linear 2s;
	}

	div {
		width: 400px !important;
		height: 400px !important;
		
		@media (max-width: 768px) {
			width: 300px !important;
			height: 300px !important;
		}
	}
`;

export const Animation = styled(Lottie).attrs({
	options: defaultOptions
})``;


export const Text = styled.span`
	font-size: 26px;
	font-weight: bold;
	color: #fff;

	@media (max-width: 768px) {
		font-size: 20px;
	}
`;