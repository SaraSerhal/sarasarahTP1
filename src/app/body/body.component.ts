import { Component } from '@angular/core';
import {SquareComponent} from "./square/square.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    SquareComponent,
    NgClass
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  public backgroundColor: string = "";

  public onColorSelection(event : string) {
    this.backgroundColor = event;
  }

}
