var randomSvg = {

  _width: 320,
  _height: 200,
  _polygonNum: 50,

  init: function(width, height) {
    this._width = Number.isInteger(width) ? Math.abs(width) : 320;
    this._height = Number.isInteger(height) ? Math.abs(height): 200;
    this._polygonNum = (width < 100 ? 20 : this._polygonNum);
  },

  generate: function() {
    var svgCode = '<svg width="' + this._width + '" ' +
      'height="' + this._height + '" ' +
      'viewbox="0 0 ' + this._width + ' ' + this._height + '" ' +
      'xmlns="http://www.w3.org/2000/svg" ' +
      'xmlns:xlink="http://www.w3.org/1999/xlink">';

    svgCode += this.drawFirstRect(this._width, this._height);
    for (var i = 0; i < this._polygonNum; i++) {
      svgCode += this.drawPoly(this._width, this._height);
    }
    svgCode += this.drawText(this._width, this._height);
    svgCode += '</svg>';

    return svgCode;
  },

  drawText: function(w, h) {
    return '<text x="10" y="22" font-family="monospace" font-size="12"' +
      ' style="fill:#fff;">' + w + 'X' + h + '</text>';
  },

  _rand: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getRandomColor: function() {
    var rr = this._rand(0, 127);
    var rg = this._rand(0, 127);
    var rb = this._rand(0, 127);
    
    var s = this._rand(0, 5);
    switch (s) {
      case 0: rr += 128; break;
      case 1: rr += 128; rg += 128; break;
      case 2: rg += 128; break;
      case 3: rg += 128; rb += 128; break;
      case 4: rb += 128; break;
      case 5: rb += 128; rr += 128; break;
    }

    return 'rgb(' + rr + ',' + rg + ',' + rb + ')';
  },

  drawPoly: function(w, h) {
    var r = this._rand(0, 5);
    if (r < 3) {
      return this.drawCircle(w, h);
    } else if (r < 5) {
      return this.drawTriangle(w, h);
    } else {
      return this.drawRect(w, h);
    }
  },

  drawFirstRect: function(w, h) {
    var color = this.getRandomColor();
    return '<rect x="0" y="0" width="' + w + '" ' +
      'height="' + h + '" fill="' + color + '" />';
  },

  drawCircle: function(w, h) {
    var x = this._rand(-w, w);
    var y = this._rand(-h, h);
    var r = this._rand(0, Math.max(w, h));
    var c = this.getRandomColor();
    var fo = this._rand(0, 1000) / 2000;

    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" ' +
      'fill="' + c + '" fill-opacity="' + fo + '" />';
  },

  drawTriangle: function(w, h) {
    var p = [];
    p[0] = this._rand(-w, w);
    p[1] = this._rand(-h, h);
    p[2] = this._rand(-w, w);
    p[3] = this._rand(-h, h);
    p[4] = this._rand(-w, w);
    p[5] = this._rand(-h, h);

    var c = this.getRandomColor();
    var fo = this._rand(0, 1000) / 2000;

    return '<polygon points="' + p.join(' ') + '" fill="' + c + '" ' +
      'fill-opacity="' + fo + '" />';
  },

  drawRect: function(w, h) {
    var x1 = this._rand(-w, w);
    var x2 = this._rand(-w, w);
    var y1 = this._rand(-h, h);
    var y2 = this._rand(-h, h);
    var c = this.getRandomColor();
    var fo = this._rand(0, 1000) / 2000;

    return '<rect x="' + x1 + '" y="' + y1 + '" ' +
      'width="' + Math.abs(x2 - x1) + '" height="' + Math.abs(y2 - y1) + '" ' +
      'fill="' + c + '" fill-opacity="' + fo + '" />';
  }

};

module.exports = randomSvg;