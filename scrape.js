var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.joann.com/')
  .wait('.subtitle-text')
  .evaluate(function () {
    const deals = document.querySelectorAll('.text-container');
    const dealsList = [].slice.call(deals);

    return dealsList.map(deal => {
      return `${dealsList.childNodes[1].childNodes[1].innerText} are on sale! The deal is ${dealsList.childNodes[1].childNodes[0].innerText}.`
    })
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
