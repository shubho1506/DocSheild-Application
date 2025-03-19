// import Image from "next/image"
// import Link from "next/link"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"
import {
  User,
  Home,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  Layers,
  FileText,
  Users,
  Calendar,
  BarChart,
  Mail,
  ShoppingCart,
  Heart,
  Map,
} from "lucide-react"
import "./home.css"

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <aside className="side-panel">
        <div className="profile-section">
          <div className="profile-image-container">
            {/* <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Profile"
              width={80}
              height={80}
              className="profile-image"
            /> */}
            <img 
                    // src="/placeholder.svg" 
                    src="/placeholder.svg"
                    width="550" 
                    height="550" 
                    alt="DocShield Platform" 
                    className="hero-image" 
                />
          </div>
          <h2 className="profile-name">John Doe</h2>
          <p className="profile-role">Administrator</p>
        </div>

        <nav className="side-nav">
          <ul className="nav-list">
            <li className="nav-item active">
              {/* <Link href="/home" className="nav-link"> */}
                <Home className="nav-icon" />
                <span>Dashboard</span>
              {/* </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link href="/profile" className="nav-link"> */}
                <User className="nav-icon" />
                <span>Profile</span>
              {/* </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link href="/notifications" className="nav-link"> */}
                <Bell className="nav-icon" />
                <span>Notifications</span>
              {/* </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link href="/settings" className="nav-link"> */}
                <Settings className="nav-icon" />
                <span>Settings</span>
              {/* </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link href="/help" className="nav-link"> */}
                <HelpCircle className="nav-icon" />
                <span>Help & Support</span>
              {/* </Link> */}
            </li>
          </ul>
        </nav>

        <div className="signout-container">
          <Button variant="outline" className="signout-button">
            <LogOut className="signout-icon" />
            <span>Sign Out</span>
          </Button>
        </div>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1 className="page-title">Dashboard</h1>
          <p className="welcome-message">Welcome back, John! Here's what's happening today.</p>
        </header>

        <div className="cards-grid">
          {/* <Link href="/documents" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <FileText className="card-icon" />
              </div>
              <h3 className="card-title">Documents</h3>
              <p className="card-description">Manage your documents and files</p>
            </div>
          {/* </Link> */}

          {/* <Link href="/projects" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <Layers className="card-icon" />
              </div>
              <h3 className="card-title">Projects</h3>
              <p className="card-description">View and manage your projects</p>
            </div>
          {/* </Link> */}

          {/* <Link href="/team" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <Users className="card-icon" />
              </div>
              <h3 className="card-title">Team</h3>
              <p className="card-description">Collaborate with your team members</p>
            </div>
          {/* </Link> */}

          {/* <Link href="/calendar" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <Calendar className="card-icon" />
              </div>
              <h3 className="card-title">Calendar</h3>
              <p className="card-description">Schedule and manage events</p>
            </div>
          {/* </Link> */}

          {/* <Link href="/analytics" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <BarChart className="card-icon" />
              </div>
              <h3 className="card-title">Analytics</h3>
              <p className="card-description">View insights and statistics</p>
            </div>
          {/* </Link> */}

          {/* <Link href="/messages" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <Mail className="card-icon" />
              </div>
              <h3 className="card-title">Messages</h3>
              <p className="card-description">Check your inbox and communications</p>
            </div>
          {/* </Link> */}

          {/* <Link href="/orders" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <ShoppingCart className="card-icon" />
              </div>
              <h3 className="card-title">Orders</h3>
              <p className="card-description">Track and manage your orders</p>
            </div>
          {/* </Link> */}

          {/* <Link href="/favorites" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <Heart className="card-icon" />
              </div>
              <h3 className="card-title">Favorites</h3>
              <p className="card-description">Access your saved items</p>
            </div>
          {/* </Link> */}

          {/* <Link href="/locations" className="card-link"> */}
            <div className="card">
              <div className="card-icon-container">
                <Map className="card-icon" />
              </div>
              <h3 className="card-title">Locations</h3>
              <p className="card-description">View and manage locations</p>
            </div>
          {/* </Link> */}
        </div>
      </main>
    </div>
  )
}

