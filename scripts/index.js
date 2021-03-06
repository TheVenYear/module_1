const goods = [
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '27 200', 'E7361', './assets/desktopwallpapers.org.ua-3518.jpg'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '27 2100', 'E7361', undefined, 'lens'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '273 200', 'E7361', undefined, 'lens'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '247 200', 'E7361', undefined, 'lens'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '27 200', 'E7361', undefined, 'lens'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '27 200', 'E7361', undefined, 'lens'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '27 200', 'E7361', undefined, 'lens'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '54 200', 'E7361', './assets/desktopwallpapers.org.ua-3518.jpg'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '27 200', 'E7361', './assets/desktopwallpapers.org.ua-3518.jpg'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '27 200', 'E7361', './assets/desktopwallpapers.org.ua-3518.jpg'),
  new Goods('Meikon Sony A6000 16-50 подводный бокс для Sony Alpha A6000 Kit +16-50', '27 200', 'E7361', './assets/desktopwallpapers.org.ua-3518.jpg'),
]

let state = {};

const loadPage = () => {
  const url = new URL(window.location.href);
  const category = url.searchParams.get('filter');
  if (!category) {
    state = goods;
  } else {
    state = goods.filter(item => item.category === category);
  }
  const temp = document.createElement('div');
  temp.className = 'content__body__goods';
  state.forEach(item => {
    temp.append(item.drawToHTML());
  });
  let root = document.querySelector('.content__body__goods');
  root.replaceWith(temp);
}

document.addEventListener('DOMContentLoaded', loadPage);

const selectFilter = (e) => {
  window.history.pushState(undefined, undefined, e.value);
  loadPage();
}

const toggleSidebar = () => {
  let sideMenu = document.querySelector('.side_menu');
  sideMenu.classList.add('activated');
};

document.body.addEventListener('click', e => {
  const sideMenu = document.querySelector('.side_menu');
  const burger = document.querySelector('.header__burger');
  if (!sideMenu.contains(e.target) && !burger.contains(e.target)) {
    sideMenu.classList.remove('activated');
  }
});