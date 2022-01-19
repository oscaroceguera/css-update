import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  border: 4px solid;
  width: 500px;
  padding: 2rem;
  margin: 0 auto;
`;

export const BoxContainer = styled.div`
  position: relative;
  left: 45%;
  border: 4px dashed hsl(225deg, 7%, 60%);
  width: 80px;
  height: 80px;
`;

export const BoxItem = styled.div`
  background: hsl(245deg, 100%, 60%);
  opacity: 0.8;
  height: 100%;
  width: 100%;
  transform: ${(props) => props.transform};
`;

export const RangeContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const Universe = styled.div`
  position: relative;
  border: 3px solid;
  width: 50%;
  padding: 4rem;
  margin: 0 auto;
`;

export const Planet = styled.div`
  width: 80px;
  height: 80px;
  background: dodgerblue;
  border-radius: 50%;
  margin: 0 auto;
`;

const orbit = keyframes`
  from {
    transform: rotate(0deg)
    translateX(80px);
  }
  to {
    transform: rotate(360deg)
    translateX(80px);
  }
`;

export const Moon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  background: silver;
  border-radius: 50%;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${orbit} 6000ms linear infinite;
  }
`;
