import { Module } from "@nestjs/common";
import { RegistrarClienteController } from "../controller/registrar-cliente.controller";


@Module({
  controllers: [
    RegistrarClienteController
  ]
})
export class ClienteModule {}