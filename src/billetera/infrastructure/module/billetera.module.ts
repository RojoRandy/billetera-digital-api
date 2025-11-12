import { Module } from "@nestjs/common";
import { RecargarSaldoController } from "../controller/recargar-saldo.controller";


@Module({
  controllers: [
    RecargarSaldoController
  ]
})
export class BilleteraModule {}