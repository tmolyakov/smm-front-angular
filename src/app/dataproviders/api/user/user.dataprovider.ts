import { UserInterface } from './user.interface';
import { BaseApiDataProvider } from "../base-api-dataprovider";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

const entryPoint = 'user/get/';

@Injectable({
  providedIn: 'root'
})
export class UserDataProvider extends BaseApiDataProvider<UserInterface> {

  constructor(http: HttpClient) {
    super(http, entryPoint);
  }
}
