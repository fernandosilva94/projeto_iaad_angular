import { Component, OnInit } from '@angular/core';
import { Programador } from 'app/components/programador.model';

@Component({
  selector: 'app-user-profile',   
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  programador: Programador = {
    nome_programador: '',
    genero: '',
    data_nascimento: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
