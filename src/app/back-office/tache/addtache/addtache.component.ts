import { EmployeModel } from './../../employe/model/employe.model';
import { EmployeService } from './../../employe/employe.service';
import { Router } from '@angular/router';
import { TacheService } from './../tache.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TacheModel } from '../model/tache.model';

@Component({
  selector: 'app-addtache',
  templateUrl: './addtache.component.html',
  styleUrls: ['./addtache.component.css']
})
export class AddtacheComponent implements OnInit {

  tacheFormGroup: FormGroup = new FormGroup({});
  listCinCollab: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private tacheService: TacheService,
    private employeService:EmployeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tacheFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      nom: ['', Validators.required],
      service: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
      cinEmploye: ['', Validators.required],
    });
    this.employeService.getAllCin().subscribe((res) => {
      this.listCinCollab = res;
    });
  }

  /**
   *
   */
  ajouterTache() {
    if (this.tacheFormGroup.valid) {
      let employe: EmployeModel = {
        id: null,
        nom: null,
        prenom: null,
        cin: this.tacheFormGroup.get('cinEmploye')?.value,
      };
      let tache: TacheModel = {
        reference: this.tacheFormGroup.get('reference')?.value,
        nom: this.tacheFormGroup.get('nom')?.value,
        service: this.tacheFormGroup.get('service')?.value,
        date_debut: this.tacheFormGroup.get('date_debut')?.value,
        date_fin: this.tacheFormGroup.get('date_fin')?.value,
        status: this.tacheFormGroup.get('status')?.value,
        description: this.tacheFormGroup.get('description')?.value,
        employeDto: employe,
      };
      console.log(tache);
      this.tacheService.ajouterTache(tache).subscribe({
        next: (v) => {
          this.router.navigateByUrl('tache');
          alert(
            'Bonjour ! la tache a été bien ajouter.Merci '
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau d’ajout vérifier les données de votre tache!Les champs doivent être remplis. ');
    }
  }
  /**quitter */
  quitteTache() {
    this.router.navigateByUrl('tache');
  }
}
