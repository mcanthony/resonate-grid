// Generated by CoffeeScript 1.9.1
(function() {
  var BasicObject, StrokeCircle, TweenMax,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BasicObject = require('./BasicObject');

  TweenMax = require('gsap');

  StrokeCircle = (function(superClass) {
    extend(StrokeCircle, superClass);

    function StrokeCircle() {
      this.animate = bind(this.animate, this);
      return StrokeCircle.__super__.constructor.apply(this, arguments);
    }

    StrokeCircle.prototype.circ = Math.PI * 2;

    StrokeCircle.prototype.quart = Math.PI / 2;

    StrokeCircle.prototype.animate = function(out) {
      var a;
      if (out == null) {
        out = false;
      }
      StrokeCircle.__super__.animate.call(this, out);
      this.radius = this.size[0] / 2;
      a = {
        w: 0
      };
      TweenMax.to(a, 2.7, {
        w: 1,
        delay: 1 - parseInt(out),
        ease: "easeInOutQuart",
        onUpdate: (function(_this) {
          return function() {
            if (!out) {
              _this.ctx.clearRect(0, 0, _this.size[0], _this.size[1]);
            }
            _this.ctx.beginPath();
            _this.ctx.strokeStyle = _this.grad;
            _this.ctx.lineWidth = _this.lineWidth;
            _this.ctx.arc(_this.radius, _this.radius, _this.radius - _this.lineWidth, 0, a.w * _this.circ, false);
            return _this.ctx.stroke();
          };
        })(this),
        onComplete: (function(_this) {
          return function() {
            if (!out) {
              return setTimeout(_this.animate, 2000, true);
            } else {
              return _this.resetShowAnim();
            }
          };
        })(this)
      });
      return null;
    };

    return StrokeCircle;

  })(BasicObject);

  module.exports = StrokeCircle;

}).call(this);