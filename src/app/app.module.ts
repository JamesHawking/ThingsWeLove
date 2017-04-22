import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material Design
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
// Custom Components
// import {NavbarComponent} from './core/navbar/navbar.component';

// Custom Modules
import {CoreModule} from './core/core.module';

export const firebaseConfig = {
    apiKey: 'AIzaSyDgYdBb0ne8056NC4LHj5dWR5rIbAvlywM',
    authDomain: 'thingswelove-2415f.firebaseapp.com',
    databaseURL: 'https://thingswelove-2415f.firebaseio.com',
    projectId: 'thingswelove-2415f',
    storageBucket: 'thingswelove-2415f.appspot.com',
    messagingSenderId: '1082236427270'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdIconModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdDialogModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
