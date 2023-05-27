import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeModel } from './model/employe.model';
import { Component, OnInit } from '@angular/core';
import { EmployeService } from './employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
})
export class EmployeComponent implements OnInit {
  title = 'hello';
  data: EmployeModel[] = [];
  employeFormGroup: FormGroup = new FormGroup({});

  /**
   * inject employeService dependency
   * @param employeService
   */
  constructor(
    private employeService: EmployeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.employeFormGroup = this.formBuilder.group({
      recherchecin: ['', Validators.required],
    });
    this.getAllEmploye(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllEmploye() {
    /* Observabales  */
    this.employeService
      .getAllEmploye()
      .subscribe((employe: EmployeModel[]) => {
        console.log(employe);
        this.data = employe;
      });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load employes finiched');
  }

  /**
   .*
   * @param employe
   */
  deleteEmploye(employe: EmployeModel) {
    let id = employe?.id;
    if (id) {
      this.employeService.deleteEmploye(id).subscribe((res) => {
        alert('La suppression est bien fait.');
        window.location.reload();
      });
    }
  }

  /**
   *
   * @param employe
   */
  chercherEmploye() {
    let data: EmployeModel[] = [];
    if (this.employeFormGroup.valid) {
      let searchKeyWord = this.employeFormGroup.get('recherchecin')?.value;
      this.employeService
        .rechercheEmployeByCin(searchKeyWord)
        .subscribe((res: EmployeModel[]) => {
          res.forEach((v) => {
            let employe: EmployeModel = {
              id: v.id,
              nom: v.nom,
              prenom: v.prenom,
              cin: v.cin,
              age: v.age,
              role: v.role,
              tele: v.tele,
              login: v.login,
              mot_de_passe: v.mot_de_passe,
            };
            data.push(employe);
          });
          this.data = data;
        });
    } else {
      this.employeService
        .getAllEmploye()
        .subscribe((employe: EmployeModel[]) => {
          console.log(employe);
          this.data = employe;
        });
    }
  }
  /**
   *
   * @param employe
   */
  updateEmploye(employe: EmployeModel) {
    let id = employe?.id;
    this.router.navigateByUrl('updateEmploye/' + id);
  }

  /**
   * navigate to add employe component
   */
  ajouterEmploye() {
    this.router.navigateByUrl('addEmploye');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }
}
