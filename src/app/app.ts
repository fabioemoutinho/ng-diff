import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    const registry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    registry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('github.svg'));
  }

  copyShareUrl() {
    navigator.clipboard.writeText(window.location.href);
  }
}
