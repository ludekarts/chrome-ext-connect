# Connect
> Developer-friendly API over Chrome Extensions Messages system.


## background.js

Initialize connection:
```
connect.init();
```

Basic communication:
```
connect.on('channel', 'action', callback);
connect.send('channel', 'action', payload);
```

Passing messages:
```
connect.pipe('menu', 'save').to('bridge');
connect.duplex('menu', 'bridge', 'action');
```


## content_script.js / popup_script.js

```
const channel = connect.open('bridge');
channel.send('action', payload);
channel.on('action', callback);
```
