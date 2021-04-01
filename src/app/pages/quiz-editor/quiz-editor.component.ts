import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';
// import { NgForm } from '@angular/forms';
// import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.scss'],
})
export class QuizEditorComponent implements OnInit {
  updating: boolean = false;
  quiz: Quiz = new Quiz();

  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap((params) => {
      if (Number(params.id) === 0) {
        return of(new Quiz());
      }

      return this.quizService.get(Number(params.id));
    })
  );

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onUpdate(quiz: Quiz): void {
    this.updating = true;
    if (quiz.id === 0) {
      this.quizService.create(quiz).subscribe(() => {
        // () => {
        //   this.toastr.success('Sikeres számla létrehozás!', 'Siker!', {
        //     timeOut: 3000,
        //   });
        //   this.updating = false;
        //   this.router.navigate(['bills']);
        // },
        // (error) =>
        //   this.toastr.error('Hiba a számla létrehozásakor!', 'Hiba!', {
        //     timeOut: 3000,
        //   })
        this.updating = false;
        this.router.navigate(['quiz']);
      });
      // } else {
      //   this.userService.update(bill).subscribe(
      //     () => {
      //       this.toastr.success('Sikeresen frissítetted a számlát!', 'Siker!', {
      //         timeOut: 3000,
      //       });
      //       this.updating = false;
      //       this.router.navigate(['bills']);
      //     },
      //     (error) =>
      //       this.toastr.error('Hiba történt a számla frissítésekor!', 'Hiba!', {
      //         timeOut: 3000,
      //       })
      // );
    }
  }

  onClickEdit(quiz: Quiz): void {
    if (quiz.title === '' || quiz.description === '' || quiz.questions === '') {
      alert('Fill the all data of user!');
    } else {
      this.quizService.update(quiz).subscribe();
    }
  }
}
function switchMap(
  arg0: (params: any) => Observable<Quiz>
): import('rxjs').OperatorFunction<import('@angular/router').Params, Quiz> {
  throw new Error('Function not implemented.');
}
