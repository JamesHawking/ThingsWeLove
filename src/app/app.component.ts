import { Component } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

import { MdDialog, MdDialogRef } from '@angular/material';
import { EditorComponent } from './core/editor/editor.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string;
  editVal: string;
  editing: boolean;
  selectedOption: string;

  constructor(public af: AngularFire, public dialog: MdDialog) {
    this.items = af.database.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }

   login() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

  Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }

  editItem(key: string, text: string) {
      this.items.update(key, { message: text });
      this.editVal = '';
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  showInput() {
    this.editing = !this.editing;
  }

  openEditor(key: any, data: any) {
    const dialogRef = this.dialog.open(EditorComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      console.log(this.selectedOption);
      this.editItem(key, this.selectedOption);
    });
  }
}
