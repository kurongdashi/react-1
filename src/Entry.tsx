import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routerConfig from './router/index';
import NotFound from './views/NotFound';
import Home from '@/views/Home';
import { Spin } from 'antd';

// 处理路由 层
const Index: React.FC<any> = props => {
// 修改子应用basename
let basename = '/'
if((window as any).__POWERED_BY_QIANKUN__){
  basename = '/app-react'
}
 console.log('basename=',basename)
  return (
    // 增加乾坤基础路由配置
    <BrowserRouter basename={basename}>
      {/* 把layout嵌入 Router 中可以即可在layout使用Link  */}
        {/* suspense 处理异步加载组件,路由加载处配置 */}
        <Suspense fallback={<Spin tip="Loading..." />}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {routerConfig.map(({ path, element }, idx) => {
              console.log('path=', path);
              return (
                <Route exact key={idx} path={path} component={element}></Route>
              );
            })}
            {/* <Route component={NotFound}></Route> */}
          </Switch>
        </Suspense>
    </BrowserRouter>
  );
};
export default Index;
