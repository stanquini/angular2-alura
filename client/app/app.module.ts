import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';

import { AppComponent }   from './app.component';
import { FotoModule } from './foto/foto.module';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';


FormsModule

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FotoModule,
    HttpModule,
    PainelModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }