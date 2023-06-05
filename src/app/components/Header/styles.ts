import styled from 'styled-components';

export const ContainerHeader = styled.header`
  width: 100%;
  height: 8rem;
  background-color: #F4F4F4;
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 4rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  position: relative;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;

    height: 5.6rem;
}
`;

export const BackArrow = styled.img`
 display: none;
 position: absolute;

 top: 1.6rem;
 left: 1.6rem;

  @media (max-width: 500px) {
    display: block;
}
`;

export const Logo = styled.img`
  width: 22.5rem;
  height: 4.8rem;

  @media (max-width: 500px) {
    width: 15rem;
    height: 3.2rem;
}
`;

export const HeaderInputs = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  @media (max-width: 800px) {
display: none;
}

`;

export const AddressInput = styled.div`
  width: 23rem;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0.4rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0.8rem;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  p {
    font-weight: 400;
    color: #D80000;
  }

  span {
    font-weight: 700;
    color: #656363; 
  }
`;

export const SearchInput = styled.input`
  width: 35.4rem;
  height: 4.8rem;
  padding: 0 1.6rem;
  background-color: #FFF;
  border-radius: 0.4rem;
  border: #ED3237 1px solid;
`;

export const LoginInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 8.8rem;
  height: 3.2rem;

  p {
    font-size: 1.6rem;
    line-height: 1.7rem;
    color: #ED3237;
  }
`;

export const CartInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 8.8rem;
  height: 3.2rem;

  position: relative;

  p {
    font-size: 1.6rem;
    line-height: 1.7rem;
    color: #ED3237;
  }
`;

