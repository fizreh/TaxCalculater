import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTaxComponent } from './components/salestax/sales-tax/sales-tax.component';

const routes: Routes = [
  { path: "**", component : SalesTaxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
