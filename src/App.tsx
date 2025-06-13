import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ClubList from './pages/ClubList'; // Assuming this page exists
import ClubDetail from './pages/ClubDetail'; // Assuming this page exists
import About from './pages/About'; // Assuming this page exists
import NotFound from './pages/NotFound'; // Assuming this page exists

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<ClubList />} />
        <Route path="/clubs/:id" element={<ClubDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;