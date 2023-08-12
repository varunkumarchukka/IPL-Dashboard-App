// Write your code here
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {name, teamImageUrl} = eachTeamDetails

  return (
    <li>
      <img src={teamImageUrl} alt={name} />
      <h1>{name}</h1>
    </li>
  )
}

export default TeamCard
