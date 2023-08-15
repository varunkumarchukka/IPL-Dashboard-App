// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamColor: '',
    latestMatchDetails: '',
    recentMatches: '',
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedList = data.recent_matches.map(eachObj => ({
      id: eachObj.id,
      competingTeam: eachObj.competing_team,
      competingTeamLogo: eachObj.competing_team_logo,
      result: eachObj.result,
      matchStatus: eachObj.match_status,
    }))

    this.setState({
      teamColor: id,
      latestMatchDetails: data.latest_match_details,
      recentMatches: [...updatedList],
      teamBannerUrl: data.team_banner_url,
    })
  }

  render() {
    const {
      teamColor,
      recentMatches,
      teamBannerUrl,
      latestMatchDetails,
    } = this.state

    console.log(recentMatches)
    console.log(latestMatchDetails)

    return (
      <div className={`bg-con ${teamColor}`}>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="latest-matches">Latest Matches</h1>

        <LatestMatch latestMatchDetails={latestMatchDetails} />

        <ul>
          {recentMatches.map(eachObj => (
            <MatchCard recentMatchesList={eachObj} key={eachObj.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
