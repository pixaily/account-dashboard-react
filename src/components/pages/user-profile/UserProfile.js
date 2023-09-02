import { ReactComponent, memo } from 'react';

import BaseSection from './../../base-elements/base-section/BaseSection';
import BaseIcon from './../../base-elements/base-icon/BaseIcon';

import ProfileHeader from './../../ui-elements/profile-header/ProfileHeader';
import ProfileTabs from './../../ui-elements/profile-tabs/ProfileTabs';
import SearchField from './../../ui-elements/search-field/SearchField';

import TeamsList from './../../teams/teams-list/TeamsList';
import TeamItem from './../../teams/team-item/TeamItem';

import { ReactComponent as IconNoResults } from './../../../assets/icons/no-results.svg';

import './UserProfile.scss';

function UserProfile() {
  const userData = {
    username: 'Richi',
    notificationsCount: '2',
    avatar: ' ',
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
            {/* if search has marches show list */}
            <TeamsList>
              <TeamItem></TeamItem>
            </TeamsList>
            {/* else show no mathces found message */}
            <p className='search__no-results'>
              <BaseIcon className="class--no-results">
                <IconNoResults />
              </BaseIcon>
              <span>No Matches Found</span>
            </p>
          </BaseSection>
          <div className='divider'></div>
          <BaseSection title={'My Teams'}>
            {/* If my teams length ===0  */}
            <div className='myteams-empty'>
              <p>You aren't following any teams yet.</p>
            </div>
            {/* Else */}
            <TeamsList>
              <TeamItem></TeamItem>
            </TeamsList>
            {/* EndIf  */}
          </BaseSection>
        </main>
      </div >
    </>
  )
}

export default memo(UserProfile)