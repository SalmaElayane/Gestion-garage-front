import { VehiculeModel } from '../../vehicules/model/vehicule.model';

/**
 * MaintenenceModel
 */
export interface MaintenenceModel {
  id?: number;
  reference?: string;
  dateDebut?: Date;
  dateFin?: string;
  etat?: Date;
  suivi?: string;
  description?: string;
  voitureDto?: VehiculeModel;
}
