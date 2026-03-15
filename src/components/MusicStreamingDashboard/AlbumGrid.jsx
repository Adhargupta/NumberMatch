import AlbumCard from './AlbumCard';

const AlbumGrid = () => {
  const albums = [
    { title: 'Midnight Dreams', artist: 'The Weeknd' },
    { title: 'Summer Vibes', artist: 'Dua Lipa' },
    { title: 'Thundercat Live', artist: 'Thundercat' },
    { title: 'After Hours', artist: 'The Weeknd' },
    { title: 'Future Nostalgia', artist: 'Dua Lipa' },
    { title: 'Levitating', artist: 'Dua Lipa' },
    { title: 'Blinding Lights', artist: 'The Weeknd' },
    { title: 'Save Your Tears', artist: 'The Weeknd' },
    { title: 'Physical', artist: 'Dua Lipa' },
    { title: 'Good Days', artist: 'SZA' },
  ];

  return (
    <div className="album-grid">
      {albums.map((album, index) => (
        <AlbumCard key={index} title={album.title} artist={album.artist} />
      ))}
    </div>
  );
};

export default AlbumGrid;
