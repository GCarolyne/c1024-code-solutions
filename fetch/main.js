'use strict';
// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// async function fetchData(): Promise<void> {
//   console.log('running');
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'GET',
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const users = (await response.json()) as User[];
//     console.log(users);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// console.log('users');
// fetchData();
async function fetchArtObjects() {
  try {
    const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?limit=100'
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchArtObjects();
// async function fetchPoetObjects(): Promise<void> {
//   try {
//     const response = await fetch('https://poetrydb.org/title/Sonnet');
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }
// fetchPoetObjects();
// async function fetchVideoObjects(): Promise<void> {
//   try {
//     const response = await fetch('https://poetrydb.org/title/Sonnet');
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }
// fetchVideoObjects();
// // // const imageUrl = data.config.iiif_url;
// // // const imageId = data.config.image_id;
// // const default = data.config.
// // // console.log(imageUrl,imageId)
// // https://api.artic.edu/api/v1/artworks?limit=3
