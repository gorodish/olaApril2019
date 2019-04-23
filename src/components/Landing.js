import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="left" id="feature-image"><img src="/images/nm-portrait-04-ola160x240_2x.jpg" alt="user pic" /></div>
        <div className="right">
          <div className="intro">
            <h1>Language Exchange Network</h1>
            <p>Connect with <span className="iconsm">Ola</span>
              <span className="iconexcl">!</span>
              members to spend time practicing your language skills
              <br />
              Browse profiles of those members nearby or search a city you'll be visiting
            </p>
          </div>
          <div className="search">
            <div id="search-nearby">
              <h2>Search Nearby</h2>
              <div className="berry-icon"><img src="/assets/dent-button-cherry-apple-active.png" alt="cherry" /></div>
            </div>
            <div id="search-city">
              <h2>Search City</h2>
              <form id="search-box">
                  <input type="text" required placeholder="Seville" />
              </form>
              <div className="berry-icon"><img src="/assets/dent-button-cherry-apple-active.png" alt="cherry" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;