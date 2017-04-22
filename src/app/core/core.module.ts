import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';

import {MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';







@NgModule({
    imports: [MdMenuModule,
              MdInputModule
              ],
    declarations: [NavbarComponent],
    providers: [],
    exports: [NavbarComponent]
})
export class CoreModule {}