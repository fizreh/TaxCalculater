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
selectedoption:string = "local";
validPrice:boolean= true;
isNotValid : boolean = false;



  constructor(public salestaxService: SalestaxService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCategoryChange(){
    
    if(this.price === 0 || this.selectedCategory === "" || this.name === "" || this.selectedoption == "" )
    {
      this.isNotValid = true;
      return;
    }

  
    this.dataSource ="";
    console.log(this.selectedCategory);
    console.log(this.selectedoption);
    if(this.selectedoption == "imported")
    this.selectedGoods.push({category:this.selectedCategory,name:this.name,price:this.price,salesTax:0.00,local:false,addTax:0.00})
    else
    this.selectedGoods.push({category:this.selectedCategory,name:this.name,price:this.price ,salesTax:0.00,local:true,addTax:0.00})
    console.log(this.selectedGoods)
    this.dataSource = this.selectedGoods;
    this.price = 0;
    this.selectedCategory = "Please Select";
    this.name = "";
   
  }

  deleteProduct(event:string){
    console.log("Delete Event:",event);
    this.selectedGoods = this.selectedGoods.filter((el)=> {el.name === event});


  }

  onTextChange(e:any)
  {
    if(e.target.value <= 0)
    {
this.validPrice = false
    }
    else
    this.validPrice = true;
  }

  openDialog(){

    const dialoRef = this.dialog.open(DialogDataExampleDialog, {
      width:'500px',
      height:'500px',
      data:{
        finalArr:this.finalArray,
        salesTax:this.finalResult[0].salesTax,
        total:this.finalResult[0].total,
        
      }
    })
  

    dialoRef.afterClosed().subscribe(result => {
      console.log(this.finalArray);
      console.log('The dialogue was closed!');
    })

  }

  

  saveAndCalculateTax(){
   
    console.log("ARRAY FROM SERVICE: ",this.salestaxService.productsSpec);
    console.log("ARRAY FROM COMPONENT: ",this.selectedGoods);
    
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