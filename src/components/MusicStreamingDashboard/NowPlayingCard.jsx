import { Play, Heart, Share2 } from 'lucide-react';

const NowPlayingCard = () => {
  return (
    <div className="now-playing-card">
      <div className="now-playing-cover"></div>
      <div className="now-playing-title">Dungen Live</div>
      <div className="now-playing-info">2019 • Live Album</div>
      <div className="waveform">
        <div className="waveform-bars">
          <span className="waveform-bar"></span>
          <span className="waveform-bar"></span>
          <span className="waveform-bar"></span>
          <span className="waveform-bar"></span>
          <span className="waveform-bar"></span>
          <span className="waveform-bar"></span>
        </div>
      </div>
      <div className="player-controls">
        <button className="play-button">
          <Play size={20} fill="currentColor" />
        </button>
        <div className="player-action-buttons">
          <button className="action-button">
            <Heart size={18} />
          </button>
          <button className="action-button">
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingCard;
