import { BaseEntity } from '../base-entity';
import { BaseEntityDataProvider } from '../base-entity.dataprovider';
import { catchError, Observable, tap, map } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class BaseApiDataProvider<T extends BaseEntity> implements BaseEntityDataProvider<T> {
  protected apiUrl: string = 'http://localhost:80/api/rest/';
  protected apiUri: string = '';
  protected apiUrn: string = '';

  private entity!: BaseEntity;

  httpOptions = {
    headers: new HttpHeaders({ 'X-AUTH-TOKEN': '23c2cb61fae4910667c68daa1394f6db' })
  };

  constructor(protected http: HttpClient, protected entryPoint: string) {
    this.apiUri = this.apiUrl + this.entryPoint;
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.apiUri, entity).pipe();
  }

  delete(uuid: string): number {
    return 0;
  }

  get(uuid: string): Observable<T> {
    console.log('get');
    return this.http.get<T>(this.apiUri + '4d47b571-6363-42d5-a483-2d6b2b9c4491', this.httpOptions).pipe(
      map((entity: T) => {
        this.entity = entity;
        return entity;
      })
    );
  }

  getList(limit: number, offset: number): Observable<T[]> {
    return this.http.get<T[]>(this.apiUri, { params: { offset: offset, limit: limit }}).pipe();
  }

  update(entity: T): Observable<T> {
    return this.http.put<T>(this.apiUri, entity).pipe();
  }

}
