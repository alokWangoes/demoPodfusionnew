"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import "./automation-page.css"
import FooterBox from "../footer/FooterBox"
import Header from "../header/Header"
import SideBar from "./SideBar"
import SuccessIcon from "../../public/automation-icons/Success.svg"
import SettingIcon from "../../public/settingicon.svg"
import AutomationActionIcon from "../../public/automation-icons/automation-action.svg"
import ActiveIcon from "../../public/automation-icons/Active.svg"
import InActiveIcon from "../../public/automation-icons/Inactive.svg"
import FailedIcon from "../../public/automation-icons/Failed.svg"
import StartIcon from "../../public/automation-icons/start.svg"
import StopIcon from "../../public/automation-icons/stop.svg"
import FaqIcon from "../../public/automation-icons/faq.svg"
import NotificationIcon from "../../public/automation-icons/notification.svg"
import ProfileIcon from "../../public/automation-icons/profile.svg"
import MessageIcon from "../../public/automation-icons/notification-msg.svg"
import NotificationMessageIcon from "../../public/automation-icons/message.svg"
import TimeIcon from "../../public/automation-icons/time-icon.svg"
import EditIcon from "../../public/automation-icons/edit.svg"
import DuplicateIcon from "../../public/automation-icons/duplicate.svg"
import DeleteIcon from "../../public/automation-icons/delete.svg"

import { newsLetterSchema } from "./validator"
type Interface = {
  icons: {
    className: string
    src: string
    alt: string
  }[]
  sideBarContent: {
    id: number
    text: string
    src: any
    alt: string
    dropdown: boolean
  }[]
}

const actionDropdownData = [
  {
    id: 1,
    icon: <EditIcon />,
    text: "Edit",
    textClass: "workflow-content-action-dropdown-inner-text edit",
  },
  {
    id: 2,
    icon: <DuplicateIcon />,
    text: "Duplicate",
    textClass: "workflow-content-action-dropdown-inner-text duplicate",
  },
  {
    id: 3,
    icon: <DeleteIcon />,
    text: "Delete",
    textClass: "workflow-content-action-dropdown-inner-text delete",
  },
]

const profileOptionData = [
  {
    id: 1,
    icon: <ActiveIcon />,
    class: "automation-profile-options border-top",
    text: "My Profile",
    textClass: "automation-profile-text",
  },
  {
    id: 2,
    icon: <ActiveIcon />,
    class: "automation-profile-options",
    text: "My Subscription",
    textClass: "automation-profile-text",
  },
  {
    id: 3,
    icon: <SettingIcon />,
    class: "automation-profile-options",
    text: "My Settings",
    textClass: "automation-profile-text",
  },
  {
    id: 4,
    icon: "",
    class: "automation-profile-options border-bottom-log-out",
    text: "Log out",
    textClass: "automation-profile-text automation-profile-log-out-text",
  },
]

const orderField = [
  {
    id: 1,
    text: "Date Descending",
  },
  {
    id: 2,
    text: "Date Descending",
  },
  {
    id: 3,
    text: "Date Descending",
  },
]

const rangeValue = [
  {
    id: 1,
    value: 5,
  },
  {
    id: 2,
    value: 10,
  },
  {
    id: 3,
    value: 15,
  },
]

const automationContentBoxData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur. Sit urna morbi commodo nunc gravida interdum at.",
    statusText: "Active",
    statusIcon: <ActiveIcon />,
    statusClass: "workflow-content-status active",
    dataNeeded: {
      show: false,
      class: "",
      text: "",
    },
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur. Sit urna morbi commodo nunc gravida interdum at.",
    statusText: "Inactive",
    statusIcon: <InActiveIcon />,
    statusClass: "workflow-content-status inactive",
    dataNeeded: {
      show: true,
      class: "workflow-content-data-needed danger",
      text: "Data Needed",
    },
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur. Sit urna morbi commodo nunc gravida interdum at.",
    statusText: "Failed",
    statusIcon: <FailedIcon />,
    statusClass: "workflow-content-status failed",
    dataNeeded: {
      show: true,
      class: "workflow-content-data-needed warning",
      text: "Data Needed",
    },
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur. Sit urna morbi commodo nunc gravida interdum at.",
    statusText: "Success",
    statusIcon: <SuccessIcon />,
    statusClass: "workflow-content-status success",
    dataNeeded: {
      show: false,
      class: "",
      text: "",
    },
  },
]

export const styledDiv = {
  backgroundColor: "blue",
}

const automationBoxData = [
  {
    id: 1,
    src: <ActiveIcon height="28px" />,
    alt: "dash",
    text: "Active",
  },
  {
    id: 2,
    src: <InActiveIcon height="28px" />,
    alt: "dash",
    text: "Inactive",
  },
  {
    id: 3,
    src: <SuccessIcon height="28px" />,
    alt: "dash",
    text: "Success",
  },
  {
    id: 4,
    src: <FailedIcon height="28px" />,
    alt: "dash",
    text: "Failed",
  },
]

