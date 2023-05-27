import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockModel } from '../model/stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {
  stockFormGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private stockService: StockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.stockFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      reference: ['', Validators.required],
      categorie: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
    });
  }

  /**
   *
   */
  ajouterStock() {
    if (this.stockFormGroup.valid) {
      let stock: StockModel = {
        nom: this.stockFormGroup.get('nom')?.value,
        reference: this.stockFormGroup.get('reference')?.value,
        categorie: this.stockFormGroup.get('categorie')?.value,
        prix: this.stockFormGroup.get('prix')?.value,
        quantite: this.stockFormGroup.get('quantite')?.value,
      };
      console.log(stock);
      this.stockService.ajouterStock(stock).subscribe({
        next: (v) => {
          this.router.navigateByUrl('listeStock');
          alert(
            'Bonjour ! Votre pièce a été bien ajouter. Merci'
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau ajout une pièce vérifier les données.remplir tous les champs du formulaire !');
    }
  }
  /**quitter */
  quitteStock() {
    this.router.navigateByUrl('listeStock');
  }

}
