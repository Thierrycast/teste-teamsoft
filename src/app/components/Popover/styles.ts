import styled from "styled-components";

export const PopoverContainer = styled.div`
  background-color: #f8f8f8;
  width: 21rem;
  

  position: absolute;
  top: 4rem;
  right: -3rem;

  .header-popover {
    height: 3.2rem;
    background-color: #f09035;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.6rem;

      color: #ffffff;
    }
  }

  .body-popover {
    padding: 0.8rem 1.1rem;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;

      color: #bc2e31;
    }

    p{
        font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
 

    color: #4e4e4e;
    }

    ul{
        margin-left: 2rem;
    }
  }
`;
