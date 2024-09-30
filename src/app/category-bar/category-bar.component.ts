import {Component} from '@angular/core';
import {SportsService} from '../service/sports.service';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent {
  sports: { sportId: number, sportName: string, sportUrl: string }[] = [];

  constructor(private sportsService: SportsService) {}

  ngOnInit(): void {
    this.sportsService.getSports().subscribe({
      next: (data) => {
        this.sports = data;
        console.log('Sports data:', this.sports); // For debugging
      },
      error: (err) => {
        console.error('Error fetching sports data', err); // For debugging
      },
    });
  }

}
