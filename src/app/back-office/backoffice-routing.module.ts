import { UpdatestockComponent } from './magasin/stock/updatestock/updatestock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { FactureComponent } from './facture/facture.component';
import { MagasinComponent } from './magasin/magasin.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { TacheComponent } from './tache/tache.component';
import { EmployeComponent } from './employe/employe.component';
import { AddEmployeComponent } from './employe/addemploye/addemploye.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './utilisateur/addutilisateur/addutilisateur.component';
import { EditUtilisateurComponent } from './utilisateur/editutilisateur/editutilisateur.component';
import { UpdateEmployeComponent } from './employe/updateemploye/updateemploye.component';
import { AddstockComponent } from './magasin/stock/addstock/addstock.component';
import { UpdatevehiculesComponent } from './magasin/reparation/vehicules/updatevehicules/updatevehicules.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {

  path: '',
        component: BackOfficeComponent,
        children: [
          { path: '', component: LoginComponent },
          { path: 'menu', component: MenuComponent },
          { path: 'utilisateur', component: UtilisateurComponent },
          { path: 'employe', component: EmployeComponent },
          { path: 'add/employe', component: AddEmployeComponent },
          { path: 'updateemploye', component: UpdateEmployeComponent },
          { path: 'magasin', component: MagasinComponent },
          { path: 'facture', component: FactureComponent },
          { path: 'rendez-vous', component: RendezVousComponent },
          { path: 'notifications', component: NotificationsComponent },
          { path: 'tache', component: TacheComponent },
          { path: 'add', component: AddUtilisateurComponent },
          { path: 'edit', component: EditUtilisateurComponent },
          { path: 'stock', component: EmployeComponent },
          { path: 'add/stock', component: AddstockComponent },
          { path: 'updatestock', component: UpdatestockComponent },
          {
            path: 'updatevehicule/:id',
            component: UpdatevehiculesComponent,
          },
],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }