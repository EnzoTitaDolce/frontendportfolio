import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experiencia } from '../experiencia/experiencia';
import { Form } from '@angular/forms';



@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModalExperienciaComponent>,@Inject(MAT_DIALOG_DATA) public data:Experiencia) { }

  ngOnInit(): void {
  }

  cancelar(){

    this.dialogRef.close();

  }

}
