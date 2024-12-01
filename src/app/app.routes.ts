import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];
