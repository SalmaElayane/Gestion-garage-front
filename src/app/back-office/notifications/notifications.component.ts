import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationModel } from './model/notivication.model';
import { NotivicationService } from './notivication.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  title = 'hello';
  data: NotificationModel[] = [];
  notificationsFormGroup: FormGroup = new FormGroup({});

  /**
   * inject notivicationService dependency
   * @param notivicationService
   */
  constructor(
    private notivicationService: NotivicationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.notificationsFormGroup = this.formBuilder.group({
      recherchereference: ['', Validators.required],
    });
    this.getAllNotivication(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllNotivication() {
    /* Observabales  */
    this.notivicationService
      .getAllNotivication()
      .subscribe((notification: NotificationModel[]) => {
        console.log(notification);
        notification.forEach((v) => {
          let notification: NotificationModel = {
            id: v.id,
            reference: v.reference,
            dateNotification: v.dateNotification,
            objet: v.objet,
            message: v.message,
            utilisateurDto: v.utilisateurDto,
          };
          this.data.push(notification);
        });
      });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load notification finiched');
  }

  /**
   *
   * @param notification
   */
  chercherNotification() {
    let data: NotificationModel[] = [];
    if (this.notificationsFormGroup.valid) {
      let searchKeyWord = this.notificationsFormGroup.get('recherchereference')?.value;
      this.notivicationService
        .rechercheNotificationByReference(searchKeyWord)
        .subscribe((res: NotificationModel[]) => {
          res.forEach((v) => {
            let notification: NotificationModel = {
              id: v.id,
            reference: v.reference,
            dateNotification: v.dateNotification,
            objet: v.objet,
            message: v.message,
            utilisateurDto: v.utilisateurDto,
            };
            data.push(notification);
          });
          this.data = data;
        });
    } else {
      this.data = [];
      this.notivicationService
        .getAllNotivication()
        .subscribe((notification: NotificationModel[]) => {
          notification.forEach((v) => {
            let notification: NotificationModel = {
              id: v.id,
            reference: v.reference,
            dateNotification: v.dateNotification,
            objet: v.objet,
            message: v.message,
            utilisateurDto: v.utilisateurDto,
            };
            this.data.push(notification);
          });
        });
    }
  }
  /**
   *
   * @param notification
   */
  updateNotification(notification: NotificationModel) {
    let id = notification?.id;
    this.router.navigateByUrl('updatenotification/'+id);
  }

  /**
   * navigate to add notification component
   */
   envoyerNotification() {
    this.router.navigateByUrl('addnotification');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }

}
