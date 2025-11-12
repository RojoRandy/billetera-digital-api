import { Module } from '@nestjs/common';
import { NatsModule } from './shared/infrastructure/broker/nats.module';
import { ClienteModule } from './cliente/infrastructure/module/cliente.module';
import { BilleteraModule } from './billetera/infrastructure/module/billetera.module';

@Module({
  imports: [
    NatsModule,
    ClienteModule,
    BilleteraModule
  ],
})
export class AppModule {}
