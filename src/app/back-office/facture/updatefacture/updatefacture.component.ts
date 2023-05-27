import { FactureModel } from './../model/facture.model';
import { MaintenenceModel } from './../../magasin/reparation/maintenence/model/maintenance.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MaintenenceService } from './../../magasin/reparation/maintenence/maintenence.service';
import { FactureService } from './../facture.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatefacture',
  templateUrl: './updatefacture.component.html',
  styleUrls: ['./updatefacture.component.css']
})
export class UpdatefactureComponent implements OnInit {
  id: number = 0;
  FactureFormGroup: FormGroup = new FormGroup({});
  listrefCollab: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private FactureService: FactureService,
    private maintenenceService: MaintenenceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.FactureFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      date: ['', Validators.required],
      montant: ['', Validators.required],
      referenceMaintenence: ['', Validators.required],
    });
    this.maintenenceService.getAllMaintenence().subscribe((res) => {
      this.listrefCollab = res;
    });
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.FactureService
        .getFactureById(this.id)
        .subscribe((facture: FactureModel) => {
          console.log(facture);
          if (facture.id) {
            this.FactureFormGroup.get('reference')?.setValue(
              facture.reference
            );
            this.FactureFormGroup.get('date')?.setValue(
              facture.date
            );
            this.FactureFormGroup.get('montant')?.setValue(
              facture.montant
            );
            this.FactureFormGroup.get('referenceMaintenence')?.setValue(
              facture.maintenenceDto.reference
            );
          } else {
            alert('aucun facture ne containe ce Id');
            this.router.navigateByUrl('facture');
          }
        });
    }
  }

  /**
   *
   */
  modifierFacture() {
    if (this.FactureFormGroup.valid) {
      let maintenence: MaintenenceModel = {
        id: null,
        suivi: null,
        etat: null,
        reference: this.FactureFormGroup.get('referenceMaintenence')?.value,
      };
      let facture: FactureModel = {
        reference: this.FactureFormGroup.get('reference')?.value,
        date: this.FactureFormGroup.get('date')?.value,
        montant: this.FactureFormGroup.get('montant')?.value,
        maintenenceDto: maintenence,
      };
      console.log(facture);
      this.FactureService.modifierFacture(facture,this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('facture');
          alert(
            'Bonjour ! Votre facture a été bien modifier. Merci'
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert(
        'Bonjour ! Erreur au niveau modifier votre facture vérifier les données.remplir tous les champs du formulaire !'
      );
    }
  }

  /**quitter */
  quitteFacture() {
    this.router.navigateByUrl('facture');
  }

}
