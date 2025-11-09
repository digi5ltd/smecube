import { useState } from "react";

function NotificationsAlerts() {
  const [filterStatus, setFilterStatus] = useState("All");
  const notifications = [
    { id: 1, message: "Your FB Boosting subscription expires in 3 days.", date: "2025-10-18", read: false },
    { id: 2, message: "New tool update: CRM v2.0 released!", date: "2025-10-15", read: true },
  ];

  const handleMarkAsRead = (id) => {
    // Placeholder for marking notification as read (API call)
    console.log(`Marked notification ${id} as read`);
  };

  const filteredNotifications = filterStatus === "All"
    ? notifications
    : notifications.filter((notification) => (filterStatus === "Unread" ? !notification.read : notification.read));

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h1 className="text-3xl font-bold">Notifications & Alerts</h1>
              <p className="text-blue-100 text-sm mt-2">Stay updated with service alerts and exclusive promotions</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All</option>
                <option>Unread</option>
                <option>Read</option>
              </select>
              <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all">
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Notifications */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Notifications
                </h2>
                <p className="text-gray-500 text-sm mt-1">View your recent service alerts and updates</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {filteredNotifications.length === 0 ? (
                    <li className="text-gray-500 text-center py-4">No notifications found</li>
                  ) : (
                    filteredNotifications.map((notification) => (
                      <li
                        key={notification.id}
                        className={`flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200 ${
                          !notification.read ? "border-l-4 border-blue-500" : ""
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className={`font-medium ${notification.read ? "text-gray-700" : "text-gray-900"}`}>
                              {notification.message}
                            </p>
                            <p className="text-sm text-gray-500">{notification.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {!notification.read && (
                            <button
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-all"
                            >
                              Mark as Read
                            </button>
                          )}
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Promotions */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 9.143m0 5.714l-5.714 2.143L13 24M6 9h4M3 12h3m15 0h-3m-3 3h-4" />
                </svg>
                Exclusive Promotion
              </h3>
              <p className="text-blue-100 mb-4">Get 20% off on Bulk SMS for new subscribers!</p>
              <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsAlerts;