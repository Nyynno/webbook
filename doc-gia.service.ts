import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocGiaEntity } from './doc-gia.entity';

@Injectable()
export class DocGiaService {
  constructor(
    @InjectRepository(DocGiaEntity)
    private readonly docGiaRepository: Repository<DocGiaEntity>,
  ) {}

  // 1. Create - Thêm độc giả mới
  async create(data: any): Promise<DocGiaEntity[]> {
    const newDocGia = this.docGiaRepository.create(data);
    return await this.docGiaRepository.save(newDocGia);
  }

  // 2. Read All - Lấy toàn bộ danh sách (Trả về mảng Entity[])
  async findAll(): Promise<DocGiaEntity[]> {
    return await this.docGiaRepository.find();
  }

  // 3. Read One - Tìm 1 độc giả theo ID
  async findOne(id: number): Promise<DocGiaEntity> {
    const docGia = await this.docGiaRepository.findOne({ where: { id } });
    if (!docGia) {
      throw new NotFoundException(`Không tìm thấy độc giả ID ${id}`);
    }
    return docGia;
  }

  // 4. Update - Cập nhật thông tin
  async update(id: number, data: any): Promise<DocGiaEntity> {
    const docGia = await this.findOne(id);
    const updated = Object.assign(docGia, data);
    return await this.docGiaRepository.save(updated);
  }

  // 5. Delete - Xóa độc giả
  async remove(id: number): Promise<{ message: string }> {
    const docGia = await this.findOne(id);
    await this.docGiaRepository.remove(docGia);
    return { message: `Đã xóa thành công độc giả ID ${id}` };
  }
}
