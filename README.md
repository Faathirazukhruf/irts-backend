# 🚀 IRTS Backend — E-Commerce API (Express + Prisma + PostgreSQL)

Backend ini adalah REST API untuk aplikasi E-Commerce yang digunakan pada technical test Fullstack Developer IRTS.
Proyek ini dibangun dengan arsitektur **MVC (Model–View–Controller)**, menggunakan:

* **Node.js + Express** → HTTP Server
* **Prisma ORM** → Database access
* **PostgreSQL** → Relational database
* **JWT Authentication** → Login/Register customer
* **Redis (optional)** → Caching / session
* **RabbitMQ (optional)** → Queue for async processing

Tujuan backend ini adalah menyediakan API lengkap untuk:

* **Product Catalog (List & Detail)**
* **Customer Authentication (Register & Login)**
* **Admin Product CRUD**
* **Admin Customer CRUD**

---

# 📂 Project Structure


irts-backend/
│
├── prisma/
│   ├── schema.prisma      # Prisma schema & DB models
│   └── migrations/        # Auto-generated migrations
│
├── src/
│   ├── controllers/       # Handle request logic (MVC: Controller)
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── userController.js
│   │
│   ├── middlewares/       # Auth middleware, validation, etc.
│   │   └── authMiddleware.js
│   │
│   ├── models/            # Prisma model wrappers (optional)
│   │
│   ├── routes/            # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── services/          # Business logic layer (Clean Architecture)
│   │
│   ├── utils/             # Helpers (JWT, hashing, etc.)
│   │   └── token.js
│   │
│   ├── server.js          # App entrypoint
│   └── app.js             # Express config (cors, json parser)
│
├── .env                   # Environment variables
├── package.json
└── README.md




# 🛠️ Tech Stack

| Layer     | Technology      |
| --------- | --------------- |
| Runtime   | Node.js 18+     |
| Framework | Express.js      |
| Database  | PostgreSQL      |
| ORM       | Prisma          |
| Auth      | JWT             |
| Optional  | Redis, RabbitMQ |



# ⚙️ Environment Variables

Project membutuhkan file `.env` di root folder:

```
DATABASE_URL="postgresql://irts_user:password123@localhost:5433/irts_db?schema=public"

JWT_SECRET="supersecretjwt"
JWT_EXPIRES_IN="7d"

REDIS_URL=redis://localhost:6379

RABBITMQ_URL=amqp://localhost
PORT=3000
```

---

# 🧱 Database Schema (Prisma)

Contoh model (minimal sesuai requirement test):

```prisma
model User {
  id        Int     @id @default(autoincrement())
  name      String
  email     String  @unique
  password  String
  role      String  @default("customer")
  createdAt DateTime @default(now())
}

model Product {
  id        Int     @id @default(autoincrement())
  name      String
  price     Float
  stock     Int
  image     String?
  createdAt DateTime @default(now())
}
```

---

# 🚀 Installation & Running the Backend

### 1. Clone repository

```bash
git clone https://github.com/Faathirazukhruf/irts-backend.git
cd irts-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup database

Pastikan PostgreSQL berjalan, lalu:

```bash
npx prisma migrate dev --name init
```

### 4. Start development server

```bash
npm start
```

Server running at:

```
http://localhost:3000
```

---

# 🔑 Authentication (JWT)

### Register

POST `/api/auth/register`

Body:

```json
{
  "name": "John Doe",
  "email": "john@mail.com",
  "password": "123456"
}
```

### Login

POST `/api/auth/login`

Returns:

```json
{
  "message": "Login success",
  "token": "xxxxx.yyyyy.zzzzz"
}
```

Token harus dipakai di header:

```
Authorization: Bearer <token>
```

---

# 📦 Product API

### Get all products

```
GET /api/products
```

### Get product detail

```
GET /api/products/:id
```

### Create product (Admin only)

```
POST /api/products
```

### Update product (Admin)

```
PUT /api/products/:id
```

### Delete product (Admin)

```
DELETE /api/products/:id
```

---

# 👤 Customer Management (Admin)

### Get all users

```
GET /api/users
```

### Update user

```
PUT /api/users/:id
```

### Delete user

```
DELETE /api/users/:id
```

---

# 🎯 Additional Enhancements

Backend ini sudah dipersiapkan untuk integrasi:

* **Redis** → caching product list (performance boost)
* **RabbitMQ** → notify order events (async queue)
* **Cloudflared** → tunneling untuk akses publik

Implementasi full bisa dilanjutkan bila dibutuhkan pada evaluasi.

---

# 📌 Notes for Reviewer

Backend dibuat dengan tujuan:

* Struktur folder **bersih dan scalable**
* Mengikuti pattern **MVC + Services**
* Database **relational dan aman**
* Endpoint mudah dipahami oleh Frontend
* Bisa dikembangkan lanjut ke fitur opsional (cart, favorite, checkout)

Dokumentasi sengaja dibuat jelas agar reviewer dapat menjalankan backend tanpa hambatan.

---

# ✅ Status

✔ Backend Stable
✔ PostgreSQL Connected
✔ Prisma Ready
✔ API CRUD Ready
✔ JWT Auth Fully Works
✔ Compatible with React Frontend

---

