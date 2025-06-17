import React from 'react'
import Hero from './(components)/hero'
import Teams from './(components)/teams'
import Dream_card from './(components)/dream_card'
import Reviews from '@/app/components/reviews'
import Global from './(components)/global'
import Testimonials from './(components)/testamonials'
import Questions from './(components)/questions'

const page = () => {
  return (
  <main>
    <section>
        <Hero/>
    </section>
    <section>
      <Teams/>
    </section>
    <section>
      <Dream_card/>
    </section>
    <section>
      <Global/>
    </section>
    <section>
     <Testimonials/>
    </section>
    <section>
      <Questions/>
    </section>
    <section>
      <Reviews/>
    </section>
  </main>
  )
}

export default page