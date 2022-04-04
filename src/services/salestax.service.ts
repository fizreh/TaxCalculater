import { Injectable } from '@angular/core';


interface productsCombo{
  product:string,
  salesTax:number,
  addTax:number,
}

@Injectable({
  providedIn: 'root'
})
export class SalestaxService {
   
  productsSpec:productsCombo[] = [{product:'book',salesTax:2,addTax:1.6},
                                  {product:'medicine',salesTax:5,addTax:1.6},
                                  {product:'food',salesTax:7,addTax:1.6},
                                  {product:'misc',salesTax:3,addTax:1.6}]
 
  constructor( ) { }

calculateTax(salesTaxObj:any){
  let total = 0;let result=[];
  for(let entry of salesTaxObj){
    let find = this.productsSpec.find((el)=> el.product === entry.category)
    console.log("Entry: ",entry);
    console.log("find category:",find);
    if(find !== undefined){
      console.log("Entry: ",entry.price);
      console.log("find category:",find.salesTax);
      entry.price = entry.price + find.salesTax;

    }
    total += entry.price;
  }

  total = total + salesTaxObj[0].addTax;
  console.log("Add Tax:",this.productsSpec[0].addTax);
  console.log("Total Price:",total);
  result.push({total:total,addTax:this.productsSpec[0].addTax});
  return result;

}

}
