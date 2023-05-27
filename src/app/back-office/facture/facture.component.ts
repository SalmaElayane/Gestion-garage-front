import { Router } from '@angular/router';
import { FactureService } from './facture.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FactureModel } from './model/facture.model';
import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent implements OnInit {
  title = 'hello';
  data: FactureModel[] = [];
  FactureFormGroup: FormGroup = new FormGroup({});
  /**
   * inject factureService dependency
   * @param factureService
   */
  constructor(
    private factureService: FactureService,
    private router: Router,
    private formBuilder: FormBuilder,
    private fileSaverService: FileSaverService
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.FactureFormGroup = this.formBuilder.group({
      rechercheReference: ['', Validators.required],
    });
    this.getAllFacture(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllFacture() {
    /* Observabales  */
    this.factureService.getAllFacture().subscribe((facture: FactureModel[]) => {
      facture.forEach((v) => {
        let facture: FactureModel = {
          id: v.id,
          reference: v.reference,
          date: v.date,
          montant: v.montant,
          maintenenceDto: v.maintenenceDto,
        };
        this.data.push(facture);
        console.log(this.data);
      });
    });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load facture finiched');
  }

  /**
   *
   */
  chercherFacture() {
    let data: FactureModel[] = [];
    if (this.FactureFormGroup.valid) {
      let searchKeyWord =
        this.FactureFormGroup.get('rechercheReference')?.value;
      this.factureService
        .rechercheuFactureByRefrence(searchKeyWord)
        .subscribe((res: FactureModel[]) => {
          res.forEach((v) => {
            let facture: FactureModel = {
              id: v.id,
              reference: v.reference,
              date: v.date,
              montant: v.montant,
              maintenenceDto: v.maintenenceDto,
            };
            data.push(facture);
          });
          this.data = data;
        });
    } else {
      this.data = [];
      this.factureService
        .getAllFacture()
        .subscribe((facture: FactureModel[]) => {
          facture.forEach((v) => {
            let facture: FactureModel = {
              id: v.id,
              reference: v.reference,
              date: v.date,
              montant: v.montant,
              maintenenceDto: v.maintenenceDto,
            };
            this.data.push(facture);
          });
        });
    }
  }

  /**
   *
   * @param item
   */
  imprimerFacture(item: FactureModel) {
    this.factureService.imprimerFacture(item.id).subscribe((res) => {
      this.downloadPdfFile(res, 'application/pdf');
    });
  }

  /**
   *
   * @param data
   * @param type
   */
  downloadPdfFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    const filename = 'facture.pdf';
    this.fileSaverService.save(blob, filename);
  }

  /**
   *
   * @param facture
   */
  modifierFacture(facture: FactureModel) {
    let id = facture?.id;
    this.router.navigateByUrl('updatefacture/' + id);
  }

  /**
   * navigate to add facture component
   */
  ajouterFacture() {
    this.router.navigateByUrl('addfacture');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }
}
