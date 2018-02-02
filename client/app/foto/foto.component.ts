import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'foto',
  moduleId: module.id,
  templateUrl: './foto.component.html'
})

export class FotoComponent{
    
  @Input() titulo: string;
  @Input() url: string;
  descricao: string;

}