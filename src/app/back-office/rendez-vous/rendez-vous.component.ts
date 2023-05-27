import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RendezVousModel } from './model/rendezVous.model';
import { RendezVousService } from './rendez-vous.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css'],
})
export class RendezVousComponent implements OnInit {
  faTimes = faTimes;
  title = 'hello';
  data: RendezVousModel[] = [];
  rendezVousFormGroup: FormGroup = new FormGroup({});
  statut = 'En attendant';

  /**
   * inject rendezVousService dependency
   * @param rendezVousService
   */
  constructor(
    private rendezVousService: RendezVousService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.rendezVousFormGroup = this.formBuilder.group({
      recherchereference: ['', Validators.required],
      statutFilter: ['En attendant'],
    });
    this.getAllRendezVous(this.statut); // if this service takes too long to respond
    this.displayLog();
  }

  getAllRendezVous(statut: string) {
    /* Observabales  */
    this.rendezVousService
      .getAllRendezVous(statut)
      .subscribe((rendezVous: RendezVousModel[]) => {
        console.log(rendezVous);
        rendezVous.forEach((v) => {
          let rendezVous: RendezVousModel = {
            id: v.id,
            reference: v.reference,
            utilisateurDto: v.utilisateurDto,
            dateRendezVous: v.dateRendezVous,
            type: v.type,
            description: v.description,
            statut: v.type,
          };
          this.data.push(rendezVous);
        });
      });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load rendez-Vous finiched');
  }

  /**
   *
   * @param rendezVous
   */
  chercherRendezVous() {
    let data: RendezVousModel[] = [];
    if (this.rendezVousFormGroup.valid) {
      let searchKeyWord =
        this.rendezVousFormGroup.get('recherchereference')?.value;
      this.rendezVousService
        .rechercheRendezVousByReference(searchKeyWord)
        .subscribe((res: RendezVousModel[]) => {
          res.forEach((v) => {
            let rendezVous: RendezVousModel = {
              id: v.id,
              reference: v.reference,
              utilisateurDto: v.utilisateurDto,
              dateRendezVous: v.dateRendezVous,
              type: v.type,
              description: v.description,
              statut: v.type,
            };
            data.push(rendezVous);
          });
          this.data = data;
        });
    } else {
      this.data = [];
      this.rendezVousService
        .getAllRendezVous(this.statut)
        .subscribe((rendezVous: RendezVousModel[]) => {
          rendezVous.forEach((v) => {
            let rendezVous: RendezVousModel = {
              id: v.id,
              reference: v.reference,
              utilisateurDto: v.utilisateurDto,
              dateRendezVous: v.dateRendezVous,
              type: v.type,
              description: v.description,
              statut: v.type,
            };
            this.data.push(rendezVous);
          });
        });
    }
  }
  /**
   *
   * @param rendezVous
   */
  updateRendezVous(rendezVous: RendezVousModel) {
    let id = rendezVous?.id;
    this.router.navigateByUrl('updateRendezVous/' + id);
  }
  /**
   .*
   * @param rendezVous
   */
  deleteRendezVous(rendezVous: RendezVousModel) {
    let id = rendezVous?.id;
    if (id) {
      this.rendezVousService.deleteRendezVous(id).subscribe(function (res) {
        alert('La suppression est bien fait.');
        window.location.reload();
      });
    }
  }

  validerRendezVous(item: any) {
    this.rendezVousService.validerRendezVous(item.id).subscribe(() => {
      this.data = [];
      this.getAllRendezVous(this.statut);
    });
  }
  
  refuserRendezVous(item: any)
  {
    this.rendezVousService.refuserRendezVous(item.id).subscribe(()=> {
      this.data = [];
      this.getAllRendezVous(this.statut);
    });
  }

  getAllForStatut() {
    this.data = [];
    this.getAllRendezVous(this.rendezVousFormGroup.get('statutFilter').value);
  }

  /**
   * navigate to add notification component
   */
  envoyerRendezVous() {
    this.router.navigateByUrl('addRendezVous');
  }

  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }

  displayLog() {
    console.log('test component');
  }
}
