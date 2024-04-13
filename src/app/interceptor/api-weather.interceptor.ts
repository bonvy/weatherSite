import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

export type HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandler) => Observable<HttpEvent<any>>;

export const apiWeatherInterceptor: HttpInterceptorFn = (req, next) => {
  const  API_KEY='R27JXHDYUSDLTXP4FG5BEFT6E';

  if(isWeatherAPI(req.headers)){
    const params=req.params
      .append('key', API_KEY)
      .append('contentType', 'json');
    const headers = req.headers.delete('Wheatherapi');
    const modifiedReq = req.clone({ headers,  params});

    return next.handle(modifiedReq);
  }
  return next.handle(req);
};
@Injectable()
export class ApiWeatherInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return apiWeatherInterceptor(req, next);
  }
}

export function isWeatherAPI(headers: HttpHeaders){

  if( headers.get('Wheatherapi')!=null) {
    return true;
  }else{
    return false
  }

}
