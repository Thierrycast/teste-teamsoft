import { useState } from 'react';
import {
  ContainerIngredientsSection,
  InformationCard,
  IngredientItem,
  IngredientInfos,
  IngredientAmount,
  NeedCutlery,
  FooterCard,
  OrderAmount,
  OrderButton
} from './styles';

import { IResponseData } from '@/types/ResponseApi';

import { handleDecrease, handleIncrease } from '@/helpers/controllerQuantityItem';


interface Props {
  data: IResponseData;
}

interface Ingredient {
  id: number;
  amount: number;
}

const IngredientsSection = ({ data }: Props) => {
  const [ingredientsQuantity, setIngredientsQuantity] = useState<Ingredient[]>([
    { id: 1, amount: 0 },
    { id: 2, amount: 0 },
    { id: 3, amount: 0 },
    { id: 4, amount: 0 }
  ]);

 
  return (
    <ContainerIngredientsSection>
      <InformationCard>
        <span>Adicionar Ingredientes</span>
        <p>Até 8 ingredientes.</p>
      </InformationCard>
      <div>
        {data[0].ingredients[0].itens.map(ingredient => (
          <IngredientItem
            key={ingredient.id}
            style={ingredient.id === 4 ? { border: 'none' } : {}}
          >
            <IngredientInfos>
              <span>{ingredient.nm_item}</span>
              <p>+ R${ingredient.vl_item.toFixed(2)}</p>
            </IngredientInfos>
            <IngredientAmount>
              {ingredientsQuantity.find(item => item.id === ingredient.id)?.amount === 0 ? (
                <img src="/minus-icon-disabled.svg" alt="Minus Icon" />
              ) : (
                <img src="/minus-icon.svg" alt="Minus Icon" onClick={() => handleDecrease(ingredient.id, setIngredientsQuantity)} />
              )}
              <span>{ingredientsQuantity.find(item => item.id === ingredient.id)?.amount}</span>
              <img src="/plus-icon.svg" alt="Plus Icon" onClick={() => handleIncrease(ingredient.id, setIngredientsQuantity)} />
            </IngredientAmount>
          </IngredientItem>
        ))}
      </div>
      <InformationCard>
        <span>Precisa de Talher?</span>
      </InformationCard>
      <NeedCutlery>
        <div>
          <label htmlFor="">Sim</label>
          <input type="radio" />
        </div>
        <div>
          <label htmlFor="">Não</label>
          <input type="radio" />
        </div>
      </NeedCutlery>
      <FooterCard>
        <OrderAmount>
          <img src="/minus-icon.svg" />
          <span>2</span>
          <img src="/plus-icon.svg" />
        </OrderAmount>
        <OrderButton>Adicionar</OrderButton>
      </FooterCard>
    </ContainerIngredientsSection>
  );
};

export default IngredientsSection;
