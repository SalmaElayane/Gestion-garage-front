import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TacheModel } from './model/tache.model';
import { TacheService } from './tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css'],
})
export class TacheComponent implements OnInit {
  title = 'hello';
  data: TacheModel[] = [];
  tacheFormGroup: FormGroup = new FormGroup({});

  /**
   * inject tacheService dependency
   * @param tacheService
   */
  constructor(
    private tacheService: TacheService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.tacheFormGroup = this.formBuilder.group({
      recherchecin: ['', Validators.required],
    });
    this.getAllTache(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllTache() {
    /* Observabales  */
    this.tacheService.getAllTache().subscribe((tache: TacheModel[]) => {
      console.log(tache);
      this.data = tache;
    });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load tache finiched');
  }

  /**
   .*
   * @param tache
   */
  deleteTache(tache: TacheModel) {
    let id = tache?.id;
    if (id) {
      this.tacheService.deleteTache(id).subscribe((res) => {
        alert('La suppression est bien fait.');
        window.location.reload();
      });
    }
  }

  /**
   *
   * @param tache
   */
  chercherEmploye() {
    let data: TacheModel[] = [];
    if (this.tacheFormGroup.valid) {
      let searchKeyWord = this.tacheFormGroup.get('recherchecin')?.value;
      this.tacheService.rechercheTacheByReference(searchKeyWord).subscribe((res) => {
        data = res;
        this.data = data;
      });
    } else {
      this.tacheService.getAllTache().subscribe((tache: TacheModel[]) => {
        this.data = tache;
      });
    }
  }

  /**
   *
   * @param tache
   */
  updateTache(tache: TacheModel) {
    let id = tache?.id;
    this.router.navigateByUrl('updateTache/' + id);
  }

  /**
   * navigate to add Employe component
   */
  ajouterTache() {
    this.router.navigateByUrl('addTache');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }
}
