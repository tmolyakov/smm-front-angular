import { BaseEntity } from '../../base-entity';

export interface UserInterface extends BaseEntity {
  email: string,
  password: string
}
