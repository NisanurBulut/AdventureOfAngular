import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatButtonModule,
        MatGridListModule,
        MatButtonToggleModule
    ],
    exports: [
        MatTabsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatButtonToggleModule
    ]
})
export class MaterialModule {
}
