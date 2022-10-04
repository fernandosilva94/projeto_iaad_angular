import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Programador } from 'app/components/programador.model';
import {ApiserviceService} from '../apiservice.service';

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

  constructor(private service:ApiserviceService) { }

  ngOnInit() {
  }

  userForm = new FormGroup({
    'id_startup': new FormControl('',Validators.required),
    'id_linguagem': new FormControl('',Validators.required),
    'genero': new FormControl('',Validators.required),
    'nome_programador': new FormControl('',Validators.required),
    'data_nascimento': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required)
  });

  userSubmit(){

    this.service.createData(this.userForm.value).subscribe((res)=>{
      console.log(res,'res==>')
    })
    /*if(this.userForm.valid)
    {
      console.log(this.userForm.value);
    }
    else
    {
      this.errormsg = "all field is required"; 
    }*/
  }


  

}
