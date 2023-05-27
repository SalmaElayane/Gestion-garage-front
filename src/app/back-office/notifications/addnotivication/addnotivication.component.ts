import { UtilisateurModel } from './../../utilisateur/model/utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { NotificationModel } from '../model/notivication.model';
import { NotivicationService } from '../notivication.service';

@Component({
  selector: 'app-addnotivication',
  templateUrl: './addnotivication.component.html',
  styleUrls: ['./addnotivication.component.css']
})
export class AddnotivicationComponent implements OnInit {

  notificationFormGroup: FormGroup = new FormGroup({});
  listemailCollab: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private notivicationService: NotivicationService,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.notificationFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      dateNotification: ['', Validators.required],
      objet: ['', Validators.required],
      message: ['', Validators.required],
      emailUtilisateur: ['', Validators.required],
    });
    this.utilisateurService.getAllEmail().subscribe((res) => {
      this.listemailCollab = res;
    });
  }

  /**
   *
   */
   envoyerNotification() {
    if (this.notificationFormGroup.valid) {
        let utilisateur: UtilisateurModel = {
          id: null,
          nom: null,
          prenom: null,
          email: this.notificationFormGroup.get('emailUtilisateur')?.value,
        };
      let notification: NotificationModel = {
        reference: this.notificationFormGroup.get('reference')?.value,
        dateNotification: this.notificationFormGroup.get('dateNotification')?.value,
        objet: this.notificationFormGroup.get('objet')?.value,
        message: this.notificationFormGroup.get('message')?.value,
        utilisateurDto: utilisateur,
      };
      console.log(notification);
      this.notivicationService.envoyerNotification(notification).subscribe({
        next: (v) => {
          this.router.navigateByUrl('notification');
          alert(
            'la notification a été bien envoyé a votre utilisateur.Merci '
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau d’ajout vérifier les données de votre notification!Les champs doivent être remplis. ');
    }
  }
  /**quitter */
  quitteNotification() {
    this.router.navigateByUrl('notification');
  }

}
