import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  list(
    page: number,
    filter: string,
    favourite: boolean
  ): Observable<Thought[]> {
    const itensPerPage = 6;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', itensPerPage);

    if (filter && filter.trim().length > 2) {
      params = params.set('q', filter);
    }
    if (favourite) {
      params = params.set('favourite', true);
    }

    return this.http.get<Thought[]>(this.API, { params });
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  update(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  updateFavoutire(thought: Thought): Observable<Thought> {
    thought.favourite = !thought.favourite;
    return this.update(thought);
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  findById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }
}
