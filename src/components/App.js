import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';



export default function App() {
  const myAlbum = {
    title: 'Photo Album',
    photos: [
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2019%2F04%2FEH-crop-M87-1200x840.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8qf9dr4js51S1jKDR4eU_sw94nQnWo6wc-Qg4hlOpmzWk8L9',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkS-2H6DXvajDpXgKXahuEsel17VoH8-CY38_3NqurBV3T8yQcg'
    ]
  };

  return (
    <>
      <Header />
      <PhotoAlbum photos={myAlbum.photos} title={myAlbum.title} />
      <Footer />
    </>
  );
}
