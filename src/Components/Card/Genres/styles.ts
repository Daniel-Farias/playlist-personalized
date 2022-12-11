import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #34495e;
  border-radius: 10px;
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

export const Name = styled.span`
  padding: 10px;
  font-size: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
	}
`;
