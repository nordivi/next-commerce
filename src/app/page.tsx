import Product from "./components/Product";
import {fetchProducts} from "./actions";



export default async function Home() {
  const {formattedProducts, has_more} = await fetchProducts({})


  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0 ">
      <div className="grid grid-cols-1 
      sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 
      xl:gap-6" >
          

      </div>

    </div>
  );
}
