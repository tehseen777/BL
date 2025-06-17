import React from 'react'
import Hero from './(components)/hero'
import PopularBlog from './(components)/popular_bogs'
import RecentBlog from './(components)/recent_blogs'

const page = () => {
  return (
<main>
    <section>
        <Hero/>
    </section>
    <section>
      <PopularBlog/>
    </section>
    <section>
      <RecentBlog/>
    </section>
</main>
  )
}

export default page