import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proyectos } from '../proyectos/proyectos';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ModalProyectosComponent>,@Inject(MAT_DIALOG_DATA) public data:Proyectos) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();
  }

}
