const baseURL = "https://dummyjson.com/products";
class ProductsService {
  static async fetchProductsAll() {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Помилка при отриманні списку продуктів:", error);
      throw error;
    }
  }
  static async getSingleProduct(product) {
    try {
      const response = await fetch(`${baseURL}/${product}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Помилка при отриманні продукту:", error);
      throw error;
    }
  }
  static async searchProducts(product) {
    try {
      const response = await fetch(`${baseURL}/search?q=${product}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Помилка при отриманні продукту за url", error);
      throw error;
    }
  }
  static async getAllProductCategories() {
    try {
      const response = await fetch(`${baseURL}/categories`);
      const categories = await response.json();
      return categories;
    } catch (error) {
      console.log("Помилка виникла при отриманні  категорій продуктів", error);
      throw error;
    }
  }
  static async getProductCategories(nameCategory) {
    try {
      const response = await fetch(`${baseURL}/category/${nameCategory}`);
      const category = await response.json();
      return category;
    } catch (error) {
      console.log("Помилка при отриманні категорії:", error);
      throw error;
    }
  }
  static async addNewProduct(productData) {
    try {
      const response = await fetch(`${baseURL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      const addedProduct = await response.json();
      return addedProduct;
    } catch (error) {
      console.log("Помилка при додаванні продукта:", error);
      throw error;
    }
  }
  static async updateProduct(updateElement, productData) {
    try {
      const response = await fetch(`${baseURL}/${updateElement}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      const updatedElement = await response.json();
      return updatedElement;
    } catch (error) {
      console.log("Помилка при оновленні продукта:", updateElement);
      throw error;
    }
  }
  static async deleteProduct(ProductId) {
    try {
      const response = await fetch(`${baseURL}/${ProductId}`, {
        method: "DELETE",
      });
      return response.json();
    } catch (error) {
      console.log("Помилка при видаленні продукта:", error);
      throw error;
    }
  }
  static async fetchProductsWithLimitAndSkip(limit, skip) {
    try {
      const url = `${baseURL}?limit=${limit}&skip=${skip}&select=title,price`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(
        "Помилка при отриманні продуктів з обмеженням та пропуском:",
        error
      );
    }
  }
  static async deleteFiveProducts() {
    const min = 5;
    const max = 1000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const arr = [1, 2, 3, 4, randomNum];
    try {
      const promises = arr.map((number) =>
        fetch(`https://dummyjson.com/products/${number}`, {
          method: "DELETE",
        })
      );
      return promises;
    } catch (e) {
      console.log(e);
      throw error;
    }

    await Promise.all(promises);
  }
}
(async () => {
  try {
    const products = await ProductsService.fetchProductsAll();
    console.log("Список продуктів:", products);

    const oneProduct = await ProductsService.getSingleProduct(5);
    console.log(`Знайдено продукт з id: ${oneProduct.id}`, oneProduct);

    const foundProduct = await ProductsService.searchProducts("phone");
    console.log("Знайдено продукт URL:", foundProduct);

    const categories = await ProductsService.getAllProductCategories();
    console.log("Список категорій продуктів", categories);

    const category = await ProductsService.getProductCategories("laptops");
    console.log("Знайдено категорію:", category);

    const newProduct = { title: "BMW Pencil" };
    const addedProduct = await ProductsService.addNewProduct(newProduct);
    console.log("Добавлено новий продукт :", addedProduct);

    const productIdUpdate = 1;
    const updatedProductData = { title: "iPhone Galaxy +1" };
    const updatedElement = await ProductsService.updateProduct(
      productIdUpdate,
      updatedProductData
    );
    console.log("Оновлений продукт:", updatedElement);

    const productIdToDelete = 1;
    const deletedProduct = await ProductsService.deleteProduct(
      productIdToDelete
    );
    console.log("Видалений продукт:", deletedProduct);

    const limit = 10;
    const skip = 10;
    const prodducts = await ProductsService.fetchProductsWithLimitAndSkip(
      limit,
      skip
    );
    console.log("Список продуктів з обмеженням та пропуском:", prodducts);
    const deleteFiveProducts = await ProductsService.deleteFiveProducts();
    console.log(deleteFiveProducts);
  } catch (error) {
    console.error("Виникла помилка:", error);
  }
})();
