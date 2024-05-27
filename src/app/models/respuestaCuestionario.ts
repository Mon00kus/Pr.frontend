import { RespuestaCuestionarioDetalle } from "./respuestaCuestionarioDetalle";

export class RespuestaCuestionario {
  cuestionarioId? : number;
  nombreParticipante?: string ;
  
  ListRespuestaCuestionarioDetalle? : RespuestaCuestionarioDetalle[] = [];
}
