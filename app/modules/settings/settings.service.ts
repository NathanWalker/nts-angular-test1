import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Injectable()
export class SettingsService {

    public SettingsUrl = "http://www.talabino.com/merchantapp/api/getSettings";

    constructor(private http: Http) {}

    getSettings(device_id) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let params: URLSearchParams = new URLSearchParams();
        params.set('device_id', "5489bf11ce64ac9");

        console.log(params);

        return this.http.get(this.SettingsUrl,
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