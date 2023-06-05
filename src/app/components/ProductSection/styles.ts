import styled from 'styled-components';

export const ContainerProductSection = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

width: 59.7rem;
padding: 2.4rem 0;

@media (max-width: 680px) {
    width: 100%;
}
`

export const ProductImg = styled.img`
width: 100%;
`
export const ProductName = styled.h2`
display: flex;
align-items: center;
font-weight: 500;
font-size: 2.8rem;
color: #4E4E4E;

@media (max-width: 680px) {
    font-size: 1.8rem;
}
`

export const ProductDescription = styled.p`
font-weight: 400;
font-size: 2rem;
color: #4E4E4E;

@media (max-width: 680px) {
    font-size: 1.6rem;
}
`

export const ProductPrices = styled.div`
display: flex;
gap: 1.7rem;

font-size: 3.2rem;
font-weight: 400;

@media (max-width: 680px) {
    font-size: 1.4rem;
}
`

export const Price = styled.span`
color: #DC6E05;
`

export const Discount = styled.span`
text-decoration-line: line-through;
color: #4E4E4E;
`
