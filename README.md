# Portfolio AI Engineer — Quan Minh Nguyen

Website portfolio cá nhân responsive, song ngữ Anh–Việt, tập trung vào AI Agent, Generative AI, backend Python, đánh giá AI và thiết kế sản phẩm. Website mặc định sử dụng giao diện tối; lựa chọn ngôn ngữ và giao diện được lưu trên trình duyệt.

## Công nghệ sử dụng

- React 19 và TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- ESLint

## Chạy dự án trên máy

Yêu cầu Node.js 22 trở lên.

```bash
npm install
npm run dev
```

Vite sẽ hiển thị địa chỉ local, thường là `http://localhost:5173`.

Kiểm tra mã nguồn và tạo bản production:

```bash
npm run lint
npm run build
```

Kết quả build nằm trong thư mục `dist/`. Có thể kiểm tra bản build bằng:

```bash
npm run preview
```

## Cấu trúc thư mục

```text
src/
  components/
    layout/          # Thanh điều hướng, footer, tiêu đề section
    sections/        # Các phần nội dung chính
    ui/              # Button và badge dùng lại
  data/              # Nội dung portfolio song ngữ, có kiểu dữ liệu
  hooks/             # Lưu giao diện và ngôn ngữ
  types/             # Interface TypeScript dùng chung
  App.tsx
  index.css
public/              # Ảnh đại diện, CV và favicon
```

## Cập nhật nội dung

- Thông tin cá nhân và phần giới thiệu: `src/data/profile.ts`
- Kỹ năng: `src/data/skills.ts`
- Dự án: `src/data/projects.ts`
- Kinh nghiệm, học vấn và chứng chỉ: `src/data/experience.ts`
- Để thêm dự án, thêm một object đúng kiểu `Project` vào mảng `projects`.

## Thêm ảnh đại diện và CV

### Ảnh đại diện

Đặt ảnh tại:

```text
public/profile.jpg
```

Nếu chưa có ảnh, website tự động hiển thị monogram **QN**.

### CV

Đặt file PDF tại:

```text
public/QUAN-MINH-NGUYEN-CV-EN.pdf
```

Sau đó đổi `HAS_CV` thành `true` trong `src/App.tsx`. Khi chưa có file, các nút tải CV được vô hiệu hóa an toàn.

## Deploy miễn phí — khuyến nghị GitHub Pages

Dự án đã có sẵn workflow `.github/workflows/deploy-pages.yml` và cấu hình đường dẫn tương đối cho GitHub Pages.

### 1. Tạo repository trên GitHub

Tạo repository mới, ví dụ `my-profile`. Không chọn tạo thêm README hoặc `.gitignore` vì dự án đã có các file này.

### 2. Đưa mã nguồn lên GitHub

Chạy trong thư mục dự án:

```bash
git init
git add .
git commit -m "Create AI Engineer portfolio"
git branch -M main
git remote add origin https://github.com/TEN_GITHUB/my-profile.git
git push -u origin main
```

Thay `TEN_GITHUB` bằng tên tài khoản GitHub của bạn. Nếu repository đã được kết nối với remote thì không chạy lại `git init` và `git remote add origin`.

### 3. Bật GitHub Pages

Trong repository GitHub:

1. Mở **Settings → Pages**.
2. Tại **Build and deployment → Source**, chọn **GitHub Actions**.
3. Mở tab **Actions** và chờ workflow `Deploy portfolio to GitHub Pages` hoàn tất.
4. Website sẽ có địa chỉ dạng `https://TEN_GITHUB.github.io/my-profile/`.

Mỗi lần push lên nhánh `main`, website sẽ tự động build và cập nhật. GitHub Pages phù hợp nhất với portfolio tĩnh này và không cần thẻ thanh toán.

## Lựa chọn miễn phí khác

### Vercel

1. Push dự án lên GitHub.
2. Đăng nhập [Vercel](https://vercel.com/) bằng GitHub.
3. Chọn **Add New → Project**, import repository và nhấn **Deploy**.
4. Vercel tự nhận diện Vite; nếu cần nhập thủ công: Build Command là `npm run build`, Output Directory là `dist`.

Gói Hobby miễn phí phù hợp với portfolio cá nhân, có HTTPS và tự động deploy sau mỗi lần push. Theo điều khoản hiện tại, Hobby dành cho mục đích cá nhân/phi thương mại.

### Netlify

1. Push dự án lên GitHub và đăng nhập [Netlify](https://www.netlify.com/).
2. Chọn **Add new site → Import an existing project**.
3. Chọn repository, đặt Build Command là `npm run build` và Publish Directory là `dist`.
4. Nhấn **Deploy**.

## Trước khi đưa website lên mạng

- Thêm `profile.jpg` và CV nếu muốn.
- Thay canonical placeholder trong `index.html` bằng URL website thật.
- Chạy `npm run lint` và `npm run build`.
- Kiểm tra lại email, GitHub và LinkedIn trên cả desktop lẫn điện thoại.
