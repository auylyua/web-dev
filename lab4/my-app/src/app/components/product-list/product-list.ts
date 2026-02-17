import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
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
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/'
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/'
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
      link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-podarok-118320518/'
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
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-256-gb-chernyi-113692604/'
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
      link: 'https://kaspi.kz/shop/p/oneplus-12-12-gb-256-gb-chernyi-116425514/'
    },
    {
      id: 6,
      name: 'Samsung Galaxy A55',
      description: 'Стильный смартфон с защитой IP67 и AMOLED экраном 120 Гц. Тройная камера 50 МП. Аккумулятор 5000 мАч на весь день.',
      price: 199990,
      rating: 4.4,
      image: 'https://image2url.com/r2/default/images/1771314695944-42740fc7-f785-4826-9a16-d373a704fdde.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771314715307-f36c2283-ea12-408b-ad65-ac0def8732c4.jpg',
        'https://image2url.com/r2/default/images/1771314729715-e961663d-9ec6-4002-8ac2-d126044d737e.jpg',
        'https://image2url.com/r2/default/images/1771314747970-46317496-3957-4697-885f-27ba39ffb6dd.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/'
    },
    {
      id: 7,
      name: 'Xiaomi Redmi Note 13 Pro+',
      description: 'Лучший в своём ценовом сегменте: камера 200 МП и зарядка 120W. AMOLED дисплей 1.5K 120 Гц. Защита IP68 от воды.',
      price: 179990,
      rating: 4.6,
      image: 'https://image2url.com/r2/default/images/1771314876359-07ab571c-2c5d-44eb-95c0-7b7f0462d86c.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771314905784-e3c402a0-612f-4f8d-a1e2-b3585c1cd7f7.jpg',
        'https://image2url.com/r2/default/images/1771314920194-b3856bdf-3293-4252-9893-fc7a25ce9a6b.jpg',
        'https://image2url.com/r2/default/images/1771314935334-73dded62-06f4-448d-8cea-e8dd7e30f990.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-8-gb-256-gb-belyi-podarok-129892868/'
    },
    {
      id: 8,
      name: 'Apple iPhone 15',
      description: 'Обновлённый iPhone с Dynamic Island и USB-C. Чип A16 Bionic для быстрой работы. Камера 48 МП с улучшенным ночным режимом.',
      price: 385447,
      rating: 4.7,
      image: 'https://image2url.com/r2/default/images/1771315019831-76a4caba-4cb7-4cf0-8125-30788c5bd488.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771315038934-02778689-ea7d-4899-9c33-f2025b0b1aaf.jpg',
        'https://image2url.com/r2/default/images/1771315052301-dbe46fe3-e592-4d9c-bee3-9b23b5dd9296.jpg',
        'https://image2url.com/r2/default/images/1771315066650-661205b6-d280-4078-87dd-974c0590da80.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 9,
      name: 'OPPO Find X8',
      description: 'Флагман с двойной камерой Hasselblad и перископным зумом 6x. Snapdragon 8 Gen 3 и зарядка 100W. Дисплей AMOLED 6.82" 4500 нит.',
      price: 549990,
      rating: 4.5,
      image: 'https://image2url.com/r2/default/images/1771315177332-21736c68-1c3c-42aa-a87d-c1ea227ba774.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771315193204-d6d6426a-2157-4f6f-ba57-083289fe009e.jpg',
        'https://image2url.com/r2/default/images/1771315217464-bdd24b34-173e-4b42-bf12-7c68ace112a5.jpg',
        'https://image2url.com/r2/default/images/1771315193204-d6d6426a-2157-4f6f-ba57-083289fe009e.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/oppo-find-x-8-256gb-sinii-1004386/'
    },
    {
      id: 10,
      name: 'Samsung Galaxy S24+',
      description: 'Смартфон с Galaxy AI и 7 годами обновлений. Snapdragon 8 Gen 3 и экран 6.7" AMOLED 2600 нит. Тройная камера с AI-функциями.',
      price: 499990,
      rating: 4.7,
      image: 'https://image2url.com/r2/default/images/1771315300446-a43588dc-11a3-4f83-91c5-6e4b3f500eab.jpg',
      images: [
        'https://image2url.com/r2/default/images/1771315315627-39b10d55-367d-4405-9413-484a05f8aedc.jpg',
        'https://image2url.com/r2/default/images/1771315328914-a3aa8d7b-ba5c-4be8-8f62-183a91623ecb.jpg',
        'https://image2url.com/r2/default/images/1771315350901-67758f54-f1dc-4a78-9ae9-38713066440e.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-12-gb-512-gb-chernyi-116043181/'
    }
  ];
}