import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import SkillsCards from "../components/SkillsCards"

export default function Home() {
  return (
      <Layout>
        <Navbar/>
        <SkillsCards/>
      </Layout>
  )
}
