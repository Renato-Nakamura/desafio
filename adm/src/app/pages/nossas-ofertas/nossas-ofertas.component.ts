import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nossas-ofertas",
  templateUrl: "./nossas-ofertas.component.html",
  styleUrls: ["./nossas-ofertas.component.scss"],
})
export class NossasOfertasComponent implements OnInit {
  displayedColumns: string[] = ["id", "titulo", "preco", "precoDesconto"];
  dataSource;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dataSource = JSON.parse(
      window.localStorage.getItem("ofertas-game-tracker")
    );
  }

  rowClick(id: number) {
    this.router.navigate([`/cadastroofertas/${id}`]);
  }
  newOffer() {
    this.router.navigate([`/cadastroofertas/new`]);
  }
}
