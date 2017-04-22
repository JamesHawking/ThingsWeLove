import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NavbarComponent} from './navbar/navbar.component';
import { EditorComponent } from './editor/editor.component';

import {MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@NgModule({
    declarations: [NavbarComponent, EditorComponent],
    imports: [MdMenuModule,
              MdInputModule,
              MdButtonModule,
              MdCheckboxModule,
              FormsModule
              ],
    providers: [],
    exports: [NavbarComponent],
    bootstrap: [EditorComponent]
})
export class CoreModule {}
