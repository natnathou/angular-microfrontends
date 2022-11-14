import {Component} from "@angular/core";
import { AuthLibService } from "auth-lib";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent{
  user = this.service.user;
  constructor(private service: AuthLibService) { }

}
