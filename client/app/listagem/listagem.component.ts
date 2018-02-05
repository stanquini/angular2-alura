import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';

import { FotoService } from './../foto/foto.service';

@Component({
  moduleId: module.id,
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  
  fotos: FotoComponent[] = [];

  constructor(service: FotoService) {
    
    service
      .lista()
      .subscribe(fotos => {
        this.fotos = fotos;
      }, erro => console.log(erro))
  }

  remove(foto: FotoComponent): void{
    
    console.log(foto.titulo);
  }

}