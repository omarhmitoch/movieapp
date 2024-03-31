import React from 'react';
import './app.scss';
import Sidebar from './components/sidebar';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/home';
import Input from './components/input';
import { data } from './data/data';
import Movies from './pages/movies';
import TvSeries from './pages/tvseries';
import Bookmarks from './pages/bookmarks';
import { Account } from './pages/login';

function MainContent() {
  const location = useLocation();
  const isAccountPage = location.pathname === '/account';
  const [query, setQuery] = React.useState("");
  const filteredBookmarks = () => data.filter(m => m.isBookmarked && m.title.toLowerCase().includes(query));
  const filteredData = (category:string) => {
    if (category === 'Home') {
      return data.filter(m => (m.category === 'Movie' || m.category === 'TV Series') && m.title.toLowerCase().includes(query));
    } else {
      return data.filter(m => m.category === category && m.title.toLowerCase().includes(query));
    }
  };
  return (
    <div className="layoutContainer">
      {!isAccountPage && <Sidebar />}
      <div className={`${isAccountPage ? "accountWrapper": "container"}`}>
      {
        !isAccountPage && (
          <Input
            value={query}
            onChange={(e:string)=> setQuery(e.toLowerCase())}
          />
        )
      }
      <Routes>
        <Route path="/" element={<Home data={filteredData("Home")} />} />
        <Route path="/movies" element={<Movies data={filteredData("Movie")} />} />
        <Route path="/tvseries" element={<TvSeries data={filteredData("TV Series")}/>} />
        <Route 
          path="/bookmarks" 
          element={
            <Bookmarks 
            data={filteredBookmarks()}
            />
          } 
        />
        <Route path="/account" element={<Account/>} />
      </Routes>
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}
export default App;


