import { BaseEntity } from '../base-entity';
import { BaseEntityDataProvider } from '../base-entity.dataprovider';
import { catchError, Observable, tap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class BaseApiDataProvider<T extends BaseEntity> implements BaseEntityDataProvider<T> {
  protected apiUrl: string = 'http://localhost/api/';
  protected apiUri: string = '';
  protected apiUrn: string = '';

  private entity!: BaseEntity;

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
    return this.http.get<T>(this.apiUri).pipe(
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
