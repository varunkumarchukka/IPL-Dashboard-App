// Write your code here

const MatchCard = props => {
  const {recentMatchesList} = props

  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchesList

  return (
    <li>
      <img src={competingTeamLogo} alt={competingTeam} />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
