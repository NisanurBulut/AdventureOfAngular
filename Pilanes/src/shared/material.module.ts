import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatButtonModule
    ],
    exports: [
        MatTabsModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class MaterialModule {
}
