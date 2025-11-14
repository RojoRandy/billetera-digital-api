import { Body, Controller, Inject, Patch } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { NATS_SERVICE } from "src/shared/infrastructure/config/constants";
import { ConfirmarCompraDto } from "../dto/confirmar-compra.dto";
import { COMPRA_CONFIRMAR } from "../message/compra.message";
import { catchError } from "rxjs";


@Controller('compras/confirmar')
export class ConfirmarCompraController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Patch()
  confirmar(@Body() body: ConfirmarCompraDto) {
    return this.client.send(COMPRA_CONFIRMAR, body).pipe(
      catchError( error => {
        throw new RpcException(error)
      })
    );
  }
}