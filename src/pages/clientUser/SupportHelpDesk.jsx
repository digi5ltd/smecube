import { useState } from "react";

function SupportHelpDesk() {
  const [issueType, setIssueType] = useState("Issue Fixing");
  const [description, setDescription] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const tickets = [
    { id: "TCK001", issue: "Website Bug", status: "Open", date: "2025-10-10" },
    { id: "TCK002", issue: "Payment Issue", status: "Resolved", date: "2025-10-05" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for API call
    console.log("Ticket Submitted:", { issueType, description });
    setDescription(""); // Reset description
  };

  const filteredTickets = filterStatus === "All"
    ? tickets
    : tickets.filter((ticket) => ticket.status === filterStatus);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h1 className="text-3xl font-bold">Support & Help Desk</h1>
              <p className="text-blue-100 text-sm mt-2">Access 24/7 support or manage your tickets</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All</option>
                <option>Open</option>
                <option>Resolved</option>
              </select>
              <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all">
                Export Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submit Ticket Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-4a2 2 0 012-2h10a2 2 0 012 2v4h-4m-6 0h6" />
                  </svg>
                  Submit a Ticket
                </h2>
                <p className="text-gray-500 text-sm mt-1">Contact our support team for assistance</p>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="flex items-center text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10m0 0v10M7 7v10m0 0H5a2 2 0 01-2-2V9a2 2 0 012-2h2z" />
                      </svg>
                      Issue Type
                    </label>
                    <select
                      value={issueType}
                      onChange={(e) => setIssueType(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Issue Fixing</option>
                      <option>Urgent Delivery</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="5"
                      placeholder="Describe your issue in detail..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                  >
                    Submit Ticket
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Ticket History */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Ticket History
                </h2>
                <p className="text-gray-500 text-sm mt-1">View your past and current support tickets</p>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-600">
                        <th className="py-3 px-4 font-semibold">Ticket ID</th>
                        <th className="py-3 px-4 font-semibold">Issue</th>
                        <th className="py-3 px-4 font-semibold">Status</th>
                        <th className="py-3 px-4 font-semibold">Date</th>
                        <th className="py-3 px-4 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTickets.map((ticket) => (
                        <tr
                          key={ticket.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-all duration-200"
                        >
                          <td className="py-4 px-4 font-medium text-gray-900">{ticket.id}</td>
                          <td className="py-4 px-4 text-gray-700">{ticket.issue}</td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                ticket.status === "Resolved"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {ticket.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-700">{ticket.date}</td>
                          <td className="py-4 px-4">
                            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-all">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportHelpDesk;