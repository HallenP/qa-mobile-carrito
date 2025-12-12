const HomePage = require('../pageobjects/home.page');
const ProductPage = require('../pageobjects/product.page');
const CartPage = require('../pageobjects/cart.page');

describe('Validación del carrito de compras', () => {
  const scenarios = [
    { PRODUCTO: 'Sauce Labs Backpack', UNIDADES: 1 },
    { PRODUCTO: 'Sauce Labs Bolt T-Shirt', UNIDADES: 1 },
    { PRODUCTO: 'Sauce Labs Bike Light', UNIDADES: 2 }
  ];

  scenarios.forEach(scenario => {
    it(`Agrega ${scenario.UNIDADES} de ${scenario.PRODUCTO}`, async () => {
      // validar carga
      await HomePage.validateProductsLoaded();

      // buscar producto
      const product = await HomePage.getProductByName(scenario.PRODUCTO);
      await product.waitForDisplayed({ timeout: 10000 });
      await product.click();

      // agregar unidades
      await ProductPage.addUnits(scenario.UNIDADES);

      // validar carrito
      await CartPage.validateCart(scenario.UNIDADES);
    });
  });
});
