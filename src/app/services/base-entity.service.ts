import {BaseEntityDataProvider} from "../dataproviders/base-entity.dataprovider";
import { Observable } from 'rxjs';
import { BaseEntity } from '../dataproviders/base-entity';

export abstract class BaseEntityService<T extends BaseEntity> {
  protected abstract provider: BaseEntityDataProvider<T>

  get(uuid: string): Observable<T> {
    return this.provider.get(uuid);
  }

  getList(limit: number, offset: number): Observable<T[]> {
    return this.provider.getList(limit, offset);
  }

  create(entity: T): Observable<T> {
    return this.provider.create(entity);
  }

  update(entity: T): Observable<T> {
    return this.provider.update(entity);
  }

  delete(uuid: string): number {
    return this.provider.delete(uuid);
  }
}
