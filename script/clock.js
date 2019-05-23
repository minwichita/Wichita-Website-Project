// The context
let context = {
    hour: 00,
    min: 00,
    sec: 00
  }
  // Declaring DisplayJS
  const $ = new DisplayJS(context);
  // Simply add the "0" before each number
  function n(n){
      var ret = n > 9 ? "" + n: "0" + n;
          ret = ret != 60 ? ret : "00"
      return ret;
  }
  // Dynamically update the content
  $.dynamic(function() {
    const time = new Date();
    context.hour = n(time.getHours());
    context.min = n(time.getMinutes());
    context.sec = n(time.getSeconds() + 1); // Fix from $.live();
  })
  // Rendering the DOM.
  $.var(true);