import React, { memo } from 'react';

import BaseButton from '../../base-elements/base-button/BaseButton';
import BaseIcon from '../../base-elements/base-icon/BaseIcon';

import { ReactComponent as IconArrowLeft } from './../../../assets/icons/arrow-left.svg';
import { ReactComponent as IconLogo } from './../../../assets/icons/logo.svg';
import { ReactComponent as IconNotification } from './../../../assets/icons/notification.svg';

import './ProfileHeader.scss';

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
    label: notificationsCount?.toString(),
    labelClasses: 'notification__count'
  }

  return (
    <header className='header'>
      <div className='header__left'>
        <BaseButton {...backButtonProps}>
          <BaseIcon className={'icon--arrow-left'}>
            <IconArrowLeft />
          </BaseIcon>
        </BaseButton>
        <BaseButton mode="router" to="/" label="Account Dashboard" className="logo" labelClasses="logo__text hidden-sm">
          <span className="logo__icon">
            <IconLogo />
          </span>
        </BaseButton>
      </div>
      <div className='header__center'>
        <div className="header-username hidden-md">
          <p>{username}</p>
        </div>
      </div>
      <div className='header__right'>
        <BaseButton {...notificationButtonProps}>
          <BaseIcon className="['icon--notification']">
            <IconNotification />
          </BaseIcon>
        </BaseButton>
      </div>
    </header >
  )
}

export default memo(profileHeader);