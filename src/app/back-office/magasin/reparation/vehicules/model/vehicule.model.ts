import { UtilisateurModel } from './../../../../utilisateur/model/utilisateur.model';
/**
 * VehiculeModel
 */
export interface VehiculeModel {
  id?: number;
  matricule?: string;
  marque?: string;
  model?: string;
  type?: string;
  photo?: string;
  utilisateurDto?: UtilisateurModel;
}
