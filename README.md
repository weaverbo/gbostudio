# [gbostudio](https://gbostudio.vercel.app/)

### 개발 기간

---

2025년 4월 08일 ~ 2025년 6월 09일
<br/>

### 프로젝트 목적

---

### 기술 스택

---

> ### Frontend

- **Framework : Next.js**
- **Language : Typescript**
- **Styling : Tailwind CSS, CSS Modules**
- **Responsive : React-Responsive (useMediaQuery hook)**

> ### Development & Design

- **Libraries : Next Navigation**
- **Design : Figma**
- **VersionControl : GitHub**

### 폴더구조

---

```
prisma
 ┣ migrations
 ┃ ┃ ┗ migration.sql
 ┃ ┗ migration_lock.toml
 ┗ schema.prisma
 public
 ┣ assets
 ┃ ┗ img
 ┗ webclip.png
 src
 ┣ app
 ┃ ┣ (main-layout)
 ┃ ┃ ┣ blog
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ post
 ┃ ┃ ┃ ┗ [id]
 ┃ ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ api
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┣ login
 ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┃ ┗ signup
 ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┣ post
 ┃ ┃ ┃ ┣ comments
 ┃ ┃ ┃ ┃ ┣ [commentId]
 ┃ ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┣ postdetail
 ┃ ┃ ┃ ┗ [id]
 ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┗ review
 ┃ ┃ ┃ ┗ route.tsx
 ┃ ┣ auth
 ┃ ┃ ┗ [actions]
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┣ layout.tsx
 ┃ ┗ providers.tsx
 ┣ components
 ┃ ┣ BlogFeed.tsx
 ┃ ┣ Footer.tsx
 ┃ ┣ Login.tsx
 ┃ ┣ PostDetail.tsx
 ┃ ┣ SignUp.tsx
 ┃ ┗ TopNavBar.tsx
 ┣ hook
 ┃ ┗ useGetCommentsList.ts
 ┣ lib
 ┃ ┗ prisma.ts
 ┣ redux
 ┃ ┣ slices
 ┃ ┃ ┗ authslice.tsx
 ┃ ┗ store.tsx
 ┣ styles
 ┃ ┣ footer.css
 ┃ ┣ globals.css
 ┃ ┣ home.css
 ┃ ┣ login.css
 ┃ ┣ postdetail.css
 ┃ ┣ signup.css
 ┃ ┣ topnavbar.css
 ┃ ┗ topnavbar.module.css
 ┗ utils
 ┃ ┣ server
 ┃ ┃ ┣ commentAccess.ts
 ┃ ┃ ┗ verifyToken.ts
 ┃ ┗ commonApi.ts
```

<br/>

### 기술 선택과 구현

---

### 트러블 슈팅

---
