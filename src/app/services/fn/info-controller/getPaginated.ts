/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { RequestBuilder } from '../../request-builder';
import { StrictHttpResponse } from '../../strict-http-response';
import { ComicsDTO } from '../../models/ComicsDTO ';


export interface GetPaginated$Params {
  page?: number;
  size?: number;
}

export function getPaginated(http: HttpClient, rootUrl: string, params?: GetPaginated$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ComicsDTO>>> {
  const rb = new RequestBuilder(rootUrl, '/info/getPaginated', 'get');
  if (params) {
    rb.query('page', params.page);
    rb.query('size', params.size);
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ComicsDTO>>;
    })
  );
}
