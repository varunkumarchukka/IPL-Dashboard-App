import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamCard from './components/TeamCard'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)

export default App
