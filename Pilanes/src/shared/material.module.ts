import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    declarations: [],
    imports: [
        MatTabsModule,
        MatButtonModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatDialogModule,
        MatToolbarModule
    ],
    exports: [
        MatTabsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatDialogModule,
        MatToolbarModule
    ]
})
export class MaterialModule {
}
