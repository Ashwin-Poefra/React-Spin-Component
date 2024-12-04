import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Circle, Container, Dot, InnerBorder, LoadingAnim, LoadingOverlay, MiddleBorder, OuterBorder, POINTS, ToggleButton } from './LoadingSpinner.style';

// Types and Interfaces
interface LoadingSpinnerProps {
  isLoading: boolean;
  onToggle: () => void;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading, onToggle }) => {
  return (
    <Container>
      <LoadingOverlay isLoading={isLoading} />
      <ToggleButton onClick={onToggle}>
        {isLoading ? 'hide' : 'show'}
      </ToggleButton>
      <LoadingAnim isLoading={isLoading}>
        <OuterBorder />
        <InnerBorder />
        <MiddleBorder />
        <Circle>
          {[...Array(POINTS)].map((_, index) => (
            <Dot key={index} />
          ))}
        </Circle>
      </LoadingAnim>
    </Container>
  );
};

export default LoadingSpinner; 