import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosticService } from './diagnostic.service';
import { DiagnosticModel } from './model/diagnostic.model';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {

  title = 'hello';
  data: DiagnosticModel[] = [];
  diagnosticFormGroup: FormGroup = new FormGroup({});
  /**
   * inject DiagnosticService dependency
   * @param diagnosticService
   */
  constructor(
    private diagnosticService: DiagnosticService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  /**
   * angular life cycle hook (ngOnit, afterviewInit, onDestroy ..)
   */
  ngOnInit(): void {
    this.diagnosticFormGroup = this.formBuilder.group({
      recherchereference: ['', Validators.required],
    });
    this.getAllDiagnostic(); // if this service takes too long to respond
    this.displayLog();
  }

  getAllDiagnostic() {
    /* Observabales  */
    this.diagnosticService
      .getAllDiagnostic()
      .subscribe((diagnostic: DiagnosticModel[]) => {
        console.log(diagnostic);
        this.data = diagnostic;
      });
    //await new Promise((resolve) => setTimeout(resolve, 4000)); // 3 sec
    console.log('load Diagnostic finiched');
  }
  

  /**
   .*
   * @param diagnostic
   */
   deleteDiagnostic(diagnostic: DiagnosticModel) {
    let id = diagnostic?.id;
    if (id) {
      this.diagnosticService.deleteDiagnostic(id).subscribe(function (res) {
          alert('La suppression est bien fait.');
          window.location.reload();
        });
    }
  }

  /**
   * 
   */
  chercherDiagnostic() {
    let data: DiagnosticModel[] = [];
    if (this.diagnosticFormGroup.valid) {
      let searchKeyWord = this.diagnosticFormGroup.get('recherchereference')?.value;
      this.diagnosticService
        .rechercheDiagnosticByReference(searchKeyWord)
        .subscribe((res) => {
          console.log(res);
          data.push(res);
          this.data = data;
        });
    } else {
      this.diagnosticService
        .getAllDiagnostic()
        .subscribe((diagnostic: DiagnosticModel[]) => {
          console.log(diagnostic);
          this.data = diagnostic;
        });
    }
  }
  /**
   *
   * @param diagnostic
   */
  updateDiagnostic(diagnostic: DiagnosticModel) {
    let id = diagnostic?.id;
    this.router.navigateByUrl('updatediagnostic/' + id);
  }

  /**
   * navigate to add diagnostic component
   */
  ajouterDiagnostic() {
    this.router.navigateByUrl('adddiagnostic');
  }
  menuUtilisateur() {
    this.router.navigateByUrl('menu');
  }
  displayLog() {
    console.log('test component');
  }


}
