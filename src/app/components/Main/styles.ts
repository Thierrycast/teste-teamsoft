import styled from 'styled-components';

export const ContainerMain = styled.main`
display: flex;
justify-content: center;
gap: 11.2rem;
padding: 2.4rem 6.6rem;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

@media (max-width: 500px) {
padding: 1.6rem;
}

`