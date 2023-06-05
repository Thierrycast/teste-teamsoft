import { PopoverContainer } from './styles';

interface Props {
  ingredientsQuantity: Ingredient[];
  openPopover: boolean
}

type Ingredient = {
  id: number;
  nm_item: string;
  amount: number;
};

const Popover = ({ ingredientsQuantity, openPopover }: Props) => {
  return (
    <PopoverContainer style={{ display: openPopover ? 'block' : 'none' }} >
      <div className='header-popover'>
        <h2>Adicionado com Sucesso</h2>
      </div>
      <div className='body-popover'>
        <h2>Oferta Cheddar Bacon</h2>
        <p>Ingredientes:</p>
        <ul>
          {ingredientsQuantity.map((ingredient) =>
            ingredient.amount !== 0 ? (
              <li key={ingredient.id}>
                <p>{ingredient.amount} {ingredient.nm_item}</p>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </PopoverContainer>
  );
};

export default Popover;
