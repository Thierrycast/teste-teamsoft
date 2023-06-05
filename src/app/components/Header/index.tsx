import {ContainerHeader, BackArrow, Logo, HeaderInputs, AddressInput, SearchInput, LoginInput, CartInput} from './styles'

import Popover from '../Popover/index'

interface Props {
    ingredientsQuantity: Ingredient[];
    openPopover: boolean
  }
  
  type Ingredient = {
    id: number;
    nm_item: string;
    amount: number;
  };

const Header = ({ingredientsQuantity, openPopover}:Props) => {
    
    return (
      <ContainerHeader>
        <BackArrow src='/back-arrow.svg' />
        <Logo src="/logo.svg" alt="" />
        <HeaderInputs>
            <AddressInput>
                <div>
                    <p>Entrega:</p>
                    <span>R. Antonio Braune, 222</span>
                </div>
                <img src="/adress-arrow.svg" alt="" />

            </AddressInput>
            <SearchInput placeholder='Busque por estabelecimento ou produtos' />
            <LoginInput>
                <img src="/profile-icon.svg" alt="" />
                <p>Entrar</p>
            </LoginInput>
            <CartInput>
                <img src="/cart-icon.svg" alt="" />
                <p>Carrinho</p>
                <Popover ingredientsQuantity={ingredientsQuantity} openPopover={openPopover}/>
            </CartInput>
        </HeaderInputs>
      </ContainerHeader>
    );
  };
  
  export default Header;

  
  
  
  
  