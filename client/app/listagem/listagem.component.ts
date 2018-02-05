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
  service: FotoService;
  mensagem: string = '';

  constructor(service: FotoService) {
    
    this.service = service;
    
    this.service
      .lista()
      .subscribe(fotos => {
        this.fotos = fotos;
      }, erro => console.log(erro))
  }

  remove(foto: FotoComponent): void {

    this.service.remove(foto)
      .subscribe(
        () => {
          console.log('Foto removida com sucesso');
          let novasFotos = this.fotos.slice(0);
          let indice = novasFotos.indexOf(foto);
          novasFotos.splice(indice, 1);
          this.fotos = novasFotos;
          this.mensagem = 'Foto removida com sucesso';
          /* Apagar um recurso do servidor não garante automaticamente a atualização da view para que reflita uma nova lista sem o elemento removido. Para que isso aconteça, precisamos remover o elemento da lista que alimenta o template para que ele se renderize. No entanto, para que essa estratégia funcione, é necessário criar uma nova lista e atribuí-la à propriedade fotos do componente. Como a referência mudou, o mecanismo de detecção do Angular entrará em ação e atualizará a view. */
        },
        erro => console.log(erro));
        this.mensagem = 'Não foi possível remover a foto';
  }

}