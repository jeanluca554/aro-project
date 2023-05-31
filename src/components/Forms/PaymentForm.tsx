import React from 'react';
import { CreditCard, ErrorMessage, Input } from 'components';
import { Tab } from '@headlessui/react'
import { CreditCardForm } from 'components/Forms/CreditCardForm';
import { PixForm } from 'components/Forms/PixForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function PaymentForm({ data, updateFieldHandler }) {
  return (
    <>
      {data.paymentMethod === "6" ? (
        <PixForm data={data} updateFieldHandler={updateFieldHandler} />
      ) : (
        <CreditCardForm data={data} updateFieldHandler={updateFieldHandler} />
      )}

    </>
  )
}
