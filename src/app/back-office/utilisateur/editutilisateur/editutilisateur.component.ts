import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from './../utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilisateurModel } from '../model/utilisateur.model';

@Component({
  selector: 'app-editutilisateur',
  templateUrl: './editutilisateur.component.html',
  styleUrls: ['./editutilisateur.component.css'],
})
export class EditUtilisateurComponent implements OnInit {
  utilisateurFormGroup: FormGroup = new FormGroup({});
  id: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute
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
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.utilisateurService
        .getUtilisateurById(this.id)
        .subscribe((utilisateur: UtilisateurModel) => {
          console.log(utilisateur);

          if (utilisateur.id) {
            this.utilisateurFormGroup.get('nom')?.setValue(utilisateur.nom);
            this.utilisateurFormGroup.get('prenom')?.setValue(utilisateur.prenom);
            this.utilisateurFormGroup.get('cin')?.setValue(utilisateur.cin);
            this.utilisateurFormGroup.get('email')?.setValue(utilisateur.email);
            this.utilisateurFormGroup.get('tele')?.setValue(utilisateur.tele);
            this.utilisateurFormGroup.get('role')?.setValue(utilisateur.role);
            this.utilisateurFormGroup.get('login')?.setValue(utilisateur.login);
            this.utilisateurFormGroup.get('mot_de_passe')?.setValue(utilisateur.mot_de_passe);
          } else {
            alert('aucun utilisateur ne containe ce Id');
            this.router.navigateByUrl('');
          }
        });
    }
  }

  /**
   *MODIFIER
   */
  updateUtilisateur() {
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
      this.utilisateurService.updateUtilisateur(utilisateur,this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('utilisateur');
          alert(
            'Bonjour ! Votre compte a été bien modifier. Merci pour l’inscription'
          );
        },
        error: (e) => {alert("Cin déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau inscription vérifier tous données.Les champs doivent être remplis. ');
    }
  }
  /**quitter */
  quitteUrtilisateur(){
    this.router.navigateByUrl('utilisateur');
  }
}
