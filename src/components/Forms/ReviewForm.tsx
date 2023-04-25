import React from 'react';
import { LoadingAnimation, PaymentResponse } from 'components';


export function ReviewForm({ data }) {
  return (
    <div>
      {data.message === ""
        ? <LoadingAnimation />
        : <PaymentResponse
          message={data.message}
          description={data.description}
        />
        // : (<>
        //   <h1>{data.message}</h1>
        //   <h2>{data.description}</h2>
        // </>)

      }
    </div>
  )
}
