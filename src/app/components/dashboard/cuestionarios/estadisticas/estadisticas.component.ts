import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>estadisticas works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadisticasComponent { }
