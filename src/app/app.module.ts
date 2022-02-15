import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { UxproductsService } from './uxproducts.service';
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [UxproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
