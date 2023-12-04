import { Component } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'gm-veiculo-list',
  standalone: true,
  imports: [],
  templateUrl: './veiculo-list.component.html',
  styleUrl: './veiculo-list.component.css'
})
export class VeiculoListComponent {
  veiculos: Veiculo[] = [];
  deleteMessage=false;
  constructor(private veiculoService: VeiculoService,
    private router: Router){}

  ngOnInit(): void{
    this.veiculoService.listarVeiculos().subscribe(dados => {
      this.veiculos = dados;
    });
  }

  delete(id?: number){
    this.veiculoService.delete(id!).subscribe(dado => {
      console.log(dado);
      this.deleteMessage = true;
      this.veiculoService.listarVeiculos().subscribe(dados => {
        this.veiculos = dados;
      });
    },
    error => console.log(error)
    );
  }

  updateVeiculo(id?: number){
    this.router.navigate(['edit-veiculo',id]);
  }

  detalheVeiculo(id?: number){
    this.router.navigate(['detail-veiculo',id]);
    }
  
}
