import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from './../employe.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeModel } from '../model/employe.model';

@Component({
  selector: 'app-updateemploye',
  templateUrl: './updateemploye.component.html',
  styleUrls: ['./updateemploye.component.css'],
})
export class UpdateEmployeComponent implements OnInit {
  employeFormGroup: FormGroup = new FormGroup({});
  id: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private employeService: EmployeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      age: ['', Validators.required],
      role: ['', Validators.required],
      tele: ['', Validators.required],
      login: ['', Validators.required],
      mot_de_passe: ['', Validators.required],
    });
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.employeService
        .getEmployeById(this.id)
        .subscribe((employe: EmployeModel) => {
          console.log(employe);

          if (employe.id) {
            this.employeFormGroup.get('nom')?.setValue(employe.nom);
            this.employeFormGroup.get('prenom')?.setValue(employe.prenom);
            this.employeFormGroup.get('cin')?.setValue(employe.cin);
            this.employeFormGroup.get('age')?.setValue(employe.age);
            this.employeFormGroup.get('tele')?.setValue(employe.tele);
            this.employeFormGroup.get('role')?.setValue(employe.role);
            this.employeFormGroup.get('login')?.setValue(employe.login);
            this.employeFormGroup.get('mot_de_passe')?.setValue(employe.mot_de_passe);
          } else {
            alert('aucun employe ne containe ce Id');
            this.router.navigateByUrl('listeEmploye');
          }
        });
    }
  }

  /**
   *MODIFIER
   */
  updateEmploye() {
    if (this.employeFormGroup.valid) {
      let employe: EmployeModel = {
        nom: this.employeFormGroup.get('nom')?.value,
        prenom: this.employeFormGroup.get('prenom')?.value,
        cin: this.employeFormGroup.get('cin')?.value,
        age: this.employeFormGroup.get('age')?.value,
        role: this.employeFormGroup.get('role')?.value,
        tele: this.employeFormGroup.get('tele')?.value,
        login: this.employeFormGroup.get('login')?.value,
        mot_de_passe: this.employeFormGroup.get('mot_de_passe')?.value,
      };
      console.log(employe);
      this.employeService.updateEmploye(employe,this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('listeEmploye');
          alert(
            'Bonjour ! Votre modification  a été bien fait pour votre employé. Merci  '
          );
        },
        error: (e) => {alert("Cin déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau d’ajout vérifier les données de votre employé!Les champs doivent être remplis. ');
    }
  }
  /**quitter */
  quitteEmploye(){
    this.router.navigateByUrl('listeEmploye');
  }
}
