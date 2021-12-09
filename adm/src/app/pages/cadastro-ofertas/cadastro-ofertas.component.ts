import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cadastro-ofertas",
  templateUrl: "./cadastro-ofertas.component.html",
  styleUrls: ["./cadastro-ofertas.component.scss"],
})
export class CadastroOfertasComponent implements OnInit {
  lojas = [
    { id: 1, nome: "Epic" },
    { id: 2, nome: "Origin" },
    { id: 3, nome: "Steam" },
  ];

  gameInfo: {
    id: number;
    titulo: string;
    preco: string;
    precoDesconto: string;
    loja:number;
    descricao:string;
  };

  invalid:{
    id: boolean;
    titulo: boolean;
    preco: boolean;
    precoDesconto: boolean;
    loja:boolean;
    descricao:boolean;
  };


  data = JSON.parse(window.localStorage.getItem("ofertas-game-tracker"));

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    if(!isNaN(id)){
      this.gameInfo = this.data.find((game) => game.id == id);
    }else{
      this.gameInfo = {
        id: 0,
        titulo: "",
        preco: "",
        precoDesconto: "",
        loja: 0,
        descricao:"",
      };
    }
    console.log(typeof id, this.gameInfo);
  }

  save(){
    console.log(this.gameInfo)
    if(this.gameInfo.id != 0){

    }else{
      
      this.data.push(this.gameInfo)

    }
  }
}
