import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Filme } from './filme'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
// import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmesService {

  private url: string = 'http://localhost:3000/filmes'

  filmesChanged = new EventEmitter<Observable<Filme[]>>()

  constructor(private http: Http) { }

  getAll(): Observable<Filme[]> {
    return this.http.get(this.url)
      .map(res => res.json())
      .catch(this.handleError)
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error'
    console.error('Ocorreu um erro ', error)
    return Observable.throw(erro)
  }

  add(filme: Filme) {
    return this.http.post(this.url, JSON.stringify(filme),
      { headers: this.getHeaders() })
        // .map(res => res.json())
        .do(data => this.filmesChanged.emit(this.getAll()))
        .catch(this.handleError)
  }

  update(filme: Filme) {
    return this.http.put(this.url, JSON.stringify(filme),
      { headers: this.getHeaders() })
      .map(res => res.json().data)
      .do(data => this.filmesChanged.emit(this.getAll()))
      .catch(this.handleError)
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id), { headers: this.getHeaders() })
      // .map(res => res.json())
      .do(data => this.filmesChanged.emit(this.getAll()))
      .catch(this.handleError)
  }

  get(id: number) {
    return this.getAll()
      .map((list: any) => list.find(filme => filme.codigo == id))
      .catch(this.handleError)
  }

  private getHeaders() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return headers
  }

  private getUrl(id: number) {
    return `${this.url}/${id}`
  }
}
