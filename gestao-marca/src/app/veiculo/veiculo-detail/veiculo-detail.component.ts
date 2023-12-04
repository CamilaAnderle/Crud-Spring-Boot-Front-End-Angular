import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gm-veiculo-detail',
  standalone: true,
  imports: [],
  templateUrl: './veiculo-detail.component.html',
  styleUrl: './veiculo-detail.component.css'
})
export class VeiculoDetailComponent implements OnInit{
  public id?: number;
  veiculo?: Veiculo;

  constructor(private veiculoService: VeiculoService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
 this.veiculoService.buscarPorId(this.id!).subscribe(dado => {
 this.veiculo = dado;
  },
  error => console.log(error)
  );
 }
}
