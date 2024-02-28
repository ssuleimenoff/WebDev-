export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string,
  rating: number,
  sourceLink: string,
  indexOfImage: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple MacBook Air 13 MGN93 серебристый',
    price: 414722,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium',
    rating: 5,
    description: `-Диагональ экрана: 13.3 дюйм\n
    -Процессор: Apple M1\n
    -Видеокарта: Apple M1\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 2,
    name: 'Apple MacBook Air 13 MGN63 серый',
    price: 410999,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 13.3 дюйм\n
    -Процессор: Apple M1\n
    -Видеокарта: Apple M1 7 core\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 3,
    name: 'Apple MacBook Air 13 MGND3 золотистый',
    price: 413955,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 13.3 дюйм\n
    -Процессор: Apple M1\n
    -Видеокарта: Apple M1 8 core\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 4,
    name: 'Apple MacBook Pro 14 MRX33 черный',
    price: 1020372,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 14.2 дюйм\n
    -Процессор: Apple M3 Pro\n
    -Видеокарта: Apple M3 Pro 14-Core\n
    -Размер оперативной памяти: 18.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 512.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 5,
    name: 'Apple MacBook Air 15 2023 MQKW3 синий',
    price: 599982,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium",
    rating: 4.5,
    description: `-Диагональ экрана: 15.3 дюйм\n
    -Процессор: Apple M2\n
    -Видеокарта: Apple M2\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13 MLXY3 серебристый',
    price: 549900,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 13.6 дюйм\n
    -Процессор: Apple M2\n
    -Видеокарта: Apple M2 8-Core\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 7,
    name: 'Apple MacBook Pro 16 MK183 серый',
    price: 945990,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 16.2 дюйм\n
    -Процессор: Apple M1 Pro\n
    -Видеокарта: Apple M1 16-Core\n
    -Размер оперативной памяти: 16.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 512.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-pro-16-mk183-seryi-102892102/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 8,
    name: 'Apple MacBook Air 13 MLY33 черный',
    price: 544500,
    image: "https://resources.cdn-kaspi.kz/img/m/p/he6/hfd/64506820984862.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 13.6 дюйм\n
    -Процессор: Apple M2\n
    -Видеокарта: Apple M2 8-Core\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 9,
    name: 'Apple MacBook Air 13 MLXW3 серый',
    price: 564990,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 13.6 дюйм\n
    -Процессор: Apple M2\n
    -Видеокарта: Apple M2 8-Core\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 10,
    name: 'Apple MacBook Pro 13 MNEH3 серый',
    price: 607538,
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha0/h89/64537546129438.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 13.3 дюйм\n
    -Процессор: Apple M2\n
    -Видеокарта: Apple M2 10-Core\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 11,
    name: 'Apple MacBook Air 13 MGN63RU/A серый',
    price: 457999,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 13.3 дюйм\n
    -Процессор: Apple M1\n
    -Видеокарта: Apple M1\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63ru-a-seryi-101182724/?c=750000000",
    indexOfImage: 0,
  },
  {
    id: 12,
    name: 'Apple MacBook Air 15 2023 MQKP3 темно-серый',
    price: 601999,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h65/81547557503006.jpg?format=gallery-medium",
    rating: 5,
    description: `-Диагональ экрана: 15.3 дюйм\n
    -Процессор: Apple M2\n
    -Видеокарта: Apple M2\n
    -Размер оперативной памяти: 8.0 Гб\n
    -Тип жесткого диска: SSD\n
    -Общий объем накопителей: 256.0 Гб\n`,
    sourceLink: "https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkp3-temno-seryi-111217765/?c=750000000",
    indexOfImage: 0,
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/