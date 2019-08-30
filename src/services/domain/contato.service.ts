import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { ContatoDTO } from 'src/models/Contato.dto';
import { Observable } from 'rxjs';

@Injectable()
export class ContatoService {

    constructor(public http: HttpClient) {

    }

    findAll(): Observable<ContatoDTO[]> {
        //´${API_CONFIG.baseUrl}/albums´
        return this.http.get<ContatoDTO[]>("https://jsonplaceholder.typicode.com/albumss");
    }
}