import { Marca } from "../marca/models/marca.model";

export interface Veiculo{
    id?: number,
    placa: string;
    cor: string;
    anoModelo: number;
    marca: Marca;
}