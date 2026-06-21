# 🚀 Bắt Đầu Nhanh - Restaurant Guide HCMC

## ⚡ Cách Mở Website Ngay Lập Tức

### Bước 1: Tìm File
Mở thư mục `restaurant-guide-hcm` → Tìm file `index.html`

### Bước 2: Mở Với Trình Duyệt
- **Windows**: Click chuột phải trên `index.html` → "Open with" → Chọn Chrome/Firefox/Edge
- **Mac**: Double-click `index.html`
- **Linux**: Double-click `index.html`

### Bước 3: Khám Phá Website
- Trang chủ sẽ mở lên ngay
- Bạn có thể duyệt quán ăn, tìm kiếm, xem bản đồ

## 📋 Danh Sách Các Trang

| Trang | URL | Mô Tả |
|-------|-----|-------|
| Trang Chủ | `index.html` | Hiển thị quán nổi bật, danh mục, quận huyện |
| Danh Sách Quán | `restaurants.html` | Tìm kiếm & lọc quán ăn |
| Chi Tiết Quán | `detail.html?id=1` | Xem chi tiết, ảnh, menu, reviews, map |
| Bản Đồ | `map.html` | Xem vị trí quán ăn trên bản đồ |
| Yêu Thích | `favorites.html` | Xem quán ăn đã lưu yêu thích |
| Về Chúng Tôi | `about.html` | Thông tin về website |

## 🎯 Tính Năng Chính

### 1. Tìm Kiếm Quán Ăn
```
restaurants.html → Nhập tên quán → Lọc theo loại ăn, quận huyện, giá, rating → Xem kết quả
```

### 2. Xem Chi Tiết Quán
```
Tìm quán → Click "Chi Tiết" → Xem ảnh, menu, giờ mở, phone, map, videos TikTok
```

### 3. Để Lại Đánh Giá
```
Chi tiết quán → Cuộn xuống → "Để Lại Đánh Giá" → Nhập tên, chọn sao, viết bình luận → Gửi
```

### 4. Lưu Yêu Thích
```
Click nút ❤️ trên thẻ quán → Quán sẽ được lưu → Xem lại ở trang "Yêu Thích"
```

### 5. Xem Bản Đồ
```
map.html → Xem tất cả quán trên bản đồ → Click để xem chi tiết
```

## 🔌 Chức Năng Ngoại Tuyến

Website hoạt động 100% offline - không cần internet sau lần đầu tải!

### Dữ Liệu Lưu Trữ Cục Bộ
- **Yêu Thích**: Lưu trên trình duyệt (localStorage)
- **Đánh Giá**: Lưu trên trình duyệt (localStorage)
- **Quán Ăn**: Từ file `data/restaurants.json`

## 🎨 Giao Diện

- **Responsive**: Hoạt động tốt trên phone, tablet, desktop
- **Dark Mode Compatible**: Tự động thích ứng với chế độ tối
- **Fast**: Tải nhanh, không cần server

## 📊 Dữ Liệu Hiện Có

- ✅ 20+ quán ăn mẫu
- ✅ 24 quận huyện TPHCM
- ✅ 19+ loại ăn khác nhau
- ✅ Link Google Maps cho mỗi quán
- ✅ Thông tin phone, giờ mở, menu

## ⚙️ Hệ Thống Yêu Cầu

- ✅ Trình duyệt hiện đại (Chrome, Firefox, Edge, Safari)
- ✅ Internet (chỉ cho lần đầu tải)
- ✅ Không cần cài đặt gì

## 🔧 Cách Thêm Quán Ăn Mới

1. Mở file `data/restaurants.json` bằng text editor (VS Code, Notepad, etc.)
2. Tìm phần `"restaurants": [`
3. Thêm object mới:
```json
{
  "id": 21,
  "name": "Tên Quán Ăn",
  "category": "Loại Ăn",
  "district": "Q1",
  "address": "Địa chỉ đủ đầy",
  "phone": "0901234567",
  "googleMapsUrl": "https://maps.app.goo.gl/your-link-here",
  "openTime": "6:00",
  "closeTime": "22:00",
  "priceRange": "$$",
  "rating": 4.5,
  "reviewCount": 50,
  "description": "Mô tả quán ăn",
  "image": "images/restaurants/ten-quan.jpg",
  "images": [],
  "menu": ["Món 1", "Món 2"],
  "tiktokVideos": [],
  "tags": ["tag1", "tag2"]
}
```
4. Lưu file → Website sẽ tự động hiển thị quán mới

## 🐛 Sửa Lỗi Nhanh

| Vấn Đề | Cách Sửa |
|--------|---------|
| Quán ăn không hiển thị | Kiểm tra `data/restaurants.json` - hãy đảm bảo JSON valid |
| Yêu thích không lưu | Xóa cache trình duyệt, thử lại |
| Bản đồ không hoạt động | Trang bản đồ chính (`map.html`) không còn hoạt động do thay đổi cấu trúc dữ liệu. |
| Ảnh không tải | Đảm bảo file ảnh có trong thư mục `images/` |

## 📱 Dùng Trên Mobile

1. Sao chép thư mục website lên điện thoại
2. Mở file `index.html` từ file manager
3. Hoặc: Upload lên web server → Truy cập qua link

## 🌐 Deploy Lên Internet

### Cách 1: GitHub Pages (Miễn phí)
1. Tạo GitHub account
2. Tạo repository `username.github.io`
3. Upload thư mục website
4. Website sẽ live tại `https://username.github.io`

### Cách 2: Netlify (Miễn phí)
1. Vào https://netlify.com
2. Drag & drop thư mục website
3. Website sẽ live ngay lập tức

### Cách 3: Web Hosting
1. Mua hosting + domain
2. Upload thư mục website qua FTP
3. Website sẽ hoạt động trên domain của bạn

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra README.md
2. Mở Console (F12) xem lỗi
3. Liên hệ: info@MNIMJEEL.hcm

## ✅ Checklist

- [ ] Mở `index.html` thành công
- [ ] Xem được danh sách quán ăn
- [ ] Tìm kiếm & lọc hoạt động
- [ ] Click vào quán → xem chi tiết
- [ ] Để lại đánh giá
- [ ] Lưu yêu thích
- [ ] Xem bản đồ
- [ ] Tất cả hoạt động trên mobile

## 🎉 Chúc Mừng!

Website của bạn đã sẵn sàng! Hãy thêm quán ăn, chia sẻ với bạn bè, và tận hưởng!

---

**Phiên bản**: 1.0 | **Cập nhật**: 2026-06-16
