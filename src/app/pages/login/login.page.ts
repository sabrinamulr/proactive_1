import { Component } from '@angular/core';
import { ClientApiServiceService } from 'src/app/backend/client-api.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class LoginPage {
  email = '';
  passwort = '';

  constructor(private api: ClientApiServiceService, private router: Router) {}

  login() {
    this.api.login(this.email, this.passwort).subscribe({
      next: (res) => {
        console.log('Login Ergebnis:', res);
        if (res.length > 0) {

          console.log('Login erfolgreich!');
          this.router.navigate(['/tabs/tab1']);
        } else {

          console.error('Login fehlgeschlagen: Falsche Daten oder inaktiv.');
          alert('Login fehlgeschlagen: Benutzername oder Passwort falsch.');
        }
      },
      error: (err) => {
        console.error('Fehler beim Login:', err);
        alert('Fehler beim Login: ' + err.message);
      }
    });
  }
}
