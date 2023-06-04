import {ContainerIngredientsSection, InformationCard, IngredientItem, IngredientInfos, IngredientAmount, NeedCutlery, FooterCard, OrderAmount, OrderButton} from'./styles'

const IngredientsSection = ()=>{
    return(
        <ContainerIngredientsSection>
            <InformationCard>
                <span>Adicionar Ingredientes</span>
                <p>Até 8 ingredientes.</p>
            
            </InformationCard>
            <div>

            <IngredientItem>
                <IngredientInfos>
                    <span>Queijo cheddar</span>
                    <p>+ R$4,99</p>
                </IngredientInfos>
                <IngredientAmount>
                    <img src="/minus-icon.svg"/>
                    <span>2</span>
                    <img src="/plus-icon.svg"/>
                </IngredientAmount>
            </IngredientItem>

            <IngredientItem>
                <IngredientInfos>
                    <span>Cebola crispy</span>
                    <p>+ R$1,50</p>
                </IngredientInfos>
                <IngredientAmount>
                    <img src="/minus-icon.svg"/>
                    <span>0</span>
                    <img src="/plus-icon.svg"/>
                </IngredientAmount>
            </IngredientItem>

            <IngredientItem>
                <IngredientInfos>
                    <span>Molho cheddar</span>
                    <p>+ R$3,50</p>
                </IngredientInfos>
                <IngredientAmount>
                    <img src="/minus-icon.svg"/>
                    <span>0</span>
                    <img src="/plus-icon.svg"/>
                </IngredientAmount>
            </IngredientItem>

            <IngredientItem>
                <IngredientInfos>
                    <span>Molho de picanha</span>
                    <p>+ R$3,50</p>
                </IngredientInfos>
                <IngredientAmount>
                    <img src="/minus-icon.svg"/>
                    <span>1</span>
                    <img src="/plus-icon.svg"/>
                </IngredientAmount>
            </IngredientItem>

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
                    <img src="/minus-icon.svg"/>
                        <span>2</span>
                    <img src="/plus-icon.svg"/>
                </OrderAmount>
                <OrderButton>Adicionar</OrderButton>
            </FooterCard>
            
        </ContainerIngredientsSection>
    )
}

export default IngredientsSection