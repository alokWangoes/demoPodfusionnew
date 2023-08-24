import React from "react"
import "./main-section.css"

type MainSectionProps = {
  featureCard: {
    src: string
    title: string
    description: string
  }[]
}
const featureData: MainSectionProps["featureCard"] = [
  {
    src: "./Frame-29.png",
    title: "Connect multiple providers together",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam  dignissim turpis integer gravida sed.",
  },
  {
    src: "./Frame 27.png",
    title: "Connect multiple providers together",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam  dignissim turpis integer gravida sed.",
  },
  {
    src: "./Frame 30.png",
    title: "Connect multiple providers together",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam  dignissim turpis integer gravida sed.",
  },
]
const featureData2: MainSectionProps["featureCard"] = [
  {
    src: "./Frame 31.png",
    title: "Multiple print on demand providers",
    description:
      " Lorem ipsum dolor sit amet consectetur. Fames magna amet mattis morbi sit nunc.",
  },
  {
    src: "./Frame 28.png",
    title: "Create your own automation flow",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam  dignissim turpis integer gravida sed.",
  },
  {
    src: "./Frame 32.png",
    title: "Multiple print on demand providers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam  dignissim turpis integer gravida sed.",
  },
]

const MainSection = () => {
  const subscribe = () => {
    alert("Subscribe")
  }
  return (
    <div className="main-section">
      <div className="container">
        <div className="row main">
          <div className="col-md-12 col-xl-12 col-sm-12 mt-3">
            <h3>
              What do you get with <img src="/logo.svg" alt="logo-img" /> ?
            </h3>
          </div>
        </div>
        <div className="row">
          {featureData &&
            featureData.map((item) => {
              return (
                <div className="col-md-4 col-xl-4 col-sm-12">
                  <div className="block-section">
                    <img src={item.src} alt="feature" />
                    <div className="block-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>

        <div className="row py-5">
          {featureData2 &&
            featureData2.map((item) => {
              return (
                <div className="col-md-4 col-xl-4 col-sm-12">
                  <div className="block-section">
                    <img src={item.src} alt="feature" />
                    <div className="block-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div className="container" id="second-wrapper">
        <div className="row">
          <div className="main-section-body">
            <div className="main-section-inner-box">
              <div className="main-section-left-part">
                <div className="main-section-title">
                  <span className="title-span">
                    Lorem ipsum dolor sit amet consectetur
                  </span>
                </div>
                <div>
                  <div className="main-section-content">
                    <span className="content-span">
                      Lorem ipsum dolor sit amet consectetur. Ante leo odio
                      luctus urna est risus euismod. Semper quis porttitor lorem
                      malesuada nisl a non imperdiet. Fames aenean cursus at
                      netus.
                    </span>
                  </div>
                  <div className="main-section-button-div">
                    <button className="main-section-button" onClick={subscribe}>
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>

              <div className="right-part">
                <span className="main-section-right-part"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainSection
