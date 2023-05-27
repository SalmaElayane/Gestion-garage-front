import { RendezVousService } from './../rendez-vous.service';
import { UtilisateurModel } from 'src/app/back-office/utilisateur/model/utilisateur.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RendezVousModel } from './../model/rendezVous.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';

@Component({
  selector: 'app-addrendez-vous',
  templateUrl: './addrendez-vous.component.html',
  styleUrls: ['./addrendez-vous.component.css']
})
export class AddrendezVousComponent implements OnInit {
  RendezVousFormGroup: FormGroup = new FormGroup({});
  listCinCollab: any[] = [];
  photoCollabBinary: any;
  constructor(
    private formBuilder: FormBuilder,
    private rendezVousService: RendezVousService,
    private utilisateurService: UtilisateurService,
    private router: Router
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
  }

  /**
   *
   */
   envoyerRendezVous() {
    if (this.RendezVousFormGroup.valid) {
      let utilisateur: UtilisateurModel = {
        id: null,
        nom: null,
        prenom: null,
        cin:this.RendezVousFormGroup.get('cinUtilisateur')?.value,
      };
      let rendezVous: RendezVousModel = {
        reference: this.RendezVousFormGroup.get('reference')?.value,
        type: this.RendezVousFormGroup.get('type')?.value,
        dateRendezVous: this.RendezVousFormGroup.get('dateRendezVous')?.value,
        description: this.RendezVousFormGroup.get('description')?.value,
        utilisateurDto: utilisateur,
      };
      console.log(rendezVous);
      this.rendezVousService.envoyerRendezVous(rendezVous).subscribe({
        next: (v) => {
          this.router.navigateByUrl('rendezVous');
          alert(
            'Bonjour ! Votre rendez-vous a été bien envoyer. Merci'
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert(
        'Bonjour ! Erreur au niveau apprendre votre rendez-vous vérifier les données.remplir tous les champs du formulaire !'
      );
    }
  }

  /**quitter */
  quitteRendezVous() {
    this.router.navigateByUrl('rendezVous');
  }
}
