//@flow

import styled, { keyframes } from 'styled-components';

export const Slider = styled.div`
  margin: 5em auto;
`;

export const Container = styled.div`
  display: flex;
  margin: 15px 0;
  justify-content: ${props => props.titles ? 'space-between' : 'initial'};
`;

export const Title = styled.div`
  color: ${props => props.disable ? '#dbdbdb' : '#5125db' };
  align-self: center;
  font-family: 'Viga', sans-serif;
  letter-spacing: 2px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
`;

export const Donut = styled.div`
  border: 6px solid #5125db;
  border-color: ${props => props.disable ? '#dbdbdb' : '#5125db' };
  border-radius: 20px;
  height:15px;
  width:35px;
  align-self: center;
  cursor: pointer;
`;

const progress = keyframes`
  from {background-color: #dbdbdb;}
  to {background-color: #5125db;}
`

export const Line = styled.div`
  background-color: ${props => props.disable ? '#dbdbdb' : '#5125db' };
  width: 100%;
  height: 6px;
  align-self: center;
  animation: ${props => props.animate ? `${progress} 1s linear infinite` : 'none' };
  animation-iteration-count: 1;
`
export const Space = styled.div`
  width: ${props => `${props.width || 20}px`}
`