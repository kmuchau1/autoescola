import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
  test("return a product", () => {
    const slang = "primeira-habilitacao-carro-moto";

    const product = useProduct({ slang });

    expect(product.title).toEqual("1ª Habilitação Carro e Moto");
  });

  test("returns undefined if product was not found", () => {
    const slang = "invalid-slang";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe("useProducts()", () => {
  test("return a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
});
