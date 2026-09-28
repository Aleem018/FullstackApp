// 1. Define the TypeScript shape of the API data.
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

// 2. Make the component an asynchronous function.
export default async function StorePage() {
  
  // 3. Fetch the data from the mock API.
  // Next.js pauses rendering here until the network request completes.
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  
  
  // The API wraps its array inside an object called "products"
  const products: Product[] = data.products;

  // 4. Return your TSX layout, embedding the dynamic data.
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-9xl">Mock Storefront</h1>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="relative border border-gray-400 rounded-lg p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200 bg-white bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/50"
            style={{ backgroundImage: `url(${product.thumbnail})` }}
          >
            <div className="z-10">
              <span className="text-xs uppercase tracking-wider text-gray-200 font-bold">
                {product.category}
              </span>
              <h2 className="text-xl font-semibold my-2 text-gray-400 line-clamp-1">
                {product.title}
              </h2>
              <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="z-10 mt-5 flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              <button className="bg-black hover:bg-gray-800 text-white font-medium text-sm px-4 py-2 rounded transition-colors duration-150">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
