import { useState } from "react";
import "./App.css";

function App() {
  const channels = [
    {
      name: "Asianet News",
      videoId: "x1bfKawndzs",
      import { useState } from "react";
import "./App.css";

function App() {
  const channels = [
    {
      name: "Asianet News",
      videoId: "x1bfKawndzs",
      logo: "/logos/asianet.png"
    },
    {
      name: "24 News",
      videoId: "nObUcHKZEGY",
      logo: "/logos/24news.png"
    },
    {
      name: "Manorama News",
      videoId: "tgBTspqA5nY",
      logo: "/logos/manorama.png"
    },
    {
      name: "Mathrubhumi News",
      videoId: "RbxEftGN584",
      logo: "/logos/matrubhumi.png"
    },
    {
      name: "MediaOne",
      videoId: "-8d8-c0yvyU",
      logo: "/logos/mediaone.png"
    },
    {
      name: "Reporter TV",
      videoId: "nObUcHKZEGY",
      logo: "/logos/reportertv.png"
    }
  ];

  const [selectedChannel, setSelectedChannel] = useState(channels[0]);

  return (
    <div className="app">
      <header className="header">
        <h1>
          NEWS <span>MALAYALAM</span>
        </h1>

        <nav>
          <a href="#">Home</a>
          <a href="#live">Live TV</a>
          <a href="#channels">Channels</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Malayalam News, Live.</h2>
          <p>All your favourite Malayalam news channels in one place.</p>
        </section>

        <section className="player" id="live">
          <div className="live-label">● LIVE TV</div>

          <h2>{selectedChannel.name}</h2>

          {selectedChannel.videoId ? (
            <iframe
              key={selectedChannel.videoId}
              src={`https://www.youtube.com/embed/${selectedChannel.videoId}`}
              title={selectedChannel.name}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p>Livestream coming soon.</p>
          )}
        </section>

        <section className="channels-section" id="channels">
          <h2>Live News Channels</h2>
          <p className="section-description">
            Choose a channel to start watching.
          </p>

          <div className="channel-grid">
            {channels.map((channel) => (
              <div
                className={`channel-card ${
                  selectedChannel.name === channel.name ? "active-channel" : ""
                }`}
                key={channel.name}
              >
                <div className="channel-logo">
             <img src={channel.logo} alt={`${channel.name} logo`} />
               </div>
                <div className="channel-info">
                  <h3>{channel.name}</h3>
                  <span className="channel-live-status">
                    <span className="status-dot"></span>
                    Live stream
                  </span>
                </div>

                <button
                  className="watch-button"
                  onClick={() => {
                    setSelectedChannel(channel);
                    document.getElementById("live").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                  aria-pressed={selectedChannel.name === channel.name}
                >
                  {selectedChannel.name === channel.name
                    ? "Now Playing"
                    : "Watch Now"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2>About News Malayalam</h2>
          <p>
            Your destination for Malayalam news channels
            and live television broadcasts.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 News Malayalam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
    },
    {
      name: "24 News",
      videoId: "nObUcHKZEGY",
      logo: "/logos/24news.png"
    },
    {
      name: "Manorama News",
      videoId: "tgBTspqA5nY",
      logo: "/logos/manorama.png"
    },
    {
      name: "Mathrubhumi News",
      videoId: "RbxEftGN584",
      logo: "/logos/matrubhumi.png"
    },
    {
      name: "MediaOne",
      videoId: "-8d8-c0yvyU",
      logo: "/logos/mediaone.png"
    },
    {
      name: "Reporter TV",
      videoId: "nObUcHKZEGY",
      logo: "/logos/reportertv.png"
    }
  ];

  const [selectedChannel, setSelectedChannel] = useState(channels[0]);

  return (
    <div className="app">
      <header className="header">
        <h1>
          NEWS <span>MALAYALAM</span>
        </h1>

        <nav>
          <a href="#">Home</a>
          <a href="#live">Live TV</a>
          <a href="#channels">Channels</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Malayalam News, Live.</h2>
          <p>All your favourite Malayalam news channels in one place.</p>
        </section>

        <section className="player" id="live">
          <div className="live-label">● LIVE TV</div>

          <h2>{selectedChannel.name}</h2>

          {selectedChannel.videoId ? (
            <iframe
              key={selectedChannel.videoId}
              src={`https://www.youtube.com/embed/${selectedChannel.videoId}`}
              title={selectedChannel.name}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p>Livestream coming soon.</p>
          )}
        </section>

        <section className="channels-section" id="channels">
          <h2>Live News Channels</h2>
          <p className="section-description">
            Choose a channel to start watching.
          </p>

          <div className="channel-grid">
            {channels.map((channel) => (
              <div
                className={`channel-card ${
                  selectedChannel.name === channel.name ? "active-channel" : ""
                }`}
                key={channel.name}
              >
                <div className="channel-logo">
             <img src={channel.logo} alt={`${channel.name} logo`} />
               </div>
                <div className="channel-info">
                  <h3>{channel.name}</h3>
                  <span className="channel-live-status">
                    <span className="status-dot"></span>
                    Live stream
                  </span>
                </div>

                <button
                  className="watch-button"
                  onClick={() => {
                    setSelectedChannel(channel);
                    document.getElementById("live").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                  aria-pressed={selectedChannel.name === channel.name}
                >
                  {selectedChannel.name === channel.name
                    ? "Now Playing"
                    : "Watch Now"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2>About News Malayalam</h2>
          <p>
            Your destination for Malayalam news channels
            and live television broadcasts.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 News Malayalam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
