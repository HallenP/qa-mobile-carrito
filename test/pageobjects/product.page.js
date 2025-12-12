class ProductPage {
  get addButton() {
    return $('android=new UiSelector().textContains("Add To Cart").className("android.widget.Button")');
  }

  get plusButton() {
    return $('android=new UiSelector().descriptionContains("increase")');
  }

  get cartBadge() {
    return $('id=com.saucelabs.mydemoapp.android:id/cartBadge');
  }

  async addUnits(units) {
    // click (units-1) veces en plus si existe
    for (let i = 1; i < units; i++) {
      try {
        const plus = await this.plusButton;
        if (await plus.isDisplayed()) {
          await plus.click();
          await driver.pause(300);
        } else break;
      } catch (e) {
        // si no existe el botón plus, romper
        break;
      }
    }
    await (await this.addButton).click();
  }
}

module.exports = new ProductPage();
