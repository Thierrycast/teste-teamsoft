import {ContainerProductSection, ProductImg, ProductName, ProductDescription, ProductPrices, Price, Discount} from './styles'

import {IResponseData} from '@/types/ResponseApi'
 
interface Props {
    data: IResponseData
}

const ProductSection = ({data}:Props) => {

    
return(
    <ContainerProductSection>
        <ProductImg src='/product-photo.svg' />
         {/* img indisponivel, utilizando imagem do figma */}

        <ProductName>{data[0].nm_product}</ProductName>
        <ProductDescription>{data[0].description}</ProductDescription>
        <ProductPrices>
            <Price>{data[0].vl_price}</Price>
            <Discount>{data[0].vl_discount}</Discount>
        </ProductPrices>
    </ContainerProductSection>
)

}

export default ProductSection