import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule, SharedModule } from '../shared';
import { PlanModule } from './plan';
import { ExerciseEffects, ExerciseModule } from './exercise';
import { HeaderModule } from './header/heder.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseReducer } from './exercise/store/exercise.reducer';
import { PlanReducer } from './plan/store/plan.reducer';
import { PlanEffects } from './plan/store/plan.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    ExerciseModule,
    PlanModule,
    HeaderModule,
    StoreModule.forRoot({ exerciseList: ExerciseReducer,  planList: PlanReducer }),
    EffectsModule.forRoot([ExerciseEffects, PlanEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
