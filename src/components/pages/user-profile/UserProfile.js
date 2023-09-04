import { ReactComponent, memo, useEffect, useState } from 'react';

import BaseSection from './../../base-elements/base-section/BaseSection';
import BaseIcon from './../../base-elements/base-icon/BaseIcon';

import ProfileHeader from './../../ui-elements/profile-header/ProfileHeader';
import ProfileTabs from './../../ui-elements/profile-tabs/ProfileTabs';
import SearchField from './../../ui-elements/search-field/SearchField';

import TeamsList from './../../teams/teams-list/TeamsList';
import TeamItem from './../../teams/team-item/TeamItem';
import { ReactComponent as IconNoResults } from './../../../assets/icons/no-results.svg';

import './UserProfile.scss';

function UserProfile({ username, notificationsCount, avatar, level, ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  const [userData, setUserData] = useState({
    username: username || 'Richi',
    notificationsCount: notificationsCount || '2',
    avatar: avatar || 'profile.png',
    level: level || 5
  })

  useEffect(() => {
    if (Object.entries(userData).length > 0) {
      setIsLoading(false);
    }
  }, [userData])

  const [teams, setTeams] = useState(() => {
    fetch('https://run.mocky.io/v3/d07e361a-8f4b-4fdc-a8fe-bce479a0cbfd')
      .then(res => res.json())
      .then(data => {
        setTeams(data)
      })
  });


  const [showNoMatches, setShowNoMatches] = useState(false);

  const [matches, setMatches] = useState([]);

  const searchOnChangeHandler = (e) => {
    const val = e.target.value.toLowerCase();
    const temp = [];

    setShowNoMatches(false);

    if (val.length > 0) {
      teams.forEach((team) => {
        const markedTeam = {
          ...team,
          highlightName: '',
          highlightStadium: '',
          highlightLeagues: []
        };
        markedTeam.highlightName = checkMatches(val, team.name);
        markedTeam.highlightStadium = checkMatches(val, team.stadium);

        team.leagues.forEach(league => {
          const highlightLeague = checkMatches(val, league);

          if (highlightLeague.length > 0) {
            markedTeam.highlightLeagues.push(highlightLeague);
          }
        })

        if (markedTeam.highlightName.length > 0 || markedTeam.highlightStadium.length > 0 || markedTeam.highlightLeagues.length > 0) {
          temp.push(markedTeam);
        }
      });
      setMatches(temp);
      if (temp.length === 0) {
        setShowNoMatches(true);
      }
    }
  }

  const checkMatches = (search, string) => {
    const nameMatches = filterBy(search, string);
    let highlightText = '';

    if (nameMatches && nameMatches.length > 0) {
      highlightText = highlightMachtes(nameMatches, string)
    }

    return highlightText;
  }

  const filterBy = (part, str) => {
    const rex = new RegExp(part, 'gmi');

    return [...(new Set(str.match(rex)))]
  }

  const highlightMachtes = (matches, str) => {
    let temp = '';

    matches.forEach(match => {
      temp = str.replaceAll(match, `<mark>${match}</mark>`)
    });

    return temp;
  }

  const [followedTeams, setFollowedTeams] = useState([]);

  if (isLoading) {
    return (
      <div className="loading-screen">Loading <span>...</span></div>
    )
  } else {
    return (
      <>
        <ProfileHeader {...userData} />
        <main className="main container">
          <section className="profile">
            <div className="profile__details">
              <figure className='profile__avatar'>
                <img src={require(`./../../../assets/images/${userData.avatar}`)} alt={userData.username} className='image' />
              </figure>
              <p className="profile__level">Level {userData.level}</p>
            </div>
            <p className="profile__username hidden-sm">{userData.username}</p>
          </section>
          <ProfileTabs />
          <BaseSection title="Search Teams">
            <SearchField search="search" arrowUp="arrowUpHandler" arrowDown="arrowDownHandler" changeHandler={searchOnChangeHandler}></SearchField>
            {matches.length > 0 ?
              <TeamsList>
                {matches.map((team, index) => {
                  return (<TeamItem
                    key={index}
                    id={team.id}
                    name={team.highlightName || team.name}
                    stadium={team.highlightStadium || team.stadium}
                    leagues={team.highlightLeagues.length > 0 ? team.highlightLeagues : team.leagues}
                    showButton={true}
                    isFollowing={team.isFollowing}
                  ></TeamItem>)
                  // className={ currentIndex === index ? 'hover' : '' }
                })}
              </TeamsList>
              :
              showNoMatches ?
                <p className='search__no-results'>
                  <BaseIcon className="class--no-results">
                    <IconNoResults />
                  </BaseIcon>
                  <span>No Matches Found</span>
                </p>
                : ''
            }
          </BaseSection>
          <div className='divider'></div>
          <BaseSection title={'My Teams'}>
            {followedTeams.length > 0 ?
              <TeamsList>
                {followedTeams.map((team, index) => {
                  return (
                    <TeamItem
                      key={index}
                      id={team.id}
                      name={team.name}
                      showButton={false}
                    ></TeamItem>
                  )
                })}
              </TeamsList>
              :
              <div className='myteams-empty'>
                <p>You aren't following any teams yet.</p>
              </div>
            }
          </BaseSection>
        </main >
      </>
    )
  }
}

export default memo(UserProfile)