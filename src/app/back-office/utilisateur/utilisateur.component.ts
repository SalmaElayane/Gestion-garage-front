import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurModel } from './model/utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {
  title = 'hello';
  data: UtilisateurModel[] = [];
  utilisateurFormGroup: FormGroup = new FormGroup({});

  /**
   * inject utilisateurService dependency
   * @param utilisateurService
   */
  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.utilisateurFormGroup = this.formBuilder.group({
      recherchecin: ['', Validators.required],
    });
    this.getAllUtilisateur(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllUtilisateur() {
    /* Observabales  */
    this.utilisateurService
      .getAllUtilisateur()
      .subscribe((utilisateur: UtilisateurModel[]) => {
        console.log(utilisateur);
        this.data = utilisateur;
      });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load utilisateurs finiched');
  }

  /**
   .*
   * @param utilisateur
   */
  deleteUtilisateur(utilisateur: UtilisateurModel) {
    let id = utilisateur?.id;
    if (id) {
      this.utilisateurService.deleteUtilisateur(id).subscribe((res) => {
        alert('La suppression d_utilisateur est bien fait.');
        window.location.reload();
      });
    }
  }

  /**
   *
   * @param utilisateur
   */
  chercherUtilisateur() {
    let data: UtilisateurModel[] = [];
    if (this.utilisateurFormGroup.valid) {
      let searchKeyWord = this.utilisateurFormGroup.get('recherchecin')?.value;
      this.utilisateurService
        .rechercheUtilisateurByCin(searchKeyWord)
        .subscribe((res: UtilisateurModel[]) => {
          res.forEach((v) => {
            let utilisateur: UtilisateurModel = {
              id: v.id,
              nom: v.nom,
              prenom: v.prenom,
              cin: v.cin,
              email: v.email,
              role: v.role,
              tele: v.tele,
              login: v.login,
              mot_de_passe: v.mot_de_passe,
            };
            data.push(utilisateur);
          });
          this.data = data;
        });
    } else {
      this.utilisateurService
        .getAllUtilisateur()
        .subscribe((utilisateur: UtilisateurModel[]) => {
          console.log(utilisateur);
          this.data = utilisateur;
        });
    }
  }
  /**
   *
   * @param utilisateur
   */
  updateUtilisateur(utilisateur: UtilisateurModel) {
    let id = utilisateur?.id;
    this.router.navigateByUrl('edit/' + id);
  }

  /**
   * navigate to add utilisateur component
   */
  ajouterUtilisateur() {
    this.router.navigateByUrl('add');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }
}
