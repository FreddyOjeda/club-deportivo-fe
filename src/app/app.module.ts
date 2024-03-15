import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlantillaBasicaComponent } from './view/templates/plantilla-basica/plantilla-basica.component';
import { MiembrosBaseComponent } from './view/pages/miembros/miembros-base/miembros-base.component';
import { MiembrosFormComponent } from './view/pages/miembros/miembros-form/miembros-form.component';
import { EventosBaseComponent } from './view/pages/eventos/eventos-base/eventos-base.component';
import { EventosFormComponent } from './view/pages/eventos/eventos-form/eventos-form.component';
import { DisciplinaBaseComponent } from './view/pages/disciplinas/disciplina-base/disciplina-base.component';
import { DisciplinaFormComponent } from './view/pages/disciplinas/disciplina-form/disciplina-form.component';
import { AppRoutingModule } from './app-routing.module';
import { BarraLateralComponent } from './view/templates/barra-lateral/barra-lateral.component';
import { PanelBienvenidaComponent } from './view/templates/panel-bienvenida/panel-bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaBasicaComponent,
    MiembrosBaseComponent,
    MiembrosFormComponent,
    EventosBaseComponent,
    EventosFormComponent,
    DisciplinaBaseComponent,
    DisciplinaFormComponent,
    BarraLateralComponent,
    PanelBienvenidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
