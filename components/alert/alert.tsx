import React from 'react';
import t from 'prop-types';

import { AlertProps, TypeMap } from './interface';

const prefixCls = 'fun-alert';

const types: TypeMap = {
  info: '#5352ED',
  success: '#2ED573',
  error: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, type = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: types[type],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  type: t.oneOf(['info', 'success', 'error', 'warning']),
};

export default Alert;
