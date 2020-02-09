import React from 'react'
import { Intro, Projects, Writing, About } from '@landing'
import { Layout, SEO } from '@common'

export default () => (
  <Layout>
    <SEO title="landing" />
    <Intro />
    <About />
    <Projects />
    <Writing />
  </Layout>
)
