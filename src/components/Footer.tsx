import img from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="p-4 ">

      <div className="divider" />

      <div className=" container mx-auto grid grid-cols-1 gap-10 py-8 lg:grid-cols-4">

        {/* Logo */}
        <div className="text-center ml-7 lg:text-left">
          <img
            src={img}
            alt="Dev Stack"
            className="mb-4 w-32 mx-auto lg:mx-0 "
          />

          <p className="mx-auto max-w-sm text-gray-600 lg:mx-0">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex justify-center gap-5 font-semibold text-gray-500 lg:justify-start">

            <a href="#" className="hover:text-purple-500">
              GitHub
            </a>

            <a href="#" className="hover:text-purple-500">
              Twitter
            </a>

            <a href="#" className="hover:text-purple-500">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h2 className="text-center lg:text-left mb-4 font-semibold uppercase">
            Product
          </h2>

          <ul className="flex flex-col items-center space-y-2 text-gray-500 lg:items-start">
            <li>
              <a href="#" className="hover:text-purple-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className=" text-center lg:text-left mb-4 font-semibold">
            Company
          </h2>

          <ul className=" flex flex-col items-center space-y-2 text-gray-500 lg:items-start">
            <li>
              <a href="#" className="hover:text-purple-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-center lg:text-left mb-4 font-semibold">
            Legal
          </h2>

          <ul className="flex flex-col items-center space-y-2 text-gray-500 lg:items-start">
            <li>
              <a href="#" className="hover:text-purple-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="divider" />

      {/* Bottom */}
      <div className="text-center container mx-auto flex flex-col justify-between gap-4 py-4 text-sm text-gray-500 sm:flex-row">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex justify-center gap-7 ">
          <a href="#" className="hover:text-purple-500">
            Privacy
          </a>

          <a href="#" className="hover:text-purple-500">
            Terms
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer
