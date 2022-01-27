import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LeagueCalendarContainer from './components/LeagueCalendar/LeagueCalendarContainer';
import LeagueListContainer from './components/LeagueList/LeagueListContainer';
import Nav from './components/Nav/Nav';
import TeamCalendarContainer from './components/TeamCalendar/TeamCalendarContainer';
import TeamsListContainer from './components/TeamsList/TeamsListContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <Nav />
        <Routes>
          <Route path="/league-list/*" element={<LeagueListContainer />} />
          <Route path="/league-calendar/*" element={<LeagueCalendarContainer />} />
          <Route path="team-list/*" element={<TeamsListContainer />}/>
          <Route path="/team-calendar/*" element={<TeamCalendarContainer />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;