"use client"
import React from "react"
import Copyright from "../footer/Copyright"
import Header from "../header/Header"
import Banner from "./Banner"
import dynamic from "next/dynamic"
import MainSection from "./MainSection"
import FooterBox from "../footer/FooterBox"
const SubscriptionPlan = dynamic(() => import("./SubscriptionPlan"))

const HomePage = () => {
  return (
    <>
      <div className="main-wrp">
        <Header isNav={true}/>
        <Banner />
      </div>
      <MainSection />
      <SubscriptionPlan />
      <FooterBox />
      <Copyright />
    </>
  )
}

export default HomePage;
