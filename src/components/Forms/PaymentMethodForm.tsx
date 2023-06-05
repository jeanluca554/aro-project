import { CaretRight, CreditCard, Scales, Student } from "@phosphor-icons/react";


export function PaymentMethodForm({ updateFieldHandler }) {
  return (
    <div>
      <div className="form-control flex flex-col gap-4 mb-6">
        <h2 className='font-medium text-gray-600 pt-2'>Escolha a forma de pagamento:</h2>
        <input type="text" name="category" className="hidden" />
        <button
          type="submit"
          onClick={() => updateFieldHandler("paymentMethod", "2")}
          className='flex items-center justify-between w-full p-4 border border-orange-500 text-gray-700 rounded-lg hover:bg-orange-200 hover:border-orange-300 transition-all'>
          <div className="flex items-start text-left gap-3 text-sm sm:text-base">
            <CreditCard size={30} weight="bold" className="text-orange-600" />
            <div>
              <p className="font-bold">Cartão de crédito</p>
              <p>Parcele em até 3x sem juros</p>
            </div>
          </div>

          < CaretRight size={24} weight="bold" className="text-orange-600" />
        </button>
        <button
          type="submit"
          onClick={() => updateFieldHandler("paymentMethod", "6")}
          className='flex items-center justify-between w-full p-4 border border-orange-500 text-gray-700 rounded-lg hover:bg-orange-200 hover:border-orange-300 transition-all'>
          <div className="flex items-center text-left gap-3 text-sm sm:text-base">
            <img src="pix.png" alt="" className="w-6" />
            <div>
              <p className="font-bold">Pix</p>
              <p>Pague o valor à vista</p>
            </div>
          </div>
          < CaretRight size={24} weight="bold" className="text-orange-600" />
        </button>
      </div>
    </div>
  )
}
