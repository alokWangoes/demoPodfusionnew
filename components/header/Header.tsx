"use client"
import React from "react"
import Link from "next/link"
import "./header.css"
import { useState } from "react"
import NavigationBar from "./NavigationBar"
type HeaderProps = {
  open: boolean
  language: string
  val: string
  languageImage: { EN: string; NL: string; FR: string; DE: string }
  icon: {
    src: string
    alt: string
  }[]
  isNav: boolean
}

const languageImages: HeaderProps["languageImage"] = {
  EN: "/Flags.png",
  NL: "/flag-1.svg",
  FR: "/flag-2.svg",
  DE: "/flag-3.svg",
}

const iconsData: HeaderProps["icon"] = [
  {
    src: "/bxl_linkedin.svg",
    alt: "linkedin-icon",
  },
  {
    src: "/ri_facebook-fill.svg",
    alt: "facebook-icon",
  },
  {
    src: "/mdi_twitter.svg",
    alt: "twitter-icon",
  },
]
const Header = ({ isNav }) => {
  const [open, setOpen] = useState<HeaderProps["open"]>(false)
  const [language, setLanguage] = useState<HeaderProps["language"]>("EN")

  const languageSelector = (val: HeaderProps["val"]) => {
    setLanguage(val)
    setOpen(!open)
  }

  return (
    <>
      <div className="container" style={{ zIndex: "999" }}>
        <div className="row">
          <div className="col-md-3 col-sm-12 col-xl-3">
            <div className="logo-img">
              <img src="/logo.svg" alt="logo-img" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xl-6">
            <div className="top-wrp">
              <div className="social-icons">
                {iconsData &&
                  iconsData.map((item) => {
                    return <img src={item.src} alt={item.alt} />
                  })}
              </div>
              <div className="flag-wrp">
                <img
                  src={languageImages[language] || languageImages.EN}
                  alt="flag"
                />
                <h4
                  style={{ fontFamily: "Aclonica" }}
                  onClick={() => setOpen(!open)}
                >
                  {language}
                </h4>
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
                <div className="" style={{ display: open ? "block" : "none" }}>
                  <div className="languages-header">
                    <div
                      className="inner-language-div"
                      onClick={() => {
                        languageSelector("NL")
                      }}
                    >
                      <img
                        width={18}
                        height={14}
                        src="/flag-1.svg"
                        className="mt-1"
                      />
                      <span>NL</span>
                    </div>
                    <div
                      className="inner-language-div"
                      onClick={() => {
                        languageSelector("FR")
                      }}
                    >
                      <img
                        width={18}
                        height={14}
                        src="/flag-2.svg"
                        className="mt-1"
                      />
                      <span>FR</span>
                    </div>{" "}
                    <div
                      className="inner-language-div"
                      onClick={() => {
                        languageSelector("DE")
                      }}
                    >
                      <img
                        width={18}
                        height={14}
                        src="/flag-3.svg"
                        className="mt-1"
                      />
                      <span>DE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isNav && (
            <div className="col-md-3 col-sm-12 col-xl-3 right-section">
              <Link href="/">
                <span className="button-primary">LOG IN </span>
              </Link>
              <Link href="/">
                <span className="button">SIGN UP</span>
              </Link>
            </div>
          )}
        </div>

        {isNav ? <NavigationBar /> : null}
      </div>
    </>
  )
}
export default Header
