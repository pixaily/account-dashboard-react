import { memo } from 'react';

function BaseButton({
  mode,
  type,
  classes,
  labelClasses,
  label,
  children
}) {
  return (
    <button>Button</button>
  )
}

export default memo(BaseButton);
