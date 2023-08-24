"use client"
import "./banner.css"
const Banner = () => {
  const tryNow = () => {
    alert("Try now")
  }
  return (
    <div className="banner-section container">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-sm-12 banner-content">
          <div className="banner-content">
            <h2>
              Make your <span>own</span> signature <span>style</span>
            </h2>
            <p className="common-content">
              Lorem ipsum dolor sit amet consectetur. Id rhoncus a curabitur
              massa aliquet ipsum velit convallis lacus. Orci magna enim arcu
              orci amet.
            </p>
            <button className="banner-btn" onClick={tryNow}>
              Try Now
            </button>
          </div>
        </div>
        <div className="col-md-6 col-xl-6 col-sm-12 banner-image">
          <img src="/banner.png" alt="banner-img" />
        </div>
      </div>
    </div>
  )
}
export default Banner
