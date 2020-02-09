import React from 'react'
import { Intro, Projects, Writing, About } from '@landing'
import { Layout, SEO } from '@common'

export default props => (
  <Layout>
    <SEO title="landing" />
    <Intro {...props} />
    <About {...props} />
    <Projects {...props} />
    <Writing {...props} />
  </Layout>
)
