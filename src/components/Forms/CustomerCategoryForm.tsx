import { CaretRight, Scales, Student } from "@phosphor-icons/react";
import MouseOverPopover from "components/Popover";


export function CustomerCategoryForm({ updateFieldHandler }) {
  return (
    <div>
      <div className="form-control flex flex-col gap-4 mb-4 mt-5">
        <h2 className='font-medium text-gray-600 '>Por favor, selecione:</h2>
        {/* <input type="text" name="category" className="hidden" /> */}




      </div>


      <ul className="grid w-full gap-4">
        <li>
          <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
          <label htmlFor="hosting-small" className="flex items-center justify-between w-full p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-600 peer-checked:text-orange-600 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-600 peer-checked:hover:bg-transparent transition-all">
            <div className="flex items-center text-left gap-3 text-sm sm:text-base">
              <div className="text-lg font-semibold">
                <Scales size={24} weight="bold" />
              </div>
              <div className="">Sou Advogado</div>
            </div>
            <MouseOverPopover
              message={'Selecione apenas se já for um Advogado'}
            />

          </label>
        </li>
        <li>
          <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
          <label htmlFor="hosting-big" className="flex items-center justify-between w-full p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-600 peer-checked:text-orange-600 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-600 peer-checked:hover:bg-transparent transition-all">
            <div className="flex items-center text-left gap-3 text-sm sm:text-base">
              <div className="text-lg font-semibold">
                <Student size={24} weight="bold" />
              </div>
              <div className="">Sou Estudante de Direito</div>
            </div>
            <MouseOverPopover
              message={'Selecione se ainda for um estudante'}
            />
          </label>
        </li>
      </ul>

    </div>
  )
}
