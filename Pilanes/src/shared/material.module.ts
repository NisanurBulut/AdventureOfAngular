import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatButtonModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule
    ],
    exports: [
        MatTabsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule
    ]
})
export class MaterialModule {
}
