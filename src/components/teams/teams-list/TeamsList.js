import './TeamsList.scss';

const TeamsList = ({ children }) => {
  return (
    <ul className="teams-list">
      {children}
    </ul>
  )
}

export default TeamsList;