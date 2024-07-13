// app.module.ts (o donde configures tus módulos y servicios en NestJS)

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PackagesController } from './packages.controller';

@Module({
  controllers: [PackagesController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
