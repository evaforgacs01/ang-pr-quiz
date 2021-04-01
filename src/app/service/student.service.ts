import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  endpoint: string = 'http://localhost:3000/students';

  studentList$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

  constructor(private http: HttpClient) {}

  /**
   * Get all users from the database.
   * @returns on observable with all users.
   */
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.endpoint}`);
  }

  /**
   * Get a specified user from the database by id.
   * @param id {number} user id.
   * @returns an observable with a user object.
   */
  get(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.endpoint}/${id}`);
  }

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */
  remove(student: Student): Observable<Student> {
    return this.http.delete<Student>(`${this.endpoint}/${student.id}`);
  }

  /**
   * Create a user in the database.
   * The method is: this.http.post
   */
  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.endpoint, student);
  }

  /**
   * Update a user in the database.
   * The method is: this.http.patch
   */
  update(student: Student): Observable<Student> {
    return this.http.patch<Student>(`${this.endpoint}/${student.id}`, student);
  }
}
