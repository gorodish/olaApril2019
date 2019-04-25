import React from 'react';
import ConnectionsHistory from './ConnectionsHistory';

class Home extends React.Component {
    render() {
      return (
        <div className="home--content">
            <div className="home--left">
              <h2>Neil</h2>
              <div className="home--dashboard-panel">
                <div className="home--feature-image"><img src="/images/nm-portrait-04-ola160x240_2x.jpg" alt="user pic" /></div>
                <div className="home--dashboard">
                  <div className="home--messages">
                    <h2>Messages</h2>
                    <div className="icon-berry-small"></div>
                  </div>
                  <div className="home--chat">
                    <h2>Chat</h2>
                    <div className="icon-berry-small"></div>
                  </div>
                  <div className="home--friends">
                    <h2>Friends</h2>
                    <div className="icon-berry-small"></div>
                  </div>
                  <div className="home--edit">
                    <h2>Edit Profile</h2>
                    <div className="icon-berry-small"></div>
                  </div>
                  <div className="home--view">
                    <h2>View Profile</h2>
                    <div className="icon-berry-small"></div>
                  </div>
                </div>
              </div>
              <div className="home--search">
                <div className="home--search-nearby">
                  <h2>Search Nearby</h2>
                  <div className="icon-berry-small"></div>
                </div>
                <div className="home--search-city">
                  <h2>Search City</h2>
                  <div className="icon-berry-small"></div>
                </div>
                <form className="home--search-box">
                <input type="text" required placeholder="Seville" />
              </form>
                <div className="home--advanced-search">
                  <h2>Advanced Search</h2>
                  <div className="icon-berry-small"></div>
                </div>
              </div>
            </div>
            <div className="home--middle">
              <ConnectionsHistory />
            </div>
            <div className="home--right">
          </div>
        </div>
      );
    }
}

export default Home;