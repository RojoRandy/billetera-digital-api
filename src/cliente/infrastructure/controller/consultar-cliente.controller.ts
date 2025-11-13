import { Controller, Get, Inject, Query } from "@nestjs/common";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { NATS_SERVICE } from "src/shared/infrastructure/config/constants";
import { catchError } from "rxjs";
import { ConsultarClienteDto } from "../dto/consultar-cliente.dto";
import { CLIENTES_CONSULTA } from "../message/cliente.message";


@Controller('clientes')
export class ConsultarClienteController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}
  
  @Get()
  update(@Query() query: ConsultarClienteDto) {
    return this.client.send(CLIENTES_CONSULTA, query).pipe(
      catchError( error => {
        throw new RpcException(error)
      })
    )
  }
}