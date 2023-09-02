import { memo } from 'react';
import './BaseSection.scss';
import BaseIcon from '../base-icon/BaseIcon';

function BaseSection({ title, children }) {

  const titleMarkup = () => {
    let result = '';
    if (title) {
      result = (<div className="base-section__heading">
        <h3>{title}</h3>
      </div>)
    }
    return result;
  }

  return (
    <section className='base-section'>
      {titleMarkup()}
      <div className="base-section__content">
        {children}
      </div>
    </section>
  );
}

export default memo(BaseSection);