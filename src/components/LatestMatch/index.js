// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const latestMatchDetails2 = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  return (
    <div className="latest-matches-container">
      <div className="venue-details">
        <h1 className="competing-team">{latestMatchDetails2.competingTeam}</h1>
        <p className="date">{latestMatchDetails2.date}</p>
        <p className="venue">{latestMatchDetails2.venue}</p>
        <p className="venue">{latestMatchDetails2.result}</p>
      </div>
      <img
        src={latestMatchDetails2.competingTeamLogo}
        alt={latestMatchDetails2.competingTeam}
        className="competing-team-logo"
      />
      <div>
        <p className="sun-heading">First Innings</p>
        <p className="answer">{latestMatchDetails2.firstInnings}</p>
        <p className="sun-heading">Second Innings</p>
        <p className="answer">{latestMatchDetails2.secondInnings}</p>
        <p className="sun-heading">Man Of The Match</p>
        <p className="answer">{latestMatchDetails2.manOfTheMatch}</p>
        <p className="sun-heading">Umpires</p>
        <p className="answer">{latestMatchDetails2.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
