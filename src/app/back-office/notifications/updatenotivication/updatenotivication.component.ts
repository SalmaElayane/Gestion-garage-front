import { UtilisateurModel } from './../../utilisateur/model/utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { NotificationModel } from '../model/notivication.model';
import { NotivicationService } from '../notivication.service';

@Component({
  selector: 'app-updatenotivication',
  templateUrl: './updatenotivication.component.html',
  styleUrls: ['./updatenotivication.component.css']
})
export class UpdatenotivicationComponent implements OnInit {

  notificationFormGroup: FormGroup = new FormGroup({});
  id: number = 0;
  listemailCollab: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private notivicationService: NotivicationService,
    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute
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
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.notivicationService
        .getNotificationById(this.id)
        .subscribe((notivication: NotificationModel) => {
          console.log(notivication);
          if (notivication.id) {
            this.notificationFormGroup
              .get('reference')
              ?.setValue(notivication.reference);
            this.notificationFormGroup.get('dateNotification')?.setValue(notivication.dateNotification);
            this.notificationFormGroup.get('objet')?.setValue(notivication.objet);
            this.notificationFormGroup.get('message')?.setValue(notivication.message);
            this.notificationFormGroup.get('emailUtilisateur')?.setValue(notivication.utilisateurDto.id );
          } else {
            alert('aucun notivication ne containe ce Id');
            this.router.navigateByUrl('notivication');
          }
        });
    }
  }

  /**
   *MODIFIER
   */
   updateNotification() {
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
      this.notivicationService.updateNotification(notification, this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('notification');
          alert(
            'Bonjour ! Votre modification  a été bien fait pour cette notification. Merci '
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau d’ajout vérifier les données de cette notification!Les champs doivent être remplis. ');
    }
  }
  /**quitter */
  quitteNotification(){
    this.router.navigateByUrl('notification');
  }

}
