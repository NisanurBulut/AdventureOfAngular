import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatButtonModule,
        MatGridListModule
    ],
    exports: [
        MatTabsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule
    ]
})
export class MaterialModule {
}
