import { Body, Controller, Inject, Patch } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { NATS_SERVICE } from "src/shared/infrastructure/config/constants";
import { BILLETERA_RECARGAR_SALDO } from "../message/billetera.message";
import { RecargarSaldoDto } from "../dto/recargar-saldo.dto";
import { catchError } from "rxjs";


@Controller('billeteras/recargar-saldo')
export class RecargarSaldoController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}
  
  @Patch()
  update(@Body() body: RecargarSaldoDto) {
    return this.client.send(BILLETERA_RECARGAR_SALDO, body).pipe(
      catchError( error => {
        throw new RpcException(error)
      })
    )
  }
}