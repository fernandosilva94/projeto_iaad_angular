import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ProgramadorLinguagem } from './components/programador_linguagem';
import { catchError, Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  baseUrl = 'http://localhost:3001/programador_linguagem';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(programador_linguagem: ProgramadorLinguagem): Observable <ProgramadorLinguagem> {
    return this.http.post <ProgramadorLinguagem> (this.baseUrl, programador_linguagem).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable < ProgramadorLinguagem[] > {
    return this.http.get < ProgramadorLinguagem[] > (this.baseUrl);
  }

  readById(id_programador: string): Observable < ProgramadorLinguagem > {
    const url = `${this.baseUrl}/${id_programador}`
    return this.http.get < ProgramadorLinguagem > (url);
  }


  update(programador_linguagem: ProgramadorLinguagem): Observable < ProgramadorLinguagem > {
    const url = `${this.baseUrl}/${programador_linguagem.id_programador}`
    return this.http.put < ProgramadorLinguagem > (url, programador_linguagem);
  }

  delete(id_programador: any): Observable < ProgramadorLinguagem > {
    const url = `${this.baseUrl}/${id_programador}`
    return this.http.delete < ProgramadorLinguagem > (url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY
  }
}
