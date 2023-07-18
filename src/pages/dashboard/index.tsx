import { useContext, useState } from "react";
import { AuthContext } from "contexts/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from 'nookies';
import { getAPIClient } from "providers/axios";
import { Router } from "next/router";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <div className='flex flex-col md:flex-row'>
        <div className='p-7 text-2xl font-semibold'>
          <h1>Conteúdo</h1>
          <span>{user.name}</span>
        </div>

      </div>
    )
  }
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const apiClient = getAPIClient(ctx);
//   const { ['aro.token']: token } = parseCookies(ctx);

//   if (token) {
//     const auth = {
//       headers: { "Authorization": `Bearer ${token}` }
//     }
//     apiClient.get(`/me`, auth).then((response) => {
//       // console.log(response.data.user);

//     })
//       .catch(function (error) {
//         // console.log(error);
//         return {
//           redirect: {
//             destination: '/login',
//             permanent: false,
//           }
//         }
//       });
//   }
//   else {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }
