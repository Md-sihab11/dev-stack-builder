import IMG from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-390px)] flex-col items-center justify-center gap-10 px-6 py-12 md:gap-12 lg:flex-row lg:justify-between lg:py-0">

      {/* Text */}
      <div className="flex w-full flex-col gap-6 text-center lg:w-1/2 lg:gap-8 lg:text-left">

        <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="bg-linear-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-sm leading-6 text-gray-600 sm:text-base lg:mx-0">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">

          <a
            href="#"
            className="flex-1 whitespace-nowrap rounded-full gradient  px-3 py-2 text-center text-sm font-semibold text-white transition-all hover:from-purple-600 hover:to-pink-600 md:flex-none md:px-6 md:py-3 md:text-base"
          >
            Explore Technologies
          </a>

          <a
            className="flex-1 whitespace-nowrap rounded-full border border-gray-200 px-3 py-2 text-center text-sm transition-all hover:border-purple-400 hover:text-purple-500 md:flex-none md:px-6 md:py-3 md:text-base"
          >
            Learn More
          </a>

        </div>
      </div>

      {/* Image */}
      <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
        <img
          src={IMG}
          alt="Development stack"
          className="w-full max-w-87.5 sm:max-w-105 lg:max-w-125"
        />
      </div>

    </section>
  )
}

export default Banner