class CartPage {
  get cartBadge() {
    return $('id=com.saucelabs.mydemoapp.android:id/cartBadge');
  }

  async validateCart(units) {
    const badge = await this.cartBadge;
    await badge.waitForDisplayed({ timeout: 8000 });
    const text = await badge.getText();
    const value = Number(text) || parseInt(text.replace(/\D/g,'')) || 0;
    if (value !== Number(units)) {
      throw new Error(`El carrito muestra ${value} unidades pero esperaba ${units}`);
    }
  }
}

module.exports = new CartPage();
