import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private testService:TestService) { }

  token=this.testService.getAuthToken();

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    req = req.clone({headers})

    return next.handle(req);
  }
}
