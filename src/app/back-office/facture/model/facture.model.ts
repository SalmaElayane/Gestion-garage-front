import { MaintenenceModel } from './../../magasin/reparation/maintenence/model/maintenance.model';

/**
 * FactureModel
 */
 export interface FactureModel {
    id?: number;
    reference?: string;
    date?:Date;
    montant?: string;
    maintenenceDto?: MaintenenceModel;
    
}