import React from 'react'
import Hero from './(components)/hero'
import Questions from '@/app/pricing/(components)/questions'
import Reviews from '@/app/components/reviews'

const page = () => {
  return (
  <main>
    <section>
        <Hero/>
    <Questions/>
    </section>
    <section>
        <Reviews/>
    </section>

  </main>
  )
}

export default page