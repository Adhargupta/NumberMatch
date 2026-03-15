import { useState } from 'react';

const PlaylistList = () => {
  const [activeTab, setActiveTab] = useState('Playlists');

  const playlists = [
    { name: 'Indie Sadie', date: '2 days ago' },
    { name: 'Boards of Canada (Full)', date: '5 days ago' },
    { name: 'IC122 at Prince Bar', date: '1 week ago' },
    { name: 'Kwes. Playlist', date: '2 weeks ago' },
    { name: 'Library Music', date: '3 weeks ago' },
  ];

  return (
    <div>
      <div className="playlist-tabs">
        <div
          className={`playlist-tab ${activeTab === 'Playlists' ? 'active' : ''}`}
          onClick={() => setActiveTab('Playlists')}
        >
          Playlists
        </div>
        <div
          className={`playlist-tab ${activeTab === 'Podcasts' ? 'active' : ''}`}
          onClick={() => setActiveTab('Podcasts')}
        >
          Podcasts
        </div>
        <div
          className={`playlist-tab ${activeTab === 'Albums' ? 'active' : ''}`}
          onClick={() => setActiveTab('Albums')}
        >
          Albums
        </div>
      </div>
      <div className="playlist-list">
        {playlists.map((playlist, index) => (
          <div key={index} className="playlist-item">
            <div className="playlist-avatar"></div>
            <div className="playlist-item-info">
              <div className="playlist-item-name">{playlist.name}</div>
              <div className="playlist-item-date">{playlist.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
