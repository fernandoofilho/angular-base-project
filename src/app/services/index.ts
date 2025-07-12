import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService<TCreateDto, TUpdateDto, TOutputDto> {
  constructor(protected http: HttpClient, protected apiUrl: string) {}

  getAll(): Observable<TOutputDto[]> {
    return this.http.get<TOutputDto[]>(this.apiUrl);
  }

  getById(id: string | number): Observable<TOutputDto> {
    return this.http.get<TOutputDto>(`${this.apiUrl}/${id}`);
  }

  create(item: TCreateDto): Observable<TOutputDto> {
    return this.http.post<TOutputDto>(this.apiUrl, item);
  }

  update(id: string | number, item: TUpdateDto): Observable<TOutputDto> {
    return this.http.put<TOutputDto>(`${this.apiUrl}/${id}`, item);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
