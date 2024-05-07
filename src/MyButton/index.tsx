import { Button, message } from 'antd';
import React from 'react';
import css from './index.less';
export default function (props) {
  return (
    <div className={css.myBtn}>
      app1 的button
      <Button
        type="primary"
        className={css.cancel}
        onClick={() => message.info({ content: '这是APP1的button' })}
      >
        点击
      </Button>
    </div>
  );
}
