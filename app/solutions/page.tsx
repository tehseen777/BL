import React from 'react'
import Hero_section from './(components)/hero'
import Support from './(components)/support'
import Steps from './(components)/steps'
import Team from './(components)/team'
import Oprations from './(components)/oprations'
import Support_2 from './(components)/support-2'
import Reviews from '../components/reviews'
import Card_sections from './(components)/card_sections'
const page = () => {
  return (
   <main>
    <section>
        <Hero_section/>
    </section>
    <section>
        <Support/>
    </section>
    <section>
        <Steps/>
    </section>
    <section>
        <Team/>
    </section>
    <section>
        <Oprations/>
    </section>
    <section>
        <Support_2/>
    </section>

    <section>
        <Card_sections/>
    </section>
    <section>
        <Reviews/>
    </section>
   </main>
  )
}

export default page