
import { RouterModule, Routes } from '@angular/router';
import { MadceroformComponent } from './components/formulario/formularios/madceroform/madceroform.component';
import { MadunoformComponent } from './components/formulario/formularios/madunoform/madunoform.component';
import { MaddosformComponent } from './components/formulario/formularios/maddosform/maddosform.component';
import { MadtresformComponent } from './components/formulario/formularios/madtresform/madtresform.component';
import { MadcuatroformComponent } from './components/formulario/formularios/madcuatroform/madcuatroform.component';
import { MadcincoformComponent } from './components/formulario/formularios/madcincoform/madcincoform.component';
import { MadseisformComponent } from './components/formulario/formularios/madseisform/madseisform.component';
import { MadsieteformComponent } from './components/formulario/formularios/madsieteform/madsieteform.component';

const APP_ROUTES: Routes = [
  { path: 'nivelCero', component: MadceroformComponent },
  { path: 'nivelUno', component: MadunoformComponent },
  { path: 'nivelDos', component: MaddosformComponent },
  { path: 'nivelTres', component: MadtresformComponent },
  { path: 'nivelCinco', component: MadcincoformComponent },
  { path: 'nivelSeis', component: MadseisformComponent },
  { path: 'nivelSiete', component: MadsieteformComponent },
  { path: 'nivelOcho', component: MadcuatroformComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
