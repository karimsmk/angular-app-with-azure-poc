import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsApiServiceService } from '../products-api-service.service';
import { API_URL } from 'src/config';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  searchInput: string = '';
  filteredProducts: any[] = [];
  productsList$!: Observable<any[]>;
  apiUrl=API_URL;

  constructor(private http: HttpClient, private productsApiService: ProductsApiServiceService) {}

  ngOnInit() {
    this.productsList$ = this.productsApiService.getProductsList();
    this.productsList$.subscribe(products => this.filteredProducts = products);
  }

  search() {
    if (this.searchInput) {
      this.http.get<any>(this.apiUrl+'/Products/' + this.searchInput).subscribe(data => {
        this.filteredProducts = data;
      });
    } else {
      this.productsList$.subscribe(products => this.filteredProducts = products);
    }
  }
}
