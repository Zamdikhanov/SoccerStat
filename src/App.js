import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LeagueCalendar from './components/LeagueCalendar/Leaguecalendar';
import LeagueListContainer from './components/LeagueList/LeagueListContainer';
import Nav from './components/Nav/Nav';
import TeamCalendar from './components/TeamCalendar/TeamCalendar';
import TeamsList from './components/TeamsList/TeamsList';


function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <Nav />
        <Routes>
          <Route path="*"
            element={<Home />}
          />
          <Route path="/league-calendar"
            element={<LeagueCalendar />}
          />
          <Route path="/league-list"
            element={<LeagueListContainer />}
          />
          <Route path="/team-calendar"
            element={<TeamCalendar />}
          />
          <Route path="team-list"
            element={<TeamsList />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;