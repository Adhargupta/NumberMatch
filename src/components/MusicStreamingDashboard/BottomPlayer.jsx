import { Shuffle, SkipBack, Play, SkipForward, Repeat, ListMusic, Disc, Volume2 } from 'lucide-react';

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
          <button className="player-control-btn">
            <Shuffle size={18} />
          </button>
          <button className="player-control-btn">
            <SkipBack size={18} />
          </button>
          <button className="player-play-btn">
            <Play size={20} fill="currentColor" />
          </button>
          <button className="player-control-btn">
            <SkipForward size={18} />
          </button>
          <button className="player-control-btn">
            <Repeat size={18} />
          </button>
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
        <button className="player-control-btn">
          <ListMusic size={18} />
        </button>
        <button className="player-control-btn">
          <Disc size={18} />
        </button>
        <div className="volume-control">
          <Volume2 className="volume-icon" size={18} />
          <div className="volume-bar">
            <div className="volume-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
