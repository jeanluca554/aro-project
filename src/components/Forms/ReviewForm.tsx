import { CreditCard } from 'components/CreditCard';
import React from 'react'

type ReviewProps = {
  message: string;
  description: string;
}

export function ReviewForm({ data }) {
  return (
    <div>
      {data.message === ""
        ? "Carregando transação..."
        : (<>
          <h1>{data.message}</h1>
          <h2>{data.description}</h2>
        </>)

      }
    </div>
  )
}
