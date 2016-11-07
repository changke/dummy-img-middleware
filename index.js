module.exports = function(connect, options, middlewares) {
  middlewares.unshift(function(req, res, next) {
    var urlParts = req.url.split('/');
    if (urlParts[1] && urlParts[1].toLowerCase() == 'dummy-img') {
      var width = parseInt(urlParts[2], 10) || 320;
      var height = parseInt(urlParts[3], 10) || 200;
      var svg = require('./lib/svg');
      svg.init(width, height);
      res.setHeader('Content-Type', 'image/svg+xml');
      res.end(svg.generate());
    } else {
      return next();
    }
  });
  return middlewares;
};