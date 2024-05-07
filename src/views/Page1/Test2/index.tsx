import React, { useEffect, useState } from 'react';
import { addAge, subAge, update, asyncUpdate } from '@/store/disptch';
import styles from './index.less';
const Index: React.FC = (props: any) => {
  const [page, setPage] = useState('');
  console.log('age=', props?.age);
  useEffect(() => {
    setPage('world');
  }, []);
  const ageR = Math.random() * 100;

  return (
    <div>
      <div>
        用户信息：
        <div>姓名：{props.name}</div>
        <div>年龄：{props.age}</div>
        <div>账号：{props.account}</div>
      </div>
      <div></div>
    </div>
  );
};
export default Index;
