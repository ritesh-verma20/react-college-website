import React from 'react'

const Home = () => {
  return (
    <div className="container1" id='home'>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="./images/cake1.avif"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-white-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 class="text-white-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <p class="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave
              tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
              indxgo juiceramps cornhole raw denim forage brooklyn.
              Everyday carry +1 seitan poutine tumeric. Gastropub blue
              bottle austin listicle pour-over, neutra jean shorts keytar
              banjo tattooed umami cardigan.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
    )
}

export default Home