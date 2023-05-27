import { UpdatefactureComponent } from './back-office/facture/updatefacture/updatefacture.component';
import { AddfactureComponent } from './back-office/facture/addfacture/addfacture.component';
import { UpdaterendezVousComponent } from './back-office/rendez-vous/updaterendez-vous/updaterendez-vous.component';
import { AddrendezVousComponent } from './back-office/rendez-vous/addrendez-vous/addrendez-vous.component';
import { MaintenenceComponent } from './back-office/magasin/reparation/maintenence/maintenence.component';
import { UpdatevehiculesComponent } from './back-office/magasin/reparation/vehicules/updatevehicules/updatevehicules.component';
import { AddvehiculesComponent } from './back-office/magasin/reparation/vehicules/addvehicules/addvehicules.component';
import { AdddiagnosticComponent } from './back-office/magasin/diagnostic/adddiagnostic/adddiagnostic.component';
import { UpdatediagnosticComponent } from './back-office/magasin/diagnostic/updatediagnostic/updatediagnostic.component';
import { DiagnosticComponent } from './back-office/magasin/diagnostic/diagnostic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './back-office/utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './back-office/utilisateur/addutilisateur/addutilisateur.component';
import { EditUtilisateurComponent } from './back-office/utilisateur/editutilisateur/editutilisateur.component';
import { MenuComponent } from './back-office/menu/menu.component';
import { AddEmployeComponent } from './back-office/employe/addemploye/addemploye.component';
import { EmployeComponent } from './back-office/employe/employe.component';
import { UpdateEmployeComponent } from './back-office/employe/updateemploye/updateemploye.component';
import { AddstockComponent } from './back-office/magasin/stock/addstock/addstock.component';
import { UpdatestockComponent } from './back-office/magasin/stock/updatestock/updatestock.component';
import { StockComponent } from './back-office/magasin/stock/stock.component';
import { MagasinComponent } from './back-office/magasin/magasin.component';
import { ReparationComponent } from './back-office/magasin/reparation/reparation.component';
import { VehiculesComponent } from './back-office/magasin/reparation/vehicules/vehicules.component';
import { AddmaintenenceComponent } from './back-office/magasin/reparation/maintenence/addmaintenence/addmaintenence.component';
import { UpdatemaintenenceComponent } from './back-office/magasin/reparation/maintenence/updatemaintenence/updatemaintenence.component';
import { TacheComponent } from './back-office/tache/tache.component';
import { AddtacheComponent } from './back-office/tache/addtache/addtache.component';
import { UpdatetacheComponent } from './back-office/tache/updatetache/updatetache.component';
import { NotificationsComponent } from './back-office/notifications/notifications.component';
import { UpdatenotivicationComponent } from './back-office/notifications/updatenotivication/updatenotivication.component';
import { AddnotivicationComponent } from './back-office/notifications/addnotivication/addnotivication.component';
import { LoginComponent } from './back-office/login/login.component';
import { RendezVousComponent } from './back-office/rendez-vous/rendez-vous.component';
import { FactureComponent } from './back-office/facture/facture.component';
const routes: Routes = [
  
  {
    path: 'menu',
    component: MenuComponent,
  },
  { 
    path: '', 
    component: LoginComponent },
  {
    path: 'utilisateur',
    component: UtilisateurComponent,
  },
  {
    path: 'add',
    component: AddUtilisateurComponent,
  },
  {
    path: 'edit/:id',
    component: EditUtilisateurComponent,
  },
  {
    path: 'add',
    component: AddstockComponent,
  },
  {
    path: 'stock',
    component: StockComponent,
  },
  {
    path: 'updatestock/:id',
    component: UpdatestockComponent,
  },
  {
    path: 'addEmploye',
    component: AddEmployeComponent,
  },
  {
    path: 'listeEmploye',
    component: EmployeComponent,
  },
  {
    path: 'updateEmploye/:id',
    component: UpdateEmployeComponent,
  },
  {
    path: 'addStock',
    component: AddstockComponent,
  },
  {
    path: 'listeStock',
    component: StockComponent,
  },
  {
    path: 'magasin',
    component: MagasinComponent,
  },
  
  {
    path: 'diagnostic',
    component:DiagnosticComponent,
  },
  {
    path: 'updatediagnostic/:id',
    component: UpdatediagnosticComponent,
  },
  {
    path: 'addDiagnostic',
    component: AdddiagnosticComponent,
  },
  {
    path: 'stockDiagnostic',
    component: DiagnosticComponent,
  },
  {
    path: 'reparation',
    component: ReparationComponent,
  },
  {
    path: 'vehicule',
    component: VehiculesComponent,
  },
  {
    path: 'addvehicule',
    component: AddvehiculesComponent,
  },
  {
    path: 'updatevehicule/:id',
    component: UpdatevehiculesComponent,
  },
  {
    path: 'maintenance',
    component: MaintenenceComponent,
  },
  {
    path: 'addmaintenance',
    component: AddmaintenenceComponent,
  },
  {
    path: 'updatemaintenance/:id',
    component: UpdatemaintenenceComponent,
  },
  {
    path: 'tache',
    component: TacheComponent,
  },
  {
    path: 'addTache',
    component: AddtacheComponent,
  },
  {
    path: 'updateTache/:id',
    component: UpdatetacheComponent,
  },
  {
    path: 'notification',
    component: NotificationsComponent,
  },
  {
    path: 'addnotification',
    component: AddnotivicationComponent,
  },
  {
    path: 'updatenotification/:id',
    component: UpdatenotivicationComponent,
  },
  {
    path: 'rendezVous',
    component: RendezVousComponent,
  },
  {
    path: 'addRendezVous',
    component: AddrendezVousComponent,
  },
  {
    path: 'updateRendezVous/:id',
    component: UpdaterendezVousComponent,
  },
  {
    path: 'facture',
    component: FactureComponent,
  },
  {
    path: 'addfacture',
    component: AddfactureComponent,
  },
  {
    path: 'updatefacture/:id',
    component: UpdatefactureComponent,
  },
 { path: '', redirectTo: 'backoffice', pathMatch: 'full'},
 
{ path: 'backoffice', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule), },
{ path: 'front-office', loadChildren: () => import('./font-office/front-office.module').then(m => m.FrontOfficeModule), },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
