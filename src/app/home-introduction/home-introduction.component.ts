import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {SportsService} from "../service/sports.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {DisplayComponent} from "../display/display.component";
import {SportType} from "./home-introduction.type";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@Component({
  selector: 'app-home-introduction',
  templateUrl: './home-introduction.component.html',
  styleUrl: './home-introduction.component.css',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule, NgOptimizedImage, ReactiveFormsModule, NgForOf, DisplayComponent, MatIcon, MatButton, MatAnchor, MatDatepickerModule, MatIconModule, MatNativeDateModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeIntroductionComponent {
  currentPage: number = 0;
  itemsPerPage: number = 3;
  sportList: SportType[] = [];
  sports = new FormControl('');

  constructor(private sportsService: SportsService) {
  }

  ngOnInit(): void {
    this.sportsService.getSports().subscribe({
      next: (data) => {
        console.log('Sports before:', data); // For debugging
        this.sportList = data;
        console.log('Sports after:', this.sportList); // For debugging
      },
      error: (err) => {
        console.error('Error fetching sports data', err); // For debugging
      },
    });
  }

  get paginatedSports() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.sportList.slice(start, end);
  }


  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.sportList.length) {
      this.currentPage++;
      this.updateTransform();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateTransform();
    }
  }

  updateTransform() {
    const container = document.querySelector('.display-container') as HTMLElement;
    const itemWidth = container.querySelector('app-display')?.clientWidth || 0;
    const offset = (this.currentPage * itemWidth) - (container.clientWidth / 2) + (itemWidth / 2);
    // const offset = this.currentPage * itemWidth;
    container.style.transform = `translateX(-${offset}px)`;
  }
}
