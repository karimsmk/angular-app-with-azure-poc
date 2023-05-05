import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/config';

@Injectable({
  providedIn: 'root'
})

export class ProductsApiServiceService {
  mainUrl: string="";
  apiUrl = API_URL;
  
  
  readonly productsAPIUrl=this.apiUrl;

  constructor(private http:HttpClient) { }

  getProductsList():Observable<any[]> {
    return this.http.get<any>(this.productsAPIUrl + '/products');
  }


}
