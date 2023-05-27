import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeModel } from '../model/employe.model';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css'],
})
export class AddEmployeComponent implements OnInit {
  employeFormGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private EmployeService: EmployeService,
    private router: Router
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
  }

  /**
   *
   */
  ajouterEmploye() {
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
      this.EmployeService.ajouterEmploye(employe).subscribe({
        next: (v) => {
          this.router.navigateByUrl('listeEmploye');
          alert(
            'Bonjour ! l’employé a été bien ajouter.Merci '
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
  quitteEmploye() {
    this.router.navigateByUrl('listeEmploye');
  }
}
