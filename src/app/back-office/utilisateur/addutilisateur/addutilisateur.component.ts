import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurModel } from '../model/utilisateur.model';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.css'],
})
export class AddUtilisateurComponent implements OnInit {
  utilisateurFormGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private UtilisateurService: UtilisateurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.utilisateurFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      tele: ['', Validators.required],
      login: ['', Validators.required],
      mot_de_passe: ['', Validators.required],
    });
  }

  /**
   *
   */
  ajouterUtilisateur() {
    if (this.utilisateurFormGroup.valid) {
      let utilisateur: UtilisateurModel = {
        nom: this.utilisateurFormGroup.get('nom')?.value,
        prenom: this.utilisateurFormGroup.get('prenom')?.value,
        cin: this.utilisateurFormGroup.get('cin')?.value,
        email: this.utilisateurFormGroup.get('email')?.value,
        role: this.utilisateurFormGroup.get('role')?.value,
        tele: this.utilisateurFormGroup.get('tele')?.value,
        login: this.utilisateurFormGroup.get('login')?.value,
        mot_de_passe: this.utilisateurFormGroup.get('mot_de_passe')?.value,
      };
      console.log(utilisateur);
      this.UtilisateurService.ajouterUtilisateur(utilisateur).subscribe({
        next: (v) => {
          this.router.navigateByUrl('utilisateur');
          alert(
            'Bonjour ! Votre compte a été bien créé. Merci pour l’inscription'
          );
        },
        error: (e) => {alert("Cin déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert(
        'Bonjour ! Erreur au niveau inscription vérifier tous données.Les champs doivent être remplis.'
      );
    }
  }
  /**quitter */
  quittertilisateur() {
    this.router.navigateByUrl('utilisateur');
  }
}
