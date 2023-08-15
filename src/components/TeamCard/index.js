// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {id, name, teamImageUrl} = eachTeamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo-img" />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