const icons: Interface["icons"] = [
  {
    className: "icon",
    src: "/automation-icons/Dashboard.svg",
    alt: "dashboard-icon",
  },
  {
    className: "icon",
    src: "/automation-icons/Automation.svg",
    alt: "dashboard-icon",
  },
  {
    className: "icon",
    src: "/automation-icons/transaction.svg",
    alt: "dashboard-icon",
  },
  {
    className: "icon",
    src: "/automation-icons/Campaigns.svg",
    alt: "dashboard-icon",
  },
  {
    className: "icon",
    src: "/automation-icons/Sales.svg",
    alt: "dashboard-icon",
  },
]

const sideBarContent: Interface["sideBarContent"] = [
  {
    id: 1,
    text: "Project",
    src: "/automation-icons/Dashboard.svg",
    alt: "dashboard-icon",
    dropdown: false,
  },
  {
    id: 2,
    text: "Integration",
    src: "/automation-icons/product.svg",
    alt: "dashboard-icon",
    dropdown: false,
  },
  {
    id: 3,
    text: "Data",
    src: "/automation-icons/Dashboard.svg",
    alt: "dashboard-icon",
    dropdown: true,
  },
  {
    id: 4,
    text: "Work",
    src: "/automation-icons/Dashboard.svg",
    alt: "dashboard-icon",
    dropdown: false,
  },
]

