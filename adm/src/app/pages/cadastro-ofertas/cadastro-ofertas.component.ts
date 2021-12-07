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
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.gameInfo = this.getGameInformation(id);
    console.log(id, this.gameInfo);
  }

  getGameInformation(id:number) {
    let data = JSON.parse(window.localStorage.getItem("ofertas-game-tracker"));
    return data.find((game) => game.id == id);
  }
}
