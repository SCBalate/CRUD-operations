import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UxproductsService {
  deleteProducts() {
    return this.http.delete(this.url);
  }
url = ' https://ang-crud-c441a-default-rtdb.firebaseio.com/products.json';
private headers = new HttpHeaders({'content-Type':'SaurabhApplication/json'})
  constructor(private http:HttpClient) { }


  saveProducts(products:any[]){
    return this.http.put(this.url,products);
  }
  fetchProducts(){
    return this.http.get(this.url);

  }
}
