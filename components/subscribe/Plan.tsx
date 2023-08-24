"use client"
import { useState } from "react"
import "./plan.css"

const Plan = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index)
  }
  return (
      <div
        className="text-center pt-20 plan-wrp"
      >
        <div className="grid gap-10 m-auto">
          <div className="">
            <div className="container">
              <div className="bloc-tabs">
                <button
                  className={
                    toggleState === 1 ? "tabs active-tabs font" : "tabs font"
                  }
                  onClick={() => toggleTab(1)}
                >
                  Monthly
                </button>
                <button
                  className={
                    toggleState === 2 ? "tabs active-tabs font" : "tabs font"
                  }
                  onClick={() => toggleTab(2)}
                >
                  Tab 2
                </button>
              </div>

              <div className="content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 sm: grid-cols-2 gap-10 items-start pb-16">
                    <h2>Content 1</h2>
                  </div>
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                >
                  <h2>Content 2</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Plan
