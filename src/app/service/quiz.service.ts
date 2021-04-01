import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Quiz } from '../model/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  endpoint: string = 'http://localhost:3000/quizzes';
  quizList$: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>([]);
  constructor(private http: HttpClient) {}

  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.endpoint}`);
  }

  /**
   * Get a specified user from the database by id.
   * @param id {number} user id.
   * @returns an observable with a user object.
   */
  get(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.endpoint}/${id}`);
  }

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */
  remove(quiz: Quiz): Observable<Quiz> {
    return this.http.delete<Quiz>(`${this.endpoint}/${quiz.id}`);
  }

  /**
   * Create a user in the database.
   * The method is: this.http.post
   */
  create(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.endpoint, quiz);
  }

  /**
   * Update a user in the database.
   * The method is: this.http.patch
   */
  update(quiz: Quiz): Observable<Quiz> {
    return this.http.patch<Quiz>(`${this.endpoint}/${quiz.id}`, quiz);
  }
}
