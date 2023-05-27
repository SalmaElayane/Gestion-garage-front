import { UtilisateurModel } from './../../../utilisateur/model/utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculeModel } from './model/vehicule.model';
import { VehiculesService } from './vehicules.service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css'],
})
export class VehiculesComponent implements OnInit {
  title = 'hello';
  data: VehiculeModel[] = [];
  VehiculesFormGroup: FormGroup = new FormGroup({});

  /**
   * inject vehiculesService dependency
   * @param vehiculesService
   */
  constructor(
    private vehiculesService: VehiculesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.VehiculesFormGroup = this.formBuilder.group({
      recherchematricule: ['', Validators.required],
    });
    this.getAllVehicule(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllVehicule() {
    /* Observabales  */
    this.vehiculesService
      .getAllVehicule()
      .subscribe((vehicules: VehiculeModel[]) => {
        console.log(vehicules);
        vehicules.forEach((v) => {
          let vehicule: VehiculeModel = {
            id: v.id,
            matricule: v.matricule,
            marque: v.marque,
            model: v.model,
            type: v.type,
            photo: 'data:image/jpeg;base64,' + v.photo,
            utilisateurDto: v.utilisateurDto,
          };
          this.data.push(vehicule);
        });
      });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load vehicules finiched');
  }

  /**
   .*
   * @param vehicules
   */
  deleteVehicule(vehicules: VehiculeModel) {
    let id = vehicules?.id;
    if (id) {
      this.vehiculesService.deleteVehicule(id).subscribe(function (res) {
        alert('La suppression est bien fait.');
        window.location.reload();
      });
    }
  }

  /**
   *
   */
   chercherVehicul() {
    let data: VehiculeModel[] = [];
    if (this.VehiculesFormGroup.valid) {
      let searchKeyWord =
        this.VehiculesFormGroup.get('recherchematricule')?.value;
      this.vehiculesService
        .rechercheVehiculeByMatricule(searchKeyWord)
        .subscribe((res: VehiculeModel[]) => {
          res.forEach((v) => {
            let vehicule: VehiculeModel = {
              id: v.id,
              matricule: v.matricule,
              marque: v.marque,
              model: v.model,
              type: v.type,
              photo: 'data:image/jpeg;base64,' + v.photo,
              utilisateurDto: v.utilisateurDto,
            };
            data.push(vehicule);
          });
          this.data = data;
        });
    } else {
      this.data = [];
      this.vehiculesService
        .getAllVehicule()
        .subscribe((vehicules: VehiculeModel[]) => {
          vehicules.forEach((v) => {
            let vehicule: VehiculeModel = {
              id: v.id,
              matricule: v.matricule,
              marque: v.marque,
              model: v.model,
              type: v.type,
              photo: 'data:image/jpeg;base64,' + v.photo,
              utilisateurDto: v.utilisateurDto,
            };
            this.data.push(vehicule);
          });
        });
    }
  }

  /**
   *
   * @param vehicules
   */
  updateVehicule(vehicules: VehiculeModel) {
    let id = vehicules?.id;
    this.router.navigateByUrl('updatevehicule/'+id);
  }

  /**
   * navigate to add Vehicule component
   */
  ajouterVehicule() {
    this.router.navigateByUrl('addvehicule');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }
}
