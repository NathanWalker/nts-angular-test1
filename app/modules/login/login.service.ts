import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

import {User} from "../shared/User";

@Injectable()
export class LoginService {

    public BaseUrl = "http://www.talabino.com/merchantapp/api/";

    constructor(private http: Http) {}

    login(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let params: URLSearchParams = new URLSearchParams();
        params.set('lang_id', '1');
        params.set('merchant_device_id', user.merchant_device_id);
        params.set('username', user.username);
        params.set('password', user.password);
        console.log(params);

        return this.http.get(this.BaseUrl + 'login',
            {search: params, headers}
        )
            .map(this.LoginSuccess)
            .catch(this.LoginError);
    }

    LoginSuccess(res: any) {
        let body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    }

    LoginError(error: Response) {
        return Observable.throw(error);
    }

    registerMobile(deviceId: string) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let params: URLSearchParams = new URLSearchParams();
        params.set('registrationId', deviceId);
        console.log(params);

        return this.http.get(this.BaseUrl + 'registerMobile',
            {search: params, headers}
        )
            .map(this.RegisterMobileSuccess)
            .catch(this.RegisterMobileError);
    }

    RegisterMobileSuccess(res: any) {
        let body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    }

    RegisterMobileError(error: Response) {
        return Observable.throw(error);
    }


}