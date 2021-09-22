# socket.io-fs-router

File routing framework like api serverless for socket.io Next Generation.

## Install

```bash
npm install socket.io-fs-router
```
## usage
``` js
    io.use(fsRouter); // access io in your custom middleware extend socket
    // or
    io.use(ioRouter(io)); // this = { socket: Socket, io: Namespace }
    io.on('connection', handleConnection)
```

## folder

```php
├── socket
    ├── test
        └── mount.js            // on('test:mount:get') => module.exports.get
    └── index.js                // on('disconnect')
└── package.json
```

- /socket/index.js

```js
/**@type {import("socket.io-fs-router").Handler<String> */
module.exports.disconnect = function handleDisconnect(data) {
    // this = socket 
    this.emit('[disconnect]', data, {socketId: this.id});
}
// or
/**@type {import("socket.io-fs-router").Router<String> */
module.exports.disconnect = function handleDisconnect(data) {
    // this = {io: Namespace, socket: Socket} 
    this.socket.emit('[disconnect]', data, {socketId: this.socket.id});
}

```

- /socket/test/mount.js

```js
module.exports.get = function handleDisconnect(data) { }
```