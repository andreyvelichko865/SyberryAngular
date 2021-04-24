import { Group } from './student';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private heroesUrl = 'http://localhost:8000/api/groups';  // URL to web api
  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.heroesUrl)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateGroup (group: Group): Observable<any> {
    return this.http.put('http://localhost:8000/api/group', group, this.httpOptions);
  }
  /** POST: add a new hero to the server */
  addGroup (GroupNumber: string, DepartmentNumber: string, GroupYear: string ): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/group', {
      Group_Number:GroupNumber,
      Department_ID:DepartmentNumber,
      Year_Of_Create:GroupYear
    }, this.httpOptions)
  }

  deleteGroup (Group_ID): Observable<any> {
  
    return this.http.delete(`http://localhost:8000/api/group/${Group_ID}`, this.httpOptions)
  }
  constructor(
    private http: HttpClient) { }

}

// getHeroes(): Observable<Hero[]> {
//   const heroes = of(HEROES);
//   return heroes;
// }