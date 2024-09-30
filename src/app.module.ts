import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, EmployeeController],
  providers: [AppService, PrismaService, EmployeeService],
})
export class AppModule {}
