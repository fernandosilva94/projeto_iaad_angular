import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Programador } from 'app/components/programador.model';
import { catchError, Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  baseUrl = 'http://localhost:3001/programador';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(programador: Programador): Observable <Programador> {
    return this.http.post <Programador> (this.baseUrl, programador).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable < Programador[] > {
    return this.http.get < Programador[] > (this.baseUrl);
  }

  readById(id_programador: string): Observable < Programador > {
    const url = `${this.baseUrl}/${id_programador}`
    return this.http.get < Programador > (url);
  }

  update(programador: Programador): Observable < Programador > {
    const url = `${this.baseUrl}/${programador.id_programador}`
    return this.http.put < Programador > (url, programador);
  }

  delete(id_programador: any): Observable < Programador > {
    const url = `${this.baseUrl}/${id_programador}`
    return this.http.delete < Programador > (url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY
  }
}
