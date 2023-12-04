import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Veiculo } from "./veiculo.model";
@Injectable({
providedIn: 'root',
})
export class VeiculoService {
private API = 'http://localhost:8080/api/v1/aulas';
constructor(private httpClient: HttpClient) { }
save(Veiculo: Veiculo): Observable<Veiculo> {
return this.httpClient.post<Veiculo>(this.API, Veiculo); }
listarVeiculos(): Observable<any> {
  return this.httpClient.get(this.API);
  }
  delete(id: number): Observable<any> {
  return this.httpClient.delete(`${this.API}/${id}`);
  }
  update(id?: number, Veiculo?: Veiculo): Observable<any> {
  return this.httpClient.put(`${this.API}/${id}`, Veiculo);
  }
  buscarPorId(id: number): Observable<any>{
  return this.httpClient.get(`${this.API}/${id}`);
  }
  }