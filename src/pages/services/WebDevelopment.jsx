import React from "react";
import { Link } from "react-router";

const WebDevelopment = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="48"
          height="48"
        >
          <defs>
            <linearGradient id="grad-main" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="grad-accent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>

          <rect
            x="6"
            y="8"
            width="52"
            height="34"
            rx="3.5"
            fill="url(#grad-main)"
          />
          <rect
            x="10.5"
            y="12.5"
            width="45"
            height="25"
            rx="2.5"
            fill="#041025"
            opacity="0.96"
          />
          <rect
            x="14"
            y="16"
            width="36"
            height="6"
            rx="1"
            fill="#0ea5b7"
            opacity="0.16"
          />
          <rect
            x="14"
            y="24"
            width="16"
            height="10"
            rx="1"
            fill="#4f46e5"
            opacity="0.12"
          />
          <rect
            x="34"
            y="24"
            width="16"
            height="10"
            rx="1"
            fill="#60a5fa"
            opacity="0.12"
          />
          <rect
            x="26"
            y="44"
            width="12"
            height="3.5"
            rx="1.5"
            fill="#081226"
            opacity="0.95"
          />
          <rect
            x="18"
            y="48"
            width="28"
            height="3"
            rx="1.5"
            fill="#081226"
            opacity="0.6"
          />
          <g transform="translate(44,10) rotate(18)">
            <path
              d="M0 0 L7 3 L10 6 L6 10 L3 7 L0 0 Z"
              fill="url(#grad-accent)"
            />
            <path d="M7.5 4.5 L9 6 L7 7 L5.5 5.5 Z" fill="#fff" opacity="0.9" />
          </g>
        </svg>
      ),
      title: "কাস্টম ওয়েব ডিজাইন",
      description: "আপনার ব্র্যান্ডের জন্য ইউনিক ডিজাইন",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="64"
          height="64"
          role="img"
          aria-label="Swift Loading Icon"
        >
          <defs>
            <linearGradient id="swift-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>

          {/* <!-- Outer spinning ring --> */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#swift-grad)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="70 30"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* <!-- Inner lightning bolt --> */}
          <path
            d="M50 25 L43 55 L54 55 L47 75 L64 45 L52 45 Z"
            fill="url(#swift-grad)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;10 50 50;-10 50 50;0 50 50"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      ),
      title: "দ্রুত লোডিং",
      description: "হাই পারফরমেন্স অপটিমাইজেশন",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="Responsive Design Icon"
        >
          <defs>
            <linearGradient id="gradSmall" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>

          {/* Desktop */}
          <rect
            x="4"
            y="8"
            width="36"
            height="24"
            rx="3"
            fill="url(#gradSmall)"
          />
          <rect x="8" y="11" width="28" height="18" rx="2" fill="#fff" />
          <rect x="18" y="33" width="8" height="2" rx="1" fill="#EF4444" />

          {/* Tablet */}
          <rect
            x="44"
            y="14"
            width="12"
            height="20"
            rx="2"
            fill="url(#gradSmall)"
          />
          <rect x="46" y="16" width="8" height="14" rx="1" fill="#fff" />
          <circle cx="50" cy="31" r="1" fill="#EF4444" />

          {/* Mobile */}
          <rect
            x="58"
            y="18"
            width="6"
            height="14"
            rx="1"
            fill="url(#gradSmall)"
          />
          <rect x="59" y="19" width="4" height="10" rx="1" fill="#fff" />
          <circle cx="61" cy="31" r="0.5" fill="#EF4444" />

          {/* Code brackets inside desktop */}
          <path
            d="M14 18 L10 22 L14 26"
            stroke="#EF4444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M26 18 L30 22 L26 26"
            stroke="#EF4444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
      title: "রেসপন্সিভ ডিজাইন",
      description: "সব ডিভাইসে পারফেক্ট",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="SEO Dashboard Icon"
        >
          <defs>
            <linearGradient id="seoGrad3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* Browser Window */}
          <rect
            x="8"
            y="10"
            width="48"
            height="36"
            rx="3"
            stroke="url(#seoGrad3)"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="8"
            y1="16"
            x2="56"
            y2="16"
            stroke="url(#seoGrad3)"
            strokeWidth="2"
          />

          {/* Analytics Graph */}
          <rect
            x="14"
            y="30"
            width="6"
            height="10"
            rx="1"
            fill="url(#seoGrad3)"
          />
          <rect
            x="24"
            y="24"
            width="6"
            height="16"
            rx="1"
            fill="url(#seoGrad3)"
          />
          <rect
            x="34"
            y="18"
            width="6"
            height="22"
            rx="1"
            fill="url(#seoGrad3)"
          />

          {/* Upward Arrow */}
          <path
            d="M44 40 L44 28 M44 28 L40 32 M44 28 L48 32"
            stroke="url(#seoGrad3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
      title: "SEO অপটিমাইজড",
      description: "গুগলে ভালো র‍্যাংকিং",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="Security Icon"
        >
          <defs>
            <linearGradient id="securityGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
          </defs>

          {/* Shield */}
          <path
            d="M32 4 L12 12 V32 C12 48 32 60 32 60 C32 60 52 48 52 32 V12 L32 4 Z"
            fill="url(#securityGrad)"
            stroke="#1E3A8A"
            strokeWidth="2"
          />

          {/* Lock */}
          <rect x="24" y="24" width="16" height="16" rx="3" fill="#fff" />
          <rect x="28" y="20" width="8" height="6" rx="1.5" fill="#fff" />
          <line
            x1="32"
            y1="28"
            x2="32"
            y2="36"
            stroke="url(#securityGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Checkmark */}
          <path
            d="M28 36 L31 39 L38 30"
            stroke="url(#securityGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
      title: "সিকিউরিটি",
      description: "SSL ও সিকিউরিটি ফিচার",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="Software Update Icon"
        >
          <defs>
            <linearGradient id="updateGrad7" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#4ADE80" />
            </linearGradient>
          </defs>

          {/* Box / Package */}
          <rect
            x="16"
            y="20"
            width="32"
            height="24"
            rx="3"
            fill="#fff"
            stroke="url(#updateGrad7)"
            strokeWidth="2"
          />
          <line
            x1="32"
            y1="20"
            x2="32"
            y2="44"
            stroke="url(#updateGrad7)"
            strokeWidth="2"
          />

          {/* Upward Arrow (Update) */}
          <path
            d="M32 10 L32 20 M32 10 L28 14 M32 10 L36 14"
            stroke="url(#updateGrad7)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
      title: "সহজ আপডেট",
      description: "CMS ইন্টিগ্রেশন",
    },
  ];

  const technologies = [
    {
      name: "React.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="React Icon"
        >
          <defs>
            <linearGradient id="reactGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#61DAFB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>

          {/* Outer Ellipses */}
          <ellipse
            cx="32"
            cy="32"
            rx="28"
            ry="10"
            fill="none"
            stroke="url(#reactGrad)"
            strokeWidth="2"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="28"
            ry="10"
            fill="none"
            stroke="url(#reactGrad)"
            strokeWidth="2"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="28"
            ry="10"
            fill="none"
            stroke="url(#reactGrad)"
            strokeWidth="2"
            transform="rotate(120 32 32)"
          />

          {/* Central Circle */}
          <circle cx="32" cy="32" r="6" fill="url(#reactGrad)" />
        </svg>
      ),
      color: "bg-blue-50",
    },
    {
      name: "Node.js",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="Node.js Icon"
        >
          <defs>
            <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#339933" />
              <stop offset="100%" stopColor="#6CC24A" />
            </linearGradient>
          </defs>

          {/* Hexagon */}
          <polygon
            points="32,4 56,16 56,48 32,60 8,48 8,16"
            fill="url(#nodeGrad)"
            stroke="#2C6B2C"
            strokeWidth="2"
          />

          {/* JS Text */}
          <text
            x="32"
            y="42"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="#fff"
            fontFamily="Arial, sans-serif"
          >
            JS
          </text>
        </svg>
      ),
      color: "bg-green-50",
    },
    {
      name: "WordPress",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="WordPress Icon"
        >
          <defs>
            <linearGradient id="wpGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#21759B" />
              <stop offset="100%" stopColor="#00AEEF" />
            </linearGradient>
          </defs>

          {/* Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="url(#wpGrad)"
            stroke="#1B4D63"
            strokeWidth="2"
          />

          {/* W Letter */}
          <text
            x="32"
            y="42"
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
            fill="#fff"
            fontFamily="Arial, sans-serif"
          >
            W
          </text>
        </svg>
      ),
      color: "bg-purple-50",
    },
    {
      name: "HTML5/CSS3",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="HTML5 Icon"
        >
          <defs>
            <linearGradient id="htmlGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E34F26" />
              <stop offset="100%" stopColor="#F06529" />
            </linearGradient>
          </defs>

          {/* Hexagon */}
          <polygon
            points="32,4 56,16 56,48 32,60 8,48 8,16"
            fill="url(#htmlGrad)"
            stroke="#B53A1D"
            strokeWidth="2"
          />

          {/* HTML5 Text */}
          <text
            x="32"
            y="42"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#fff"
            fontFamily="Arial, sans-serif"
          >
            HTML
          </text>
        </svg>
      ),
      color: "bg-orange-50",
    },
    {
      name: "PHP",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="PHP Icon"
        >
          <defs>
            <linearGradient id="phpGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8892BE" />
              <stop offset="100%" stopColor="#6E7B9C" />
            </linearGradient>
          </defs>

          {/* Hexagon */}
          <polygon
            points="32,4 56,16 56,48 32,60 8,48 8,16"
            fill="url(#phpGrad)"
            stroke="#555A7E"
            strokeWidth="2"
          />

          {/* PHP Text */}
          <text
            x="32"
            y="40"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#fff"
            fontFamily="Arial, sans-serif"
          >
            PHP
          </text>
        </svg>
      ),
      color: "bg-indigo-50",
    },
    {
      name: "MongoDB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="full"
          role="img"
          aria-label="MongoDB Icon"
        >
          <defs>
            <linearGradient id="mongoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4DB33D" />
              <stop offset="100%" stopColor="#87C540" />
            </linearGradient>
          </defs>

          {/* Hexagon */}
          <polygon
            points="32,4 56,16 56,48 32,60 8,48 8,16"
            fill="url(#mongoGrad)"
            stroke="#3A8135"
            strokeWidth="2"
          />

          {/* Leaf / Mongo symbol */}
          <path
            d="M32 14 C28 20, 34 28, 32 36 C36 28, 28 22, 32 14 Z"
            fill="#fff"
            stroke="#3A8135"
            strokeWidth="1.5"
          />
        </svg>
      ),
      color: "bg-teal-50",
    },
  ];

  const packages = [
    {
      name: "ল্যান্ডিং পেজ",
      price: "১৫,০০০",
      duration: "একবার",
      features: [
        "১ পেজ ডিজাইন",
        "রেসপন্সিভ লেআউট",
        "কন্টাক্ট ফর্ম",
        "বেসিক SEO",
        "২ মাস সাপোর্ট",
      ],
    },
    {
      name: "বিজনেস ওয়েবসাইট",
      price: "৩৫,০০০",
      duration: "একবার",
      popular: true,
      features: [
        "৫-৭ পেজ ডিজাইন",
        "কাস্টম ডিজাইন",
        "CMS ইন্টিগ্রেশন",
        "এডভান্স SEO",
        "ব্লগ সেকশন",
        "৬ মাস সাপোর্ট",
      ],
    },
    {
      name: "কর্পোরেট ওয়েবসাইট",
      price: "৭৫,০০০+",
      duration: "কাস্টম",
      features: [
        "আনলিমিটেড পেজ",
        "প্রিমিয়াম ডিজাইন",
        "কাস্টম ফিচার",
        "মাল্টি-ল্যাঙ্গুয়েজ",
        "API ইন্টিগ্রেশন",
        "১ বছর সাপোর্ট",
      ],
    },
  ];

  const portfolio = [
    {
      name: "রেস্টুরেন্ট ওয়েবসাইট",
      category: "খাদ্য ও পানীয়",
      image: "🍽️",
    },
    {
      name: "শিক্ষা প্রতিষ্ঠান",
      category: "শিক্ষা",
      image: "🎓",
    },
    {
      name: "রিয়েল এস্টেট",
      category: "সম্পত্তি",
      image: "🏢",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
                width="240"
                height="240"
                role="img"
                aria-labelledby="webTitle webDesc"
                className="mx-auto"
              >
                <title id="webTitle">Web development icon</title>
                <desc id="webDesc">
                  A monitor with code brackets and a small gear — represents web
                  development and tooling.
                </desc>

                <defs>
                  <linearGradient id="g-main" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>

                  <linearGradient id="g-accent" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#A78BFA" />
                    <stop offset="1" stopColor="#60A5FA" />
                  </linearGradient>

                  <filter
                    id="shadow"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="8"
                      stdDeviation="18"
                      floodColor="#0f172a"
                      floodOpacity="0.09"
                    />
                  </filter>
                </defs>

                {/* Background panel */}
                <rect
                  x="16"
                  y="28"
                  width="208"
                  height="136"
                  rx="14"
                  fill="url(#g-main)"
                  filter="url(#shadow)"
                />

                {/* Inner screen */}
                <rect
                  x="30"
                  y="42"
                  width="180"
                  height="104"
                  rx="8"
                  fill="#071023"
                  opacity="0.96"
                />

                {/* Code brackets */}
                <path
                  d="M74 84 L60 98 L74 112"
                  fill="none"
                  stroke="#E6F0FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M112 80 L128 120"
                  fill="none"
                  stroke="#E6F0FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M156 84 L170 98 L156 112"
                  fill="none"
                  stroke="#E6F0FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Subtle code lines */}
                <rect
                  x="46"
                  y="132"
                  width="56"
                  height="6"
                  rx="3"
                  fill="#94A3B8"
                  opacity="0.9"
                />
                <rect
                  x="46"
                  y="146"
                  width="96"
                  height="6"
                  rx="3"
                  fill="#64748B"
                  opacity="0.9"
                />
                <rect
                  x="46"
                  y="160"
                  width="72"
                  height="6"
                  rx="3"
                  fill="#94A3B8"
                  opacity="0.9"
                />

                {/* Monitor base */}
                <rect
                  x="88"
                  y="176"
                  width="64"
                  height="10"
                  rx="5"
                  fill="#081226"
                  opacity="0.95"
                />
                <rect
                  x="72"
                  y="188"
                  width="96"
                  height="8"
                  rx="5"
                  fill="#081226"
                  opacity="0.6"
                />

                {/* Accent chip + gear */}
                <g transform="translate(174,44) scale(0.9)">
                  <rect
                    x="-14"
                    y="-14"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#g-accent)"
                    opacity="0.98"
                  />
                  <path
                    d="M0,-8 L2,-6 M6,-2 L8,0 M6,6 L4,8 M-2,8 L-4,6 M-8,2 L-6,0 M-8,-2 L-6,-4 M-4,-8 L-2,-6"
                    stroke="#071023"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="0" cy="0" r="4" fill="#071023" />
                </g>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              প্রফেশনাল ওয়েব ডেভেলপমেন্ট সার্ভিস
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              আপনার ব্যবসার জন্য আধুনিক, দ্রুত এবং SEO ফ্রেন্ডলি ওয়েবসাইট তৈরি
              করি। রেসপন্সিভ ডিজাইন এবং ইউজার ফ্রেন্ডলি ইন্টারফেস সহ।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
              >
                প্রজেক্ট শুরু করুন →
              </Link>
              <a
                href="#portfolio"
                className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition"
              >
                পোর্টফোলিও দেখুন
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের ওয়েব ডেভেলপমেন্ট সেবা
            </h2>
            <p className="text-lg text-gray-600">
              আপনার প্রয়োজন অনুযায়ী কাস্টমাইজড সলিউশন
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 flex justify-center items-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমরা যে টেকনোলজি ব্যবহার করি
            </h2>
            <p className="text-lg text-gray-600">
              আধুনিক এবং শক্তিশালী টেকনোলজি স্ট্যাক
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} p-6 rounded-xl shadow-md hover:shadow-lg transition text-center`}
              >
                <div className="text-4xl mb-3 flex justify-center items-center">
                  {tech.icon}
                </div>
                <div className="font-semibold text-gray-800">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের সাম্প্রতিক কাজ
            </h2>
            <p className="text-lg text-gray-600">
              বিভিন্ন শিল্পে আমাদের সফলতার গল্প
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {project.name}
                  </h3>
                  <button className="text-purple-600 font-semibold hover:text-purple-700">
                    বিস্তারিত দেখুন →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-lg text-gray-600">
              সাশ্রয়ী মূল্যে পেশাদার ওয়েবসাইট
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-purple-500 to-pink-600 text-white transform scale-105 shadow-2xl"
                    : "bg-white border-2 border-gray-200 shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    প্রস্তাবিত
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-gray-800"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                  <span
                    className={pkg.popular ? "text-gray-200" : "text-gray-600"}
                  >
                    /{pkg.duration}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span
                        className={
                          pkg.popular ? "text-yellow-300" : "text-green-500"
                        }
                      >
                        ✓
                      </span>
                      <span
                        className={
                          pkg.popular ? "text-gray-100" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-bold transition ${
                    pkg.popular
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-purple-500 text-white hover:bg-purple-600"
                  }`}
                >
                  অর্ডার করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই পান আপনার ড্রিম ওয়েবসাইট
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            ফ্রি কনসালটেশন এবং প্রজেক্ট প্ল্যানিং
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition"
          >
            ফ্রি কনসালটেশন বুক করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
