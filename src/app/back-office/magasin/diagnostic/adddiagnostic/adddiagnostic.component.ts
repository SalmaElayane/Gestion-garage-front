import { DiagnosticService } from './../diagnostic.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosticModel } from '../model/diagnostic.model';

@Component({
  selector: 'app-adddiagnostic',
  templateUrl: './adddiagnostic.component.html',
  styleUrls: ['./adddiagnostic.component.css']
})
export class AdddiagnosticComponent implements OnInit {

  diagnosticFormGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private diagnosticService: DiagnosticService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.diagnosticFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      libelle: ['', Validators.required],
      prix: ['', Validators.required],
      duree: ['', Validators.required],
    });
  }

  /**
   *
   */
  ajouterDiagnostic() {
    if (this.diagnosticFormGroup.valid) {
      let diagnostic: DiagnosticModel = {
        reference: this.diagnosticFormGroup.get('reference')?.value,
        libelle: this.diagnosticFormGroup.get('libelle')?.value,
        prix: this.diagnosticFormGroup.get('prix')?.value,
        duree: this.diagnosticFormGroup.get('duree')?.value,
      };
      console.log(diagnostic);
      this.diagnosticService.ajouterDiagnostic(diagnostic).subscribe({
        next: (v) => {
          this.router.navigateByUrl('diagnostic');
          alert(
            'Bonjour ! Votre diagnostic bien ajouter'
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau d’ajout  vérifier les données de cette Diagnostic!Les champs doivent être remplis. ');
    }
  }
  /**quitter */
  quitteDiagnostic() {
    this.router.navigateByUrl('diagnostic');
  }
}
