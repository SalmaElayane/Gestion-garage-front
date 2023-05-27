import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { EmployeComponent } from './employe/employe.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { MagasinComponent } from './magasin/magasin.component';
import { TacheComponent } from './tache/tache.component';
import { FactureComponent } from './facture/facture.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { EditUtilisateurComponent } from './utilisateur/editutilisateur/editutilisateur.component';
import { AddUtilisateurComponent } from './utilisateur/addutilisateur/addutilisateur.component';
import { UpdateEmployeComponent } from './employe/updateemploye/updateemploye.component';
import { AddEmployeComponent } from './employe/addemploye/addemploye.component';
import { StockComponent } from './magasin/stock/stock.component';
import { DiagnosticComponent } from './magasin/diagnostic/diagnostic.component';
import { ReparationComponent } from './magasin/reparation/reparation.component';
import { AddstockComponent } from './magasin/stock/addstock/addstock.component';
import { UpdatestockComponent } from './magasin/stock/updatestock/updatestock.component';
import { AdddiagnosticComponent } from './magasin/diagnostic/adddiagnostic/adddiagnostic.component';
import { UpdatediagnosticComponent } from './magasin/diagnostic/updatediagnostic/updatediagnostic.component';
import { VehiculesComponent } from './magasin/reparation/vehicules/vehicules.component';
import { AddvehiculesComponent } from './magasin/reparation/vehicules/addvehicules/addvehicules.component';
import { UpdatevehiculesComponent } from './magasin/reparation/vehicules/updatevehicules/updatevehicules.component';
import { MaintenenceComponent } from './magasin/reparation/maintenence/maintenence.component';
import { AddmaintenenceComponent } from './magasin/reparation/maintenence/addmaintenence/addmaintenence.component';
import { UpdatemaintenenceComponent } from './magasin/reparation/maintenence/updatemaintenence/updatemaintenence.component';
import { AddtacheComponent } from './tache/addtache/addtache.component';
import { UpdatetacheComponent } from './tache/updatetache/updatetache.component';
import { AddnotivicationComponent } from './notifications/addnotivication/addnotivication.component';
import { UpdatenotivicationComponent } from './notifications/updatenotivication/updatenotivication.component';
import { LoginComponent } from './login/login.component';
import { AddrendezVousComponent } from './rendez-vous/addrendez-vous/addrendez-vous.component';
import { UpdaterendezVousComponent } from './rendez-vous/updaterendez-vous/updaterendez-vous.component';
import { AddfactureComponent } from './facture/addfacture/addfacture.component';
import { UpdatefactureComponent } from './facture/updatefacture/updatefacture.component';

@NgModule({
  declarations: [
    BackOfficeComponent,
    MenuComponent,
    UtilisateurComponent,
    EmployeComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    RendezVousComponent,
    MagasinComponent,
    TacheComponent,
    FactureComponent,
    NotificationsComponent,
    AddUtilisateurComponent,
    EditUtilisateurComponent,
    DiagnosticComponent,
    ReparationComponent,
    AddstockComponent,
    UpdatestockComponent,
    AddstockComponent,
    UpdatestockComponent,
    StockComponent,
    AdddiagnosticComponent,
    UpdatediagnosticComponent,
    VehiculesComponent,
    AddvehiculesComponent,
    UpdatevehiculesComponent,
    MaintenenceComponent,
    AddmaintenenceComponent,
    UpdatemaintenenceComponent,
    AddtacheComponent,
    UpdatetacheComponent,
    AddnotivicationComponent,
    UpdatenotivicationComponent,
    LoginComponent,
    AddrendezVousComponent,
    UpdaterendezVousComponent,
    AddfactureComponent,
    UpdatefactureComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BackofficeRoutingModule,
    FontAwesomeModule,
  ],
})
export class BackOfficeModule {}
