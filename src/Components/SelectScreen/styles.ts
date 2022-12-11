import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
	background: #000;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 30px 10px 10px 10px;
`;

export const Playlist = styled.div`
  width: auto;
  height: 90vh;
  display: flex;
  flex-direction: column !important;
  overflow: scroll;

  @media (max-width: 768px) {
		margin-top: 100px;
    overflow: inherit;
	}
`;