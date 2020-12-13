import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import HomePage from "../components/HomePage"

export default function Home() {
  return (
      <Layout>
        <Navbar/>
        <HomePage />
        
      </Layout>
  )
}
