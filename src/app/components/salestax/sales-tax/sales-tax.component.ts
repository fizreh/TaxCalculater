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
 selectedGoods = [{goods:"",price:0}];
 price:number = 0;


  constructor(public salestaxService: SalestaxService) { }

  ngOnInit(): void {
  }

  onCategoryChange(){
    console.log(this.selectedCategory);
    this.selectedGoods.push({goods:this.selectedCategory,price:this.price})
    console.log(this.selectedGoods)
  }

}
