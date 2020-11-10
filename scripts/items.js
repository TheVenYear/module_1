class Goods {
  constructor(title = '', price = 0, id = 0, image = './assets/tumblr_natoqqweay1tc258so1_r3_1280.png', category = 'camera') {
    this.title = title;
    this.price = price;
    this.id = id;
    this.category = category;
    this.image = image;
  }

  _createDiv(className = '', content = '', type = 'div') {
    const div = document.createElement(type);
    div.className = className;
    div.textContent = content;
    return div;
  }

  drawToHTML() {
    const item = this._createDiv('content__body__goods__item');
    const info = this._createDiv('content__body__goods__item__info');
    const link = this._createDiv('content__body__goods__item__link');
    const infoContent = this._createDiv('content__body__goods__item__info__content');
    const a = document.createElement('a');
    a.href = 'https://google.com';
    a.className = 'content__body__goods__item__info__title';
    a.textContent = this.title;
    info.appendChild(a);

    infoContent.appendChild(this._createDiv('content__body__goods__item__info__price', `${this.price} руб.`));
    infoContent.appendChild(this._createDiv('content__body__goods__item__info__id', `Товар № ${this.id}`));
    info.appendChild(infoContent);

    item.appendChild(info);
    const img = this._createDiv('content__body__goods__item__link__img', '', 'img');
    img.src = this.image;
    link.appendChild(img);
    const button = this._createDiv('content__body__goods__item__link__btn', 'Купить');
    link.appendChild(button);
    item.appendChild(link);
    return item;
  }
}
