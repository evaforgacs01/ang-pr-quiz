import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  @Input() id: number = 0;
  quizList$: BehaviorSubject<Quiz[]> = this.quizService.quizList$;

  sortedOrder = 'ASC';
  sortedColumn = 'id';
  firstSorting = true;
  sortedCount = 0;
  phrase: string = '';
  column: string = '';
  direction: boolean = false;
  columnKey: string = '';
  filterKey: string = 'name';

  quizzes$: Observable<Quiz[]> = this.quizService.getAll();
  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getAll();
  }

  onRemove(quiz: Quiz): void {
    this.quizService
      .remove(quiz)
      .subscribe(() => alert('Biztosan törli a felhaszálót?'));
  }
  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onColumnSelect(columnName: string): void {
    if (this.firstSorting) {
      this.sortedOrder = 'ASC';
      this.firstSorting = false;
    } else
      this.sortedOrder == 'ASC'
        ? (this.sortedOrder = 'DESC')
        : (this.sortedOrder = 'ASC');
    this.sortedColumn = columnName;
    this.direction = !this.direction;
  }
}
