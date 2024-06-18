/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAll } from '../fn/info-controller/get-all';
import { GetAll$Params } from '../fn/info-controller/get-all';
import { getHello } from '../fn/info-controller/get-hello';
import { GetHello$Params } from '../fn/info-controller/get-hello';
import { ComicsDTO } from '../models/ComicsDTO ';
import { GetPaginated$Params } from '../fn/info-controller/getPaginated';


/**
 * RESTful API para administrar times
 */
@Injectable({ providedIn: 'root' })
export class InfoControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getHello()` */
  static readonly GetHelloPath = '/info/hello';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHello()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHello$Response(params?: GetHello$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getHello(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHello$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHello(params?: GetHello$Params, context?: HttpContext): Observable<string> {
    return this.getHello$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getAll()` */
  static readonly GetAllPath = '/info/getAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params?: GetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ComicsDTO>>> {
    return getAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params?: GetAll$Params, context?: HttpContext): Observable<Array<ComicsDTO>> {
    return this.getAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ComicsDTO>>): Array<ComicsDTO> => r.body)
    );
  }

  getAllPaginated(page: number, size: number): Observable<Array<ComicsDTO>> {
    const url = `${this.rootUrl}/info/getAll?page=${page}&size=${size}`;

    return this.http.get<ComicsDTO[]>(url).pipe(
      map((response: ComicsDTO[]) => {
        return response;
      })
    );
  }

  


}
