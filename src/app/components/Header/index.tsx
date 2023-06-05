import {ContainerHeader, BackArrow, Logo, HeaderInputs, AddressInput, SearchInput, LoginInput, CartInput} from './styles'

const Header = () => {
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
            </CartInput>
        </HeaderInputs>
      </ContainerHeader>
    );
  };
  
  export default Header;

  
  
  
  
  