import styled from 'styled-components';

export const Container = styled.div`
	width: 350px;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background: #2c3e50;
	border-radius: 8px;
	margin: 100px;
	padding: 20px;

	@media (max-width: 768px) {
		position: fixed;
	  top: 0;
	  width: 100%;
		flex-direction: row;
		justify-content: space-around;
		margin: 0;
	  padding: 0;
	}

	&.active {
		border: 2px solid green;
	}
`;

export const AlbumPhotoContainer = styled.div`
	width: 300px;
	height: 300px;
	background: #c6c6c6;
	border-radius: 10px;

	@media (max-width: 768px) {
		width: 100px;
  	height: 100px;
  	margin: 10px;
	}
`;

export const AlbumPhoto = styled.img`
	height: 100%;
	border-radius: 10px;

	@media (min-width: 769px) {
		width: 100%;
	}
`;

export const Infos = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ArtistName = styled.span`
	width: 100%;
	text-align: center;
	margin: 10px 0 0 0;
	font-size: 14px;
`;

export const TrackName = styled.span`
	width: 100%;
	text-align: center;
	margin: 10px 0 0 0;
`;

export const ActionsContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Action = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 0;
	background: #000;
	margin: 20px 10px;
	display: flex;
  align-items: center;
  justify-content: center;
	cursor: pointer;

	svg {
		color: #fff;
		font-size: 20px;
	}

	&:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	&:hover {
		opacity: 0.4;
	}
`;