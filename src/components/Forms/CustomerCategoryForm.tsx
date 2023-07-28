import { CaretRight, Scales, Student } from '@phosphor-icons/react'
import MouseOverPopover from '@/components/Popover'

export function CustomerCategoryForm({ updateFieldHandler, data }) {
  return (
    <div>
      <div className="form-control mb-4 mt-5 flex flex-col gap-4">
        <h2 className="font-medium text-gray-600 ">Por favor, selecione:</h2>
      </div>

      <ul className="grid w-full gap-4">
        <li>
          <input
            type="radio"
            id="category-lawyer"
            name="category"
            value="lawyer"
            className="peer hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateFieldHandler('category', e.target.value)
            }
          />
          <label
            htmlFor="category-lawyer"
            className={`flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-gray-500  transition-all hover:border-gray-200 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-orange-600 peer-checked:text-orange-600 peer-checked:hover:bg-transparent ${
              data.category === 'lawyer'
                ? 'border-orange-600 text-orange-600'
                : 'border-gray-200 text-gray-500'
            }`}
          >
            <div className="flex items-center gap-3 text-left text-sm sm:text-base">
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
            value="student"
            className="peer hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateFieldHandler('category', e.target.value)
            }
          />
          <label
            htmlFor="category-student"
            className={`flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-gray-500  transition-all hover:border-gray-200 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-orange-600 peer-checked:text-orange-600 peer-checked:hover:bg-transparent ${
              data.category === 'student'
                ? 'border-orange-600 text-orange-600'
                : 'border-gray-200 text-gray-500'
            }`}
          >
            <div className="flex items-center gap-3 text-left text-sm sm:text-base">
              <div className="text-lg font-semibold">
                <Student size={24} weight="bold" />
              </div>
              <div className="">Sou Estudante de Direito</div>
            </div>
            <MouseOverPopover message={'Selecione se ainda for um estudante'} />
          </label>
        </li>
      </ul>
    </div>
  )
}
