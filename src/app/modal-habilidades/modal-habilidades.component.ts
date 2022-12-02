import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form } from '@angular/forms';
import { Habilidades } from '../habilidades/habilidades';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModalHabilidadesComponent>,@Inject(MAT_DIALOG_DATA) public data:Habilidades) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();
  }

}
