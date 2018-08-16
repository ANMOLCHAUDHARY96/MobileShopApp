import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { element } from '../../../node_modules/protractor';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
item:string;
  constructor() { }
  
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

  ngOnInit() {
  }
   
   iphone=[{name:"I5s",price:15000,category:"apple"},
  {name:"I6",price:20000,category:"apple"},
  {name:"I7",price:25000,category:"apple"},
  {name:"I8",price:45000,category:"apple"},
  {name:"IX",price:90000,category:"apple"},
  {name:"IX+",price:95000,category:"apple"},
  ]
  
   samsung=[{name:"Samsung y",price:10000,category:"Samsung"},
  {name:"Samsung s",price:20000,category:"Samsung"},
  {name:"Note 5",price:25000,category:"Samsung"},
  {name:"Note 9",price:45000,category:"Samsung"},
  {name:"Galaxy j2",price:15000,category:"Samsung"},
  {name:"Galaxy A",price:30000,category:"Samsung"},
  ]
  
  Oneplus=[{name:"Three",price:15000,category:"Oneplus"},
  {name:"Three T",price:20000,category:"Oneplus"},
  {name:"Oneplus 5",price:25000,category:"Oneplus"},
  {name:"Five T",price:30000,category:"Oneplus"},
  {name:"Oneplus 6",price:35000,category:"Oneplus"},
  {name:"Oneplus one",price:5000,category:"Oneplus"},
  ]
  
  nokia=[{name:"nokia 8",price:'10000',category:"Nokia"},
  {name:"Nokia 6",price:20000,category:"Nokia"},
  {name:"Nokia 5",price:25000,category:"Nokia"},
  {name:"Nokia 3",price:28000,category:"Nokia"},
  {name:"Nokia 2",price:29000,category:"Nokia"},
  {name:"Nokia 1",price:30000,category:"Nokia"},
  ]
  
  
  Moto=[{name:"Moto g5",price:15000,category:"Motorola"},
  {name:"Moto g6",price:20000,category:"Motorola"},
  {name:"Moto E4",price:25000,category:"Motorola"},
  {name:"Moto Z",price:10000,category:"Motorola"},
  {name:"Moto C",price:15000,category:"Motorola"},
  {name:"Moto G",price:5000,category:"Motorola"},
  ]
  
redmi=[{name:"Redmi 5",price:10000,category:"MI"},
  {name:"Redmi y",price:10000,category:"MI"},
  {name:"Redmi max",price:15000,category:"MI"},
  {name:"Redmi Note",price:18000,category:"MI"},
  {name:"Redmi 2",price:19000,category:"MI"},
  {name:"Redmi lite",price:20000,category:"MI"},
  ];
  
  
 product=[this.iphone,this.samsung,this.Oneplus,this.nokia,this.Moto,this.redmi];
category(joincategory:string){
  this.item=joincategory;
  this.closeNav();
this.product.forEach((element)=>{if(element==item)
  console.log(element.name)}


}
  console.log(this.product);
}
  
}
