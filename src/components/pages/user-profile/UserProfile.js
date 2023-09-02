import { memo } from 'react';

import BaseSection from './../../base-elements/base-section/BaseSection';
import BaseIcon from './../../base-elements/base-icon/BaseIcon';

import ProfileHeader from './../../ui-elements/profile-header/ProfileHeader';
import ProfileTabs from './../../ui-elements/profile-tabs/ProfileTabs';
import SearchField from './../../ui-elements/search-field/SearchField';

import TeamsList from './../../teams/teams-list/TeamsList';
import TeamItem from './../../teams/team-item/TeamItem';

import './UserProfile.scss';

function UserProfile() {
  const userData = {
    username: 'Richi',
    notificationsCount: '2',
    avatar: '',
    level: 5
  }


  return (
    <>
      <div className="loading-screen">Loading <span>...</span></div>
      <div>
        <ProfileHeader {...userData} />
        <main className="main container">
          <section className="profile">
            <div className="profile__details">
              <figure>
                <img src={userData.avatar} alt={userData.username} className='image' />
              </figure>
              <p className="profile__level">Level {userData.level}</p>
            </div>
            <p className="profile__username hidden-sm">{userData.username}</p>
          </section>
          <ProfileTabs />
          <BaseSection title="Search Teams">
            <SearchField search="search" arrowUp="arrowUpHandler" arrowDown="arrowDownHandler"></SearchField>
          </BaseSection>
        </main>
      </div>
    </>
  )
}

export default memo(UserProfile)