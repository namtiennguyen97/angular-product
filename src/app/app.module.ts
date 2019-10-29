import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { UserListComponent } from './user-list/user-list.component';
import {ProductServiceService} from './products/product-service.service';
import { ProductAddComponent } from './products/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FilterComponent,
    UserListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
