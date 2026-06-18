import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocGiaService } from './doc-gia.service';
import { DocGiaController } from './doc-gia.controller';
import { DocGiaEntity } from './doc-gia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocGiaEntity])],
  controllers: [DocGiaController],
  providers: [DocGiaService],
})
export class DocGiaModule {}
