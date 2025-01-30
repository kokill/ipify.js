# ipify.js  
![Tests](https://github.com/github/docs/actions/workflows/test.yml/badge.svg)

installation command
```
npm i ipify.js
```


ipify for browser and server
- no dependecies
- works on browser and server environment
- lightweight < 350 Bytes (minified + Gzip)
- No IE support (Promise polyfill required for IE)
- Node.js requirements (>= 0.12)

## Example 
```javascript

const { ipv4, ipv6 } = require('ipify.js');

const getIP = async () => {
  const ipv4 = await ipv4();
  // 64.233.161.147
  const ipv6 = await ipv6();
  // 2001:0db8:0000:0000:0000:ff00:0042:8329
}
getIP();
```
