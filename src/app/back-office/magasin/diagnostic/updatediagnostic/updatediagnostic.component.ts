import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticService } from '../diagnostic.service';
import { DiagnosticModel } from '../model/diagnostic.model';

@Component({
  selector: 'app-updatediagnostic',
  templateUrl: './updatediagnostic.component.html',
  styleUrls: ['./updatediagnostic.component.css']
})
export class UpdatediagnosticComponent implements OnInit {
  diagnosticFormGroup: FormGroup = new FormGroup({});
  id: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private diagnosticService: DiagnosticService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.diagnosticFormGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      libelle: ['', Validators.required],
      prix: ['', Validators.required],
      duree: ['', Validators.required],
    });
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = +id;
      this.diagnosticService
        .getDiagnosticById(this.id)
        .subscribe((diagnostic: DiagnosticModel) => {
          console.log(diagnostic);

          if (diagnostic.id) {
            this.diagnosticFormGroup.get('reference')?.setValue(diagnostic.reference);
            this.diagnosticFormGroup.get('libelle')?.setValue(diagnostic.libelle);
            this.diagnosticFormGroup.get('prix')?.setValue(diagnostic.prix);
            this.diagnosticFormGroup.get('duree')?.setValue(diagnostic.duree);

          } else {
            alert('aucun diagnostic ne containe ce Id');
            this.router.navigateByUrl('diagnostic');
          }
        });
    }
  }

  /**
   *MODIFIER
   */
  updateDiagnostic() {
    if (this.diagnosticFormGroup.valid) {
      let diagnostic: DiagnosticModel = {
        reference: this.diagnosticFormGroup.get('reference')?.value,
        libelle: this.diagnosticFormGroup.get('libelle')?.value,
        prix: this.diagnosticFormGroup.get('prix')?.value,
        duree: this.diagnosticFormGroup.get('duree')?.value,

      };
      console.log(diagnostic);
      this.diagnosticService.updateDiagnostic(diagnostic,this.id).subscribe({
        next: (v) => {
          this.router.navigateByUrl('diagnostic');
          alert(
            'Bonjour ! Votre diagnostic bien modifier'
          );
        },
        error: (e) => {alert("Référence déjà existe !! vous devez utiliser un autre…")},
        complete: () => console.info('complete'),
      });
    } else {
      console.log('could not insert');
      alert('Bonjour ! Erreur au niveau d’ajout vérifier les données de votre cette diagnostic!Les champs doivent être remplis. ');
    }
  }
  /**quitter */
  quitteDiagnostic(){
    this.router.navigateByUrl('diagnostic');
  }

}
