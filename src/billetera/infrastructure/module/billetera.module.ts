import { Module } from "@nestjs/common";
import { RecargarSaldoController } from "../controller/recargar-saldo.controller";
import { ConsultarSaldoController } from "../controller/consultar-saldo.controller";


@Module({
  controllers: [
    ConsultarSaldoController,
    RecargarSaldoController
  ]
})
export class BilleteraModule {}