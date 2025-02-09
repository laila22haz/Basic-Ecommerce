# Basic E-Commerce Website with React

## 🚀 Project Overview

This is a simple e-commerce web application built with React that allows users to browse and filter products by category. The project demonstrates fundamental concepts such as API fetching, state management, and component-based development.

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript, Bootstrap
- **API:** FakeStoreAPI ([https://fakestoreapi.com/](https://fakestoreapi.com/))

## 📌 Features

- Fetch and display a list of products
- Filter products by category using buttons
- View product details
- Responsive design using Bootstrap

## 📂 Project Structure

```
📦 ecommerce-react
├── 📂 src
│   ├── 📂 components
|   |   |── About.jsx
|   |   |── NavBar.jsx
|   |   |── Product.jsx
|   |   |── ProductDetails.jsx
│   │   ├── ProductList.jsx
│   │   ├── Slider.jsx
│   ├── App.js
│   ├── index.js
├── 📜 package.json
├── 📜 README.md
```

## 🔧 Installation & Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/laila22haz/Basic-Ecommerce.git
   cd Basic-Ecommerce
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start the development server**

   ```sh
   npm start
   ```

## 🔗 API Integration

The project uses the [FakeStoreAPI](https://fakestoreapi.com/) to fetch products and categories.

### Fetch Products

```js
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => console.log(data));
```

### Fetch Categories

```js
fetch("https://fakestoreapi.com/products/categories")
  .then(res => res.json())
  .then(data => console.log(data));
```

### Fetch Products by Category

```js
fetch("https://fakestoreapi.com/products/category/electronics")
  .then(res => res.json())
  .then(data => console.log(data));
```

## 🤝 Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Me lili

