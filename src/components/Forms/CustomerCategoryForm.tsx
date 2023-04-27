import { CaretRight, Scales, Student } from "@phosphor-icons/react";


export function CustomerCategoryForm({ updateFieldHandler }) {
  return (
    <div>
      <div className="form-control flex flex-col gap-4 mb-6">
        <h2 className='font-medium text-gray-600 pt-2'>Por favor, selecione:</h2>
        <input type="text" name="category" className="hidden" />
        <button
          type="submit"
          onClick={() => updateFieldHandler("category", "lawyer")}
          className='flex items-center justify-between w-full p-4 border border-orange-500 text-gray-700 rounded-lg hover:bg-yellow-200 hover:border-orange-300 transition-all'>
          <div className="flex items-center text-left gap-3 text-sm sm:text-base">
            <Scales size={24} weight="bold" className="text-orange-600" />
            Sou Advogado
          </div>
          < CaretRight size={24} weight="bold" className="text-orange-600" />
        </button>
        <button
          type="submit"
          onClick={() => updateFieldHandler("category", "student")}
          className='flex items-center justify-between w-full p-4 border border-orange-500 text-gray-700 rounded-lg hover:bg-yellow-200 hover:border-orange-300 transition-all'>
          <div className="flex items-center text-left gap-3 text-sm sm:text-base">
            <Student size={24} weight="bold" className="text-orange-600" />
            <p>Sou Estudante de Direito</p>
          </div>
          < CaretRight size={24} weight="bold" className="text-orange-600" />
        </button>
      </div>
    </div>
  )
}
