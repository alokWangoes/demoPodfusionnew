"use client"
import React from "react"
// import styles from "./footerbox.module.css"
import "./footer-box.css"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { newsLetterSchema } from "./validator"
type footerProps = {
  email: string
  icon: {
    src: string
    alt: string
    className: string
  }[]
  links: string[]
}

const iconsData: footerProps["icon"] = [
  {
    src: "/linkedin.svg",
    alt: "linkedin-icon",
    className: "footer-social-icons-img",
  },
  {
    src: "/facebook.svg",
    alt: "facebook-icon",
    className: "footer-social-icons-img",
  },
  {
    src: "/twitter.svg",
    alt: "twitter-icon",
    className: "footer-social-icons-img",
  },
]

const footerLink1: footerProps["links"] = [
  "Home",
  "Contact",
  "FAQs",
  "Pricing",
  "Documentation",
]
const footerLink2: footerProps["links"] = ["Etsy", "Walmart", "eBay", "Lorem"]

const FooterBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newsLetterSchema),
    defaultValues: {
      email: "",
    },
  })

  const sendEmail = (data: footerProps["email"]) => {
    console.log(data, "sendEmail")
  }
  return (
    <footer className="footer_container">
      <div className="container">
        <div className="row">
          <div className="footer-left-section">
            <div className="footer-logo">
              <img src="/logo.svg" />
              <div className="footer-right-section">
                <div className="quick-links">
                  <span> Quick Links</span>
                </div>
                <div className="footer-stay">
                  <span> Stay updated</span>
                </div>
                <div className="footer-icons">
                  {iconsData &&
                    iconsData.map((item) => {
                      return (
                        <span>
                          <img
                            src={item.src}
                            alt={item.alt}
                            className={item.className}
                          />
                        </span>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-second">
            <span>
              Lorem ipsum dolor sit amet consectetur. Luctus tincidunt neque
              quis sit tristique. Elementum a vitae augue condimentum augue
              ipsum nec.
            </span>
            <div className="footer-link">
              <ul className="footer-links-1">
                {footerLink1 &&
                  footerLink1.map((item) => {
                    return <li>{item}</li>
                  })}
              </ul>
              <ul className="footer-links-2">
                {footerLink2 &&
                  footerLink2.map((item) => {
                    return <li>{item}</li>
                  })}
              </ul>

              <div className="email-input-wrapper">
                <div className="email-title-heading">
                  Please enter your email
                </div>
                <form
                  onSubmit={handleSubmit((data) => {
                    sendEmail(data)
                  })}
                >
                  <div className="input-tab">
                    <input
                      {...register("email")}
                      type="text"
                      className="email-input"
                      placeholder="Email"
                    />
                    <input type="submit" value="Send" className="btn-send" />
                  </div>
                  <div className="text-danger error-msg">
                    {" "}
                    {errors.email?.message}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterBox;
