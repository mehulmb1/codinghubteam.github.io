window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 0) nav.className = '';
    else nav.className = 'scroll';
};

function filterSelection(c) {
    var x, i, y;
    x = document.getElementsByClassName("column");
    y = document.getElementsByClassName("ruleslink");
    z = document.getElementsByClassName("rules");
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
    for (i = 0; i < y.length; i++) {
      w3RemoveClass(y[i], "show");
      if (y[i].className.indexOf(c) > -1) w3AddClass(y[i], "show");
    }
    for (i = 0; i < z.length; i++) {
      w3RemoveClass(z[i], "show");
      if (z[i].className.indexOf(c) > -1) w3AddClass(z[i], "show");
    }
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }