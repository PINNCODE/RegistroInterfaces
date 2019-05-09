import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// componentes
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MadceroformComponent } from './components/formulario/formularios/madceroform/madceroform.component';
import { MadunoformComponent } from './components/formulario/formularios/madunoform/madunoform.component';
import { MaddosformComponent } from './components/formulario/formularios/maddosform/maddosform.component';
import { MadtresformComponent } from './components/formulario/formularios/madtresform/madtresform.component';
import { MadcuatroformComponent } from './components/formulario/formularios/madcuatroform/madcuatroform.component';
import { MadcincoformComponent } from './components/formulario/formularios/madcincoform/madcincoform.component';
import { MadseisformComponent } from './components/formulario/formularios/madseisform/madseisform.component';
import { MadsieteformComponent } from './components/formulario/formularios/madsieteform/madsieteform.component';
import { MadochoformComponent } from './components/formulario/formularios/madochoform/madochoform.component';
import { NavComponent } from './components/shared/nav/nav.component';
// Rutas
import { APP_ROUTING } from './app.routes';
// Servicios
import { DataJsonService } from './services/data-json.service';
import { GenJsonComponent } from './components/gen-json/gen-json.component';
import { LoadJsonComponent } from './components/load-json/load-json.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MadceroformComponent,
    MadunoformComponent,
    MaddosformComponent,
    MadtresformComponent,
    MadcuatroformComponent,
    MadcincoformComponent,
    MadseisformComponent,
    MadsieteformComponent,
    MadochoformComponent,
    NavComponent,
    GenJsonComponent,
    LoadJsonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    DataJsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
