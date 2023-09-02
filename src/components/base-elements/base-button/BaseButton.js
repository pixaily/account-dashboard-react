import { memo } from 'react';

function BaseButton(props) {
  const {
    mode,
    type,
    to,
    className,
    labelClasses,
    label,
    children } = props;

  return (
    <>
      {/* { mode === 'button'} */}
      <button
        type={type ? type : 'button'}
        className={className}
      >
        {/* if button label */}
        <span className={labelClasses}>{label}</span>
        {/* endif */}
        {/* if chilren */}
        {children}
        {/* end if children */}
      </button>
      {/* { mode === 'router'} */}
      {/* router link */}
      {/* { mode === 'link' } */}
      {/* <a href="#"></a> */}
      {/* endif */}
    </>
  )
}

export default memo(BaseButton);
