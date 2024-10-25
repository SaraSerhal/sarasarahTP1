import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Output() selectedColor = new EventEmitter<string>();

  public changeColor(colorName: string) {
    this.selectedColor.emit(colorName);
  }

}
