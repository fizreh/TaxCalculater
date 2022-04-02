import { Component, OnInit } from '@angular/core';
import { SalestaxService } from 'src/services/salestax.service';

@Component({
  selector: 'app-sales-tax',
  templateUrl: './sales-tax.component.html',
  styleUrls: ['./sales-tax.component.css']
})



export class SalesTaxComponent implements OnInit {
 categories = ["books","medicine","food","anonymous"];
 selectedCategory: string = "";
 selectedGoods = [{goods:"book",name:"abc",price:0}];
 price:number = 0;
 name: string = "";
 displayedColumns: string[] = ['goods', 'name', 'price'];
 dataSource : any;


  constructor(public salestaxService: SalestaxService) { }

  ngOnInit(): void {
  }

  onCategoryChange(){
    console.log(this.selectedCategory);
    this.selectedGoods.push({goods:this.selectedCategory,name:this.name,price:this.price})
    console.log(this.selectedGoods)
    this.dataSource = this.selectedGoods;
   
   
  }

}
