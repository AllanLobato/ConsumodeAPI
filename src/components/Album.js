import { useState, useEffect } from 'react';
import axios from 'axios';
import NotFound from './pages/NotFound';
import Head from './Head';

function Album() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums').then((result) => {
      setAlbums(result.data);
    });
  });

  const Album = ({ albums }) => {
    return (
      <ol className="list-group list-group-numbered">
        {albums.map((album) => (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">TItle: {album.title}</div>
              id: {album.id}
            </div>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="animeLeft">
      <Head title="Album" />
      {albums ? <Album albums={albums} /> : <NotFound />}
    </div>
  );
}

export default Album;
