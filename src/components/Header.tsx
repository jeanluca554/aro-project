import { TicketIcon } from "@heroicons/react/outline"

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-3 md:px-16 border-b border-gray-200 gap-6">
      <img
        src="/logo.svg"
        alt="LogoAro"
      />

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
  )
}

export default Header