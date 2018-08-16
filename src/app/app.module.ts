import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule,Routes }from '@angular/router'
import { ShopComponent } from './shop/shop.component';
import { PageComponent } from './page/page.component';



const route:Routes=[{
  path:'',
  component:ShopComponent
},

{path:'shop',
component:ShopComponent
},

{path:'**',
component:PageComponent
},
 ]



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    PageComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
