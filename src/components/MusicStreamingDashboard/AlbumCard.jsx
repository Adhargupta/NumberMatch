const AlbumCard = ({ title, artist }) => {
  return (
    <div className="album-card">
      <div className="album-cover"></div>
      <div className="album-title">{title}</div>
      <div className="album-artist">{artist}</div>
    </div>
  );
};

export default AlbumCard;
