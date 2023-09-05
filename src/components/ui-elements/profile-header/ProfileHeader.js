import React, { useState, memo } from 'react';

import BaseButton from '../../base-elements/base-button/BaseButton';
import BaseIcon from '../../base-elements/base-icon/BaseIcon';

import { ReactComponent as IconArrowLeft } from './../../../assets/icons/arrow-left.svg';
import { ReactComponent as IconLogo } from './../../../assets/icons/logo.svg';
import { ReactComponent as IconNotification } from './../../../assets/icons/notification.svg';

import './ProfileHeader.scss';

function ProfileHeader({ username, notificationsCount }) {
  const [backButtonProps] = useState({
    mode: 'router',
    className: 'very-special-class',
    path: '/',
    label: 'Back',
    labelClasses: 'notext'
  });
  const [notificationButtonProps] = useState({
    mode: 'button',
    className: 'notification',
    path: '/',
    label: notificationsCount?.toString(),
    labelClasses: 'notification__count'
  })
  const [logoButtonProps] = useState({
    mode: 'router',
    className: 'logo',
    path: '/',
    label: 'Account Dashboard',
    labelClasses: 'logo__text hidden-sm'
  })

  return (
    <header className='header'>
      <div className='header__left'>
        <BaseButton {...backButtonProps}>
          <BaseIcon className={'icon--arrow-left'}>
            <IconArrowLeft />
          </BaseIcon>
        </BaseButton>
        <BaseButton {...logoButtonProps}>
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

export default memo(ProfileHeader);