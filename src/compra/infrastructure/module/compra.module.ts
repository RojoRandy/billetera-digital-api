import { Module } from "@nestjs/common";
import { RegistrarCompraController } from "../controller/registrar-compra.controller";
import { ConfirmarCompraController } from "../controller/confirmar-compra.controller";


@Module({
  controllers: [
    RegistrarCompraController,
    ConfirmarCompraController
  ]
})
export class CompraModule {}