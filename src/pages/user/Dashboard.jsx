import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Mail, LogOut, Package, Heart, ShoppingCart } from 'lucide-react';
import AuthContext from '../../context/AuthContext.jsx';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // If no user, redirect to login
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const menuItems = [
    { icon: Package, label: 'আমার অর্ডার', path: '/dashboard/orders' },
    { icon: Heart, label: 'পছন্দের তালিকা', path: '/dashboard/wishlist' },
    { icon: ShoppingCart, label: 'শপিং কার্ট', path: '/cart' },
  ];

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                <p className="text-gray-600 mt-1">স্বাগতম আপনার ড্যাশবোর্ডে</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-all font-semibold"
            >
              <LogOut className="w-5 h-5" />
              লগআউট
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">ব্যক্তিগত তথ্য</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <User className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm text-gray-500">নাম</p>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Phone className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm text-gray-500">ফোন</p>
                    <p className="font-semibold text-gray-800">{user.phone}</p>
                  </div>
                </div>
                {user.email && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Mail className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-500">ইমেইল</p>
                      <p className="font-semibold text-gray-800">{user.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">দ্রুত অ্যাক্সেস</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="flex items-center gap-4 p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <p className="text-3xl font-bold text-red-600">০</p>
                <p className="text-gray-600 mt-2">অর্ডার</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <p className="text-3xl font-bold text-pink-600">০</p>
                <p className="text-gray-600 mt-2">পছন্দের</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <p className="text-3xl font-bold text-purple-600">০</p>
                <p className="text-gray-600 mt-2">রিভিউ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
