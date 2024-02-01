import { categories } from "../data/data"

const Category = () => {
  return (
      <div className="max-w-[1200px] m-auto px-4 py-12">
          <h1 className="text-orange-600 font-bold text-2xl md:text-3xl lg:text-4xl text-center">Top Rated Menu Items</h1>
      {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 items-center justify-items-center py-6">
              {categories.map((item) => (
                  <div className="flex justify-between items-center bg-gray-100 w-full rounded-lg" key={item.id}>
                      <h2 className="font-bold sm:text-xl px-2">{item.name}</h2>
                      <img className="w-20" src={item.image} alt={item.name} />
                  </div>
              ))}
      </div>
      </div>

  )
}

export default Category