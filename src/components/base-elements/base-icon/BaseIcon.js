import { memo } from 'react';

import './BaseIcon.scss';

function BaseIcon({ className, children }) {
  return (
    <i className={`icon ${className}`}>{children}</i >
  )
}

export default memo(BaseIcon);