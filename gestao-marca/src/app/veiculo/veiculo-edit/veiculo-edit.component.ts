import { Component } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'gm-veiculo-edit',
  standalone: true,
  imports: [],
  templateUrl: './veiculo-edit.component.html',
  styleUrl: './veiculo-edit.component.css'
})
export class VeiculoEditComponent {
  public id?: number;
  veiculo?: Veiculo;
  veiculoForm!: FormGroup;
  updated = false;
  
  
    constructor(private route: ActivatedRoute,
      private veiculoService: VeiculoService,
  private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
  this.route.params.subscribe(params => this.id = params['id']);
  this.veiculoService.buscarPorId(this.id!).subscribe(dado => {
  this.veiculo = dado;
  },
  error => console.log(error)
  );
  this.createForm();
  }
  
  createForm(){
    this.veiculoForm = this.formBuilder.group({
      id: new FormControl(this.id),
      placa: new FormControl(this.veiculo?.placa, [Validators.required, Validators.minLength(7)]),
      cor: new FormControl(this.veiculo?.cor, [Validators.required]),
      anoModelo: new FormControl(this.veiculo?.anoModelo, [Validators.required]),
      marca: new FormControl(this.veiculo?.marca, [Validators.required]),
    });
  }
  
  update(){
    if (this.veiculoForm.valid) {
      const veiculo = this.veiculoForm.getRawValue() as Veiculo;
      this.veiculoService.update(this.id,this.veiculo).subscribe(
        () => (this.updated = true),
        (error) => console.log(error)
      );
    }
  }
  
}
