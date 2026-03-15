const NowPlayingCard = () => {
  return (
    <div className="now-playing-card">
      <div className="now-playing-cover"></div>
      <div className="now-playing-title">Dungen Live</div>
      <div className="now-playing-info">2019 • Live Album</div>
      <div className="waveform">
        <span>🎵 ～～～～～～</span>
      </div>
      <div className="player-controls">
        <button className="play-button">▶</button>
        <div className="player-action-buttons">
          <button className="action-button">❤️</button>
          <button className="action-button">↗️</button>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingCard;
