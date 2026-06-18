import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('doc_gia')
export class DocGiaEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'ho_ten', type: 'varchar', length: 255 })
  hoTen!: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email!: string;

  @Column({ name: 'so_dien_thoai', type: 'varchar', length: 15, nullable: true })
  soDienThoai!: string;

  @Column({ name: 'dia_chi', type: 'text', nullable: true })
  diaChi!: string;

  @CreateDateColumn({ name: 'ngay_tao' })
  ngayTao!: Date;
}
