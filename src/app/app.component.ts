import { ThisReceiver } from '@angular/compiler';
import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';

import { UxproductsService } from './uxproducts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _uxProducts:UxproductsService){}
  ngOnInit(): void {
   this.onFetchProducts();
  }
  title = 'CRUD-operations';
  dataTitle = "My Products";
  fetching:boolean = false;
  products:any[] = [
    // {
    //   id: 'p1',
    //   name: 'Laptop',
    //   price:45000
    // },
    // {
    //   id: 'p2',
    //   name: 'Mobile',
    //   price:17000
    // },
    // {
    //   id: 'p3',
    //   name:'Washing Machine',
    //   price:30000
    // },
    // {
    //   id:'p4',
    //   name:'Laptop',
    //   price:58000
    // }

  ]

  onAddProducts(id: { value: any; },name: any,price: any){
if(this.editMode){
 console.log(this.products[this.editIndex])
 this.products[this.editIndex] = {
   id:id.value,
    name:name.value,
    price:price.value
}
  this.editMode = false;
  this.id.nativeElement.value = '';
  this.name.nativeElement.value = '';
  this.price.nativeElement.value = '';
  
 }else{
   this.products.push({
     id:id.value,
      name:name.value,
      price:price.value
   })
 }
 this.onSaveProducts();
  }
  onSaveProducts(){
    this._uxProducts.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    )
  }

  onFetchProducts(){
    this.fetching = true;
    this._uxProducts.fetchProducts().subscribe(
      (response) => {
        // console.log(response);
        const data = JSON.stringify(response);
        console.log(data);
         this.products = JSON.parse(data);
          this.fetching = false;
      },
      (err) => console.log(err)
    )

  }

  onDeleteProducts(id:number){
    if(confirm('Do you want to delete the records')){
      // this.products.splice(id,1);
      this._uxProducts.deleteProducts().subscribe()
    }

  }
 
    @ViewChild('id')
  id!: ElementRef;
    @ViewChild('name')
  name!: ElementRef;
    @ViewChild('price')
  price!: ElementRef;  

editMode:boolean = false;
  editIndex!: number ;
  onEditProducts(index:number){
    this.editMode = true;
    this.editIndex = index;
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;

  }
}
