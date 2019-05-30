(function () {
  const appA = document.getElementById('app-a');
  console.log(appA);

  const appB = document.getElementById('app-b');
  console.log(appB);

  appA.addEventListener('selectProduct', function (e) {
    console.log(e);
    appB.setAttribute('product-id', e.detail);
  }, false);
})();