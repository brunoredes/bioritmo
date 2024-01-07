import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'smartfit-fe-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'smartfit-fe';
}
