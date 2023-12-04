import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from '../models/marca.model';
import { MarcaService } from '../marca.service';

@Component({
 selector: 'gm-marca-detail',
 templateUrl: './marca-detail.component.html',
 styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {
 public id?: number;
 marca?: Marca;
 constructor(private marcaService: MarcaService,
 private route: ActivatedRoute) { }
 ngOnInit(): void {
 this.route.params.subscribe(params => this.id = params['id']);
 this.marcaService.buscarPorId(this.id!).subscribe(dado => {
 this.marca = dado;
 },
 error => console.log(error)
 );
 }
}