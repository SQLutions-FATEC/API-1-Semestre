import { concatenacaoString } from "./operacoesLogicas/concatenacaoString";
import { conversaoDeBase } from "./operacoesLogicas/conversaoDeBase";
import { divisao } from "./operacoesLogicas/divisao";
import { fatorial } from "./operacoesLogicas/fatorial";
import { funcaoSegundoGrau } from "./operacoesLogicas/funcaoSegundoGrau";
import { juros } from "./operacoesLogicas/juros";
import { multiplicacao } from "./operacoesLogicas/multiplicacao";
import { adicao } from "./operacoesLogicas/adicao";
import { subtracao } from "./operacoesLogicas/subtracao";

let opcao: number, retornar: number = 0;
var input = require("prompt-sync")();

do {
   console.log("______________________________");
   console.log("|  Calculadora Cientifica    |");
   console.log("|----------------------------|");
   console.log("| 1 - Adicao                 |");
   console.log("| 2 - Subtracao              |");
   console.log("| 3 - Multiplicacao          |");
   console.log("| 4 - Divisao                |");
   console.log("| 5 - Fatorial               |");
   console.log("| 6 - Funcao de 2o grau      |");
   console.log("| 7 - Conversao de Base Num. |");
   console.log("| 8 - Concatenacao de string |");
   console.log("| 9 - Juros                  |");
   console.log("| 0 - Sair                   |");
   console.log("|____________________________|");;
   opcao = Number(input("| Selecione uma opcao: "));
   console.clear();
   console.log("| Opção escolhida:" + opcao);

   switch (opcao) {
      case 1:
         adicao();
         break;
      case 2:
         subtracao();
         break;
      case 3:
         multiplicacao();
         break;
      case 4:
         divisao();
         break;
      case 5:
         fatorial();
         break;
      case 6:
         funcaoSegundoGrau();
         break;
      case 7:
         conversaoDeBase();
         break;
      case 8:
         concatenacaoString();
         break;
      case 9:
         juros();
         break;
      case 0:
         console.log("Saindo!");
         break;
      default:
         console.log("Opcao invalida!");
   }

   if(opcao != 0){
      console.log("______________________________");
      console.log("| Deseja retornar ao inicio? |");
      console.log("|----------------------------|");
      console.log("| 1 - Sim                    |");
      console.log("| 0 - Sair                   |");
      console.log("|____________________________|");
      console.log();
      retornar = input("| Selecione uma opcao: ");
   }

   console.clear();
} while (retornar != 0);
