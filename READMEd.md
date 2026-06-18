# thi_gi-a_k--3
## Phần việc của Sinh viên B: Quản lý Đối tượng Độc Giả

### 1. Danh sách API endpoints cho Độc Giả:
- **Create**: [POST] `/doc-gia` - Thêm mới độc giả
- **Read All**: [GET] `/doc-gia` - Lấy toàn bộ danh sách độc giả
- **Read One**: [GET] `/doc-gia/:id` - Xem chi tiết một độc giả
- **Update**: [PATCH] `/doc-gia/:id` - Cập nhật thông tin độc giả
- **Delete**: [DELETE] `/doc-gia/:id` - Xóa độc giả

### 2. Cấu trúc bảng dữ liệu:
- `id`: int (Primary Key, Auto Increment)
- `ho_ten`: varchar(255)
- `email`: varchar(100) (Unique)
- `so_dien_thoai`: varchar(15)
- `dia_chi`: text
- `ngay_tao`: datetime
