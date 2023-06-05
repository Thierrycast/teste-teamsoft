// utils/helpers.ts
interface Ingredient {
    id: number;
    amount: number;
  }

export const handleDecrease = (id: number, setIngredientsQuantity: React.Dispatch<React.SetStateAction<Ingredient[]>>) => {
    setIngredientsQuantity(prevIngredients => {
      return prevIngredients.map(ingredient => {
        if (ingredient.id === id && ingredient.amount > 0) {
          return {
            ...ingredient,
            amount: ingredient.amount - 1
          };
        }
        return ingredient;
      });
    });
  };
  
  export const handleIncrease = (id: number, setIngredientsQuantity: React.Dispatch<React.SetStateAction<Ingredient[]>>) => {
    setIngredientsQuantity(prevIngredients => {
      return prevIngredients.map(ingredient => {
        if (ingredient.id === id) {
          return {
            ...ingredient,
            amount: ingredient.amount + 1
          };
        }
        return ingredient;
      });
    });
  };
  