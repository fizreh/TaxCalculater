import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogDataExampleDialog, SalesTaxComponent } from './components/salestax/sales-tax/sales-tax.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { SalestaxService } from 'src/services/salestax.service';


@NgModule({
  declarations: [
    AppComponent,
    SalesTaxComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
   MatListModule,
   MatTableModule,
   MatDialogModule
  ],
  providers: [SalestaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
