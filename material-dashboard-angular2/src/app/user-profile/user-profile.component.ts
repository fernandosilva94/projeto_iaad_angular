import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Programador } from 'app/components/programador.model';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute, Router} from '@angular/router'
import { Observable } from 'rxjs';

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

  constructor(private service:ApiserviceService, private router:ActivatedRoute,private route:Router) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;


  ngOnInit(): void{
      this.getparamid = this.router.snapshot.paramMap.get('id');
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
          console.log(res,'res==>');
          this.userForm.patchValue({
              id_startup:res.data[0].id_startup,
              nome_programador:res.data[0].nome_programador,
              genero:res.data[0].genero,
              data_nascimento:res.data[0].data_nascimento,
              email:res.data[0].email
          });
      });
  }

  userForm = new FormGroup({
    'id_startup': new FormControl('',Validators.required),
    'id_linguagem': new FormControl('',Validators.required),
    'genero': new FormControl('',Validators.required),
    'nome_programador': new FormControl('',Validators.required),
    'data_nascimento': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required)
  });

  //create new user
  userSubmit()
  {
    if(this.userForm.valid)
    {
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        //this.userForm.reset();
        this.successmsg = res.message;
      });
    }
    else
    {
      this.errormsg = "Preencha todos os campos"; 
    }
  }

  //update user
  userUpdate(){

      if(this.userForm.valid)
      {
        this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
            this.successmsg = res.message;
            //this.route.navigate(['/table-list']);
          });
      }
      else 
      {
        this.errormsg = "Preencha todos os campos"; 
      }
  }

  

}
