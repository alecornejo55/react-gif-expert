export const getGifs = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=XMoKcEU6N1v0paQ8FPc8TaxAu5pVyJ4J&q=${ category }&limit=20`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;

}