import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private storageKey = 'products';

  constructor() {}

  getProducts(): Product[] {
    const products = localStorage.getItem(this.storageKey);
    return products ? JSON.parse(products) : [];
  }

  addProduct(product: Product): void {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  updateProduct(updatedProduct: Product): void {
    let products = this.getProducts();
    products = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  deleteProduct(productId: number): void {
    let products = this.getProducts();
    products = products.filter((product) => product.id !== productId);
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  getProductById(productId: number): Product | undefined {
    const products = this.getProducts();
    return products.find((product) => product.id === productId);
  }
}
