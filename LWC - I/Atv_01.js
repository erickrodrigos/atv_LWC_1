import { LightningElement } from 'lwc';
export default class PrimeiroLWC extends LightningElement {
    empresa ="Tensei";
    cnpj = "5425842454884";
    endereco = "Rua sem destino N105";
    produto = "Note";
    descricao = "Em perfeito Estado";
    preco = "7.000";
    promocao = "5.500";
    oferta01 = "80,56";
    oferta02 = "64,23";

    div = true;

    EscondeDiv(){
        this.div = !this.div;
    }
} 
