import React, { useState, useContext } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';

const Login = () => {
  const { sendOtp, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState(null);
  const [step, setStep] = useState(1); // 1: Phone, 2: OTP
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!phone || phone.length < 10) {
      setError('সঠিক ফোন নম্বর দিন');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const userId = await sendOtp(phone);
      setUserId(userId);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'OTP পাঠাতে ব্যর্থ হয়েছে');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!otp || otp.length < 4) {
      setError('সঠিক OTP দিন');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await login(userId, otp);
      navigate('/'); // Redirect to home after successful login
    } catch (err) {
      setError(err.response?.data?.message || 'ভুল OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 py-24 px-4 sm:px-6 lg:px-8" 
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            লগইন
          </h2>
          <p className="mt-2 text-gray-600">
            {step === 1 ? 'আপনার ফোন নম্বর দিন' : 'OTP যাচাই করুন'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-center">
            {error}
          </div>
        )}

        {step === 1 ? (
          <div className="space-y-4">
            <input
              type="tel"
              placeholder="ফোন নম্বর (০১XXXXXXXXX)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, handleSendOtp)}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
              disabled={loading}
            />
            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'পাঠানো হচ্ছে...' : 'OTP পাঠান'}
              {!loading && <ChevronRight className="w-5 h-5" />}
            </button>
            <div className="text-center mt-4">
              <Link 
                to="/register" 
                className="text-red-600 hover:text-red-700 font-medium"
              >
                নতুন অ্যাকাউন্ট তৈরি করুন
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="OTP লিখুন"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, handleLogin)}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
              maxLength="6"
              disabled={loading}
            />
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'যাচাই করা হচ্ছে...' : 'লগইন'}
              {!loading && <ChevronRight className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setStep(1)}
              className="w-full text-gray-600 hover:text-gray-800 py-2 text-sm"
              disabled={loading}
            >
              ফোন নম্বর পরিবর্তন করুন
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
