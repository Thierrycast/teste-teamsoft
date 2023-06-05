import ProductSection from '../ProductSection'
import IngredientsSection from '../IngredientsSection'

import {ContainerMain} from './styles'
import {IResponseData} from '@/types/ResponseApi'
 
interface Props {
    data: IResponseData
}

const Main = ({data}:Props) => {
    return(
    <ContainerMain>
       <ProductSection data={data} /> 
       <IngredientsSection data={data}/>
    </ContainerMain>
    )
    
}

export default Main