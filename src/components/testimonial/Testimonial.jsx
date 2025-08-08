/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Our Team</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' > Our <span className=' text-green-500'>family</span> are work</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/2 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="../img/nimeshbhai.jpg" />
                                <p className="leading-relaxed">The owner of Agro also marketing manager.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Bho Nimeshbhai</h2>
                                <p className="text-gray-500">C.E.O</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/2 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="../img/bhavik.jpg" />
                                <p className="leading-relaxed">The agro is manage by him and Delivery.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">BHOI BHAVIK</h2>
                                <p className="text-gray-500">Manager	</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/2 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="../img/developer.jpg" />
                                <p className="leading-relaxed">The agro website is manage by daveloper.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Bhoi krupal  </h2>
                                <p className="text-gray-500">Developer</p>
                            </div>
                        </div>
                         {/* Testimonial 4 */}
                         <div className="lg:w-1/2 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="../img/develorer2.jpg" />
                                <p className="leading-relaxed">The agro website is manage by daveloper.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Solanki Harshad  </h2>
                                <p className="text-gray-500">Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial