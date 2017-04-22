import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { AngularFire,
         AuthProviders,
         AuthMethods,
         FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-editor',
  template: `
  <div class="container">
  <div class="row">
    <blockquote class="blockquote">
      <p class="mb-0"><p>{{data}}</p>
    </blockquote>
  </div>
  <div class="row">
 <input type="text"  [(ngModel)]="editorInput" (keyup.enter)="dialogRef.close(editorInput)"/>
  </div>
  <div class="row">
  <button type="button" md-raised-button (click)="dialogRef.close(editorInput)">OK</button>
  <button type="button" md-button 
            (click)="dialogRef.close()">Cancel</button>
              </div>
</div>
  `,
})

export class EditorComponent {
items: FirebaseListObservable<any>;
name: any;
editorInput: any;

  constructor(public af: AngularFire, public dialogRef: MdDialogRef<EditorComponent>) {

  }
}
