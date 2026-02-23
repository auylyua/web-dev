import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Флагманский смартфон с процессором Snapdragon 8 Gen 3 и стилусом S Pen. Камера 200 МП с AI-обработкой снимков. Идеален для работы и творчества.',
      price: 699990,
      rating: 4.8,
      image: "https://image2url.com/r2/default/images/1771313787737-ee85dc88-950d-4965-afe1-c77cd7f9580d.jpg",
      images: [
        "https://image2url.com/r2/default/images/1771313821834-4cc1e49e-605f-4ccd-b047-fc3d6d5ebda3.jpg",
        'https://image2url.com/r2/default/images/1771313849811-5fdd4ac8-c8cb-467a-91ab-5eae282c2d3d.jpg',
        'https://image2url.com/r2/default/images/1771313875216-f3305bd3-2136-4e7c-bade-16c5cc3ccee4.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Топовый iPhone с чипом A17 Pro и корпусом из титана. Камера с 5-кратным оптическим зумом и режимом ProRAW. Поддержка USB-C и Action Button.',
      price: 723462,
      rating: 4.9,
      image: 'https://image2url.com/r2/default/images/1771313978618-87b00bff-65e0-45e6-ae3b-c142ab17a84a.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771314040475-3c8ace74-df73-4406-8b86-6aa4016306a9.jpg',
        'https://image2url.com/r2/default/images/1771314004356-c68324bb-1eff-4dba-879d-b04021411238.jpg',
        'https://image2url.com/r2/default/images/1771314064028-1329858b-0883-459d-a216-7bed7f1385df.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 14 Ultra',
      description: 'Профессиональный смартфон с камерой Leica и объективом 1-дюймового формата. Процессор Snapdragon 8 Gen 3. Быстрая зарядка 90W.',
      price: 599990,
      rating: 4.7,
      image: 'https://image2url.com/r2/default/images/1771314202868-4e783361-a0ab-4852-a39b-5a0a1d7a462c.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771314202868-4e783361-a0ab-4852-a39b-5a0a1d7a462c.jpg',
        'https://image2url.com/r2/default/images/1771314222941-3eeba618-4071-4da9-93b8-2c61f38c4bc5.jpg',
        'https://image2url.com/r2/default/images/1771314245999-38df63ee-b2e1-440c-af72-516634e9b0e2.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-podarok-118320518/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Google Pixel 8 Pro',
      description: 'Смартфон с чистым Android и Google AI. Чип Tensor G3 для умной обработки фото. Камера с режимами Best Take и Magic Eraser.',
      price: 449990,
      rating: 4.6,
      image: 'https://image2url.com/r2/default/images/1771314405559-067d15ad-b342-4522-880a-5ad6df132d11.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771314405559-067d15ad-b342-4522-880a-5ad6df132d11.jpg',
        'https://image2url.com/r2/default/images/1771314437410-6941aecc-a96b-4a0c-9cbe-f1ee9be5f6aa.jpg',
        'https://image2url.com/r2/default/images/1771314454050-de3b0d27-b0db-4a53-982e-1c633f2f6783.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-256-gb-chernyi-113692604/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'OnePlus 12',
      description: 'Мощный флагман с зарядкой 100W и камерой Hasselblad. 16 ГБ RAM и Snapdragon 8 Gen 3 для плавной работы. OxygenOS на Android 14.',
      price: 399990,
      rating: 4.5,
      image: 'https://image2url.com/r2/default/images/1771314550826-45725dbb-d616-40a0-97d9-e9f2d31b195b.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771314567948-fc63e6c8-a4c4-4dca-b38c-203ea2f23323.jpg',
        'https://image2url.com/r2/default/images/1771314583828-8621a0f0-fc18-4a91-b861-848c1dd68bed.jpg',
        'https://image2url.com/r2/default/images/1771314605906-2596dc84-7d00-4879-9bce-2b9879533e0d.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-12-12-gb-256-gb-chernyi-116425514/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13',
      description: 'Лёгкий и мощный ноутбук с чипом M2. 13.6" Retina дисплей и до 18 часов автономной работы.',
      price: 649990,
      rating: 4.9,
      likes: 0,
      categoryId: 2,
      image: 'https://image2url.com/r2/default/images/1771871646249-57b62836-ba47-4711-b025-bd9e105c8a6f.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771871701548-1000d4b0-d9ad-40e8-ae51-0641c3549d13.jpg',
        'https://image2url.com/r2/default/images/1771871685844-35bde9a6-4f0f-4cdf-a286-1b03a4cd45ac.jpg',
        'https://image2url.com/r2/default/images/1771871646249-57b62836-ba47-4711-b025-bd9e105c8a6f.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly33ru-a-114315710/'
    },
    {
      id: 7,
      name: 'ASUS ROG Strix G16',
      description: 'Игровой ноутбук с RTX 4060 и экраном 165 Гц.',
      price: 899990,
      rating: 4.7,
      likes: 0,
      categoryId: 2,
      image: 'https://image2url.com/r2/default/images/1771871780263-c6212cc8-e0a8-4e05-8b45-1a67ba704862.png',
      images: [
        'https://image2url.com/r2/default/images/1771871806495-f1e37bee-0d7c-4b78-97cb-a53f77327aaa.png',
        'https://image2url.com/r2/default/images/1771871850156-d5a6209a-7f62-4426-97ec-2ef398913268.png',
        'https://image2url.com/r2/default/images/1771871780263-c6212cc8-e0a8-4e05-8b45-1a67ba704862.png'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/?c=750000000'
    },
    {
      id: 8,
      name: 'Lenovo IdeaPad 5',
      description: 'Отличный ноутбук для учёбы и работы. Ryzen 7 и SSD 512GB.',
      price: 379990,
      rating: 4.5,
      likes: 0,
      categoryId: 2,
      image: 'https://image2url.com/r2/default/images/1771871895887-328f3b47-f008-41ca-817d-c918602930b8.png',
      images: [
        'https://image2url.com/r2/default/images/1771871932726-f083c0d3-1d4b-4bb3-9baa-e3b8b7aec8d0.png',
        'https://image2url.com/r2/default/images/1771871972513-e33a69aa-69c2-4e3c-8be3-c5b9ea425bcf.png',
        'https://image2url.com/r2/default/images/1771871895887-328f3b47-f008-41ca-817d-c918602930b8.png'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-14irh10r-14-16-gb-ssd-1000-gb-bez-os-83j00019rk-144404702/?c=750000000'
    },
    {
      id: 9,
      name: 'HP Pavilion 15',
      description: 'Стильный ноутбук с Intel Core i5 и IPS дисплеем.',
      price: 349990,
      rating: 4.4,
      likes: 0,
      categoryId: 2,
      image: 'https://image2url.com/r2/default/images/1771872023966-ec9614a6-6b29-4b03-aeb0-e23607faf949.png',
      images: [
        'https://image2url.com/r2/default/images/1771872048022-063a6659-47a3-461b-9339-80b1a3c82ac5.png',
        'https://image2url.com/r2/default/images/1771872067594-0fb3e42b-682f-474c-8735-8833cc2b117a.png',
        'https://image2url.com/r2/default/images/1771872023966-ec9614a6-6b29-4b03-aeb0-e23607faf949.png'
      ],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3007ci-15-6-16-gb-ssd-1024-gb-dos-7p438ea-uuq-111968153/?c=750000000'
    },
    {
      id: 10,
      name: 'Acer Aspire 7',
      description: 'Производительный ноутбук с GTX 1650 и SSD 1TB.',
      price: 429990,
      rating: 4.6,
      likes: 0,
      categoryId: 2,
      image: 'https://image2url.com/r2/default/images/1771872127277-d8bb0c14-a606-4315-878a-4a9c1613552e.png',
      images: [
        'https://image2url.com/r2/default/images/1771872148143-27696a8c-ba52-4148-9615-d9b6b156e71f.png',
        'https://image2url.com/r2/default/images/1771872167305-9a7ecc93-adfb-4d1c-8f6b-a976c804f055.png',
        'https://image2url.com/r2/default/images/1771872127277-d8bb0c14-a606-4315-878a-4a9c1613552e.png'
      ],
      link: 'https://kaspi.kz/shop/p/acer-aspire-7-15-6-16-gb-ssd-512-gb-bez-os-a715-76g-nh-qmfer-002-116324392/?c=750000000'
    },
    {
      id: 11,
      name: 'Apple AirPods Pro 2',
      description: 'Наушники с активным шумоподавлением и пространственным звуком.',
      price: 129990,
      rating: 4.8,
      likes: 0,
      categoryId: 3,
      image: 'https://image2url.com/r2/default/images/1771872436153-d3ff5f83-3197-44da-8f75-5d5a8637b0b0.png',
      images: [
        'https://image2url.com/r2/default/images/1771872501130-ee3d4813-c36c-48e9-9bb9-70231e579c56.png',
        'https://image2url.com/r2/default/images/1771872476470-51e91ad8-ab50-4828-94fd-029380b08410.png',
        'https://image2url.com/r2/default/images/1771872436153-d3ff5f83-3197-44da-8f75-5d5a8637b0b0.png'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000&m=Sulpak'
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Премиальные накладные наушники с лучшим ANC.',
      price: 199990,
      rating: 4.9,
      likes: 0,
      categoryId: 3,
      image: 'https://image2url.com/r2/default/images/1771873013151-8ee2bcc4-dbaf-4dee-99e0-5fb757401519.png',
      images: [
        'https://image2url.com/r2/default/images/1771873492677-f6142003-6131-4552-901d-5db53b12b7f2.png',
        'https://image2url.com/r2/default/images/1771873099782-643ffe2c-1d35-40bc-8ba6-4ec40fe422a5.png',
        'https://image2url.com/r2/default/images/1771873013151-8ee2bcc4-dbaf-4dee-99e0-5fb757401519.png'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
    },
    {
      id: 13,
      name: 'JBL Tune 760NC',
      description: 'Bluetooth-наушники с шумоподавлением.',
      price: 59990,
      rating: 4.4,
      likes: 0,
      categoryId: 3,
      image: 'https://image2url.com/r2/default/images/1771873552593-9d66558f-4766-453c-b5aa-37527887be16.png',
      images: [
        'https://image2url.com/r2/default/images/1771873590238-4517f17b-cae3-4748-8a19-6aa8b8b48022.png',
        'https://image2url.com/r2/default/images/1771873573430-301691aa-11fb-4ba1-bb99-623346726a74.png',
        'https://image2url.com/r2/default/images/1771873552593-9d66558f-4766-453c-b5aa-37527887be16.png'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-760nc-chernyi-102863031/?c=750000000'
    },
    {
      id: 14,
      name: 'Samsung Galaxy Buds 2 Pro',
      description: 'Компактные TWS-наушники с Hi-Fi звуком.',
      price: 99990,
      rating: 4.6,
      likes: 0,
      categoryId: 3,
      image: 'https://image2url.com/r2/default/images/1771873641465-2c88c8db-2434-4f29-bd08-f5b480a2bab5.png',
      images: [
        'https://image2url.com/r2/default/images/1771873686584-5e0b0bac-94ba-4755-88d3-03b5a29004c9.png',
        'https://image2url.com/r2/default/images/1771873662920-09948f11-d7bc-4edc-844a-2e4ad58f0a0a.png',
        'https://image2url.com/r2/default/images/1771873641465-2c88c8db-2434-4f29-bd08-f5b480a2bab5.png'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-core-chernyi-142551258/?c=750000000'
    },
    {
      id: 15,
      name: 'Xiaomi Redmi Buds 5',
      description: 'Бюджетные беспроводные наушники.',
      price: 24990,
      rating: 4.3,
      likes: 0,
      categoryId: 3,
      image: 'https://image2url.com/r2/default/images/1771873748235-cbe6cfdc-6a7b-4d13-be88-a9d064418617.png',
      images: [
        'https://image2url.com/r2/default/images/1771873817903-b6beb96d-0946-40bf-926c-87283269ff02.png',
        'https://image2url.com/r2/default/images/1771873773842-090608f6-581b-495d-8ed4-25045fbc9eac.png',
        'https://image2url.com/r2/default/images/1771873748235-cbe6cfdc-6a7b-4d13-be88-a9d064418617.png'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-5-chernyi-113969806/?c=750000000'
    },
    {
      id: 16,
      name: 'Sony PlayStation 5',
      description: 'Консоль нового поколения с поддержкой 4K.',
      price: 299990,
      rating: 4.9,
      likes: 0,
      categoryId: 4,
      image: 'https://image2url.com/r2/default/images/1771873907121-5d34767c-ab61-4b4c-9123-c3fd91486b55.png',
      images: [
        'https://image2url.com/r2/default/images/1771873950166-b1a6d07b-545b-425f-b938-c6d8f9dc5e4e.png',
        'https://image2url.com/r2/default/images/1771873927544-65e8ec84-3496-42bc-b644-597ac761fafe.png',
        'https://image2url.com/r2/default/images/1771873907121-5d34767c-ab61-4b4c-9123-c3fd91486b55.png'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 17,
      name: 'Xbox Series S',
      description: 'Мощная консоль с поддержкой 120 FPS.',
      price: 289990,
      rating: 4.8,
      likes: 0,
      categoryId: 4,
      image: 'https://image2url.com/r2/default/images/1771873986219-2cc7f3cc-ed17-4c67-abd0-8957b5afd5f8.png',
      images: [
        'https://image2url.com/r2/default/images/1771874054932-946eb18e-7867-4745-b27d-45d0e9742e80.png',
        'https://image2url.com/r2/default/images/1771874034732-1f8b2fe4-d560-43a2-a136-5e458d6e9bab.png',
        'https://image2url.com/r2/default/images/1771873986219-2cc7f3cc-ed17-4c67-abd0-8957b5afd5f8.png'
      ],
      link: 'https://kaspi.kz/shop/p/xbox-series-s-belyi-100793537/?c=750000000'
    },
    {
      id: 18,
      name: 'Nintendo Switch OLED',
      description: 'Гибридная консоль с OLED экраном.',
      price: 199990,
      rating: 4.7,
      likes: 0,
      categoryId: 4,
      image: 'https://image2url.com/r2/default/images/1771874095790-ad19c64e-49e2-4f54-b0df-dc1e9e3ef56b.png',
      images: [
        'https://image2url.com/r2/default/images/1771874150969-1a57ad54-abd2-42d0-811c-95f7f8824d73.png',
        'https://image2url.com/r2/default/images/1771874104385-2191edb8-cc4c-4636-be4b-ba925d5e8d59.png',
        'https://image2url.com/r2/default/images/1771874095790-ad19c64e-49e2-4f54-b0df-dc1e9e3ef56b.png'
      ],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000'
    },
    {
      id: 19,
      name: 'Xbox Series X 1TB',
      description: 'Компактная версия нового поколения.',
      price: 412340,
      rating: 4.6,
      likes: 0,
      categoryId: 4,
      image: 'https://image2url.com/r2/default/images/1771874256763-93af7f37-6484-4622-bd8c-bb93cc53ed46.png',
      images: [
        'https://image2url.com/r2/default/images/1771874297272-fe4e394d-dbf8-448c-a85c-2b87179e3ade.png',
        'https://image2url.com/r2/default/images/1771874265080-b790f80c-0349-4803-b787-d9ca51386440.png',
        'https://image2url.com/r2/default/images/1771874256763-93af7f37-6484-4622-bd8c-bb93cc53ed46.png'
      ],
      link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000'
    },
    {
      id: 20,
      name: 'PlayStation 5 Digital Edition',
      description: 'Версия без дисковода для цифровых игр.',
      price: 269990,
      rating: 4.8,
      likes: 0,
      categoryId: 4,
      image: 'https://image2url.com/r2/default/images/1771874332183-60c9e71f-a513-420a-b711-b2ab283bb906.png',
      images: [
        'https://image2url.com/r2/default/images/1771874377283-0ef229a8-ad88-4da5-b94d-d6ba8a492bc7.png',
        'https://image2url.com/r2/default/images/1771874339854-d0106bd7-1dc3-40b3-82fa-50202caa5885.png',
        'https://image2url.com/r2/default/images/1771874332183-60c9e71f-a513-420a-b711-b2ab283bb906.png'
      ],
      link: 'https://kaspi.kz/'
    }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}