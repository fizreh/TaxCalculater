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


   
  productsSpec:productsCombo[] = [{product:'book',salesTax:0,addTax:5/100},
                                  {product:'medicine',salesTax:0,addTax:5/100},
                                  {product:'food',salesTax:0,addTax:5/100},
                                  {product:'anonymous',salesTax:10/100,addTax:5/100}]
 
  constructor( ) { }

calculateTax(salesTaxObj:any){
  let total = 0;let result=[];
  let totalSalesTax = 0;
  let totalAddTax = 0;
  for(let entry of salesTaxObj){
    let find = this.productsSpec.find((el)=> el.product === entry.category)
    console.log("Entry: ",entry);
    console.log("find category:",find);
    if(find !== undefined){
      console.log("Entry: ",entry.price);
      console.log("find category:",find.salesTax);
      entry.salesTax = Number((entry.price * find.salesTax).toFixed(2));
      entry.price = entry.price + entry.salesTax;
      if(entry.local === false){
        entry.addTax =Number((entry.price * find.addTax).toFixed(2));
        entry.price = entry.price + entry.addTax;
        
      }
      else
      entry.addTax = 0;

    }


    total += entry.price;
    totalSalesTax += entry.salesTax;
    totalAddTax += entry.addTax;
    

  }

  totalSalesTax = Number(totalSalesTax.toFixed(2));
  totalAddTax = Number(totalAddTax.toFixed(2));
  total = Math.round(total * 20)/ 20.0;
  console.log("Add Tax:",this.productsSpec[0].addTax);
  console.log("Total Price:",total);
  result.push({total:total,salesTax:totalSalesTax,addTax:totalAddTax});
  return result;

}

}
