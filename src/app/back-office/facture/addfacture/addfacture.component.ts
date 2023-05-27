import { FactureModel } from './../model/facture.model';
import { MaintenenceModel } from './../../magasin/reparation/maintenence/model/maintenance.model';
import { Router } from '@angular/router';
import { MaintenenceService } from './../../magasin/reparation/maintenence/maintenence.service';
import { FactureService } from './../facture.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfacture',
  templateUrl: './addfacture.component.html',
  styleUrls: ['./addfacture.component.css']
})
export class AddfactureComponent implements OnInit {

  FactureFormGroup: FormGroup = new FormGroup({});
  listrefCollab: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private FactureService: FactureService,
    private maintenenceService: MaintenenceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.FactureFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      date: ['', Validators.required],
      montant: ['', Validators.required],
      referenceMaintenance: ['', Validators.required],
    });
    this.maintenenceService.getAllMaintenence().subscribe((res) => {
      this.listrefCollab = res;
    });
  }

  /**
   *
   */
  ajouterFacture() {
    if (this.FactureFormGroup.valid) {
      let maintenence: MaintenenceModel = {
        id: null,
        suivi: null,
        etat: null,
        reference: this.FactureFormGroup.get('referenceMaintenance')?.value,
      };
      let facture: FactureModel = {
        reference: this.FactureFormGroup.get('reference')?.value,
        date: this.FactureFormGroup.get('date')?.value,
        montant: this.FactureFormGroup.get('montant')?.value,
        maintenenceDto: maintenence,
      };
      console.log(facture);
      this.FactureService.ajouterFacture(facture).subscribe({
        next: (v) => {
          this.router.navigateByUrl('facture');
          alert(
            'Bonjour ! Votre facture a été bien ajouter. Merci '
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert(
        'Bonjour ! Erreur au niveau ajout votre facture vérifier les données.remplir tous les champs du formulaire !'
      );
    }
  }

  /**quitter */
  quitteFacture() {
    this.router.navigateByUrl('facture');
  }

}
