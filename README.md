<<<<<<< HEAD
# 🍜 Restaurant Guide HCMC - Website Quản Lý Quán Ăn

Ứng dụng web giúp khám phá những quán ăn tốt nhất ở thành phố Hồ Chí Minh (TPHCM).

## ✨ Tính Năng Chính

✅ **Tìm Kiếm & Lọc** - Tìm kiếm quán ăn theo tên, loại ăn, quận huyện, giá cả, đánh giá
✅ **Bản Đồ Tương Tác** - Xem vị trí quán ăn trên bản đồ với marker
✅ **Chi Tiết Quán** - Xem đầy đủ thông tin quán, hình ảnh, menu, giờ mở cửa
✅ **Đánh Giá & Bình Luận** - Để lại và đọc đánh giá từ khách hàng khác
✅ **Video TikTok** - Xem video review quán ăn từ TikTok
✅ **Yêu Thích** - Lưu quán ăn yêu thích để xem lại sau
✅ **Responsive** - Hoạt động tốt trên mobile, tablet, desktop

## 📁 Cấu Trúc Thư Mục

```
restaurant-guide-hcm/
├── index.html              # Trang chủ
├── restaurants.html        # Danh sách quán ăn (với search & filter)
├── detail.html            # Chi tiết quán ăn
├── map.html               # Bản đồ tương tác
├── favorites.html         # Quán ăn yêu thích
├── about.html             # Về chúng tôi
│
├── css/
│   ├── style.css          # CSS chính (header, footer, layout)
│   └── restaurant.css     # CSS cho restaurant cards & listings
│
├── js/
│   └── script.js          # JavaScript chính (menu, search, interactions)
│
├── data/
│   └── restaurants.json   # Dữ liệu quán ăn (20+ quán mẫu)
│
├── images/                # Thư mục ảnh (sẽ thêm hình ảnh quán ăn)
│
└── README.md             # File này
```

## 🚀 Cách Sử Dụng

### 1. Mở Website
- Sao chép thư mục `restaurant-guide-hcm` vào máy tính
- Mở file `index.html` bằng trình duyệt

### 2. Duyệt Quán Ăn
- **Trang Chủ**: Xem quán ăn nổi bật, danh mục, quận huyện
- **Quán Ăn**: Tìm kiếm và lọc quán ăn theo tiêu chí
- **Bản Đồ**: Xem vị trí quán ăn trên bản đồ

### 3. Xem Chi Tiết
- Click "Chi Tiết" trên thẻ quán ăn
- Xem ảnh, menu, giờ mở cửa, phone
- Xem videos TikTok review
- Để lại đánh giá

### 4. Lưu Yêu Thích
- Click nút ❤️ trên thẻ quán ăn
- Xem danh sách yêu thích ở trang "Yêu Thích"

## 🎨 Màu Sắc

- **Primary**: #10221b (Đen xanh)
- **Accent**: #219150 (Xanh lá)
- **Secondary**: #e950b8 (Hồng tím)

## 📚 Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc semantic
- **CSS3** - Responsive design, Grid, Flexbox
- **JavaScript (ES6+)** - DOM manipulation, localStorage
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 💾 Dữ Liệu

Dữ liệu quán ăn được lưu trong file `data/restaurants.json`:
- 20+ quán ăn mẫu
- Thông tin: tên, địa chỉ, phone, giờ mở, menu, đánh giá, link Google Maps
- Có thể dễ dàng thêm hoặc chỉnh sửa dữ liệu

## 💿 Lưu Trữ Dữ Liệu

### Quán Ăn Yêu Thích
- Lưu trong localStorage của trình duyệt
- Key: `favorites` (array of IDs)

### Đánh Giá & Bình Luận
- Lưu trong localStorage của trình duyệt
- Key: `restaurant_{id}_reviews` (array of reviews)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1000px
- **Large**: > 1000px

## 🔧 Cách Thêm Quán Ăn Mới

1. Mở file `data/restaurants.json`
2. Thêm object mới vào array `restaurants`:

```json
{
  "id": 21,
  "name": "Tên Quán",
  "category": "Phở",
  "district": "Q1",
  "address": "Địa chỉ",
  "phone": "0901234567",
  "googleMapsUrl": "https://maps.app.goo.gl/your-link-here",
  "openTime": "6:00",
  "closeTime": "22:00",
  "priceRange": "$$",
  "rating": 4.5,
  "reviewCount": 42,
  "description": "Mô tả quán",
  "image": "images/restaurants/ten-quan.jpg",
  "images": ["image1.jpg", "image2.jpg"],
  "menu": ["Món 1", "Món 2"],
  "tiktokVideos": [],
  "tags": ["phở", "beef"]
}
```

3. Thêm hình ảnh vào thư mục `images/restaurants/`

## 🎯 Tính Năng Sắp Tới

- [ ] Hệ thống rating & review được lưu server
- [ ] Tích hợp backend API
- [ ] Tính năng booking bàn online
- [ ] Admin panel quản lý quán ăn
- [ ] Thanh toán online
- [ ] Thông báo mobile app

## 🐛 Troubleshooting

### Quán ăn không hiển thị
- Kiểm tra file `data/restaurants.json` đã được load
- Kiểm tra console (F12 > Console tab) xem có lỗi không

### Chỉ đường hoặc bản đồ không hoạt động
- Đảm bảo trường `googleMapsUrl` trong `data/restaurants.json` là một đường link Google Maps hợp lệ.
- **Lưu ý**: Trang bản đồ tổng hợp (`map.html`) sẽ không hoạt động với cấu trúc dữ liệu mới này.

### Yêu thích không lưu
- Kiểm tra localStorage đã enabled trong trình duyệt
- Thử clear cache và cookies

## 📧 Liên Hệ

Email: pmd241203@gmail.com
Phone: (028) 1234 5678

## 📄 License

© 2026 MNIMJEEL HCMC. All rights reserved.

---

**Phiên bản**: 1.0
**Cập nhật lần cuối**: 2026-06-16
=======
# mnimjee-website
>>>>>>> e16dd545db46a873bad0cd6be25dbf28c95e5fe7
