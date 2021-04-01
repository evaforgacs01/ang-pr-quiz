import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  endpoint: string = 'http://localhost:3000/questions';
  constructor() {}
}
