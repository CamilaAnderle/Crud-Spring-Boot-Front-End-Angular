import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Marca } from '../models/marca.model';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'gm-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent {
  marcas: Marca[] = [];
  deleteMessage=false;
  constructor(private marcaService: MarcaService,
    private router: Router){}

  ngOnInit(): void{
    this.marcaService.listarMarcas().subscribe(dados => {
      this.marcas = dados;
    });
  }

  delete(id?: number){
    this.marcaService.delete(id!).subscribe(dado => {
      console.log(dado);
      this.deleteMessage = true;
      this.marcaService.listarMarcas().subscribe(dados => {
        this.marcas = dados;
      });
    },
    error => console.log(error)
    );
  }

  updateMarca(id?: number){
    this.router.navigate(['edit-marca',id]);
  }

  detalheMarca(id?: number){
    this.router.navigate(['detail-marca',id]);
    }
}