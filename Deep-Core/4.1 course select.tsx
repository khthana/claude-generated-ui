import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key } from 'lucide-react';

const CourseManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('หน้าแรก');
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
      items: [
        'รายชื่อนักศึกษาของรายวิชา', 
        'กลุ่มงานนักศึกษา', 
        'ผลการเรียนรู้รายวิชา', 
        'สัดส่วนคะแนน', 
        'กิจกรรมการเรียนรู้ในรายวิชา', 
        'แผนการสอน', 
        'คะแนนกิจกรรมการเรียนรู้', 
        'การประเมินผลการเรียนรู้', 
        'ผลลัพธ์การเรียนรู้ระดับรายวิชา', 
        'ผลลัพธ์การเรียนรู้รายบุคคล', 
        'รายละเอียดผลการเรียนรู้', 
        'ความเชื่อมโยงผลการเรียนรู้และกิจกรรม'
      ]
    },
    {
      name: 'การประเมิน',
      items: [
        'ผลการเรียนรู้ระดับหลักสูตร ตามรุ่นปีรับเข้า', 
        'เปรียบเทียบผลการเรียนรู้ระดับหลักสูตร', 
        'ผลการเรียนรู้ระดับหลักสูตร รายบุคคล'
      ]
    },
    {
      name: 'รายงาน',
      items: []
    }
  ];

  const students = [
    {
      studentId: '64010001',
      nameTh: 'นายสมชาย ใจดี',
      nameEn: 'Mr. Somchai Jaidee',
      email: '64010001@kmitl.ac.th'
    },
    {
      studentId: '64010002',
      nameTh: 'นางสาวสมหญิง รักเรียน',
      nameEn: 'Miss Somying Rakrian',
      email: '64010002@kmitl.ac.th'
    },
    {
      studentId: '64010003',
      nameTh: 'นายอนุชา มั่นคง',
      nameEn: 'Mr. Anucha Mankong',
      email: '64010003@kmitl.ac.th'
    },
    {
      studentId: '64010004',
      nameTh: 'นางสาวพิมพ์ใจ สุขสันต์',
      nameEn: 'Miss Pimjai Suksan',
      email: '64010004@kmitl.ac.th'
    },
    {
      studentId: '64010005',
      nameTh: 'นายธนกร เก่งกล้า',
      nameEn: 'Mr. Thanakorn Kengkla',
      email: '64010005@kmitl.ac.th'
    }
  ];

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
            <span className="text-white font-medium">ธนา หงษ์สุวรรณ</span>
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
          {/* Course Dashboard */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Course</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Semester</label>
                    <select className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white">
                      <option value="all">All</option>
                      <option value="1/2568">1/2568</option>
                      <option value="2/2568">2/2568</option>
                      <option value="3/2568">3/2568</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="text" 
                      placeholder="Search"
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white min-w-[150px]"
                    />
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-md">
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Semester Header */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-700">1/2568</h2>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Course Card 1 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-cyan-500 text-white p-3">
                    <div className="text-xs font-bold mb-1">01076401</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Introduction to Computer Engineering</h3>
                    <div className="text-sm text-gray-600">Section 1</div>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-cyan-500 text-white p-3">
                    <div className="text-xs font-bold mb-1">01076401</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Programming Fundamentals</h3>
                    <div className="text-sm text-gray-600">Section 1</div>
                  </div>
                </div>

                {/* Course Card 3 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-cyan-500 text-white p-3">
                    <div className="text-xs font-bold mb-1">01076401</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Datastructures and Algorithm</h3>
                    <div className="text-sm text-gray-600">Section 1</div>
                  </div>
                </div>

                {/* Course Card 4 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-cyan-500 text-white p-3">
                    <div className="text-xs font-bold mb-1">01076401</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Introduction to Computer Engineering</h3>
                    <div className="text-sm text-gray-600">Section 1</div>
                  </div>
                </div>

                {/* Course Card 5 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-cyan-500 text-white p-3">
                    <div className="text-xs font-bold mb-1">01076401</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Programming Fundamentals</h3>
                    <div className="text-sm text-gray-600">Section 1</div>
                  </div>
                </div>

                {/* Course Card 6 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-cyan-500 text-white p-3">
                    <div className="text-xs font-bold mb-1">01076401</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Datastructures and Algorithm</h3>
                    <div className="text-sm text-gray-600">Section 1</div>
                  </div>
                </div>
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