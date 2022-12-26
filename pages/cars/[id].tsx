import { useRouter } from 'next/router'

// for SEO, import the Head component, so it is rendered in the HTML.
import Head from 'next/head'

interface Car {
  id: string;
  color: string;
  image: string;
}

export default function Car({ car }: { car: Car }) {

  const router = useRouter()
  const { id } = router.query

  return (<>
    <Head>
      <title>Car with id: {car.id} is {car.color}.</title>
    </Head>
    <h1>{car.id} is {car.color}.</h1>
    {/* <img src={car.image} />  */}
  </>)
}

// For *** Static Generation ***,
// the getStaticProps() function is declared inside the component file.
// When the site is built, Next automatically calls this function and send the 
// results as props to the component itself.


// note that the function is async.
// the keyword await is used to wait for the fetch to complete.
export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);

  // const data also needs to be awaited, because it is a promise.
  const data = await req.json();

  // it returns an object with the props:
  return {
    props: { car: data },
  }

}

// we're working with a dynamic route, so Next has no way of knowing how many pages we have associated with to a dynamic route.
// In order to pre-render ass the car IDs, Next needs to know the IDs in advance, which is why we need to use getStaticPaths().
// getStaticPaths() is a function that is used to generate the paths for the pages.
// getStaticPaths() can also request data from an API or database then return a paths object that contains an array with every route for this dynamic URL.
export async function getStaticPaths() {

  const req = await fetch('http://localhost:3000/cars.json');
  const data = await req.json();

  const paths = data.map(car => {
    return { params: { id: car } }
  })

  return {
    paths,
    fallback: false
  };
}