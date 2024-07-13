// packages.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { CreatePackageDto } from './create-package.dto';
import { PrismaService } from './prisma/prisma.service';

@Controller('packages')
export class PackagesController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async createPackage(@Body() packages: CreatePackageDto[]) {
    try {
      const createdPackages = await this.prisma
        .prismaClient()
        .package.createMany({
          data: packages,
        });
      return { success: true, data: createdPackages };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
