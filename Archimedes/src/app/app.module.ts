import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiItemReducer } from '../store/reducers/piCalculator.reducer';
import { FormsModule } from '@angular/forms';
import { PiItemsComponent } from './pi-items/pi-items.component';

@NgModule({
  declarations: [
    AppComponent,
    PiItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ piItems: PiItemReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
