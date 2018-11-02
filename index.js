var React = require("react");

var withHooks = function(target) {
  var render = target.prototype.render;
  var Component = null;

  target.prototype.render = function() {
    if (!Component) {
      Component = render.bind(this);
    }
    return React.createElement(Component);
  };

  return target;
};

module.exports = {withHooks: withHooks};
