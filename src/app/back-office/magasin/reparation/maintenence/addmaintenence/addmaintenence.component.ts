import { VehiculeModel } from './../../vehicules/model/vehicule.model';
import { VehiculesService } from './../../vehicules/vehicules.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintenenceService } from '../maintenence.service';
import { MaintenenceModel } from '../model/maintenance.model';

@Component({
  selector: 'app-addmaintenence',
  templateUrl: './addmaintenence.component.html',
  styleUrls: ['./addmaintenence.component.css'],
})
export class AddmaintenenceComponent implements OnInit {
  MaintenenceFormGroup: FormGroup = new FormGroup({});
  listMatriculeCollab: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private maintenenceService: MaintenenceService,
    private vehiculesService: VehiculesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.MaintenenceFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      etat: ['', Validators.required],
      suivi: ['', Validators.required],
      description: ['', Validators.required],
      matriculeVoiture: ['', Validators.required],
    });
    this.vehiculesService.getAllVehicule().subscribe((res) => {
      this.listMatriculeCollab = res;
    });
  }

  /**
   *
   */
  ajouterMaintenence() {
    if (this.MaintenenceFormGroup.valid) {
      let vehicule: VehiculeModel = {
        id: null,
        marque: null,
        model: null,
        matricule: this.MaintenenceFormGroup.get('matriculeVoiture')?.value,
      };
      let maintenence: MaintenenceModel = {
        reference: this.MaintenenceFormGroup.get('reference')?.value,
        dateDebut: this.MaintenenceFormGroup.get('dateDebut')?.value,
        dateFin: this.MaintenenceFormGroup.get('dateFin')?.value,
        etat: this.MaintenenceFormGroup.get('etat')?.value,
        suivi: this.MaintenenceFormGroup.get('suivi')?.value,
        description: this.MaintenenceFormGroup.get('description')?.value,
        voitureDto: vehicule,
      };
      console.log(maintenence);
      this.maintenenceService.ajouterMaintenence(maintenence).subscribe({
        next: (v) => {
          this.router.navigateByUrl('maintenance');
          alert(
            'Bonjour ! Votre maintenence a été bien ajouter. Merci'
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert(
        'Bonjour ! Erreur au niveau ajout une maintenence vérifier les données.remplir tous les champs du formulaire !'
      );
    }
  }

  /**quitter */
  quitteMaintenence() {
    this.router.navigateByUrl('maintenance');
  }
}
