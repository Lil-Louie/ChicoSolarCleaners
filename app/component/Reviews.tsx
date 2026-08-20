

export default function Reviews() {
    return (
        <section id="reviews_section" className='bg-white'>

            <div className="text-center  px-4">
                <h2 className="font-[Poppins] font-medium text-5xl font-bold p-8 text-[#00b2e3] ">
                What Our Clients Say About Us
                </h2>

                <iframe
                    src="https://client.housecallpro.com/reviews/Solano-Solar-Cleaning-LLC/c4a8a79e-a0ff-4998-8354-7f4a3e1ff79e/?theme=dark"
                    title="Solano Solar Cleaning Reviews"
                    width="75%"
                    height="300"
                    loading="lazy"
                    className=" justify-center items-centerblock mx-auto w-[90%] md:w-[70%] lg:w-[60%] h-[900px] rounded-2xl shadow-lg border border-gray-200 bg-black"
                ></iframe>

            </div>

        </section>
    );
  }