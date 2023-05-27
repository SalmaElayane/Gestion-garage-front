import { RendezVousModel } from './../model/rendezVous.model';
import { RendezVousService } from './../rendez-vous.service';
import { UtilisateurModel } from 'src/app/back-office/utilisateur/model/utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updaterendez-vous',
  templateUrl: './updaterendez-vous.component.html',
  styleUrls: ['./updaterendez-vous.component.css']
})
export class UpdaterendezVousComponent implements OnInit {

  RendezVousFormGroup: FormGroup = new FormGroup({});
  listCinCollab: any[] = [];
  id: number = 0;
  photoCollabBinary: any;
  constructor(
    private formBuilder: FormBuilder,
    private rendezVousService: RendezVousService,
    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.RendezVousFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      type: ['', Validators.required],
      dateRendezVous: ['', Validators.required],
      description: ['', Validators.required],
      cinUtilisateur: ['', Validators.required],
    });
    this.utilisateurService.getAllCin().subscribe((res) => {
      this.listCinCollab = res;
    });
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.rendezVousService
        .getRendezVousById(this.id)
        .subscribe((rendezVous: RendezVousModel) => {
          console.log(rendezVous);
          if (rendezVous.id) {
            this.RendezVousFormGroup.get('reference')?.setValue(rendezVous.reference);
            this.RendezVousFormGroup.get('type')?.setValue(rendezVous.type);
            this.RendezVousFormGroup.get('dateRendezVous')?.setValue(rendezVous.dateRendezVous);
            this.RendezVousFormGroup.get('description')?.setValue(rendezVous.description);
            
            this.RendezVousFormGroup
              .get('cinUtilisateur')
              ?.setValue(rendezVous.utilisateurDto.id);
          } else {
            alert('aucun rendez-vous ne containe ce Id');
            this.router.navigateByUrl('vehicule');
          }
        });
    }
  }

  /**
   *
   */
   updateRendezVous() {
    if (this.RendezVousFormGroup.valid) {
      let utilisateur: UtilisateurModel = {
        id: null,
        nom: null,
        prenom: null,
        cin: this.RendezVousFormGroup.get('cinUtilisateur')?.value,
      };
      let rendezVous: RendezVousModel = {
        reference: this.RendezVousFormGroup.get('reference')?.value,
        type: this.RendezVousFormGroup.get('type')?.value,
        dateRendezVous: this.RendezVousFormGroup.get('dateRendezVous')?.value,
        description: this.RendezVousFormGroup.get('description')?.value,
        utilisateurDto: utilisateur,
      };
      console.log(rendezVous);
      this.rendezVousService.updateRendezVous(rendezVous, this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('rendezVous');
          alert(
            'Bonjour ! Votre rendez-vous a été bien modifier. Merci'
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert(
        'Bonjour ! Erreur au niveau modifier votre rendez-vous vérifier les données.remplir tous les champs du formulaire !'
      );
    }
  }

  /**quitter */
  quitteRendezVous() {
    this.router.navigateByUrl('rendezVous');
  }

}
