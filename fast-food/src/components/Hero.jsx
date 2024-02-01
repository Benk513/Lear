const Hero = () => {
  return (
      <div className="max-w-[1200px] mx-auto p-4">
          <div className="max-h-[500px] relative">
              {/* overlay */}
              <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col items-center justify-center">
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-500">Foods</span> Delivered</h1>
              </div>
              <img className="w-full max-h-[500px] object-cover " src="https://img.freepik.com/photos-gratuite/burger-boeuf-artisanal-frites-table-bois-fondant-echecs-isoles-fond-noir-ai-generatif_157027-1745.jpg?w=1060&t=st=1706661651~exp=1706662251~hmac=a13fce98a7742ecf07292197ba2c84ffd1304c56db3c9c6266f570ceab23eb7e" alt="hero section image" />
          </div>
    </div>
  )
}

export default Hero