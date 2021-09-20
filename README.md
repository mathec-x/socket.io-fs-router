# socket.io-fs-router

File routing framework like api serverless for socket.io Next Generation.

## Install

```bash
npm install socket.io-fs-router
```
## usage
``` js
    io.use(ioRouter(io or namespace));
    io.on('connection', handleConnection)
```

## folder

 - note: does not work use / without a parameter

```php
├── socket
    ├── test
        └── mount.js            // on('test:mount:get') => module.exports.get
    └── index.js                // on('disconnect')
└── package.json
```

- /socket/index.js

```js
module.exports.disconnect = function handleDisconnect(data) {
    // this.socket => socket 
    // this.io     => namespace
    console.log('[disconnect]', data, this.socket.id);
}
```

- /socket/test/mount.js

```js
module.exports.get = function handleDisconnect(data) { }
```