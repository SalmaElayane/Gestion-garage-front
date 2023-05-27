import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintenenceService } from './maintenence.service';
import { MaintenenceModel } from './model/maintenance.model';

@Component({
  selector: 'app-maintenence',
  templateUrl: './maintenence.component.html',
  styleUrls: ['./maintenence.component.css'],
})
export class MaintenenceComponent implements OnInit {
  title = 'hello';
  data: MaintenenceModel[] = [];
  MaintenenceFormGroup: FormGroup = new FormGroup({});
  /**
   * inject maintenenceService dependency
   * @param maintenenceService
   */
  constructor(
    private maintenenceService: MaintenenceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.MaintenenceFormGroup = this.formBuilder.group({
      rechercheMatricule: ['', Validators.required],
    });
    this.getAllMaintenence(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllMaintenence() {
    /* Observabales  */
    this.maintenenceService
      .getAllMaintenence()
      .subscribe((maintenence: MaintenenceModel[]) => {
        console.log(maintenence);
        maintenence.forEach((v) => {
          let vehicule: MaintenenceModel = {
            id: v.id,
            reference: v.reference,
            dateDebut: v.dateDebut,
            dateFin: v.dateFin,
            etat: v.etat,
            suivi: v.suivi,
            description: v.description,
            voitureDto: v.voitureDto,
          };
          this.data.push(vehicule);
        });
      });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load maintenences finiched');
  }

  /**
   .*
   * @param maintenence
   */
  deleteMaintenence(maintenence: MaintenenceModel) {
    let id = maintenence?.id;
    if (id) {
      this.maintenenceService.deleteMaintenence(id).subscribe(function (res) {
        alert('La suppression est bien fait.');
        window.location.reload();
      });
    }
  }

  /**
   *
   */
  chercherMaintenence() {
    let data: MaintenenceModel[] = [];
    if (this.MaintenenceFormGroup.valid) {
      let searchKeyWord =
        this.MaintenenceFormGroup.get('rechercheMatricule')?.value;
      this.maintenenceService
        .rechercheMaintenenceByRefrence(searchKeyWord)
        .subscribe((res: MaintenenceModel[]) => {
          res.forEach((v) => {
            let maintenence: MaintenenceModel = {
              id: v.id,
              reference: v.reference,
              dateDebut: v.dateDebut,
              dateFin: v.dateFin,
              etat: v.etat,
              suivi: v.suivi,
              description: v.description,
              voitureDto: v.voitureDto,
            };
            data.push(maintenence);
          });
          this.data = data;
        });
    } else {
      this.data = [];
      this.maintenenceService
        .getAllMaintenence()
        .subscribe((maintenence: MaintenenceModel[]) => {
          maintenence.forEach((v) => {
            let maintenence: MaintenenceModel = {
              id: v.id,
              reference: v.reference,
              dateDebut: v.dateDebut,
              dateFin: v.dateFin,
              etat: v.etat,
              suivi: v.suivi,
              description: v.description,
              voitureDto: v.voitureDto,
            };
            this.data.push(maintenence);
          });
        });
    }
  }
  /**
   *
   * @param maintenence
   */
  updateMaintenence(maintenence: MaintenenceModel) {
    let id = maintenence?.id;
    this.router.navigateByUrl('updatemaintenance/' + id);
  }

  /**
   * navigate to add Maintenence component
   */
  ajouterMaintenence() {
    this.router.navigateByUrl('addmaintenance');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }
}
