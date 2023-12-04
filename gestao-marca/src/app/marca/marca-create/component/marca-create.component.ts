import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Marca } from "../../models/marca.model";
import { MarcaService } from "../../marca.service";

@Component({
    selector: 'gm-marca-create',
    templateUrl: './marca-create.component.html'
  })  
export class MarcaCreateComponent {
  marcaForm!: FormGroup;
  submitted = false;

  constructor(private marcaService: MarcaService,
    private formBuilder: FormBuilder
){}

ngOnInit(): void {
  this.marcaForm = this.formBuilder.group({
    sigla: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
  });
}

    save() {
      if (this.marcaForm.valid) {
        const marca = this.marcaForm.getRawValue() as Marca;
        this.marcaService.save(marca).subscribe(
          () => (this.submitted = true),
          (error) => console.log(error)
        );
      }
    }
    addMarcaForm(){
      this.submitted = false;
      this.marcaForm.reset();
    }
  

}