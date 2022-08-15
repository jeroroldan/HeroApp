import HeroesList from "../components/HeroesList";


export const DcPage = () => {

  const namePublisher = 'DC Comics'


  return (
    <>
      <h1>Dc Comics</h1>
      <hr />

      <HeroesList publisher={ namePublisher } />
  
    </>
  )
}

export default DcPage;
