import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule, getLocaleMonthNames } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product: any;
  router: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  
   GoHome() {
    this.router.navigate(['/']);
  }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.product = this.productService.getProductById(this.productId);
    });
  }
}
