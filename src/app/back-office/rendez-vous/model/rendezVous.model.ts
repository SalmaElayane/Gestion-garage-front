import { UtilisateurModel } from 'src/app/back-office/utilisateur/model/utilisateur.model';
/**
 * Rendez-Vous Model
 */
 export interface RendezVousModel {
    id?: number;
    reference?: string;
    type?: string;
    dateRendezVous?: Date;
    description?: string;
    statut?: string;
    utilisateurDto?: UtilisateurModel;
 }