import React from 'react';

class Home extends React.Component {
    render() {
        return (
          <div className="content">
              <div className="left">
                <h2>Neil</h2>
                <div id="dashboard-panel">
                  <div id="feature-image"><img src="/images/nm-portrait-04-ola160x240_2x.jpg" alt="user pic" />
                  </div>
                  <div id="dashboard">
                    <h2>Messages</h2>
                    <h2>Chat</h2>
                    <h2>Friends</h2>
                    <h2>Edit Profile</h2>
                    <h2>View Profile</h2>
                  </div>
                </div>
                <div className="search">
                    <div id="search-nearby">
                        <h2>Search Nearby</h2>
                        <div className="icon-berry-medium">
                        </div>
                    </div>
                    <div id="search-city">
                        <h2>Search City</h2>
                        <div className="icon-berry-medium"></div>
                    </div>
                    <form id="search-box">
                      <input type="text" required placeholder="Seville" />
                    </form>
                    <div id="advanced-search">
                      <h2>Advanced Search</h2>
                      <div className="icon-berry-medium"></div>
                    </div>
                </div>
              </div>
            <div className="right">
          </div>
        </div>
        );
    }
}

export default Home;