import styled from 'styled-components';

export const Container = styled.div`
	width: 300px;
	height: 80px;
	display: flex;
	align-items: center;
	padding: 15px;
	margin: 5px;
	background: #2c3e50;
	border-radius: 8px;
	cursor: pointer;

	&.active {
		border: 2px solid green;
	}

	&:hover {
		opacity: 0.6;
	}
`;

export const Image = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 10px;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 15px;
`;

export const ArtistName = styled.span`
	font-size: 14px;
	margin-bottom: 7px;
`;

export const TrackName = styled.span`
	font-size: 16px;
`;