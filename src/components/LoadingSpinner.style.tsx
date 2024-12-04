import styled, { keyframes } from 'styled-components';

interface StyledProps {
  isLoading: boolean;
}

// export Constants
export const PINK = '#e34981';
export const LOADER_SIZE = 200;
export const ANIMATION_LENGTH = 5;
export const POINTS = 12;
export const DOT_SIZE = 20;

// Animations
export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const jitter = keyframes`
  0% { transform: scale(1, 1); }
  25% { transform: scale(0.7, 0.7); }
  50% { transform: scale(1, 1); }
  75% { transform: scale(1.3, 1.3); }
  100% { transform: scale(1, 1); }
`;

export const fadeInOut = keyframes`
  0% { opacity: 0.8; }
  25% { opacity: 0.2; }
  75% { opacity: 1; }
  100% { opacity: 0.8; }
`;

// Styled Components
export const Container = styled.div`
  margin: 20px;
  width: calc(100% - 40px);
  height: auto;
  position: relative;
`;

export const LoadingOverlay = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.2s ease-out;

  ${({ isLoading }) => isLoading && `
    background: rgba(255, 255, 255, 0.5);
  `}
`;

export const LoadingAnim = styled.div<StyledProps>`
  position: relative;
  width: ${LOADER_SIZE}px;
  height: ${LOADER_SIZE}px;
  margin: auto;
  perspective: 800px;
  transform-style: preserve-3d;
  transform: translateZ(-100px) rotateY(-90deg) rotateX(90deg) rotateZ(90deg) scale(0.5);
  opacity: 0;
  transition: all 0.2s ease-out;

  ${({ isLoading }) => isLoading && `
    transform: translateZ(0) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1);
    opacity: 1;
  `}
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  animation: ${spin} ${ANIMATION_LENGTH}s linear infinite;
`;

export const Border = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 3px solid ${PINK};
`;

export const OuterBorder = styled(Border)`
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: ${spin} 2s linear reverse infinite;
`;

export const InnerBorder = styled(Border)`
  top: 18%;
  left: 18%;
  width: 64%;
  height: 64%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: ${spin} 2s linear infinite;
`;

export const MiddleBorder = styled(Border)`
  top: 40%;
  left: 40%;
  width: 20%;
  height: 20%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: ${spin} 1s linear infinite;
`;

export const Dot = styled.span`
  position: absolute;
  display: block;
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-radius: 50%;
  background-color: ${PINK};
  animation: ${jitter} ${ANIMATION_LENGTH}s ease-in-out infinite,
             ${fadeInOut} ${ANIMATION_LENGTH}s linear infinite;
  
  ${[...Array(POINTS)].map((_, i) => `
    &:nth-child(${i + 1}) {
      top: calc(50% - ${DOT_SIZE / 2}px + ${(LOADER_SIZE / 2 - DOT_SIZE) * Math.sin(i * (2 * Math.PI / POINTS))}px);
      left: calc(50% - ${DOT_SIZE / 2}px + ${(LOADER_SIZE / 2 - DOT_SIZE) * Math.cos(i * (2 * Math.PI / POINTS))}px);
      animation-delay: ${i * (ANIMATION_LENGTH / POINTS)}s;
    }
  `).join('')}
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
`;