import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  route: ActivatedRoute;

  constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute ) {
    
    this.service = service;

    this.route = route;
    this.route.params.subscribe(params => {
      
      let id = params['id'];

      if(id) {
        this.service
          .buscaPorId(id)
          .subscribe(
            foto => this.foto = foto,
            erro => console.log(erro)
        );
      }
    });

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