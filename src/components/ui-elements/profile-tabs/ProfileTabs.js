import { memo } from 'react';

import BaseButton from "../../base-elements/base-button/BaseButton"

import './ProfileTabs.scss';

const ProfileTabs = () => {
  return (
    <section class="container profile-tabs">
      <BaseButton mode="router" className="active" label="My Teams" to="/user-profile"></BaseButton>
      <BaseButton mode="router" label="About" to="/user-profile"></BaseButton>
    </section>
  )
}

export default memo(ProfileTabs);