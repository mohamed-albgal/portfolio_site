import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
      <Layout>
        <Navbar/>
        <div className=" relative  h-screen w-1/2 bg-red-500 mx-48">
        <div id="text-heading" className=" text-center text-3xl"> ✌🏽 Hello, Me Llaman Mohamed!</div>
        <div className="tex"></div>
        </div>
        
      </Layout>
  )
}
