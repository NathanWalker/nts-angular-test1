import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Injectable()
export class OrdersService {

    public OrdersUrl = "http://www.talabino.com/merchantapp/api/";

    constructor(private http: Http) {}

    /**
     * Get ALL Orders
     * @param localUser
     * @returns {AnimationPromise|Promise<U>|Promise<ErrorObservable>}
     */
    getAllOrders(localUser) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let params: URLSearchParams = new URLSearchParams();
        params.set('mtid', localUser.mtid);
        params.set('token', localUser.token);
        params.set('user_type', localUser.user_type);

        return this.http.get(this.OrdersUrl + 'GetAllOrders',
            {search: params, headers}
        )
            .map(this.allOrdersData)
            .catch(this.allOrdersErrors);
    }

    allOrdersData(res: any) {
        let body = res.json().toString().slice(1, -1);
        return body;
    }

    allOrdersErrors(error: Response) {
        return Observable.throw(error);
    }

    /**
     * Get Pending Orders
     * @param localUser
     * @returns {AnimationPromise|Promise<U>|Promise<ErrorObservable>}
     */
    getPendingOrders(localUser) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let params: URLSearchParams = new URLSearchParams();
        params.set('mtid', localUser.mtid);
        params.set('token', localUser.token);
        params.set('user_type', localUser.user_type);

        return this.http.get(this.OrdersUrl + 'GetPendingOrders',
            {search: params, headers}
        )
            .map(this.pendingOrdersData)
            .catch(this.pendingOrdersErrors);
    }

    pendingOrdersData(res: any) {

        let body = res.json().toString().slice(1, -1);
        return body;
    }

    pendingOrdersErrors(error: Response) {
        return Observable.throw(error);
    }

    /**
     * Get Today Orders
     * @param localUser
     * @returns {AnimationPromise|Promise<U>|Promise<ErrorObservable>}
     */
    getTodaysOrder(localUser) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let params: URLSearchParams = new URLSearchParams();
        params.set('mtid', localUser.mtid);
        params.set('token', localUser.token);
        params.set('user_type', localUser.user_type);

        return this.http.get(this.OrdersUrl + 'GetTodaysOrder',
            {search: params, headers}
        )
            .map(this.todaysOrderData)
            .catch(this.todaysOrderErrors);
    }

    todaysOrderData(res: any) {
        let body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    }

    todaysOrderErrors(error: Response) {
        console.log(`todaysOrderErrors`);
        console.log(error);
        return Observable.throw(error);
    }
}
