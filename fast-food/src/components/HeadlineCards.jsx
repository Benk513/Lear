const HeadlineCards = () => {
  return (
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* card */}
          <div className="rounded-xl relative">
              {/* overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">Sun&apos;s Out , BOGO&apos;s Out</p>
                  <p className="px-2">Through 8/26</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
              </div>
              <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://img.freepik.com/photos-gratuite/fromage-khachapuri-imeretian-vue-laterale-citron_140725-11276.jpg?w=996&t=st=1706672706~exp=1706673306~hmac=9cecf78c874264d119115af87e9343d8e1fdd676bafad582d69818aea0e45325" alt="" />
          </div>

          <div className="rounded-xl relative">
              {/* overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">New Restaurant</p>
                  <p className="px-2">Added Daily</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
              </div>
              <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://img.freepik.com/photos-gratuite/gros-sandwich-hamburger-burger-boeuf-juteux-fromage-tomate-oignon-rouge-table-bois_2829-19631.jpg?size=626&ext=jpg&uid=R66514907&ga=GA1.1.909828294.1705780734&semt=ais" alt="" />
          </div>

          <div className="rounded-xl relative">
              {/* overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">We Deliver Dessert Too</p>
                  <p className="px-2">Tasty Treats</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
              </div>
              <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://img.freepik.com/photos-gratuite/gateau-au-chocolat-decore-fruits-bois-myrtilles-fraises-mures-ai-generative_123827-24046.jpg?size=626&ext=jpg&uid=R66514907&ga=GA1.1.909828294.1705780734&semt=sph" alt="" />
          </div>
          <div className="rounded-xl relative">
              {/* overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">Wrap Sandwitch</p>
                  <p className="px-2">Crispy and Creamy</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
              </div>
              <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://img.freepik.com/photos-premium/enveloppement-gyroscopique-grec-coupe-deux-servi-frites_135427-2481.jpg?size=626&ext=jpg&uid=R66514907&ga=GA1.1.909828294.1705780734&semt=sph" alt="" />
          </div>
      </div>
  )
}

export default HeadlineCards