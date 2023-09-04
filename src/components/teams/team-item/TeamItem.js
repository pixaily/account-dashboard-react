import { ReactComponent, memo, useEffect, useState } from 'react';

import BaseButton from "../../base-elements/base-button/BaseButton";
import BaseIcon from "../../base-elements/base-icon/BaseIcon";

import IconBadge from './../../../assets/images/team-placeholder@2x.png';
import { ReactComponent as IconStadium } from './../../../assets/icons/stadium.svg';


const TeamItem = ({
  id,
  name,
  badgeSrc,
  stadium,
  leagues,
  showButton,
  isFollowing
}) => {
  const [teamBadge] = useState(() => badgeSrc ? `./../../../assets/images/${badgeSrc}` : IconBadge);
  const leaguesEl = (leagues && leagues.join(', '))
  const [buttonLabel, setButtonLabel] = useState('Follow')

  useEffect(() => isFollowing && setButtonLabel('Following'), [buttonLabel])

  return (
    <li className="team">
      <div className="team__badge">
        <img src={teamBadge} alt={name} />
      </div>
      <div className="team__details">
        <div className="team__leagues" dangerouslySetInnerHTML={{ __html: leaguesEl }}></div>
        <div className="team__info">
          <div className="team__name" dangerouslySetInnerHTML={{ __html: name }}></div>
          <div className="team__stadium">
            <BaseIcon className="icon--stadium">
              <IconStadium />
            </BaseIcon>
            <span className="team__stadium__name" dangerouslySetInnerHTML={{ __html: stadium }}></span>
          </div>
        </div>
      </div>
      {showButton &&
        <div className="team__action" v-if="showButton">
          <BaseButton
            mode="button"
            label={buttonLabel}
            className={`button button--primary ${isFollowing ? 'active' : ''}`}></BaseButton>
        </div>
      }
    </li>
  )

}

export default memo(TeamItem);