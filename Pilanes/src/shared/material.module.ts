import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatButtonModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatCheckboxModule
    ],
    exports: [
        MatTabsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {
}
