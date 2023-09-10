import React, { useState } from 'react';
import './navbar.css';
import image from '../../assets/emcp logo w writing.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const options = [
    'industries',
    'news',
    'about',
    'team',
    'contact',
    'Corporate-Advisory',
    'Corporate-Finance',
    'Risk-Advisory',
    'Strategic-CEO-and-CFO-Services',
    'Transation-Management-And-M&A',
    'Esg-services',
    'Technology',
    'news/2022/10/31',
    'faisal-galadari',
    'farrukh-siddiqui',
    'khamis-mohamed',
    'ahmed-saeed',
    'jeremy-shaw',
    'george-abraham',
    'A-S-pillai',
    'rupa-shyamraj',
    'yousif-al-suwaidi',
    'mona-zeineldin',
    'zahid-rashid',
    'kaj-christenson',
    'gareth-watts',
    'badr-soueidan',
  ];
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    // Find the closest matches based on the query
    const closestMatches = findClosestMatches(e.target.value);

    // Display the nearest three matches
    setSearchResults(closestMatches.slice(0, 3));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }
    if (searchQuery.toLowerCase() === 'home') {
      navigate(`/`);
    } else {
      const closestMatch = findClosestMatch(searchQuery);

      if (closestMatch) {
        navigate(`/${closestMatch.toLowerCase()}`);
      } else {
        navigate(`/`);
      }
    }
  };

  const findClosestMatch = (query) => {
    const lowercaseQuery = query.toLowerCase();
    let bestMatch = null;
    let bestMatchScore = -1;

    for (const option of options) {
      const lowercaseOption = option.toLowerCase();
      let score = 0;

      for (let i = 0; i < lowercaseQuery.length; i++) {
        if (lowercaseOption.startsWith(lowercaseQuery.slice(0, i + 1))) {
          score = i + 1;
        } else {
          break;
        }
      }

      if (score > bestMatchScore) {
        bestMatch = option;
        bestMatchScore = score;
      }
    }

    return bestMatch;
  };

  const findClosestMatches = (query) => {
    const lowercaseQuery = query.toLowerCase();

    // Sort options by their similarity to the query
    const sortedOptions = options.slice().sort((a, b) => {
      const similarityA = calculateSimilarity(lowercaseQuery, a.toLowerCase());
      const similarityB = calculateSimilarity(lowercaseQuery, b.toLowerCase());
      return similarityB - similarityA;
    });

    return sortedOptions;
  };

  const calculateSimilarity = (query, option) => {
    let score = 0;

    for (let i = 0; i < query.length; i++) {
      if (option.startsWith(query.slice(0, i + 1))) {
        score = i + 1;
      } else {
        break;
      }
    }

    return score;
  };

  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" name="show-search" />
        <input type="checkbox" id="show-menu" name="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src={image} alt="" />
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <a href="/" className="desktop-link">
                Services
              </a>
              <input type="checkbox" id="show-features" name="show-features" />
              <label htmlFor="show-features">Services</label>
              <ul>
                <li>
                  <Link to="/Corporate-Advisory" className={location.pathname === '/Corporate-Advisory' ? 'active' : ''}>
                    Corporate Support
                  </Link>
                </li>
                <li>
                  <Link to="/Corporate-Finance" className={location.pathname === '/Corporate-Finance' ? 'active' : ''}>
                    Corprate Finance
                  </Link>
                </li>
                <li>
                  <Link to="/Risk-Advisory" className={location.pathname === '/Risk-Advisory' ? 'active' : ''}>
                    Risk Advisory
                  </Link>
                </li>
                <li>
                  <Link to="/Strategic-CEO-and-CFO-Services" className={location.pathname === '/Strategic-CEO-and-CFO-Services' ? 'active' : ''}>
                    Strategic CEO & CFO Services
                  </Link>
                </li>
                <li>
                  <Link to="/Transation-Management-And-M&A" className={location.pathname === '/Transation-Management-And-M&A' ? 'active' : ''}>
                    Transaction management and M & A
                  </Link>
                </li>
                <li>
                  <Link to="/ESG-Services" className={location.pathname === '/ESG-Services' ? 'active' : ''}>
                    ESG Services
                  </Link>
                </li>
                <li>
                  <Link to="/Technology" className={location.pathname === '/Technology' ? 'active' : ''}>
                    Technology
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''}>
                Industries
              </Link>
            </li>
            <li>
              <Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>
                News
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>
                The team
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                contact us
              </Link>
            </li>
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon">
          <i className="fas fa-search"></i>
        </label>
        <form className="search-box" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
            value={searchQuery}
            onChange={handleSearch}
          />
          <button type="submit" className="go-icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
          {searchResults.length > 0 && (
          <div className="search-results">
            <ul>
              {searchResults.map((result) => (
                 <Link to={`/${result.toLowerCase()}`}><li key={result}>
                 {result}
                </li></Link>
              ))}
            </ul>
          </div>
        )}
        </form>
        
      </nav>
    </div>
  );
};

export default Navbar;
