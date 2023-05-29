import { CaretRight, Scales, Student } from "@phosphor-icons/react";
import MouseOverPopover from "components/Popover";


export function CustomerCategoryForm({ updateFieldHandler, data }) {
  return (
    <div>
      <div className="form-control flex flex-col gap-4 mb-4 mt-5">
        <h2 className='font-medium text-gray-600 '>Por favor, selecione:</h2>
      </div>

      <ul className="grid w-full gap-4">
        <li>
          <input
            type="radio"
            id="category-lawyer"
            name="category"
            value='lawyer'
            className="hidden peer"
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("category", e.target.value)
            }
            required
          />
          <label htmlFor="category-lawyer" className={`flex items-center justify-between w-full p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-600 peer-checked:text-orange-600 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-600 peer-checked:hover:bg-transparent transition-all ${data.category === 'lawyer' ? 'border-orange-600 text-orange-600' : 'border-gray-200 text-gray-500'}`}>
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
          <input
            type="radio"
            id="category-student"
            name="category"
            value='student'
            className="hidden peer"
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("category", e.target.value)
            }
          />
          <label htmlFor="category-student" className={`flex items-center justify-between w-full p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-600 peer-checked:text-orange-600 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-600 peer-checked:hover:bg-transparent transition-all ${data.category === 'student' ? 'border-orange-600 text-orange-600' : 'border-gray-200 text-gray-500'}`}>
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
