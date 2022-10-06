import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Startup } from './components/startup.model';
import { catchError, Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  baseUrl = 'http://localhost:3001/startup';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(startup: Startup): Observable <Startup> {
    return this.http.post <Startup> (this.baseUrl, startup).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable < Startup[] > {
    return this.http.get < Startup[] > (this.baseUrl);
  }

  readById(id_startup: string): Observable < Startup > {
    const url = `${this.baseUrl}/${id_startup}`
    return this.http.get < Startup > (url);
  }

  update(startup: Startup): Observable < Startup > {
    const url = `${this.baseUrl}/${startup.id_startup}`
    return this.http.put < Startup > (url, startup);
  }

  delete(id_startup: any): Observable < Startup > {
    const url = `${this.baseUrl}/${id_startup}`
    return this.http.delete < Startup > (url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY
  }
}
