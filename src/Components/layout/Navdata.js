import { Bell, Home,TvMinimalPlay,Store } from "lucide-react"
import React from 'react'

export const  Navdata = [


    {
   icon:<Home color="#808080" width="25px" height="25px" />,
        link:'/',

    },
    {
      icon:<Bell color="#808080" width="25px" height="25px" />,
        link:'/meusjogos',
    },
    {
     icon:<TvMinimalPlay color="#808080" width="25px" height="25px" />,
        link:'/novos',
    },
    {
     icon:<Store color="#808080" width="25px" height="25px" />,

        link:'/favoritos',
    }
]