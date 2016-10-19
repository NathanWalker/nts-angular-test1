import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

import {Profile} from "../shared/Profile";

@Injectable()
export class ProfileService {

    public ProfileUrl = "http://www.talabino.com/merchantapp/api/saveProfile";

    constructor(private http: Http) {
    }

    updateProfile(profile: Profile) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let params: URLSearchParams = new URLSearchParams();
        params.set('password', profile.password);
        params.set('cpassword', profile.cpassword);
        params.set('mtid', profile.mtid);
        params.set('token', profile.token);
        params.set('user_type', profile.user_type);

        return this.http.get(this.ProfileUrl,
            {search: params}
        )
            .map(this.extractData)
            .catch(this.handleErrors);
    }

    extractData(res: any) {
        console.log(res);
        let body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    }

    handleErrors(error: Response) {
        return Observable.throw(error);
    }
}
