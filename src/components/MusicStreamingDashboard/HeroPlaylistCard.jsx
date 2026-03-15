const HeroPlaylistCard = () => {
  return (
    <div className="hero-playlist-card">
      <div className="hero-content">
        <div className="hero-label">CURATED PLAYLIST</div>
        <div className="hero-title">R&B Hits</div>
        <div className="hero-description">
          Hot Shot, Confessions, Beyonce, Usher, T-Pain, Mary J. Blige, Alicia Keys
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span>❤️</span>
            <span>2.4k Likes</span>
          </div>
          <div className="hero-stat">
            <span>🎵</span>
            <span>42 Songs</span>
          </div>
          <div className="hero-stat">
            <span>⏱️</span>
            <span>2h 34m</span>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-artist-image" style={{
          background: 'linear-gradient(135deg, #ff6a3d 0%, #e65a2d 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem'
        }}>
          🎤
        </div>
      </div>
    </div>
  );
};

export default HeroPlaylistCard;
