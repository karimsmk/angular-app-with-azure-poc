import { Component } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsApiServiceService } from '../products-api-service.service';
import { API_URL } from 'src/config';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent {
  searchData = { name: '', model: '', price: '', rating: '', manufacturingDate: '' };
  filteredProducts: any[] = [];
  productsList$!: Observable<any[]>;
  apiUrl=API_URL;

  constructor(private http: HttpClient, private productsApiService: ProductsApiServiceService) {}

  ngOnInit() {
    this.productsList$ = this.productsApiService.getProductsList();
    this.productsList$.subscribe(products => this.filteredProducts = products);
  }

  onSubmit() {
    if (this.searchData.name || this.searchData.model || this.searchData.price || this.searchData.rating || this.searchData.manufacturingDate) {
      const url = this.apiUrl+`/Products/AdvancedSearch`;
      const params = new HttpParams()
        .set('productName', this.searchData.name)
        .set('productModel', this.searchData.model)
        .set('productPrice', this.searchData.price)
        .set('productRating', this.searchData.rating)
        .set('manufacturingDate', this.searchData.manufacturingDate);
  
      this.http.get(url, { params }).subscribe((data: any) => {
        this.filteredProducts = data;
      });
    } else {
      this.productsList$.subscribe(products => this.filteredProducts = products);
    }
  }
  
}
