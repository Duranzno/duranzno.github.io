import React from 'react'
import { Intro, Projects, Writing, About } from '../components/landing'
import { Layout, SEO } from '../components/common'
import { Header } from '../components/theme'

export default () => (
  <Layout>
    <SEO title="landing" />
    <Header />
    <Intro />
    <About />
    <Projects />
    <Writing />
    {/* <Skills /> */}
    {/* <Contact /> */}
  </Layout>
)
