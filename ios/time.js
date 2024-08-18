function fun(e) {
    var t = new Date(),
      n = t.getFullYear(),
      g = t.getMonth() + 1,
      a = t.getDate(),
      i =
        (t.getDay(),
        "日一二三四五六".charAt(new Date().getDay()),
        t.getHours()),
      o = t.getMinutes(),
      s = t.getSeconds(),
      u = t.getMilliseconds();
    g < 10 && (g = "0" + g),
      a < 10 && (a = "0" + a),
      i < 10 && (i = "0" + i),
      o < 10 && (o = "0" + o),
      s < 10 && (s = "0" + s),
      u < 10 ? (u = "00" + u) : u < 100 && (u = "0" + u),
      (document.getElementById(e.id).innerHTML =
        n +
        "年" +
        g +
        "月" +
        a +
        "日 " +
        i +
        ":" +
        o +
        ":" +
        s +
        " ");
  }
  setInterval("fun(show_time)", 1);