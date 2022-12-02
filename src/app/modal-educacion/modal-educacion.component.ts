import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form } from '@angular/forms';
import { Educacion } from '../educacion/educacion';



@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModalEducacionComponent>,@Inject(MAT_DIALOG_DATA) public data:Educacion) { }

  ngOnInit(): void {
  }

  cancelar(){

    this.dialogRef.close();

  }

}
