import { Category, Language, Product, Topping } from './types';

export const TOPPINGS: Topping[] = [
  { id: 'tapioca', name: { en: 'Tapioca Pearls', ro: 'Perle de Tapioca', ru: 'Жемчужины Тапиоки' }, price: 15 },
  { id: 'popping', name: { en: 'Popping Boba', ro: 'Popping Boba', ru: 'Лопающаяся Боба' }, price: 15 },
  { id: 'coconut', name: { en: 'Coconut Jelly', ro: 'Jeleu de Cocos', ru: 'Кокосовое желе' }, price: 15 },
  { id: 'cheese', name: { en: 'Cheese Foam', ro: 'Spumă de Brânză', ru: 'Сырная пенка' }, price: 15 },
];

export const CATEGORIES: Category[] = [
  { id: 'milky', name: { en: 'Milky Series', ro: 'Seria Milky', ru: 'Молочная Серия' } },
  { id: 'coffee', name: { en: 'Coffee Series', ro: 'Seria Cafea', ru: 'Кофейная Серия' } },
  { id: 'fruit', name: { en: 'Fruit Tea', ro: 'Ceai de Fructe', ru: 'Фруктовый Чай' } },
  { id: 'matcha', name: { en: 'Matcha Series', ro: 'Seria Matcha', ru: 'Серия Матча' } },
  { id: 'winter', name: { en: 'Winter Specials', ro: 'Specialități de Iarnă', ru: 'Зимние Спецпредложения' } },
];

const pastelColors = [
  'from-pink-400 to-rose-500',
  'from-purple-400 to-indigo-500',
  'from-blue-400 to-cyan-500',
  'from-emerald-400 to-teal-500',
  'from-yellow-400 to-orange-500',
  'from-fuchsia-400 to-purple-500',
];

let colorIndex = 0;
const getNextColor = () => {
  const color = pastelColors[colorIndex % pastelColors.length];
  colorIndex++;
  return color;
};

export const PRODUCTS: Product[] = [
  // MILKY SERIES (85/94)
  { id: 'm1', categoryId: 'milky', name: { en: 'Thai Milk Tea', ro: 'Ceai cu Lapte Thai', ru: 'Тайский Молочный Чай' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },
  { id: 'm2', categoryId: 'milky', name: { en: 'Strawberry Mango Milk', ro: 'Lapte cu Căpșuni și Mango', ru: 'Клубнично-манговое Молоко' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },
  { id: 'm3', categoryId: 'milky', name: { en: 'Pao Taro', ro: 'Pao Taro', ru: 'Пао Таро' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },
  { id: 'm4', categoryId: 'milky', name: { en: 'Brown Brulee', ro: 'Brown Brulee', ru: 'Браун Брюле' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },
  { id: 'm5', categoryId: 'milky', name: { en: 'Original Milk Tea', ro: 'Ceai cu Lapte Original', ru: 'Оригинальный Молочный Чай' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },
  { id: 'm6', categoryId: 'milky', name: { en: 'Coconut Mango Milk', ro: 'Lapte cu Mango și Cocos', ru: 'Кокосово-манговое Молоко' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },
  { id: 'm7', categoryId: 'milky', name: { en: 'Banana Milk', ro: 'Lapte cu Banane', ru: 'Банановое Молоко' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },
  { id: 'm8', categoryId: 'milky', name: { en: 'Mango Milk', ro: 'Lapte cu Mango', ru: 'Манговое Молоко' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },
  { id: 'm9', categoryId: 'milky', name: { en: 'Coconut Raspberry Milk', ro: 'Lapte cu Zmeură și Cocos', ru: 'Кокосово-малиновое Молоко' }, basePrice: { M: 85, L: 94 }, imageColor: getNextColor() },

  // COFFEE SERIES (90/98)
  { id: 'c1', categoryId: 'coffee', name: { en: 'Halva Latte', ro: 'Latte cu Halva', ru: 'Халвичный Латте' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },
  { id: 'c2', categoryId: 'coffee', name: { en: 'Lavender Raf', ro: 'Raf de Lavandă', ru: 'Лавандовый Раф' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },
  { id: 'c3', categoryId: 'coffee', name: { en: 'Chai Latte', ro: 'Chai Latte', ru: 'Чай Латте' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },
  { id: 'c4', categoryId: 'coffee', name: { en: 'Hokkaido Milk Tea', ro: 'Ceai cu Lapte Hokkaido', ru: 'Молочный Чай Хоккайдо' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },
  { id: 'c5', categoryId: 'coffee', name: { en: 'Okinawa Milk Tea', ro: 'Ceai cu Lapte Okinawa', ru: 'Молочный Чай Окинава' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },
  { id: 'c6', categoryId: 'coffee', name: { en: 'Taro Coffee', ro: 'Cafea Taro', ru: 'Таро Кофе' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },
  { id: 'c7', categoryId: 'coffee', name: { en: 'Strawberry Coffee', ro: 'Cafea cu Căpșuni', ru: 'Клубничный Кофе' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },
  { id: 'c8', categoryId: 'coffee', name: { en: 'Pao Ice Latte', ro: 'Pao Ice Latte', ru: 'Пао Айс Латте' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },
  { id: 'c9', categoryId: 'coffee', name: { en: 'Brown Sugar Coffee', ro: 'Cafea cu Zahăr Brun', ru: 'Кофе с Тростниковым Сахаром' }, basePrice: { M: 90, L: 98 }, imageColor: getNextColor() },

  // WINTER SPECIALS (98/108)
  { id: 'w1', categoryId: 'winter', name: { en: 'Mocha Oreo', ro: 'Mocha Oreo', ru: 'Мокко Орео' }, basePrice: { M: 98, L: 108 }, imageColor: getNextColor() },
  { id: 'w2', categoryId: 'winter', name: { en: 'Ginger Buckwheat Tea', ro: 'Ceai de Hrișcă cu Ghimbir', ru: 'Имбирно-Гречишный Чай' }, basePrice: { M: 98, L: 108 }, imageColor: getNextColor() },
  { id: 'w3', categoryId: 'winter', name: { en: 'Ube Brulee', ro: 'Ube Brulee', ru: 'Убе Брюле' }, basePrice: { M: 98, L: 108 }, imageColor: getNextColor() },
  { id: 'w4', categoryId: 'winter', name: { en: 'Pao Cacao', ro: 'Pao Cacao', ru: 'Пао Какао' }, basePrice: { M: 98, L: 108 }, imageColor: getNextColor() },

  // FRUIT TEA (81/90)
  { id: 'f1', categoryId: 'fruit', name: { en: 'Lychee Peachee', ro: 'Lychee Peachee', ru: 'Линчи Пичи' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f2', categoryId: 'fruit', name: { en: 'Grapefruit', ro: 'Grapefruit', ru: 'Грейпфрут' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f3', categoryId: 'fruit', name: { en: 'Raspberry', ro: 'Zmeură', ru: 'Малина' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f4', categoryId: 'fruit', name: { en: 'Strawberry', ro: 'Căpșună', ru: 'Клубника' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f5', categoryId: 'fruit', name: { en: 'Cherry Lychee', ro: 'Cireșe și Lychee', ru: 'Вишня и Личи' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f6', categoryId: 'fruit', name: { en: 'Dragon Pineapple', ro: 'Fructul Dragonului și Ananas', ru: 'Драгонфрут Ананас' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f7', categoryId: 'fruit', name: { en: 'Pao Tropical', ro: 'Pao Tropical', ru: 'Пао Тропикал' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f8', categoryId: 'fruit', name: { en: 'Mango Berry', ro: 'Mango și Fructe de Pădure', ru: 'Манго и Ягоды' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f9', categoryId: 'fruit', name: { en: 'Kiwi', ro: 'Kiwi', ru: 'Киви' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f10', categoryId: 'fruit', name: { en: 'Mango Honeydew', ro: 'Mango și Pepene Galben', ru: 'Манго и Дыня' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f11', categoryId: 'fruit', name: { en: 'Blue Curacao', ro: 'Blue Curacao', ru: 'Блю Кюрасао' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f12', categoryId: 'fruit', name: { en: 'Blueberry', ro: 'Afine', ru: 'Черника' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },
  { id: 'f13', categoryId: 'fruit', name: { en: 'Peach Cherry', ro: 'Piersică și Cireșe', ru: 'Персик и Вишня' }, basePrice: { M: 81, L: 90 }, imageColor: getNextColor() },

  // MATCHA SERIES (97/105)
  { id: 'ma1', categoryId: 'matcha', name: { en: 'Ceremonial Pao Matcha', ro: 'Ceremonial Pao Matcha', ru: 'Церемониальная Пао Матча' }, basePrice: { M: 97, L: 105 }, imageColor: getNextColor() },
];
