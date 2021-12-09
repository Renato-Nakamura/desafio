import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

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
    loja: number;
    descricao: string;
  };

  precoMin;
  precoDescMin;
  precoDescMax;
  lojaId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  data = JSON.parse(window.localStorage.getItem("ofertas-game-tracker"));

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    if (!isNaN(id)) {
      this.gameInfo = this.data.find((game) => game.id == id);
    } else {
      this.gameInfo = {
        id: 0,
        titulo: "",
        preco: "",
        precoDesconto: "",
        loja: 0,
        descricao: "",
      };
    }
  }

  isLojaValid() {
    this.lojaId = new FormControl(this.gameInfo.loja, Validators.min(1));
  }

  isPriceValid() {
    this.precoMin = new FormControl(
      parseFloat(this.gameInfo.preco),
      Validators.min(0)
    );
    this.precoDescMin = new FormControl(
      parseFloat(this.gameInfo.precoDesconto),
      Validators.min(0)
    );
    this.precoDescMax = new FormControl(
      parseFloat(this.gameInfo.precoDesconto),
      Validators.max(parseFloat(this.gameInfo.preco))
    );
  }

  allFieldsValid() {
    if (this.gameInfo.titulo.trim() == "") return false;
    if (this.gameInfo.preco.trim() == "") return false;
    if (this.gameInfo.precoDesconto.trim() == "") return false;
    if (isNaN(parseInt(this.gameInfo.precoDesconto))) return false;
    if (isNaN(parseInt(this.gameInfo.preco))) return false;
    if (this.precoMin?.invalid) return false;
    if (this.precoDescMin?.invalid) return false;
    if (this.precoDescMax?.invalid) return false;
    if (this.gameInfo.loja == 0) return false;
    return true;
  }

  save() {
    if (this.allFieldsValid()) {
      if (this.gameInfo.id != 0) {
        let index = this.gameInfo.id - 1;
        this.data[index] = this.gameInfo;
      } else {
        let id = this.data.length + 1;
        this.gameInfo.id = id;
        this.data.push(this.gameInfo);
      }
      window.localStorage.setItem(
        "ofertas-game-tracker",
        JSON.stringify(this.data)
      );
      this.openSnackBar(
        "Jogo salvo com sucesso",
        "Fechar"
      );
      this.router.navigate(["/nossasofertas"]);
    } else {
      this.openSnackBar(
        "Não foi possível salvar, verifique os dados inseridos",
        "Fechar"
      );
    }
  }
  cancel() {
    this.router.navigate(["/nossasofertas"]);
  }
}
