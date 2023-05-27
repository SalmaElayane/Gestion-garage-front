import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockModel } from './model/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  urlStock = 'http://localhost:8080/api/stock/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all Stock
   * @returns
   */
  getAllStock(): Observable<any> {
    return this.http.get(this.urlStock + 'all');
  }

  /**
   * 
   * @param stock 
   * @returns 
   */
  ajouterStock(stock: StockModel): Observable<any> {
    return this.http.post(this.urlStock + 'create', stock);
  }

  /**
   * update stock
   * @param stock
   * @returns
   */
  updateStock(stock: StockModel,id: number): Observable<any> {
    return this.http.put(this.urlStock+'modify/'+id, stock);
  }

  /**
   * get stock by id
   * @param id
   * @returns
   */
  getStockById(id: number): Observable<any> {
    return this.http.get(this.urlStock + id);
  }
  /**
   * delete stock
   * @param id
   * @returns
   */
  deleteStock(id: number): Observable<any> {
    return this.http.delete(this.urlStock +'remove/'+ id);
  }

  /**
   *
   * @param reference
   * @returns
   */
  rechercheStockByReference(reference: string): Observable<any> {
    return this.http.get(this.urlStock + 'find/' + reference);
  }
}
