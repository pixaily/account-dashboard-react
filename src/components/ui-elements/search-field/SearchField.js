import { ReactComponent, memo } from 'react';
import BaseButton from './../../base-elements/base-button/BaseButton';
import BaseIcon from './../../base-elements/base-icon/BaseIcon';

import { ReactComponent as IconSearch } from './../../../assets/icons/search.svg';
import { ReactComponent as IconClear } from './../../../assets/icons/close.svg';

import './SearchField.scss';

function SearchField() {

  return (
    <div className="search">
      <BaseIcon className="icon--search">
        <IconSearch />
      </BaseIcon>
      <input type="search" placeholder="Search for a team" />
      <BaseButton mode="button" label="clear" className="icon icon--close">
        <BaseIcon className="icon--clear">
          <IconClear />
        </BaseIcon>
      </BaseButton>
    </div>

  )
}

export default memo(SearchField);