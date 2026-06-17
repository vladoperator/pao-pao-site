import { Language } from './types';

type StringsT = {
  [key: string]: Record<Language, string>;
};

export const STRINGS: StringsT = {
  cart: { en: 'Cart', ro: 'Coș', ru: 'Корзина' },
  addToCart: { en: 'Add to Cart', ro: 'Adaugă în coș', ru: 'В корзину' },
  checkout: { en: 'Checkout', ro: 'Finalizează comanda', ru: 'Оформить заказ' },
  emptyCart: { en: 'Your cart is empty', ro: 'Coșul tău este gol', ru: 'Ваша корзина пуста' },
  from: { en: 'From', ro: 'De la', ru: 'От' },
  total: { en: 'Total', ro: 'Total', ru: 'Итого' },
  size: { en: 'Size', ro: 'Mărime', ru: 'Размер' },
  iceLevel: { en: 'Ice Level', ro: 'Nivel Gheață', ru: 'Уровень льда' },
  sugarLevel: { en: 'Sugar Level', ro: 'Nivel Zahăr', ru: 'Уровень сахара' },
  extraToppings: { en: 'Extra Toppings', ro: 'Topping-uri Extra', ru: 'Дополнительные топпинги' },
  regularice: { en: 'Regular Ice', ro: 'Gheață normală', ru: 'Обычный лед' },
  lessice: { en: 'Less Ice', ro: 'Mai puțină gheață', ru: 'Меньше льда' },
  noice: { en: 'No Ice', ro: 'Fără gheață', ru: 'Без льда' },
  lei: { en: 'LEI', ro: 'LEI', ru: 'ЛЕЙ' },
  optional: { en: '(Optional)', ro: '(Opțional)', ru: '(Необязательно)'},
  close: { en: 'Close', ro: 'Închide', ru: 'Закрыть'},
};
