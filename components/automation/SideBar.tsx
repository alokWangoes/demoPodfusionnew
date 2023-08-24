import { useState } from "react"
import "./automation-page.css"
import DashboardIcon from "../../public/automation-icons/Dashboard.svg"
import AutomationIcon from "../../public/automation-icons/Automation.svg"
import TransactionIcon from "../../public/automation-icons/transaction.svg"
import CompaignsIcon from "../../public/automation-icons/Compaign.svg"
import LineIcon from "../../public/automation-icons/data-points.svg"
import SalesIcon from "../../public/automation-icons/SalesIcon.svg"
import ProjectIcon from "../../public/automation-icons/Project.svg"
import IntegratedIcon from "../../public/automation-icons/integration.svg"
import WorkIcon from "../../public/automation-icons/work.svg"
import ActionIcon from "../../public/automation-icons/Action.svg"
import SettingsIcon from "../../public/automation-icons/Settings.svg"
import MonitoringIcon from "../../public/automation-icons/Monitoring.svg"
import TransactionsIcon from "../../public/automation-icons/transaction.svg"
import CategoryIcon from "../../public/automation-icons/Categories.svg"
import MeetingsIcon from "../../public/automation-icons/Meetings.svg"
import BatchIcon from "../../public/automation-icons/Batch Transactions.svg"
import AnalyticIcon from "../../public/automation-icons/Sales Analytics.svg"

type Interface = {
  icons: {
    title: string
    className: string
    src: any
    alt: string
  }[]
  sideBarContent: {
    id: number
    text: string
    src: string
    alt: string
    dropdown: boolean
  }[]
}
let checked = ""
console.log(checked)
const icons: Interface["icons"] = [
  {
    title: "Dashboard",
    className: "icon",
    src: <DashboardIcon />,
    alt: "dashboard-icon",
  },
  {
    title: "Automation",
    className: "icon",
    src: <TransactionIcon />,
    alt: "automation-icon",
  },
  {
    title: "Transaction",
    className: "icon",
    src: <AutomationIcon />,
    alt: "transaction-icon",
  },
  {
    title: "Campaigns",
    className: "icon",
    src: <CompaignsIcon />,
    alt: "campaigns-icon",
  },
  {
    title: "Sales",
    className: "icon",
    src: <SalesIcon />,
    alt: "dashboard-icon",
  },
]



