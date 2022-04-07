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


   
  productsSpec:productsCombo[] = [{product:'book',salesTax:0,addTax:0.05},
                                  {product:'medicine',salesTax:0,addTax:0.05},
                                  {product:'food',salesTax:0,addTax:0.05},
                                  {product:'anonymous',salesTax:0.10,addTax:0.05}]
 
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
      entry.salesTax = Math.round((entry.price * find.salesTax) * 200) / 200.00;
      if(entry.local === false)
      entry.addTax =Math.round((entry.price * find.addTax) * 200) / 200.00;
      else
      entry.addTax = 0;

      entry.price =Math.round((entry.price + entry.addTax + entry.salesTax) * 200) / 200.0;

    }


    total += entry.price;
    totalSalesTax += (entry.salesTax + entry.addTax);
    
    

  }

  totalSalesTax = Math.round(totalSalesTax * 20) / 20.00;
 
  
  
  
 
  console.log("sales Taxes:", totalSalesTax);
  console.log("Total Price:",total);
  result.push({total:total,salesTax:totalSalesTax});
  return result;

}

}
