// projects/shared-ui/src/lib/components/button/button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="'btn btn-' + variant"
      [disabled]="disabled"
      (click)="clicked.emit()">
      {{ label }}
    </button>
  `,
  styles: [`
    .btn { padding: 8px 16px; border-radius: 4px; cursor: pointer; border: none; }
    .btn-primary { background: #007bff; color: white; }
    .btn-danger  { background: #dc3545; color: white; }
    .btn-success { background: #28a745; color: white; }
  `]
})
export class ButtonComponent {
  @Input() label: string = 'Click me';
  @Input() variant: 'primary' | 'danger' | 'success' = 'primary';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();
}