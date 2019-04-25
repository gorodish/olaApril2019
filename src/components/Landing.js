import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing--content">
        <div className="landing--left">
          <div className="landing--feature-image">
            <img src="/images/nm-portrait-04-ola160x240_2x.jpg" alt="user pic" />
          </div>
        </div>
        <div className="landing--middle">
          <div className="landing--intro">
            <h1>Language Exchange Network</h1>
            <p>Connect with <span className="iconsm">Ola</span>
              <span className="iconexcl">! </span>
              members to spend time practicing your language skills
              <br />
              Browse profiles of those members nearby or search a city you'll be visiting
            </p>
          </div>
          <div className="landing--search">
            <div className="landing--search-nearby">
              <h2>Search Nearby</h2>
              <div className="icon-berry-medium"></div>
            </div>
            <div className="landing--search-city">
              <h2>Search City</h2>
              <form className="landing--search-box">
                  <input type="text" required placeholder="Seville" />
              </form>
              <div className="icon-berry-medium"></div>
            </div>
          </div>
        </div>
        <div className="landing--right"></div>
      </div>
    );
  }
}

export default Landing;