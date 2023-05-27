import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockModel } from './model/stock.model';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  title = 'hello';
  data: StockModel[] = [];
  stockFormGroup: FormGroup = new FormGroup({});
  /**
   * inject DiagnosticService dependency
   * @param stockService
   */
  constructor(
    private stockService: StockService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.stockFormGroup = this.formBuilder.group({
      recherchereference: ['', Validators.required],
    });
    this.getAllStock(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllStock() {
    /* Observabales  */
    this.stockService
      .getAllStock()
      .subscribe((stock: StockModel[]) => {
        console.log(stock);
        this.data = stock;
      });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load STOCK finiched');
  }
  

  /**
   .*
   * @param stock
   */
   deleteStock(stock: StockModel) {
    let id = stock?.id;
    if (id) {
      this.stockService.deleteStock(id).subscribe(function (res) {
          alert('La suppression est bien fait.');
          window.location.reload();
        });
    }
  }

  /**
   * 
   */
  chercherStock() {
    let data: StockModel[] = [];
    if (this.stockFormGroup.valid) {
      let searchKeyWord = this.stockFormGroup.get('recherchereference')?.value;
      this.stockService
        .rechercheStockByReference(searchKeyWord)
        .subscribe((res) => {
          console.log(res);
          data.push(res);
          this.data = data;
        });
    } else {
      this.stockService
        .getAllStock()
        .subscribe((stock: StockModel[]) => {
          console.log(stock);
          this.data = stock;
        });
    }
  }
  /**
   *
   * @param stock
   */
  updateStock(stock: StockModel) {
    let id = stock?.id;
    this.router.navigateByUrl('updatestock/' + id);
  }

  /**
   * navigate to add Stock component
   */
  ajouterStock() {
    this.router.navigateByUrl('addStock');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }

}
