import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockModel } from '../model/stock.model';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-updatestock',
  templateUrl: './updatestock.component.html',
  styleUrls: ['./updatestock.component.css']
})
export class UpdatestockComponent implements OnInit {
  stockFormGroup: FormGroup = new FormGroup({});
  id: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stockFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      nom: ['', Validators.required],
      categorie: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
    });
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.stockService
        .getStockById(this.id)
        .subscribe((stock: StockModel) => {
          console.log(stock);

          if (stock.id) {
            this.stockFormGroup.get('nom')?.setValue(stock.nom);
            this.stockFormGroup.get('reference')?.setValue(stock.reference);
            this.stockFormGroup.get('categorie')?.setValue(stock.categorie);
            this.stockFormGroup.get('quantite')?.setValue(stock.quantite);
            this.stockFormGroup.get('prix')?.setValue(stock.prix);
          } else {
            alert('aucun stock ne containe ce Id');
            this.router.navigateByUrl('listeStock');
          }
        });
    }
  }

  /**
   *MODIFIER
   */
  updateStock() {
    if (this.stockFormGroup.valid) {
      let stock: StockModel = {
        nom: this.stockFormGroup.get('nom')?.value,
        reference: this.stockFormGroup.get('reference')?.value,
        categorie: this.stockFormGroup.get('categorie')?.value,
        quantite: this.stockFormGroup.get('quantite')?.value,
        prix: this.stockFormGroup.get('prix')?.value,

      };
      console.log(stock);
      this.stockService.updateStock(stock,this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('listeStock');
          alert(
            'Bonjour ! Votre modification  a été bien fait. Merci'
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau ajouter cette pièce vérifier les données.remplir tous les champs du formulaire !');
    }
  }
  /**quitter */
  quitteStock(){
    this.router.navigateByUrl('listeStock');
  }

}
