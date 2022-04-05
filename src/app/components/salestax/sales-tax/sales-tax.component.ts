import { Component, Inject, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { SalestaxService } from 'src/services/salestax.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { productdetails } from './productsCombo.model';

@Component({
  selector: 'app-sales-tax',
  templateUrl: './sales-tax.component.html',
  styleUrls: ['./sales-tax.component.css']
})





export class SalesTaxComponent implements OnInit {
 categories = ["book","medicine","food","anonymous"];
 selectedCategory: string = "";
 selectedGoods: productdetails[] = [];
 price:number = 0;
 name: string = "";
 displayedColumns: string[] = ['goods', 'name', 'price','action'];
 dataSource : any;
 finalResult:any = {};
 finalArray:any = [];
dataSourceResult:any;


  constructor(public salestaxService: SalestaxService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCategoryChange(){
    
    this.dataSource = this.selectedGoods;
    console.log(this.selectedCategory);
    this.selectedGoods.push({category:this.selectedCategory,name:this.name,price:this.price})
    console.log(this.selectedGoods)
    this.dataSource = this.selectedGoods;
    this.price = 0;
    this.selectedCategory = "Please Select";
    this.name = "";
   
  }

  openDialog(){

    const dialoRef = this.dialog.open(DialogDataExampleDialog, {
      width:'500px',
      height:'500px',
      data:{
        finalArr:this.finalArray,
        addTax:this.finalResult[0].addTax,
        total:this.finalResult[0].total
      }
    })
  

    dialoRef.afterClosed().subscribe(result => {
      console.log(this.finalArray);
      console.log('The dialogue was closed!');
    })

  }

  

  saveAndCalculateTax(){
    this.finalArray = this.selectedGoods;
    this.finalResult = this.salestaxService.calculateTax(this.selectedGoods);
   
    console.log("Final Result(from Service):",this.finalResult);
   
    console.log("Final Result:",this.finalArray);
    this.openDialog();
    
    
  }

}

export interface DialogData {
  category: string;
  name: string;
  price:number;
  total:number;
  addTax:number;
}






@Component({
  selector: 'final-dialogue',
  templateUrl: 'final-dialogue.html',
})
export class DialogDataExampleDialog {
  dataSource : any;
  displayedColumns: string[] = ['name','price'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {//this.result  = data;
    console.log("Dialogue Data:",data);
    this.dataSource = data.finalArr;

  }
  


}