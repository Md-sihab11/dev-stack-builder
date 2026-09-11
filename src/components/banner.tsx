import IMG from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-390px)] items-center justify-between px-6">

      {/* Text */}
      <div className="flex flex-col gap-8">

        <h1 className="text-5xl font-bold leading-tight text-black lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="bg-linear-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="max-w-xl text-gray-600">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        {/* Buttons */}
        <div className="flex gap-5">
          <button className="rounded-full border-0 bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all hover:from-purple-600 hover:to-pink-600 hover:shadow-lg">
            Explore Technologies
          </button>

          <button className="w-[140px] cursor-pointer rounded-full border border-gray-200 px-4 py-3 transition-all hover:border-purple-400 hover:text-purple-500">
            Learn More
          </button>
        </div>

      </div>

      {/* Image */}
      <div>
        <img
          src={IMG}
          alt="Development stack"
          className="w-[500px]"
        />
      </div>

    </section>
  )
}

export default Banner

