import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProfilesService {
  constructor(private readonly databaseService: DatabaseService){}

  create(createProfileDto: Prisma.ProfileCreateInput) {
    return this.databaseService.profile.create({data: createProfileDto});
  }

  findAll() {
    return this.databaseService.profile.findMany();
  }

  findOne(id: number) {
    return this.databaseService.profile.findUnique({where: {id,}});
  }

  update(id: number, updateProfileDto: Prisma.ProfileUpdateInput) {
    return this.databaseService.profile.update({where: {id}, data: updateProfileDto});
  }

  remove(id: number) {
    return this.databaseService.profile.delete({where: {id,}});
  }
}
