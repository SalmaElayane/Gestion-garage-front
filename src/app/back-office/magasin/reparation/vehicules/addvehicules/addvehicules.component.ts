import { UtilisateurModel } from './../../../../utilisateur/model/utilisateur.model';
import { UtilisateurService } from './../../../../utilisateur/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculeModel } from '../model/vehicule.model';
import { VehiculesService } from '../vehicules.service';

@Component({
  selector: 'app-addvehicules',
  templateUrl: './addvehicules.component.html',
  styleUrls: ['./addvehicules.component.css'],
})
export class AddvehiculesComponent implements OnInit {
  vehiculesFormGroup: FormGroup = new FormGroup({});
  listCinCollab: any[] = [];
  photoCollabBinary: any;
  constructor(
    private formBuilder: FormBuilder,
    private vehiculesService: VehiculesService,
    private utilisateurService: UtilisateurService,
    private router: Router
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
   *
   */
  ajouterVehicule() {
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
      this.vehiculesService.ajouterVehicule(vehicules).subscribe({
        next: (v) => {
          this.router.navigateByUrl('vehicule');
          alert(
            'Bonjour ! Votre véhicule a été bien ajouter. Merci'
          );
        },
        error: (e) => {alert("Matricule déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert(
        'Bonjour ! Erreur au niveau ajout cette véhicule vérifier les données.remplir tous les champs du formulaire !'
      );
    }
  }

  /**quitter */
  quitteVehicule() {
    this.router.navigateByUrl('vehicule');
  }
}
