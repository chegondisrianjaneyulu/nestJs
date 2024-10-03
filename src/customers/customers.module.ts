import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [DatabaseModule]
})
export class CustomersModule {}
