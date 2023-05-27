import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationModel } from './model/notivication.model';

@Injectable({
  providedIn: 'root'
})
export class NotivicationService {

  urlNotification = 'http://localhost:8080/api/notification/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all Notification
   * @returns
   */
   getAllNotivication(): Observable<any> {
    return this.http.get(this.urlNotification + 'all');
  }

  /**
   * 
   * @param notification 
   * @returns 
   */
  envoyerNotification(notification: NotificationModel): Observable<any> {
    return this.http.post(this.urlNotification + 'create', notification);
  }

  /**
   * update notification
   * @param notification
   * @returns
   */
   updateNotification(notification: NotificationModel,id: number): Observable<any> {
    return this.http.put(this.urlNotification+'modify/'+id, notification);
  }
  
  /**
   * get notification by id
   * @param id
   * @returns
   */
  getNotificationById(id: number): Observable<any> {
    return this.http.get(this.urlNotification + id);
  }

  /**
   *
   * @param reference
   * @returns
   */
  rechercheNotificationByReference(reference: string): Observable<any> {
    return this.http.get(this.urlNotification + 'find/' + reference);
  }
}
