import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { NATS_SERVICE } from "src/shared/infrastructure/config/constants";
import { RegistrarClienteDto } from "../dto/registrar-cliente.dto";
import { catchError } from "rxjs";
import { CLIENTES_REGISTRO } from "../message/cliente.message";

@Controller('clientes')
export class RegistrarClienteController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() body: RegistrarClienteDto) {
    return this.client.send(CLIENTES_REGISTRO, body).pipe(
      catchError( error => {
        throw new RpcException(error)
      })
    );
  }
}