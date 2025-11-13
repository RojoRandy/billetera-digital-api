import { Module } from "@nestjs/common";
import { RegistrarClienteController } from "../controller/registrar-cliente.controller";
import { ConsultarClienteController } from "../controller/consultar-cliente.controller";


@Module({
  controllers: [
    RegistrarClienteController,
    ConsultarClienteController
  ]
})
export class ClienteModule {}