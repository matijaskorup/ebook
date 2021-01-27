{
  ('use strict');
  let $ = (el) => document.querySelector(el);
  let $$ = (el) => Array.from(document.querySelectorAll(el));
  const $on = (el, ev, fn) => {
    Array.isArray(el)
      ? el.forEach((o) => $on(o, ev, fn))
      : el.addEventListener(ev, fn);
    return el;
  };

  let currentDate = () => {
    let months = [
      'JANUAR',
      'FEBRUAR',
      'MARZ',
      'APRIL',
      'MAY',
      'JUNI',
      'JULI',
      'AUGUST',
      'SEPTEMBER',
      'OKTOBER',
      'NOVEMBER',
      'DEZEMBER',
    ];
    let current = new Date();
    let day = current.getDate();
    let month = months[current.getMonth()];
    let year = current.getFullYear();
    let fullDate = `${day} ${month} ${year}`;
    return fullDate;
  };
  $('.date').innerHTML = currentDate();

  let handleOl = () => {
    let headings = $$('.content h2');
    let oList = headings.map((el) => `<li>${el.innerHTML}</li>`);
    return ($('.menu ol').innerHTML = oList
      .join('')
      .replace(',', '')
      .split(' '));
  };

  let handleMenuLi = (el) => {
    let headings = $$('article h2');
    el.forEach((e) =>
      e.addEventListener('click', (event) => {
        let targetLi = event.target.innerHTML;
        headings.filter((heading) =>
          heading.innerHTML === targetLi.replace(/[.]/g, '')
            ? heading.classList.toggle('show-element')
            : ''
        );
      })
    );
  };

  let handleTextSize = () => {
    $$('h2').forEach((el) => el.classList.toggle('handle-h-size'));
    $$('p').forEach((el) => el.classList.toggle('handle-p-size'));
    $('h1').classList.toggle('handle-size');
  };

  let handleMenu = () => {
    handleTextSize();
    handleOl();
    $('.menu-content').classList.toggle('menu-content-show');
    $('.menu-button').classList.toggle('menu-button-show');
    $$('.burger').forEach((el) => el.classList.toggle('burger-show'));
    $('.menu-content span').classList.toggle('show-p');
    if ($('.menu').classList.contains('show')) {
      return $('.menu').classList.remove('show');
    } else {
      return $('.menu').classList.add('show');
    }
  };

  $('.menu-content').addEventListener('click', () => {
    handleMenu();
    handleMenuLi($$('.menu ol li'));
  });
}
