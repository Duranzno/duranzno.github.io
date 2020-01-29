import React from 'react'
import { Intro, Projects, Writing } from '../components/landing'
import { Layout, SEO } from '../components/common'
import { Header } from '../components/theme'

export default () => (
  <Layout>
    <SEO title="landing" />
    <Header />
    <Intro />
    <Projects />
    <Writing />
    {/* <Skills /> */}
    {/* <Contact /> */}
  </Layout>
)
