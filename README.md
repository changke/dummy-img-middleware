# dummy-img-middleware
Dummy image generator to be used as middleware for grunt-connect.

1. Config grunt-connect, add middleware
```javascript
// ...
connect: {
  local_server: {
    options: {
      // ...
      middleware: require('dummy-img-middleware')
      // ...
    }
  }
}
```

2. In your code use "/dummy-img/width/height" to get dummy images, example:
```html
<img src="/dummy-img/640/400" />
