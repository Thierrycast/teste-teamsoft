import ProductSection from '../ProductSection'
import IngredientsSection from '../IngredientsSection'
import Header from '../Header/index'
import React, { useState } from 'react';

import { ContainerMain } from './styles'
import { IResponseData } from '@/types/ResponseApi'

interface Props {
  data: IResponseData
}

type Ingredient = {
  id: number;
  nm_item: string;
  amount: number;
};

const Main = ({ data }: Props) => {


  const [ingredientsQuantity, setIngredientsQuantity] = useState<Ingredient[]>(() =>
    data[0].ingredients[0].itens.map((ingredient) => ({
      id: ingredient.id,
      nm_item: ingredient.nm_item,
      amount: 0
    }))
  );

  const [openPopover, setOpenPopover] = useState(false)


  return (
    <>
      <Header ingredientsQuantity={ingredientsQuantity} openPopover={openPopover}/>
      <ContainerMain>
        <ProductSection data={data} />
        <IngredientsSection data={data} setIngredientsQuantity={setIngredientsQuantity}
          ingredientsQuantity={ingredientsQuantity} setOpenPopover={setOpenPopover}
        />
      </ContainerMain>
    </>

  )

}

export default Main