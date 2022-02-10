import ProductCard from "./ProductCard"


const ProductList = ({ products }) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className='text-center lg:float-left my-auto mr-6 lg:w-40'>
        <h3 className="text-2xl font-extrabold mb-4 mt-6">
          Shop Our Favorites
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="rounded-lg text-white w-32 px-2 py-3 mt-3 mb-6">Shop</button>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList
