class HomePage {
  get productList() {
    return $$('android.widget.ImageView');
  }

  getProductByName(name) {
    return $(`android=new UiSelector().text("${name}")`);
  }

  async validateProductsLoaded() {
    await driver.pause(1500);
    const list = await this.productList;
    if (!list || list.length === 0) {
      throw new Error('No se detectaron productos en la galería');
    }
  }
}

module.exports = new HomePage();
