import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'editor-cmp',
  templateUrl: './editor.component.html',
})

export class EditorComponent {
  constructor(public dialogRef: MdDialogRef<EditorComponent>) {}
}