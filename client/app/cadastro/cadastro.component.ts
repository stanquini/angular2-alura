import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../foto/foto.service';


@Component({
  moduleId: module.id,
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent();
  meuForm: FormGroup;
  service: FotoService;

  constructor(service: FotoService, fb: FormBuilder ) {
   
    this.service = service;

    this.meuForm = fb.group({
      titulo: ['', Validators.compose(
          [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: [''],
    });
  }

  cadastrar() {
    
    event.preventDefault();
    
    this.service
      .cadastra(this.foto)
      .subscribe(() => {
        //para limpar o form
        this.foto = new FotoComponent();
        console.log('Foto salva com sucesso');
      },erro =>console.log(erro)
    )
  }
}