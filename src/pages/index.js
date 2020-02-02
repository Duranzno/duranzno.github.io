import React from 'react'
import { Intro, Projects, Writing, About } from '../components/landing'
import { Layout, SEO } from '../components/common'

export default () => (
  <Layout>
    <SEO title="landing" />
    <Intro />
    <About />
    <Projects />
    <Writing />
  </Layout>
)
