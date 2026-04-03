import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Snapshot } from '../models/snapshot.model';

@Component({
  selector: 'app-version-meta-card',
  imports: [CommonModule],
  templateUrl: './version-meta-card.html',
  styleUrl: './version-meta-card.scss',
})
export class VersionMetaCardComponent {
  @Input() snapshot!: Snapshot;
  @Input() label = '';
}
