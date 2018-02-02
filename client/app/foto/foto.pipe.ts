import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

  transform(fotos: any, digitado: string): any {
    
    digitado = digitado.toLocaleLowerCase();
    return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
  }
}