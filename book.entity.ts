import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tenSach: string;

  @Column()
  tacGia: string;

  @Column()
  nhaXuatBan: string;

  @Column()
  namXuatBan: number;

  @Column()
  soLuong: number;
}
