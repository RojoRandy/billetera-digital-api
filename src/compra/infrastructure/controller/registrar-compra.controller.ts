import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { NATS_SERVICE } from "src/shared/infrastructure/config/constants";
import { RegistrarCompraDto } from "../dto/registrar-compra.dto";
import { COMPRA_REGISTRO } from "../message/compra.message";
import { catchError } from "rxjs";

@Controller('compras')
export class RegistrarCompraController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}
  
  @Post()
  create(@Body() body: RegistrarCompraDto) {
    return this.client.send(COMPRA_REGISTRO, body).pipe(
      catchError( error => {
        throw new RpcException(error)
      })
    );
  }
}