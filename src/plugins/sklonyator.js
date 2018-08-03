export default {

  install: (Vue) => {

    Vue.prototype.$sklonyator = function (num, words) {
      let cases = [2, 0, 1, 1, 1, 2];
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
    }

  }

}