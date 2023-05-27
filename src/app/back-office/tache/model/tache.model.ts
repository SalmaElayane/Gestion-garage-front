import { EmployeModel } from "../../employe/model/employe.model";

/**
 * tache model
 */
 export interface TacheModel {
    id?: number;
    reference?: string;
    nom?: string;
    service?: string;
    date_debut?: Date;
    date_fin?: Date;
    status ?: number;
    description?: string;
    employeDto?: EmployeModel;
}