import styled from 'styled-components';

export const ContainerProductSection = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

width: 59.7rem;
height: 66.2rem;
padding: 2.4rem 0;
`

export const ProductImg = styled.img`

`
export const ProductName = styled.h2`
height: 9.1rem;
display: flex;
align-items: center;
font-weight: 500;
font-size: 2.8rem;
color: #4E4E4E;
`

export const ProductDescription = styled.p`
height: 6.5rem;
font-weight: 400;
font-size: 2rem;
color: #4E4E4E;
`

export const ProductPrices = styled.div`
display: flex;
gap: 1.7rem;

font-size: 3.2rem;
font-weight: 400;
`

export const Price = styled.span`
color: #DC6E05;
`

export const Discount = styled.span`
text-decoration-line: line-through;
color: #4E4E4E;
`
