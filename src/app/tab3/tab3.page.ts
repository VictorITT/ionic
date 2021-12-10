import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  products: Product[] = [];
  
  constructor(private productService: ProductService)  {
  
  }
 
   ngOnInit(): void {
     this.loadProducts();
   }
   loadProducts(): void {
     this.productService.list().subscribe(
       data => {
         this.products = data;
       },
       err => {
        console.log(err);
      }
     );
  }
}