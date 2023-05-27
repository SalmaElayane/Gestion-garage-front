/**
 * stockmodel
 */
 export interface StockModel {
    id?: number;
    nom?: string;
    reference ?: string;
    categorie?: string;
    prix ?: number;
    quantite ?: number;
    total?:number;  
}