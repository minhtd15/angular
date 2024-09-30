import {Component, Input} from '@angular/core';
import {SportType} from "../home-introduction/home-introduction.type";

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  @Input() sport!: SportType;
  ngOnInit() {
    console.log('Sport received in DisplayComponent:', this.sport);
  }
}
