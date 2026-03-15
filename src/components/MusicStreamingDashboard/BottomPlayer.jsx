const BottomPlayer = () => {
  return (
    <div className="bottom-player">
      <div className="player-track-info">
        <div className="player-track-cover"></div>
        <div className="player-track-details">
          <div className="player-track-name">Lady Magnolia</div>
          <div className="player-track-artist">Piero Umiliani</div>
        </div>
      </div>

      <div className="player-center">
        <div className="player-main-controls">
          <button className="player-control-btn">🔀</button>
          <button className="player-control-btn">⏮️</button>
          <button className="player-play-btn">▶</button>
          <button className="player-control-btn">⏭️</button>
          <button className="player-control-btn">🔁</button>
        </div>
        <div className="progress-bar-container">
          <span className="progress-time">1:23</span>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-time">4:32</span>
        </div>
      </div>

      <div className="player-right">
        <button className="player-control-btn">📝</button>
        <button className="player-control-btn">💿</button>
        <div className="volume-control">
          <span className="volume-icon">🔊</span>
          <div className="volume-bar">
            <div className="volume-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
