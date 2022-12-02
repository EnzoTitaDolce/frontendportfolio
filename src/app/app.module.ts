import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { InteresesComponent } from './intereses/intereses.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ModalExperienciaComponent } from './modal-experiencia/modal-experiencia.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalEducacionComponent } from './modal-educacion/modal-educacion.component';
import { ModalProyectosComponent } from './modal-proyectos/modal-proyectos.component';
import { ModalHabilidadesComponent } from './modal-habilidades/modal-habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    InteresesComponent,
    ContactoComponent,
    LoginComponent,
    PortfolioComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ModalExperienciaComponent,
    ModalEducacionComponent,
    ModalProyectosComponent,
    ModalHabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule, 
    MatDialogModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