const AutomationPage = () => {
  const [openValSelector, setOpenValSelector] =  useState<any>(false)
  const [openOrderSelector, setOpenOrderSelector] = useState<any>(false)
  const [openNotificationBox, setOpenNotificationBox] = useState<any>(false)
  const [openProfileOption, setOpenProfileOption] = useState<any>(false)
  const [openActionDropdown, setOpenActionDropdown] = useState<any>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newsLetterSchema),
    defaultValues: {
      search: "",
    },
  })

  const sendEmail = () => {
    alert("search value")
  }

  const selectOrder = () => {
    setOpenOrderSelector(!openOrderSelector)
  }

  const actionDropdown = (id: any) => {
    openActionDropdown == id
      ? setOpenActionDropdown(false)
      : setOpenActionDropdown(id)
  }

  return (
    <div className="automation_page_wrp">
      <div className="row">
        <div className="col-md-9">
          <Header isNav={false} />
        </div>
        <div className="automation-header col-md-3">
          <div className="automation-header-faq">
            <FaqIcon />
          </div>
          <div
            className="automation-header-notification"
            onClick={() => {
              setOpenNotificationBox(!openNotificationBox)
            }}
          >
            <NotificationIcon />
          </div>
          <div
            className="automation-header-profile"
            onClick={() => {
              setOpenProfileOption(!openProfileOption)
            }}
          >
            <ProfileIcon />
            <span className="automation-header-username">John Doe</span>
          </div>
        </div>
      </div>

      {openNotificationBox && (
        <div className="automation-header-notification-box">
          <div className="notification-title">
            <h3 className="notification-title-text">Notification</h3>
            <p className="notification-title-status">Unread (2)</p>
          </div>
          <div className="notification-type-earlier">
            <p>Earlier</p>
          </div>
          <div className="earlier-notifications">
            <div className="earlier-notification-section">
              <NotificationMessageIcon className="earlier-notification-icon" />
              <span className="">
                <p className="earlier-notification-text">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Fermentum turpis.{" "}
                </p>
                <p className="earlier-notification-time"> June 6, 4:02 AM</p>
              </span>
            </div>
            <div className="earlier-notification-section">
              <MessageIcon className="earlier-notification-icon" />
              <span className="">
                <p className="earlier-notification-text">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Fermentum turpis.{" "}
                </p>
                <p className="earlier-notification-time"> June 6, 4:02 AM</p>
              </span>
            </div>
          </div>
          <div className="notification-type-earlier">
            <p>This week </p>
          </div>
          <div className="this-week-notifications pt-3">
            <div className="earlier-notification-section">
              <NotificationMessageIcon className="earlier-notification-icon" />
              <span className="">
                <p className="earlier-notification-text">
                  Lorem ipsum dolor sit amet consectetur. Fermentum turpis.{" "}
                </p>
                <p className="earlier-notification-time"> June 6, 4:02 AM</p>
              </span>
            </div>
            <div className="earlier-notification-section">
              <MessageIcon className="earlier-notification-icon" />
              <span className="pb-3">
                <p className="earlier-notification-text">
                  Lorem ipsum dolor sit amet consectetur. Fermentum turpis.{" "}
                </p>
                <p className="earlier-notification-time"> June 6, 4:02 AM</p>
              </span>
            </div>
          </div>

          <div className="notification-read-all">
            <p>Read all</p>
          </div>
        </div>
      )}

      {openProfileOption && (
        <div className="automation-profile-section">
          {profileOptionData &&
            profileOptionData.map((item) => {
              return (
                <div className={item.class} key={item.id}>
                  <span className="automation-profile-icon">{item.icon}</span>
                  <span className={item.textClass}>{item.text}</span>
                </div>
              )
            })}
        </div>
      )}

      <div className="automation-body">
        <SideBar />
        <div className="automation-section">
          <div className="automation-search">
            <div className="box-wrapper">
              <span className="automation-title">Automation Overview</span>
              <div className="search-box">
                <form action="">
                  <span className="search-bar">
                    <input
                      className="search-input"
                      {...register("search")}
                      placeholder="Search"
                    />
                    <img
                      className="search-icon"
                      src="/searchIcon.svg"
                      alt=""
                      onClick={handleSubmit(sendEmail)}
                    />
                  </span>
                </form>
              </div>
              {errors.search?.message}
            </div>
          </div>
          <div className="automation-box">
            <div className="automation-inner-box">
              <h3 className="automation-inner-text roboto">Automation</h3>
              <div className="automation-box-icons">
                {automationBoxData &&
                  automationBoxData.map((item) => {
                    return (
                      <div className="automaton-box-icon-wrp" key={item.id}>
                        <span className="automation-box-icon">{item.src}</span>
                        <span className="automation-box-icons-text">
                          {item.text}
                        </span>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
          <div className="create-workflow ">
            <button className="create-workflow-btn">Create workflow</button>
            <div className="create-workflow-filters">
              <div
                className="workflow-range"
                onClick={() => {
                  setOpenValSelector(!openValSelector)
                }}
              >
                <span className="workflow-range-text roboto">
                  Rows per page
                </span>
                <span className="workflow-range-value roboto">3</span>
                <SettingIcon className="workflow-range-icon" />
              </div>
              <div className="workflow-order" onClick={selectOrder}>
                <span className="workflow-range-text roboto">
                  Date Descending
                </span>
                <SettingIcon className="workflow-order-icon" />
              </div>
            </div>
          </div>
          {openOrderSelector && (
            <div className="workflow_order_option_wrp">
              {orderField &&
                orderField.map((item) => {
                  return (
                    <span className="workflow_order_option" key={item.id}>
                      {item.text}
                    </span>
                  )
                })}
            </div>
          )}
          {openValSelector && (
            <div className="workflow-range-option-wrp">
              {rangeValue &&
                rangeValue.map((item) => {
                  return (
                    <div className="workflow-range-option" key={item.id}>
                      <p className="workflow-range-option-text">{item.value}</p>
                    </div>
                  )
                })}
            </div>
          )}

          {automationContentBoxData &&
            automationContentBoxData.map((item) => {
              return (
                <div className="workflow-content-wrapper row ">
                  <div className="col-md-6">
                    <h3 className="workflow-content-title">{item.title}</h3>
                  </div>
                  <div className="col-md-6 text-md-right">
                    <AutomationActionIcon
                      className="workflow-content-acton-dropdown-icon"
                      onClick={() => {
                        actionDropdown(item.id)
                      }}
                    />
                  </div>
                  <div className="workflow-content-left col-md-6">
                    <p className="workflow-content-text">{item.text}</p>
                    <div className={item.statusClass}>
                      <span className="workflow-content-status-icon">
                        {item.statusIcon}
                      </span>
                      <span className="workflow-content-status-text">
                        {item.statusText}
                      </span>
                    </div>
                  </div>
                  <div className="workflow-content-right col-md-6 d-flex">
                    <div className="Workflow-content-inner-right">
                      <div className="workflow-new">
                        {item.dataNeeded.show && (
                          <div className={item.dataNeeded.class}>
                            {item.dataNeeded.text}
                          </div>
                        )}
                      </div>
                      <div className="workflow-content-action-box">
                        <span className="workflow_content_action_box_start">
                          <StartIcon />
                          <span className="workflow_content_action_box_text">
                            Start
                          </span>
                        </span>
                        <div className="workflow_content_action_box_stop">
                          <StopIcon />
                          <span className="workflow_content_action_box_text">
                            Stop
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="workflow_content_edited_date">
                      <TimeIcon className="workflow_content_edited_time_icon" />{" "}
                      Last edited June 4, 2023 12:00 PM{" "}
                    </p>
                  </div>
                  {openActionDropdown == item.id ? (
                    <div className="workflow-content-acton-dropdown">
                      <div className="workflow-content-action-dropdown-box">
                      </div>
                      {actionDropdownData &&
                        actionDropdownData.map((item) => {
                          return (
                            <div
                              className="workflow-content-action-dropdown-inner-content"
                              key={item.id}
                            >
                              {item.icon}
                              <p className={item.textClass}>{item.text}</p>
                            </div>
                          )
                        })}
                    </div>
                  ) : null}
                </div>
              )
            })}
        </div>
      </div>
      <FooterBox />
    </div>
  )
}

export default AutomationPage
