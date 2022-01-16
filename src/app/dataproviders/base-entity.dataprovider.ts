import { Observable } from 'rxjs';

export interface BaseEntityDataProvider<T> {
  get(uuid: string): Observable<T>;
  getList(limit: number, offset: number): Observable<T[]>
  create(entity: T): Observable<T>
  update(entity: T): Observable<T>
  delete(uuid: string): number
}
