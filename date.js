//jshint esversion: 6

exports.getDate = function () {                  // anonymous function
                                                        // var getDate = function() { ... }
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {               // we can also use module.exports

  const today = new Date();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

};
