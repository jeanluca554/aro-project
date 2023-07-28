import React from 'react'
import { CreditCard, ErrorMessage, Input } from '@/components'
import { Tab } from '@headlessui/react'
import { useFormContext } from 'react-hook-form'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CreditCardForm({ data, updateFieldHandler }) {
  const { register } = useFormContext()

  function handleSelectedTab(index: number) {
    if (index === 0) {
      updateFieldHandler('isSelectedAnotherCreditCardOwner', false)
      updateFieldHandler('identityCreditCard', '')
    } else if (index === 1) {
      updateFieldHandler('isSelectedAnotherCreditCardOwner', true)
    }

    console.log('O index da tab selecionada é:', index)
  }

  return (
    <>
      <div className="my-8">
        <CreditCard
          holder={data.creditCardHolder}
          number={data.creditCardNumber}
          expirationDate={data.creditCardExpirationDate}
          securityCode={data.creditCardSecurityCode}
          focus={data.creditCardFocus}
        />
      </div>

      <div className="mb-8">
        <Input
          placeholder="Seu CPF"
          id="identity"
          name="identity"
          value={data.identity || ''}
          mask={'999.999.999-99'}
          maskChar=" "
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFieldHandler('identity', e.target.value)
          }
        />
        <ErrorMessage field="identity" />
      </div>

      <h2 className="pb-5 pt-1 text-center font-medium text-gray-600">
        Qual cartão deseja utilizar?
      </h2>
      <Tab.Group onChange={(index) => handleSelectedTab(index)}>
        <Tab.List className="mb-4 flex space-x-1 rounded bg-gray-300 p-2">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded py-2.5 text-sm font-medium leading-5 text-orange-600',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white'
                  : 'text-[#6b7280] hover:bg-gray-100 hover:text-gray-600',
              )
            }
          >
            O MEU
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded py-2.5 text-sm font-medium leading-5 text-orange-600',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white'
                  : 'text-[#6b7280] hover:bg-gray-100 hover:text-gray-600',
              )
            }
          >
            OUTRA TITULARIDADE
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>{/* this remove identityCreditCard input */}</Tab.Panel>

          <Tab.Panel>
            <div className="flex-wrap">
              <div className="form-control mb-4 flex flex-col gap-4">
                <div>
                  <Input
                    placeholder="CPF do titular do cartão"
                    id="identityCreditCard"
                    name="identityCreditCard"
                    value={data.identityCreditCard || ''}
                    mask={'999.999.999-99'}
                    maskChar=" "
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updateFieldHandler('identityCreditCard', e.target.value)
                    }
                  />
                  <ErrorMessage field="identityCreditCard" />
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="flex-wrap">
        <div className="form-control mb-8 flex flex-col gap-4">
          <div>
            <Input
              placeholder="Nome impresso no cartão"
              id="creditCardHolder"
              name="creditCardHolder"
              value={data.creditCardHolder || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFieldHandler('creditCardHolder', e.target.value)
              }
              onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                updateFieldHandler('creditCardFocus', e.target.name)
              }
            />
            <ErrorMessage field="creditCardHolder" />
          </div>

          <div>
            <Input
              placeholder="Número do cartão"
              id="creditCardNumber"
              name="creditCardNumber"
              mask="9999 9999 9999 9999"
              maskChar=" "
              value={data.creditCardNumber || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFieldHandler('creditCardNumber', e.target.value)
              }
              onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                updateFieldHandler('creditCardFocus', e.target.name)
              }
            />
            <ErrorMessage field="creditCardNumber" />
          </div>

          <div className="flex flex-wrap ">
            <div className="w-2/3 pr-2">
              <Input
                placeholder="Validade"
                id="creditCardExpirationDate"
                name="creditCardExpirationDate"
                mask="99/9999"
                maskChar=" "
                value={data.creditCardExpirationDate || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  updateFieldHandler('creditCardExpirationDate', e.target.value)
                }
                onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                  updateFieldHandler('creditCardFocus', e.target.name)
                }
              />
              <ErrorMessage field="creditCardExpirationDate" />
            </div>

            <div className="w-1/3 pl-2">
              <Input
                placeholder="CVV"
                id="creditCardSecurityCode"
                name="creditCardSecurityCode"
                mask="999"
                maskChar=" "
                value={data.creditCardSecurityCode || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  updateFieldHandler('creditCardSecurityCode', e.target.value)
                }
                onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                  updateFieldHandler('creditCardFocus', e.target.name)
                }
              />
              <ErrorMessage field="creditCardSecurityCode" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative inline-block">
              <select
                id="installment"
                name="installment"
                {...register('installment')}
                value={data.creditCardInstallmentQuantity || ''}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  updateFieldHandler(
                    'creditCardInstallmentQuantity',
                    e.target.value,
                  )
                }
                onFocus={(e: React.FocusEvent<HTMLSelectElement>) =>
                  updateFieldHandler('creditCardFocus', e.target.name)
                }
                className="mb-1 block w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 p-2 pr-8 text-gray-700 placeholder-gray-500 outline-gray-400 focus:border-orange-500 focus:bg-white focus:outline-none"
              >
                <option value="0">Quantidade de parcelas</option>
                <option value="1">1x sem juros</option>
                <option value="2">2x sem juros</option>
                <option value="3">3x sem juros</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 -mt-1 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <ErrorMessage field="installment" />
          </div>
        </div>
      </div>
    </>
  )
}
