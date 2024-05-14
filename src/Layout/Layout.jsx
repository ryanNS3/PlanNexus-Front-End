import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Main } from '../components/Main'
import { Header } from '../components/Header'

export const Layout = () => {
  return (
    <div className='grid grid-cols-12 gap-5 mx-8 max-w-[1920px]'>
        <Sidebar/>
        <Main>
            <Header/>
            <Outlet/>
        </Main>
    </div>
  )
}
