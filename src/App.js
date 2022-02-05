import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LeagueCalendarContainer from './components/LeagueCalendar/LeagueCalendarContainer';
import LeagueListContainer from './components/LeagueList/LeagueListContainer';
import NotFound from './components/NotFound/NotFound';
import TeamCalendarContainer from './components/TeamCalendar/TeamCalendarContainer';
import TeamsListContainer from './components/TeamsList/TeamsListContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path="/league-list" element={<LeagueListContainer />} />
          <Route path="/league-list/league-calendar" element={<LeagueCalendarContainer />} />
          <Route path="/league-list/team-list" element={<TeamsListContainer />}/>
          <Route path="/league-list/team-list/team-calendar" element={<TeamCalendarContainer />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;