import {PopoverContainer} from './styles'

const Popover = () => {

    return(
        <PopoverContainer>
                <div className='header-popover'>
                    <h2>Adicionado com Sucesso</h2>
                </div>
                <div className='body-popover' >
                    <h2>Oferta Cheddar Bacon</h2>
                    <p>Ingredientes:</p>
                    <ul>
                        <li><p>1 Carne 250gr</p></li>
                        <li><p>2 Queijo Cheddar</p></li>
                        <li><p>1 Bacon</p></li>
                        <li><p>Molho Especial</p></li>
                    </ul>
                </div>
        </PopoverContainer>
    )
}

export default Popover