import HeroesList from "../components/HeroesList";


export const MarvelPage = () => {

  const namePublisher = 'Marvel Comics'


  return (
     <>
      <h1>Marvel Page</h1>
      <hr />

      <HeroesList publisher={ namePublisher } />
  
    </>
  )
}

export default MarvelPage;
