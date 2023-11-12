import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from '@shared/pipes/remove-spaces.pipe';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  value = 'Hello World o no';

  constructor(private removeSpace: RemoveSpacesPipe) { }

  ngOnInit(): void {
    this.value = this.removeSpace.transform(this.value, '🍷');
  }
}
