import React from 'react'
import Hero from './(components)/hero'
import AboutUs from './(components)/about-us'
import Team from './(components)/teams'
import Workflow from '@/app/components/workflow'
import Leaders from './(components)/leaders'
import VideoSection from './(components)/video'

const page = () => {
  return (
    <div>
        <main>
            <section>
                <Hero/>
            </section>
            <section>
              <AboutUs/>
            </section>
            <section>
              <Team/>
            </section>
            <section>
              <VideoSection/>
            </section>
            <section>
              <Workflow/>
            </section>
            <section>
              <Leaders/>
            </section>
        </main>
    </div>
  )
}

export default page