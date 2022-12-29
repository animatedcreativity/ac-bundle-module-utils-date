exports = module.exports = exports = module.exports = function() {
  var mod = {
    fill: function(number, length) {
      while (String(number).length < length) number = "0" + String(number);
      return number;
    },
    beginning: function(years) {
      if (typeof years !== "number") years = config.api.years;
      var date = new Date();
      date.setTime(date.getTime() - (years * 365 * 24 * 60 * 60 * 1000));
      return date;
    },
    yesterday: function() {
      var date = new Date();
      date.setTime(date.getTime() - (24 * 60 * 60 * 1000));
      return date;
    },
    format: function(date, separator) {
      if (!app.has(separator)) separator = "/";
      return date.getFullYear() + separator + mod.fill(date.getMonth() + 1, 2) + separator + mod.fill(date.getDate(), 2);
    },
    valid: function(value) {
      var parts = value.split("/");
      if (parts.length !== 3) return false;
      var year = parts[0];
      var month = parts[1];
      var day = parts[2];
      return year.length === 4
      && isNaN(year) !== true
      && Number(year) > 0
      && month.length === 2
      && isNaN(Number(month)) !== true
      && Number(month) > 0
      && day.length === 2
      && isNaN(Number(day)) !== true
      && Number(day) > 0;
    }
  };
  return mod;
}