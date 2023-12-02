# react-1
## react-1项目的子应用 主应用react-

- 子应用配置webpack 
```
const {name} = require('../package.json')

 output: {
        ...
        // qiankun子应用配置
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  devServer: {
        hot: true,
        port: PORT,
        open: true,
         // qiankun子应用配置 允许主应用跨域访问
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
    }
```
- 新增 src/public-path.js 
- 入口到处声明周期方法
- 修改 browserRouter 的basename

```
// 修改子应用basename
let basename = '/'
if((window as any).__POWERED_BY_QIANKUN__){
  basename = '/app-react'
}

```
