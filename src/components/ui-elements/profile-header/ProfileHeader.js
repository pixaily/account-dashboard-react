import { memo } from 'react';

import BaseButton from '../../base-elements/base-button/BaseButton';
import BaseIcon from '../../base-elements/base-icon/BaseIcon';

// import { svgLeftArrow } from './../../assets/icons/SvgStore.js';

import arrowLeft from './../../../assets/icons/arrow-left.svg';
import iconNotification from './../../../assets/icons/notification.svg';

function profileHeader({ username, notificationsCount }) {
  const backButtonProps = {
    mode: 'router',
    className: 'very-special-class',
    to: '/',
    label: 'Back',
    labelClasses: 'notext'
  }
  const notificationButtonProps = {
    mode: 'button',
    className: 'notification',
    to: '/',
    label: 'Back',
    labelClasses: 'notification__count',
    notificationsCountStr: notificationsCount?.toString()
  }

  return (
    <header className='header'>
      <div className='header__left'>
        <BaseButton {...backButtonProps}>
          <BaseIcon className={'icon--arrow-left'}>{arrowLeft}</BaseIcon>
        </BaseButton>
      </div>
      <div className='header__center'>
        <div className="header-username hidden-md">
          <p>{username}</p>
        </div>
      </div>
      <div className='header__right'>
        <base-button {...notificationButtonProps}>
          <base-icon className="['icon--notification']">{iconNotification}</base-icon>
        </base-button>
      </div>
    </header>
  )
}

export default memo(profileHeader);