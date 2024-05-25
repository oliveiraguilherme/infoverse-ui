/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetHello$Params {
}

export function getHello(http: HttpClient, rootUrl: string, params?: GetHello$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, getHello.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      if(r.headers.get('content-type')?.startsWith('application/json')){
        return r as StrictHttpResponse<string>;
      }else{
        return new HttpResponse({
          body:JSON.stringify({message: r.body}),
          headers: r.headers,
          status: r.status,
          statusText: r.statusText,
          url: r.url || undefined
        }) as StrictHttpResponse<string>;
      }
    })
  );
}

getHello.PATH = '/info/hello';
