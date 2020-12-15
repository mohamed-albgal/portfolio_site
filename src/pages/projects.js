import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Projects from "../components/ProjectBox"

export default () =>  {
  return (
      <Layout>
        <Navbar/>
        <Projects />
      </Layout>
  )
}