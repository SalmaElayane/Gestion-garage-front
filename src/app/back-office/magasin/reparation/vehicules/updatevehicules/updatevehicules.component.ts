import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurModel } from 'src/app/back-office/utilisateur/model/utilisateur.model';
import { UtilisateurService } from 'src/app/back-office/utilisateur/utilisateur.service';
import { VehiculeModel } from '../model/vehicule.model';
import { VehiculesService } from '../vehicules.service';

@Component({
  selector: 'app-updatevehicules',
  templateUrl: './updatevehicules.component.html',
  styleUrls: ['./updatevehicules.component.css'],
})
export class UpdatevehiculesComponent implements OnInit {
  vehiculesFormGroup: FormGroup = new FormGroup({});
  id: number = 0;
  listCinCollab: any[] = [];
  photoCollabBinary: any;
  previewUrl: any;
  constructor(
    private formBuilder: FormBuilder,
    private vehiculesService: VehiculesService,
    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vehiculesFormGroup = this.formBuilder.group({
      matricule: ['', Validators.required],
      marque: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      photo: ['', Validators.required],
      cinUtilisateur: ['', Validators.required],
    });
    this.utilisateurService.getAllCin().subscribe((res) => {
      this.listCinCollab = res;
    });
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.vehiculesService
        .getVehiculeById(this.id)
        .subscribe((vehicules: VehiculeModel) => {
          console.log(vehicules);
          if (vehicules.id) {
            this.vehiculesFormGroup
              .get('matricule')
              ?.setValue(vehicules.matricule);
            this.vehiculesFormGroup.get('marque')?.setValue(vehicules.marque);
            this.vehiculesFormGroup.get('model')?.setValue(vehicules.model);
            this.vehiculesFormGroup.get('type')?.setValue(vehicules.type);
            this.previewUrl = 'data:image/jpeg;base64,' + vehicules.photo;
            this.vehiculesFormGroup
              .get('cinUtilisateur')
              ?.setValue(vehicules.utilisateurDto.id);
          } else {
            alert('aucun vehicules ne containe ce Id');
            this.router.navigateByUrl('vehicule');
          }
        });
    }
  }

  /**
   *
   */
  supprimerPhoto() {
    this.previewUrl = null;
    this.vehiculesFormGroup.get('photo').setValue(null);
    this.vehiculesFormGroup.get('photo').updateValueAndValidity();
  }

  /**
   *
   * @param event
   * @param field
   */
  picked(event: any, field: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.handleInputChange(file);
    } else {
      alert('No file selected');
    }
  }

  /**
   *
   * @param files
   * @returns
   */
  handleInputChange(files: any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  /**
   *
   * @param e
   */
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.photoCollabBinary = base64result;
  }

  /**
   *MODIFIER
   */
  updateVehicule() {
    if (this.vehiculesFormGroup.valid) {
      let utilisateur: UtilisateurModel = {
        id: null,
        nom: null,
        prenom: null,
        cin: this.vehiculesFormGroup.get('cinUtilisateur')?.value,
      };
      let vehicules: VehiculeModel = {
        matricule: this.vehiculesFormGroup.get('matricule')?.value,
        marque: this.vehiculesFormGroup.get('marque')?.value,
        model: this.vehiculesFormGroup.get('model')?.value,
        type: this.vehiculesFormGroup.get('type')?.value,
        photo: this.photoCollabBinary,
        utilisateurDto: utilisateur,
      };
      console.log(vehicules);
      this.vehiculesService.updateVehicule(vehicules, this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('vehicule');
          alert(
            'Bonjour ! Votre modification  a été bien fait. Merci '
          );
        },
        error: (e) => {alert("Matricule déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert(
        'Bonjour ! Erreur au niveau modifier cette véhicule vérifier les données.remplir tous les champs du formulaire !'
      );
    }
  }
  /**quitter */
  quitteVehicule() {
    this.router.navigateByUrl('vehicule');
  }
}
