import { UtilisateurModel } from './../../utilisateur/model/utilisateur.model';
/**
 * Notification
 */
 export interface NotificationModel {
    id?: number;
    reference?: string;
    dateNotification?:Date;
    objet?: string;
    message?: string;
    utilisateurDto?: UtilisateurModel;
    
}