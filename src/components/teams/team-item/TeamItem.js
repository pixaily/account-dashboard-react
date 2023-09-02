import { ReactComponent, memo } from 'react';

import BaseButton from "../../base-elements/base-button/BaseButton";
import BaseIcon from "../../base-elements/base-icon/BaseIcon";

import IconBadge from './../../../assets/images/team-placeholder@2x.png';
import { ReactComponent as IconStadium } from './../../../assets/icons/stadium.svg';


const TeamItem = ({
  name,
  badgeSrc,
  leagues,
  stadium,
  iconStadium,
  buttonLabel
}) => {

  badgeSrc = badgeSrc ? badgeSrc : IconBadge;

  return (
    <li className="team">
      <div className="team__badge">
        <img src={badgeSrc} alt={name} />
      </div>
      <div className="team__details">
        {/* if leagues */}
        <div className="team__leagues"></div>
        {/* end if leagues */}
        <div className="team__info">
          <div className="team__name" html={name}></div>
          {/* if stadium */}
          <div className="team__stadium">
            <BaseIcon className="icon--stadium">
              <IconStadium />
            </BaseIcon>
            <span className="team__stadium__name" v-html="stadium" ></span>
          </div>
          {/* end stadium */}
        </div>
      </div>
      <div className="team__action" v-if="showButton">
        <BaseButton mode="button" label={buttonLabel} className="button button--primary isFollowing ? 'active' : ''"></BaseButton>
      </div>
    </li>
  )

}

export default memo(TeamItem);