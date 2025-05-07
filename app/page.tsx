import React from 'react'
import Header from './components/header'
import Hero_section from './components/hero_section'
import Logo_slider from './components/logo_slider'
import Perfomance from './components/perfomance'
import Growth from './components/growth'
import Build_team from './components/build_team'
import Steps from './components/steps'
import Workflow from './components/workflow'
import Reviews from './components/reviews'
import WhatsNew from './components/whats_new'
import Footer from './components/footer'
import Newsletter from './components/newsletter'
const page = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <Hero_section />
        </section>
        <Logo_slider background_color="#110E03"  />
        <section>
          <Perfomance />
        </section>
        <section>
          <Growth />
        </section>
        <section>
          <Build_team />
        </section>
        <section>
          <Steps />
        </section>
        <section>
          <Workflow />
        </section>
          <section>
            <Reviews />
          </section>
          <section>
            <WhatsNew />
          </section>
          <section>
            <Newsletter />
          </section>
      </main>
      <Footer />
    </div>
  )
}

export default page