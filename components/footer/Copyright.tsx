import React from "react"
import "./copyright.css"
import Link from "next/link"
const currentYear = new Date().getFullYear()
type CopyrightProps = {
  Links: { className: string; title: string; href: string }[]
}
const Links: CopyrightProps["Links"] = [
  {
    className: "intellectual-policy",
    title: "Intellectual Property Policy",
    href: "/",
  },
  {
    className: "terms-service",
    title: "Terms of service",
    href: "/",
  },
  {
    className: "privacy-policy",
    title: "Privacy Policy",
    href: "/",
  },
  {
    className: "security",
    title: "Security",
    href: "/",
  },
]

const Copyright = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="copyright-wrapper">
          <span className="copy-right-name">
            <img
              src="copyrightVector.svg"
              className="copy-right-img"
              alt="copyright-img"
            />
            {currentYear} PODfusion. All rights preserved.
          </span>
          {Links &&
            Links.map((item) => {
              return (
                <Link href={item.href}>
                  <span className={item.className}>{item.title}</span>
                </Link>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Copyright
