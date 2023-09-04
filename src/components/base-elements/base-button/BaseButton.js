import { memo } from 'react';

import './BaseButton.scss'

function BaseButton({ mode, type, path, className, label, labelClasses, children, ...props }) {

  let buttonMarkup;

  if (mode === 'link') {
    buttonMarkup = <a href='path' className={className}>
      {label && <span className={labelClasses}>{label}</span>}
      {children && children}
    </a>;
  } else if (mode === 'router') {
    // buttonMarkup = <RouterProvider router={router} />
    buttonMarkup = <a href={path} router={path} className={className}>
      {label && <span className={labelClasses}>{label}</span>}
      {children && children}
    </a>
  } else {
    buttonMarkup = <button type={type ? type : 'button'} className={className}>
      {label && <span className={labelClasses}>{label}</span>}
      {children && children}
    </button>
  }

  return buttonMarkup;
}

export default memo(BaseButton);
