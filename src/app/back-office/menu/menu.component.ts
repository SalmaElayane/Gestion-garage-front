import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route : Router) {

   }

  ngOnInit(): void {}
  go_to_utilisateur(){ this.route.navigate(['/backoffice/utilisateur']);  }
  go_to_employe(){ this.route.navigate(['/backoffice/employe']);  }
  go_to_stock(){ this.route.navigate(['/backoffice/magasin']);  }
  go_to_rendezvous(){ this.route.navigate(['/backoffice/rendezvous']);  }
  go_to_tache(){ this.route.navigate(['/backoffice/tache']);  }
  go_to_magasin(){ this.route.navigate(['/backoffice/magasin']);  }
  go_to_notification(){ this.route.navigate(['/backoffice/notification']);  }
  go_to_facture(){ this.route.navigate(['/backoffice/facture']);  }
  

}
