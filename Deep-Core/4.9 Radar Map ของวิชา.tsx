import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key } from 'lucide-react';

const CourseManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('ผลลัพธ์การเรียนรู้ระดับรายวิชา');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMenus, setExpandedMenus] = useState({ 
    'ข้อมูลหลัก': false, 
    'ผู้ใช้': false, 
    'หลักสูตร': false,
    'ผลการเรียนรู้': false,
    'รายวิชา': true,
    'การประเมิน': false,
    'รายงาน': false
  });

  const dropdownMenus = [
    {
      name: 'ข้อมูลหลัก',
      items: ['ข้อมูลภาควิชา', 'ข้อมูลหลักสูตร', 'ข้อมูลรายวิชา', 'ข้อมูล Rubric กลาง']
    },
    {
      name: 'ผู้ใช้',
      items: ['ผู้ใช้งานระบบ']
    },
    {
      name: 'หลักสูตร',
      items: ['รายวิชาในหลักสูตร', 'ข้อมูลนักศึกษากลาง', 'การเปิดรายวิชาในภาคการศึกษา']
    },
    {
      name: 'ผลการเรียนรู้',
      items: ['ผลการเรียนรู้ระดับหลักสูตร', 'เชื่อมโยงผลการเรียนรู้ระดับหลักสูตรกับรายวิชา']
    },
    {
      name: 'รายวิชา',
      items: ['รายชื่อนักศึกษาของรายวิชา', 'กลุ่มงานนักศึกษา', 'ผลการเรียนรู้รายวิชา', 'สัดส่วนคะแนน', 'กิจกรรมการเรียนรู้ในรายวิชา', 'แผนการสอน', 'คะแนนกิจกรรมการเรียนรู้', 'การประเมินผลการเรียนรู้', 'ผลลัพธ์การเรียนรู้ระดับรายวิชา', 'ผลลัพธ์การเรียนรู้รายบุคคล', 'รายละเอียดผลการเรียนรู้', 'ความเชื่อมโยงผลการเรียนรู้และกิจกรรม']
    },
    {
      name: 'การประเมิน',
      items: ['ผลการเรียนรู้ระดับหลักสูตร ตามรุ่นปีรับเข้า', 'เปรียบเทียบผลการเรียนรู้ระดับหลักสูตร', 'ผลการเรียนรู้ระดับหลักสูตร รายบุคคล']
    },
    {
      name: 'รายงาน',
      items: []
    }
  ];

  // Radar chart data for course level (average of all students)
  const radarData = {
    'CLO-1': 4.1,
    'CLO-2': 3.9,
    'CLO-3': 4.3,
    'CLO-4': 3.7,
    'CLO-5': 4.2
  };

  const toggleMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header */}
      <div className="bg-orange-400 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">KE</span>
            </div>
            <span className="text-lg font-semibold text-white">K-Engineering QA</span>
          </div>
          <div className="flex items-center justify-center flex-1">
            <select className="p-2 border border-gray-300 rounded-md text-sm bg-white min-w-[200px]">
              <option>ผู้ดูแลระดับภาควิชา</option>
              <option>ผู้ดูแลระดับคณะ</option>
              <option>ผู้ดูแลระดับมหาวิทยาลัย</option>
              <option>อาจารย์</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
            <User className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">หน้าแรก</h3>
            </div>

            {/* Dropdown Menus */}
            <div className="space-y-2">
              {dropdownMenus.map((menu, index) => (
                <div key={index}>
                  <div
                    className="flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => menu.items.length > 0 ? toggleMenu(menu.name) : setActiveTab(menu.name)}
                  >
                    <span className="font-medium">{menu.name}</span>
                    {menu.items.length > 0 && (
                      expandedMenus[menu.name] ? 
                        <ChevronDown className="w-4 h-4" /> : 
                        <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                  {menu.items.length > 0 && expandedMenus[menu.name] && (
                    <div className="ml-4 space-y-1">
                      {menu.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`p-2 text-sm rounded cursor-pointer ${
                            activeTab === item
                              ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                          onClick={() => setActiveTab(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <span className="text-sm text-blue-600 cursor-pointer hover:underline">รายวิชา</span>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <span className="text-sm text-gray-700">ผลลัพธ์การเรียนรู้ระดับรายวิชา</span>
          </div>

          {/* Course Info Section */}
          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-6">
              <div>
                <span className="text-2xl font-bold text-gray-800">Computer Networks</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">1/2568</span>
              </div>
            </div>
          </div>

          {/* Course Level Learning Outcome */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold text-gray-800">ผลลัพธ์การเรียนรู้ระดับรายวิชา</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  เทียบกับผลการเรียนรู้ย้อนหลัง
                </button>
              </div>

              {/* Course Statistics */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">32</div>
                  <div className="text-sm text-gray-600">นักศึกษาทั้งหมด</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">4.04</div>
                  <div className="text-sm text-gray-600">คะแนนเฉลี่ยรวม</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">87.5%</div>
                  <div className="text-sm text-gray-600">อัตราผ่านเกณฑ์</div>
                </div>
              </div>

              {/* Radar Chart */}
              <div className="flex justify-center">
                <div className="relative w-96 h-96">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Background circles */}
                    <g>
                      {[1, 2, 3, 4, 5].map((level) => (
                        <circle
                          key={level}
                          cx="200"
                          cy="200"
                          r={level * 30}
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                        />
                      ))}
                    </g>
                    
                    {/* Axis lines */}
                    <g>
                      {['CLO-1', 'CLO-2', 'CLO-3', 'CLO-4', 'CLO-5'].map((label, index) => {
                        const angle = (index * 72 - 90) * (Math.PI / 180);
                        const x = 200 + Math.cos(angle) * 150;
                        const y = 200 + Math.sin(angle) * 150;
                        return (
                          <line
                            key={index}
                            x1="200"
                            y1="200"
                            x2={x}
                            y2={y}
                            stroke="#d1d5db"
                            strokeWidth="1"
                          />
                        );
                      })}
                    </g>

                    {/* Data polygon */}
                    <polygon
                      points={['CLO-1', 'CLO-2', 'CLO-3', 'CLO-4', 'CLO-5'].map((label, index) => {
                        const angle = (index * 72 - 90) * (Math.PI / 180);
                        const value = radarData[label];
                        const radius = (value / 5) * 150;
                        const x = 200 + Math.cos(angle) * radius;
                        const y = 200 + Math.sin(angle) * radius;
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="rgba(34, 197, 94, 0.3)"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />

                    {/* Data points */}
                    {['CLO-1', 'CLO-2', 'CLO-3', 'CLO-4', 'CLO-5'].map((label, index) => {
                      const angle = (index * 72 - 90) * (Math.PI / 180);
                      const value = radarData[label];
                      const radius = (value / 5) * 150;
                      const x = 200 + Math.cos(angle) * radius;
                      const y = 200 + Math.sin(angle) * radius;
                      return (
                        <circle
                          key={index}
                          cx={x}
                          cy={y}
                          r="4"
                          fill="#22c55e"
                        />
                      );
                    })}

                    {/* Labels */}
                    {['CLO-1', 'CLO-2', 'CLO-3', 'CLO-4', 'CLO-5'].map((label, index) => {
                      const angle = (index * 72 - 90) * (Math.PI / 180);
                      const x = 200 + Math.cos(angle) * 170;
                      const y = 200 + Math.sin(angle) * 170;
                      return (
                        <text
                          key={index}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-sm font-medium fill-gray-700"
                        >
                          {label}
                        </text>
                      );
                    })}

                    {/* Scale labels */}
                    {[1, 2, 3, 4, 5].map((level) => (
                      <text
                        key={level}
                        x="205"
                        y={200 - level * 30}
                        textAnchor="start"
                        dominantBaseline="middle"
                        className="text-xs fill-gray-500"
                      >
                        {level}
                      </text>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Score Summary */}
              <div className="mt-6 grid grid-cols-5 gap-4">
                {Object.entries(radarData).map(([clo, score]) => (
                  <div key={clo} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-700">{clo}</div>
                    <div className="text-lg font-bold text-green-600">{score}</div>
                    <div className="text-xs text-gray-500">เฉลี่ยรายวิชา</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 shadow-lg">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default CourseManagementSystem;