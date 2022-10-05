import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { LinguagemProgramacao } from './components/linguagem_programacao.model';
import { catchError, Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  baseUrl = 'http://localhost:3001/LinguagemProgramacao';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(linguagem_programacao: LinguagemProgramacao): Observable <LinguagemProgramacao> {
    return this.http.post <LinguagemProgramacao> (this.baseUrl, linguagem_programacao).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable < LinguagemProgramacao[] > {
    return this.http.get < LinguagemProgramacao[] > (this.baseUrl);
  }

  readById(id_linguagem: string): Observable < LinguagemProgramacao > {
    const url = `${this.baseUrl}/${id_linguagem}`
    return this.http.get < LinguagemProgramacao > (url);
  }

  update(linguagem_programacao: LinguagemProgramacao): Observable < LinguagemProgramacao > {
    const url = `${this.baseUrl}/${linguagem_programacao.id_linguagem}`
    return this.http.put < LinguagemProgramacao > (url, linguagem_programacao);
  }

  delete(id_linguagem: any): Observable < LinguagemProgramacao > {
    const url = `${this.baseUrl}/${id_linguagem}`
    return this.http.delete < LinguagemProgramacao > (url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY
  }
}
