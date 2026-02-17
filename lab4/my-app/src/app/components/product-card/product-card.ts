import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  activeImage: string = '';

  ngOnInit() {
    this.activeImage = this.product.image;
  }

  setActiveImage(img: string) {
    this.activeImage = img;
  }

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  isStarFilled(star: number): boolean {
    return star <= Math.floor(this.product.rating);
  }

  isStarHalf(star: number): boolean {
    return star === Math.ceil(this.product.rating) && this.product.rating % 1 >= 0.5;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-KZ') + ' ₸';
  }

  openProduct() {
    window.open(this.product.link, '_blank');
  }

  shareOnWhatsApp() {
    const text = encodeURIComponent('Посмотри этот товар: ' + this.product.link);
    window.open('https://wa.me/?text=' + text, '_blank');
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}