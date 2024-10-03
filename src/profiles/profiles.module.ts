import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService],
  imports: [DatabaseModule]
})
export class ProfilesModule {}
