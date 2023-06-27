import { TicketIcon } from "@heroicons/react/outline"

const Header = () => {
  return (
    <div className="  border-b border-orange-200 border-opacity-50">
      <div className="flex justify-between md:max-w-5xl mx-auto items-center w-full py-3 px-8 md:px-16 gap-6">
        <a href="/">
          <img
            src="/logo.svg"
            alt="LogoAro"
          />
        </a>

        <div className="flex items-center gap-4">
          <span className="">
            <TicketIcon
              className="h-8 md:w-8 text-orange-400 rotate-12" aria-hidden="true"
            />
          </span>
          <span
            className={`w-20 min-[320px]:w-auto mr-3 px-1 py-2 rounded-md font-poppins font-medium md:text-xl text-center text-gray-700 `}>
            Meus ingressos
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header