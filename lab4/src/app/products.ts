export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string,
  rating: number,
  sourceLink: string
}

export const products = [
  {
    id: 1,
    name: 'Видеокарта Sinotex NINJA RADEON RX 580 AHRX58085F 8 ГБ',
    price: 69990,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h5f/h61/67650520645662.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: Radeon RX 500 series\n
    частота графического процессора: 1168 МГц\n
    объем видеопамяти: 8.0 Гб\n
    тип видеопамяти: GDDR5\n
    рекомендуемая мощность блока питания: 450.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/sinotex-ninja-radeon-rx-580-ahrx58085f-8-gb-108345023/"
  },
  {
    id: 2,
    name: 'Видеокарта GIGABYTE GeForce RTX 3060 GAMING OC 12G rev. 2.0 12 ГБ',
    price: 178000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hbd/hfb/64345175982110.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: GeForce RTX 30 Series\n
    частота графического процессора: до 1837 МГц\n
    объем видеопамяти: 12.0 Гб\n
    тип видеопамяти: GDDR6\n
    длина видеокарты: 282.0 мм\n
    рекомендуемая мощность блока питания: 550.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-12-gb-101717712/?c=750000000"
  },
  {
    id: 3,
    name: 'Видеокарта ZOTAC GeForce RTX 3060 Twin Edge 12 ГБ',
    price: 164000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h09/h42/64046246789150.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: GeForce RTX 30 Series\n
    частота графического процессора: 1777 MHz\n
    объем видеопамяти: 12.0 Гб\n
    тип видеопамяти: GDDR6\n
    длина видеокарты: 224.0 мм\n
    рекомендуемая мощность блока питания: 600.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/zotac-geforce-rtx-3060-twin-edge-12-gb-102105290/?c=750000000"
  },
  {
    id: 4,
    name: 'Видеокарта Colorful GTX 1660 Super NB 6G-V 6GB',
    price: 98600,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h26/he6/64000243171358.jpg?format=gallery-medium",
    rating: 4.5,
    description: `серия: GeForce 16 Series\n
    объем видеопамяти: 6.0 Гб\n
    тип видеопамяти: GDDR6\n
    длина видеокарты: 222.0 мм\n
    рекомендуемая мощность блока питания: 450.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/colorful-gtx-1660-super-nb-6g-v-6gb-102081433/?c=750000000"
  },
  {
    id: 5,
    name: 'Видеокарта GIGABYTE GeForce RTX 4070 WINDFORCE OC GV-N4070WF3OC-12GD 12 ГБ',
    price: 352000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h30/h02/80270320828446.jpg?format=gallery-medium",
    rating: 4.5,
    description: `серия: GeForce RTX 40 Series\n
    частота графического процессора: 2490 МГц\n
    объем видеопамяти: 12.0 Гб\n
    тип видеопамяти: GDDR6X\n
    длина видеокарты: 261.0 мм\n
    рекомендуемая мощность блока питания: 650.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4070-windforce-oc-gv-n4070wf3oc-12gd-12-gb-109975420/?c=750000000"
  },
  {
    id: 6,
    name: 'Видеокарта Palit GeForce GTX 1660 Super GP 6 ГБ',
    price: 135000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h88/h29/63822602043422.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: GeForce 16 Series\n
    частота графического процессора: 1530 МГц (базовая), 1785 МГц (разогнанная)\n
    объем видеопамяти: 6.0 Гб\n
    тип видеопамяти: GDDR6\n
    рекомендуемая мощность блока питания: 450.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/palit-geforce-gtx-1660-super-gp-6-gb-100017856/?c=750000000"
  },
  {
    id: 7,
    name: 'Видеокарта Colorful iGame GeForce RTX 3050 Ultra W DUO OC 8G-V 8 ГБ',
    price: 133000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1a/heb/68514888253470.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: GeForce RTX 30 Series\n
    объем видеопамяти: 8.0 Гб\n
    тип видеопамяти: GDDR6\n
    длина видеокарты: 253.0 мм\n
    рекомендуемая мощность блока питания: 600.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/colorful-igame-geforce-rtx-3050-ultra-w-duo-oc-8g-v-8-gb-108702412/?c=750000000"
  },
  {
    id: 8,
    name: 'Видеокарта GIGABYTE Radeon RX 7800 XT GAMING OC GV-R78XTGAMING OC-16GD 16 Гб',
    price: 389000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h37/h07/84568733057054.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: Radeon RX 7000 Series\n
    объем видеопамяти: 16.0 Гб\n
    тип видеопамяти: GDDR6\n
    рекомендуемая мощность блока питания: 700.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/gigabyte-radeon-rx-7800-xt-gaming-oc-gv-r78xtgaming-oc-16gd-16-gb-114832777/?c=750000000"
  },
  {
    id: 9,
    name: 'Видеокарта Palit GeForce GTX 1050 Ti STORMX 4 ГБ',
    price: 85000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h88/h29/63822602043422.jpg?format=gallery-medium",
    rating: 5,
    description: `серия: GeForce 10 Series\n
    частота графического процессора: 1290 МГц\n
    объем видеопамяти: 4.0 Гб\n
    тип видеопамяти: GDDR5\n
    рекомендуемая мощность блока питания: 300.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/palit-geforce-gtx-1050-ti-stormx-4-gb-6700826/?c=750000000"
  },
  {
    id: 10,
    name: 'Видеокарта GIGABYTE GeForce RTX 4090 GAMING OC GV-N4090GAMING OC-24GD 24 ГБ',
    price: 1160920,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h41/hd7/64350104453150.jpg?format=gallery-medium",
    rating: 4.5,
    description: `серия: GeForce RTX 40 Series\n
    частота графического процессора: 2535 МГц\n
    объем видеопамяти: 24.0 Гб\n
    тип видеопамяти: GDDR6X\n
    длина видеокарты: 340.0 мм\n
    рекомендуемая мощность блока питания: 1000.0 Вт\n`,
    sourceLink: "https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4090-gaming-oc-gv-n4090gaming-oc-24gd-24-gb-106852889/?c=750000000"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/