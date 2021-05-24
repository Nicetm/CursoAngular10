import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ERROR_CONST } from '@data/constants';
import { API_ROUTES, INTERNAL_ROUTES } from '@data/constants/routes';
import { IApiUserAuthenticated } from '@data/interfaces';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: BehaviorSubject<IApiUserAuthenticated>;
  public nameUserLS = 'currentUser';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.currentUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.nameUserLS))
    );
  }

  get getUser(): IApiUserAuthenticated {
    return this.currentUser.value;
  }

  login(
    data: {
      email: string;
      password: string;
    }
  ): Observable <{
      error: boolean;
      msg: string;
      data: any
  }> {
    const response = {error: true, msg: ERROR_CONST.LOGIN.ERROR, data: null};
    return this.http.post<{error: boolean, msg: string, data: any}>(API_ROUTES.AUTH.LOGIN, data)
      .pipe(
        map(r => {
          response.msg = r.msg;
          response.error = r.error;
          response.data = r.data;
          this.setUserToLocalStorage(r.data);
          this.currentUser.next(r.data);
          if (!response.error) {
            this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER_LIST);
          }
          return response;
        }),
        catchError( e => {
          return of(response)
        })
      );
  }

  logout() {
    localStorage.removeItem(this.nameUserLS);
    this.currentUser.next(null);
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
  }

  private setUserToLocalStorage(user: IApiUserAuthenticated) {
    localStorage.setItem(this.nameUserLS, JSON.stringify(user));
  }
}
