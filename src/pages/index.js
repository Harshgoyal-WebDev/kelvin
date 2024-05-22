import Benefits from '@/components/section/Benefits'
import Breach from '@/components/section/Breach'
import Brief from '@/components/section/Brief'
import Cardwheel from '@/components/section/Cardwheel'
import Faq from '@/components/section/Faq'
import Feature from '@/components/section/Feature'
import Footer from '@/components/section/Footer'
import Header from '@/components/section/Header'
import Hero from '@/components/section/Hero'
import Level from '@/components/section/Level'
import Loader from '@/components/section/Loader'
import Overview from '@/components/section/Overview'

import React from 'react'

function index() {
  return (
    <>
    <Loader/>
    <div className='w-screen h-auto'>
      
      <Header/>
      <Hero />
      
      <Breach/>
      <Brief/>
      <Benefits/>
      <Cardwheel/>
      <Level/>
      <Feature/>
      <Overview/>
      <Faq/>
      <Footer/>
      </div>
    </>
  )
}

export default index
