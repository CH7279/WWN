import React from 'react';
import Data from './Data';
import Head from './Head';
import { useSearchParams, matchRoutes, useLocation } from "react-router-dom"

// const routes = [{ path: "/members/:id" }]

// const useCurrentPath = () => {
//   const location = useLocation()
//   const [{ route }] = matchRoutes(routes, location)

//   return route.path
// }



const Home = () => {
    const { pathname } = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();


    return (<></>
    )

}
export default Home;
