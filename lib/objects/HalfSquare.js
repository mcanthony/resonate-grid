// Generated by CoffeeScript 1.9.1
(function() {
  var BasicObject, Config, HalfSquare, TweenMax,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Config = require('../utils/Config');

  BasicObject = require('./BasicObject');

  TweenMax = require('gsap');

  HalfSquare = (function(superClass) {
    extend(HalfSquare, superClass);

    function HalfSquare() {
      this.animate = bind(this.animate, this);
      return HalfSquare.__super__.constructor.apply(this, arguments);
    }

    HalfSquare.prototype.animate = function(out) {
      var a;
      if (out == null) {
        out = false;
      }
      HalfSquare.__super__.animate.call(this, out);
      this.ctx.moveTo(this.size[0] - this.lineWidth / 2, this.lineWidth / 2);
      a = {
        w: this.lineWidth / 2
      };
      TweenMax.to(a, .3, {
        delay: 1 - parseInt(out),
        ease: "easeInQuart",
        w: this.size[1] - this.lineWidth / 2,
        onUpdate: (function(_this) {
          return function() {
            _this.ctx.lineTo(_this.size[0] - _this.lineWidth / 2, a.w);
            return _this.ctx.stroke();
          };
        })(this),
        onComplete: (function(_this) {
          return function() {
            a = {
              w: _this.size[0] - _this.lineWidth / 2
            };
            return TweenMax.to(a, .3, {
              w: _this.lineWidth / 2,
              ease: "easeInQuart",
              onUpdate: function() {
                _this.ctx.lineTo(a.w, _this.size[1] - _this.lineWidth / 2);
                return _this.ctx.stroke();
              },
              onComplete: function() {
                if (!out) {
                  return setTimeout(_this.animate, 2000, true);
                } else {
                  return _this.resetShowAnim();
                }
              }
            });
          };
        })(this)
      });
      return null;
    };

    return HalfSquare;

  })(BasicObject);

  module.exports = HalfSquare;

}).call(this);
