import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/services/domain/contato.service';
import { ContatoDTO } from 'src/models/Contato.dto';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  items: ContatoDTO[];

  constructor(public contatoService: ContatoService) { }

  ngOnInit() {
    this.contatoService.findAll()
      .subscribe(response => {
        this.items = response;
        //console.log(response);
      },
      error => {});
  }
}
