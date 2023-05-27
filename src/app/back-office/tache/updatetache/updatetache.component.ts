import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from './../tache.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacheModel } from '../model/tache.model';
import { EmployeService } from '../../employe/employe.service';
import { EmployeModel } from '../../employe/model/employe.model';

@Component({
  selector: 'app-updatetache',
  templateUrl: './updatetache.component.html',
  styleUrls: ['./updatetache.component.css']
})
export class UpdatetacheComponent implements OnInit {
  tacheFormGroup: FormGroup = new FormGroup({});
  id: number = 0;
  listCinCollab: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private tacheService: TacheService,
    private employeService: EmployeService,
    private router: Router,
    private route: ActivatedRoute
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
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.tacheService
        .getTacheById(this.id)
        .subscribe((tache: TacheModel) => {
          console.log(tache);

          if (tache.id) {
            this.tacheFormGroup.get('reference')?.setValue(tache.reference);
           this.tacheFormGroup.get('nom')?.setValue(tache.nom);
            this.tacheFormGroup.get('service')?.setValue(tache.service);
           this.tacheFormGroup.get('date_debut')?.setValue(tache.date_debut);
            this.tacheFormGroup.get('date_fin')?.setValue(tache.date_fin);
           this.tacheFormGroup.get('status')?.setValue(tache.status);
            this.tacheFormGroup.get('description')?.setValue(tache.description);
            this.tacheFormGroup
            .get('cinEmploye')
            ?.setValue(tache.employeDto.id);
        } else {
          alert('aucun tache ne containe ce Id');
          this.router.navigateByUrl('vehicule');
        }
      });
    }
  }

  /**
   *MODIFIER
   */
  updateTache() {
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
      this.tacheService.updateTache(tache,this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('tache');
          alert(
            'Bonjour ! Votre modification  a été bien fait pour cette tache. Merci '
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau d’ajout vérifier les données de cette tache!Les champs doivent être remplis. ');
    }
  }
  /**quitter */
  quitterTache(){
    this.router.navigateByUrl('tache');
  }
}
