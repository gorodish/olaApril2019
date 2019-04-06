import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content">
                <div className="left" id="feature-image"><img src="/images/nm-portrait-04-ola160x240_2x.jpg" alt="user pic" /></div>
                <div className="right">
                  <h1>Language Exchange Network</h1>
                  <div className="intro">
                      <p>Connect with <span className="iconsm">Ola</span><span className="iconexcl">!</span> members to spend time practicing your language skills</p>
                      <p>Browse profiles of those members nearby or search a city you'll be visiting</p>
                  </div>
                  <div className="search">
                      <ul>
                          <li className="searchCity">
                              <h2>Search Nearby</h2>
                          </li>
                          <li className="searchCity"><img src="/assets/dent-button-cherry-apple-active.png" alt="cherry" /></li>
                      </ul>
                      <ul>
                          <li className="searchCity">
                              <h2>Search City</h2>
                          </li>
                          <li className="searchCity">
                              <form className="searchBox">
                                  <input type="text" required placeholder="Seville" />
                              </form>
                          </li>
                          <li className="searchCity"><img src="/assets/dent-button-cherry-apple-active.png" alt="cherry" /></li>
                      </ul>
                  </div>
              </div>
        </div>
</div>







    );
  }
}

export default Landing;