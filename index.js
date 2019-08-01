var React = require("react");

var P_KEY = "__$RCH__";

var withHooks = function(target) {
    var render = target.prototype.render;

    target.prototype.render = function() {
        var Component = this[P_KEY];
        if (!Component) {
            Component = this[P_KEY] = render.bind(this);
        }
        return React.createElement(Component);
    };

    return target;
};

module.exports = { withHooks: withHooks };
