import {ContainerProductSection, ProductImg, ProductName, ProductDescription, ProductPrices, Price, Discount} from './styles'

const ProductSection = () => {

    
return(
    <ContainerProductSection>
        <ProductImg src='/product-photo.svg' />
         {/* img indisponivel, utilizando imagem do figma */}

        <ProductName>Oferta Picanha Cheddar Bacon</ProductName>
        <ProductDescription>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</ProductDescription>
        <ProductPrices>
            <Price>R$31,99</Price>
            <Discount>R$34,95</Discount>
        </ProductPrices>
    </ContainerProductSection>
)

}

export default ProductSection