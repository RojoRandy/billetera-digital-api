import { Controller, Get, Inject, Query } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { NATS_SERVICE } from "src/shared/infrastructure/config/constants";
import { BILLETERA_CONSULTAR_SALDO } from "../message/billetera.message";
import { catchError } from "rxjs";
import { ConsultarSaldoDto } from "../dto/consultar-saldo.dto";


@Controller('billeteras/consultar-saldo')
export class ConsultarSaldoController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}
  
  @Get()
  update(@Query() query: ConsultarSaldoDto) {
    return this.client.send(BILLETERA_CONSULTAR_SALDO, query).pipe(
      catchError( error => {
        throw new RpcException(error)
      })
    )
  }
}