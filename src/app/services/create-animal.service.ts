import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  saveAnimal(animal): Observable<any> {
    return this.http.post(`${this.URL}/api/saveAnimal`, animal)
      .pipe(map((data: any) => data.json()));
  }

  getAnimal(): Observable<any> {
    return this.http.get<any>(`${this.URL}/api/getAnimal`)
      .pipe(map((data: any) => data));
  }
}
