import React from 'react';
import t from 'prop-types';

import { TagProps, TypeMap } from './interface';

const prefixCls = 'fun-badge';

const Tag: React.FC<TagProps> = ({ children, color = '', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: color,
    }}
    {...rest}
  >
    {children}
  </div>
);

Tag.propTypes = {
  color: String,
};

export default Tag;
