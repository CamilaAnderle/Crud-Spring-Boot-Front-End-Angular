import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Marca } from '../../marca/models/marca.model';
import { VeiculoService } from '../veiculo.service';
import { MarcaService } from '../../marca/marca.service';
import { Veiculo } from '../veiculo.model';

@Component({
  selector: 'gm-veiculo-create',
  standalone: true,
  imports: [],
  templateUrl: './veiculo-create.component.html',
  styleUrl: './veiculo-create.component.css'
})

export class VeiculoCreateComponent implements OnInit {
veiculoForm!: FormGroup;
submitted = false;
marcas: Marca[] = [];
constructor(
private veiculoService: VeiculoService,
private formBuilder: FormBuilder,
private marcaService: MarcaService
) {
this.marcaService.listarMarcas().subscribe((dados: Marca[]) =>{this.marcas = dados;
});
}
ngOnInit(): void {
this.veiculoForm = this.formBuilder.group({
placa: new FormControl('', [Validators.required,Validators.minLength(7),]),
cor: new FormControl('', [Validators.required]),
anoModelo: new FormControl('', [Validators.required]),
marca: new FormControl('', [Validators.required]),
});
}
save() {
if (this.veiculoForm.valid) {
const veiculo = this.veiculoForm.getRawValue() as Veiculo;
this.veiculoService.save(veiculo).subscribe(
() => (this.submitted = true),
(error) => console.log(error)
);
}
}
addVeiculoForm() {
this.submitted = false;
this.veiculoForm.reset();
}
}