const sidebarData = {
  Dashboard: {
    title: "Dashboard",
    content: [
      {
        id: 1,
        text: "Project",
        src: <ProjectIcon />,
        alt: "dashboard-icon",
        dropdown: false,
      },
      {
        id: 2,
        text: "Integration",
        src: <IntegratedIcon/>,
        alt: "integration-icon",
        dropdown: false,
      },
      {
        id: 3,
        text: "Data",
        src: <ActionIcon/>,
        alt: "data-icon",
        dropdown: true,
      },
      {
        id: 4,
        text: "Work",
        src: <WorkIcon/>,
        alt: "work-icon",
        dropdown: false,
      },
    ],
  },
  Automation: {
    title: "Automation",
    content: [
      {
        id: 1,
        text: "Workflow",
        src: <WorkIcon/>,
        alt: "workflow-icon",
        dropdown: false,
      },
      {
        id: 2,
        text: "Action",
        src: <ActionIcon/>,
        alt: "action-icon",
        dropdown: false,
      },
      {
        id: 3,
        text: "Settings",
        src: <SettingsIcon/>,
        alt: "settings-icon",
        dropdown: true,
      },
      {
        id: 4,
        text: "Monitoring",
        src: <MonitoringIcon/>,
        alt: "monitoring-icon",
        dropdown: false,
      },
    ],
  },
  Campaigns: {
    title: "Campaigns",
    content: [
      {
        id: 1,
        text: "Analytics",
        src: <ProjectIcon/>,
        alt: "dashboard-icon",
        dropdown: true,
      },
      {
        id: 2,
        text: "Peroformance Insights",
        src: <IntegratedIcon/>,
        alt: "integration-icon",
        dropdown: false,
      },
      {
        id: 3,
        text: "Collaboration",
        src: <TransactionsIcon/>,
        alt: "dashboard-icon",
        dropdown: true,
      },
      {
        id: 4,
        text: "Work",
        src: <WorkIcon/>,
        alt: "work-icon",
        dropdown: true,
      },
    ],
  },
  Transaction: {
    title: "Transaction",
    content: [
      {
        id: 1,
        text: "Reports",
        src: <IntegratedIcon/>,
        alt: "report-icon",
        dropdown: false,
      },
      {
        id: 2,
        text: "Categories",
        src: <CategoryIcon/>,
        alt: "categories-icon",
        dropdown: false,
      },
      {
        id: 3,
        text: "Batch Transactions",
        src: <BatchIcon/>,
        alt: "batch-transaction-icon",
        dropdown: true,
      },
      {
        id: 4,
        text: "Meetings",
        src: <MeetingsIcon/>,
        alt: "meetings-icon",
        dropdown: true,
      },
    ],
  },
  Sales: {
    title: "Sales",
    content: [
      {
        id: 1,
        text: "Pipeline Management",
        src: <ActionIcon/>,
        alt: "pipeline-management-icon",
        dropdown: false,
      },
      {
        id: 2,
        text: "Sales Analytics",
        src: <AnalyticIcon/>,
        alt: "sales-analytics-icon",
        dropdown: true,
      },
      {
        id: 3,
        text: "Sales Collab",
        src: <BatchIcon/>,
        alt: "dashboard-icon",
        dropdown: true,
      },
      {
        id: 4,
        text: "Sales Monitoring",
        src: <WorkIcon/>,
        alt: "sales-monitoring-icon",
        dropdown: false,
      },
    ],
  },
}

const SideBar = () => {
  const [newClass, setNewClass] = useState(false)
  const [selected, setSelected] = useState("")
  const [dropdown, setDropdown] = useState(0)

  const setSidebarData = (title: any) => {
    if (selected == "") {
      setNewClass(!newClass)
      setSelected(sidebarData[title])
      checked = sidebarData[title]
    } else if (selected.title == title) {
      setSelected("")
      setNewClass(!newClass)
    } else {
      setSelected(sidebarData[title])
    }
  }

  const dropDownManagement = (id: number) => {
    dropdown == id ? setDropdown(0) : setDropdown(id)
  }
  return (
    <aside className="side-bar-main">
      <div className="side-bar-icon">
        <div className="icons">
          {icons &&
            icons.map((item) => (
              <span
                className={
                  selected.title == item.title ? " icon active" : "icon"
                }
                onClick={() => setSidebarData(item.title)}
              >
                {item.src}
              </span>
            ))}
        </div>
      </div>
      <div className={newClass ? "show" : "hide"}>
        <div className="sidebar-inner-box">
          <h3 className="sidebar-title">{selected.title}</h3>
          <div className="sidebar-values">
            {selected &&
              selected.content.map((item) => {
                return (
                  <>
                    <div className="sidebar-content" key={item.id}>
                     
                    {item.src}
                     
                      <span className="sidebar-inner-text">{item.text}</span>
                      {item.dropdown && (
                        <>
                          <img
                            src="/automation-icons\drop-down-icon.svg"
                            alt="dropdown-img"
                            className="dropdown-icon"
                            onClick={() => {
                              dropDownManagement(item.id)
                            }}
                          />
                        </>
                      )}
                    </div>

                    {dropdown == item.id && (
                      <div className="sidebar-dropdown-box">
                        <LineIcon />
                        <div className="sidebar-dropdown-data">
                        <span>Logs</span>
                        <span>Settings</span>
                        <span>Lorem</span>
                        </div>
                       
                      </div>
                    )}
                  </>
                )
              })}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
