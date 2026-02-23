import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { CategoryListComponent } from './components/category-list/category-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryListComponent, ProductListComponent],
  template: `
    <div class="app-container">
      <div class="app-header">
        <div class="logo">🛒</div>
        <h1 class="store-title">Online<span>Store</span></h1>
        <p class="store-subtitle">Выберите категорию товаров</p>
      </div>

      <app-category-list 
        [categories]="categories"
        [selectedCategoryId]="selectedCategoryId"
        (categorySelected)="onCategorySelected($event)"
      />

      @if (selectedCategoryId !== null) {
        <app-product-list [products]="currentProducts" />
      } @else {
        <div class="welcome-message">
          <h2>👋 Добро пожаловать!</h2>
          <p>Выберите категорию сверху, чтобы увидеть товары</p>
        </div>
      }

      <footer class="store-footer">
        <p>Все товары доступны на <a href="https://kaspi.kz" target="_blank">Kaspi.kz</a></p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: #f4f5fb;
    }
    .app-header {
      background: linear-gradient(135deg, #0f0f1a 0%, #1a1a3e 50%, #0f0f1a 100%);
      color: white;
      text-align: center;
      padding: 50px 20px 40px;
    }
    .logo {
      font-size: 3rem;
      margin-bottom: 12px;
      animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    .store-title {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 800;
      margin: 0 0 10px;
    }
    .store-title span {
      color: #818cf8;
    }
    .store-subtitle {
      opacity: 0.7;
      margin: 0;
      font-size: 1rem;
    }
    .welcome-message {
      text-align: center;
      padding: 80px 20px;
    }
    .welcome-message h2 {
      font-size: 2rem;
      color: #1a1a3e;
      margin-bottom: 10px;
    }
    .welcome-message p {
      color: #6b7280;
      font-size: 1.1rem;
    }
    .store-footer {
      background: #0f0f1a;
      color: rgba(255,255,255,0.45);
      text-align: center;
      padding: 24px;
      margin-top: 40px;
    }
    .store-footer a {
      color: #818cf8;
      text-decoration: none;
    }
  `]
})
export class App implements OnInit {
  productService = inject(ProductService);
  
  categories: Category[] = [];
  currentProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  onCategorySelected(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.currentProducts = this.productService.getProductsByCategory(categoryId);
  }
}