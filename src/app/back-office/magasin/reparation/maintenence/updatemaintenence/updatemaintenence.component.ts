import { ActivatedRoute, Router } from '@angular/router';
import { MaintenenceService } from './../maintenence.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaintenenceModel } from '../model/maintenance.model';
import { VehiculesService } from '../../vehicules/vehicules.service';
import { VehiculeModel } from '../../vehicules/model/vehicule.model';

@Component({
  selector: 'app-updatemaintenence',
  templateUrl: './updatemaintenence.component.html',
  styleUrls: ['./updatemaintenence.component.css'],
})
export class UpdatemaintenenceComponent implements OnInit {
  MaintenenceFormGroup: FormGroup = new FormGroup({});
  id: number = 0;
  listMatriculeCollab: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private maintenenceService: MaintenenceService,
    private vehiculesService: VehiculesService,
    private router: Router,
    private route: ActivatedRoute
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
    this.vehiculesService.getAllMatricule().subscribe((res) => {
      this.listMatriculeCollab = res;
    });
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.maintenenceService
        .getMaintenenceById(this.id)
        .subscribe((maintenence: MaintenenceModel) => {
          console.log(maintenence);
          if (maintenence.id) {
            this.MaintenenceFormGroup.get('reference')?.setValue(
              maintenence.reference
            );
            this.MaintenenceFormGroup.get('dateDebut')?.setValue(
              maintenence.dateDebut
            );
            this.MaintenenceFormGroup.get('dateFin')?.setValue(
              maintenence.dateFin
            );
            this.MaintenenceFormGroup.get('etat')?.setValue(maintenence.etat);
            this.MaintenenceFormGroup.get('suivi')?.setValue(maintenence.suivi);
            this.MaintenenceFormGroup.get('description')?.setValue(
              maintenence.description
            );
            this.MaintenenceFormGroup.get('matriculeVoiture')?.setValue(
              maintenence.voitureDto.matricule
            );
          } else {
            alert('aucun maintenence ne containe ce Id');
            this.router.navigateByUrl('maintenance');
          }
        });
    }
  }

  /**
   *
   */
  updateMaintenence() {
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
      this.maintenenceService.updateMaintenence(maintenence, this.id).subscribe({
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
