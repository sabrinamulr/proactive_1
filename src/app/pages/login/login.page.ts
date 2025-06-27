import { Component } from '@angular/core';
import { ClientApiServiceService } from './backend/client-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private api: ClientApiServiceService, private router: Router) {}

  login() {
  this.api.login(this.email, this.password).subscribe({
    next: (res) => {
      console.log('Login erfolgreich:', res);
      this.router.navigateByUrl('/tab1');  // <-- hier geht's zur Tab-Übersicht
    },
    error: (err) => {
      console.error('Login fehlgeschlagen:', err);
      alert('Login fehlgeschlagen: ' + err.error?.error_description || 'Unbekannter Fehler');
    }
  });
}

}