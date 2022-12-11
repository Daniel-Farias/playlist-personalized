import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
	}

  &.active {
    border: 3px solid green;
  }

  &:hover {
		opacity: 0.6;
	}
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4834d4;
  width: 100%;
  height: 30px;
  position: relative;
  margin: -23px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Name = styled.span`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
	}
`;
