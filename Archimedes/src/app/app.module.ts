import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiItemReducer } from '../store/reducers/piCalculator.reducer';
import { FormsModule } from '@angular/forms';
import { PiItemsComponent } from './pi-items/pi-items.component';
import { PiItemsService } from './pi-items/pi-items.service';
import { EffectsModule } from '@ngrx/effects';
import { PiCalculatorEffect } from 'src/store/effects/piCalculator.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PiItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ piItems: PiItemReducer }),
    EffectsModule.forRoot([PiCalculatorEffect])
  ],
  providers: [PiItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
