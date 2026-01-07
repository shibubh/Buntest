import React from 'react'
import '../styles/Dashboard.css'

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%', positive: true },
    { title: 'Revenue', value: '$45,678', change: '+8%', positive: true },
    { title: 'Orders', value: '567', change: '-3%', positive: false },
    { title: 'Products', value: '89', change: '+5%', positive: true },
  ]

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Created new order #1234', time: '2 min ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated product "Widget"', time: '15 min ago' },
    { id: 3, user: 'Bob Johnson', action: 'Registered new account', time: '1 hour ago' },
    { id: 4, user: 'Alice Williams', action: 'Completed payment', time: '2 hours ago' },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p className="subtitle">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-title">{stat.title}</h3>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      <div className="activity-section">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-avatar">{activity.user[0]}</div>
              <div className="activity-content">
                <div className="activity-user">{activity.user}</div>
                <div className="activity-action">{activity.action}</div>
              </div>
              <div className="activity-time">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
