import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.less';
const MyButton = React.lazy(() => import('app2Module/MyButton'));
const Index: React.FC = () => {
  const history = useHistory();

  return (
    <div className={styles['home']}>
      这里是app1的首页
      <MyButton />
    </div>
  );
};
export default Index;
