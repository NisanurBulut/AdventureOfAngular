import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button'
@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatButtonModule
    ],
    exports: [
        MatTabsModule,
        MatButtonModule
    ]
})
export class MaterialModule {
}
