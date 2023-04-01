import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptorInterceptor implements HttpInterceptor {

  private reqCount = 0;
  constructor(public loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.isLoading = true;
    this.reqCount++;
    return next.handle(request).pipe(
      finalize(
        /*csak a backendre kimenő, és onnan visszaérkező választ érzékeli, ezért ha visszakaptuk az egész csomagot
        nem várja meg, hogy a front-enden is betöltsön minden*/
        () => {
          this.reqCount--;
          if (this.reqCount == 0) {
            this.loaderService.isLoading = false;
          }
        }
      )
    );
  }
}
