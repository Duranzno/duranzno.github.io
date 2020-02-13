import React from "react"
import { Intro, Projects, Writing, About } from "@sections"
import { Layout, SEO, Header } from "@common"

export default props => (
  <Layout header={Header}>
    <SEO title="landing" />
    <Intro {...props} />
    <About {...props} />
    <Projects {...props} />
    <Writing {...props} />
  </Layout>
)
