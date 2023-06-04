import styled from 'styled-components';

export const ContainerIngredientsSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 3.2rem;

gap: 0.8rem;

width: 43.9rem;
/* height: 66.2rem; */

border: 0.1rem solid #686868;
border-radius: 0.8rem;

`

export const InformationCard = styled.div`
width: 37.5rem;
height: 5.5rem;

display: flex;
flex-direction: column;
padding: 0.8rem 1.6rem;

background: rgba(253, 215, 14, 0.2);

span{

font-weight: 500;
font-size: 1.4rem;
line-height: 1.6rem;

color: #4E4E4E;
}

p{
font-weight: 400;
font-size: 1.2rem;
line-height: 2rem;

color: #E49700;
}
`


export const IngredientItem = styled.div`
width: 34.3rem;

padding: 1.7rem 0 0;

display: flex;
align-items: center;
justify-content: space-between;

border-bottom: 1px solid #E8A634;
`

export const IngredientInfos = styled.div`
height: 100%;
display: flex;
flex-direction: column;

gap: 4rem;
padding: 0 0 1.6rem;

span{
font-weight: 500;
font-size: 1.4rem;
line-height: 1.6rem;
color: #4E4E4E;
}

p{
font-weight: 400;
font-size: 1.4rem;
line-height: 1.6rem;

color: #F09035; 
}

`

export const IngredientAmount = styled.div`

width: 8.9rem;
height: 3.2rem;

display: flex;
align-items: center;
justify-content: space-between;

padding: 0.4rem;

border: 0.1rem solid #F09035;
border-radius: 0.5rem;

span{
font-weight: 400;
font-size: 1.4rem;
line-height: 1.6rem;

color: #4E4E4E;
}

img{
    cursor: pointer;
}
`
export const NeedCutlery = styled.div`
width: 34.3rem;
display: flex ;
gap: 2rem;
flex-direction: column;

padding: 0.8rem 0 ;

div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    label{
      
font-weight: 400;
font-size: 1.4rem;
line-height: 1.6rem;

color: #4E4E4E;
    }

    input{
        
        background-color: #FEBC10;
        color: #FEBC10;
        &:checked {
    background-color: #FEBC10;
    border-color: #FEBC10;
  }
    }
}
`

export const FooterCard = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

` 

export const OrderAmount = styled.div`
width: 14rem;
height: 4rem;

display: flex;
align-items: center;
justify-content: space-between;

padding: 0.4rem;

border: 0.1rem solid #F09035;
border-radius: 0.5rem;

span{
font-weight: 400;
font-size: 1.4rem;
line-height: 1.6rem;

color: #4E4E4E;
}

img{
    cursor: pointer;
}
`
export const OrderButton = styled.button`
width: 219px;
height: 40px;

background: #F09035;
border-radius: 4px;

border: none;
border-radius: 8px;

font-weight: 500;
font-size: 14px;
line-height: 10px;

color: #FFFFFF;
`


