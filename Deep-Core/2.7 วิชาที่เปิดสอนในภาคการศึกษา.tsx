import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, ChevronsLeft, ChevronLeft, ChevronsRight } from 'lucide-react';

const CurriculumManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('การเปิดรายวิชาในภาคการศึกษา');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMenus, setExpandedMenus] = useState({ 
    'ข้อมูลหลัก': true, 
    'ผู้ใช้': true, 
    'หลักสูตร': true, 
    'ผลการเรียนรู้': false,
    'รายวิชา': false,
    'การประเมิน': false 
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
      items: ['รายชื่อนักศึกษาของรายวิชา', 'กลุ่มงานนักศึกษา', 'ผลการเรียนรู้รายวิชา', 'สัดส่วนคะแนน', 'กิจกรรมการเรียนรู้ในรายวิชา', 'แผนการสอน', 'คะแนนกิจกรรมการเรียนรู้', 'การประเมินผลการเรียนรู้', 'ผลการเรียนรู้รายวิชา', 'ผลการเรียนรู้รายบุคคล', 'รายละเอียดผลการเรียนรู้', 'ความเชื่อมโยงผลการเรียนรู้และกิจกรรม']
    },
    {
      name: 'การประเมิน',
      items: ['ผลการเรียนรู้ระดับหลักสูตร ตามรุ่นปีรับเข้า', 'เปรียบเทียบผลการเรียนรู้ระดับหลักสูตร', 'ผลการเรียนรู้ระดับหลักสูตร รายบุคคล']
    }
  ];

  const subMenuItems = [
    { name: 'รายงาน', active: false }
  ];

  const students = [
    {
      studentId: '64010001',
      nameTh: 'นายสมชาย ใจดี',
      nameEn: 'Mr. Somchai Jaidee'
    },
    {
      studentId: '64010002',
      nameTh: 'นางสาวสมหญิง รักเรียน',
      nameEn: 'Miss Somying Rakrian'
    },
    {
      studentId: '64010003',
      nameTh: 'นายอนุชา มั่นคง',
      nameEn: 'Mr. Anucha Mankong'
    },
    {
      studentId: '64010004',
      nameTh: 'นางสาวพิมพ์ใจ สุขสันต์',
      nameEn: 'Miss Pimjai Suksan'
    },
    {
      studentId: '64010005',
      nameTh: 'นายธนกร เก่งกล้า',
      nameEn: 'Mr. Thanakorn Kengkla'
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
      <div className="bg-cyan-400 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">CE</span>
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
                    onClick={() => toggleMenu(menu.name)}
                  >
                    <span className="font-medium">{menu.name}</span>
                    {expandedMenus[menu.name] ? 
                      <ChevronDown className="w-4 h-4" /> : 
                      <ChevronRight className="w-4 h-4" />
                    }
                  </div>
                  {expandedMenus[menu.name] && (
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

            {/* Other Menu Items */}
            <div className="mt-6 space-y-1">
              {subMenuItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-2 text-sm rounded cursor-pointer ${
                    item.active
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <span className="text-sm text-blue-600 cursor-pointer hover:underline">หลักสูตร</span>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <span className="text-sm text-gray-700">การเปิดรายวิชาในภาคการศึกษา</span>
          </div>

          {/* Semester Plan Header */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">กำหนดการเปิดรายวิชาในภาคการศึกษา</h1>
              
              {/* Year and Semester Selection */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">ปีการศึกษา</label>
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[100px]">
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">ภาคการศึกษา</label>
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[80px]">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    เลือก
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    เพิ่มวิชา
                  </button>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    คัดลอกจากปีการศึกษาก่อนหน้า
                  </button>
                </div>
              </div>

              {/* Date Section */}
              <div className="mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">1/2025</h3>
                  
                  {/* Course Entry */}
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-md border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <input 
                            type="text" 
                            value="01076401"
                            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-20"
                            maxLength="8"
                          />
                          <span className="text-sm text-gray-800">Introduction to Computer Engineering</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium">
                            เลือก
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-xs font-medium">
                            Add Section
                          </button>
                          <button className="text-blue-600 hover:text-blue-700">
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Section Table */}
                      <div className="bg-gray-50 rounded-md">
                        <div className="grid grid-cols-12 gap-4 p-3 text-sm font-medium text-gray-600 border-b border-gray-200">
                          <span className="col-span-2">Section</span>
                          <span className="col-span-10">Teacher</span>
                        </div>
                        
                        {/* Section Rows */}
                        <div className="divide-y divide-gray-200">
                          <div className="grid grid-cols-12 gap-4 p-3 text-sm">
                            <span className="text-gray-800 col-span-2">101</span>
                            <div className="flex items-start space-x-2 col-span-9">
                              <div className="flex items-center bg-blue-100 border border-blue-300 rounded px-2 py-1 text-xs">
                                <span className="text-blue-800">Johny Tommy</span>
                                <button className="ml-1 text-blue-600 hover:text-blue-800">
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            <div className="col-span-1 flex justify-end">
                              <button className="text-gray-400 hover:text-gray-600">
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-12 gap-4 p-3 text-sm">
                            <span className="text-gray-800 col-span-2">102</span>
                            <div className="flex items-start space-x-2 col-span-9">
                              <div className="flex items-center bg-blue-100 border border-blue-300 rounded px-2 py-1 text-xs">
                                <span className="text-blue-800">Johny Tommy</span>
                                <button className="ml-1 text-blue-600 hover:text-blue-800">
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                              <div className="flex items-center bg-blue-100 border border-blue-300 rounded px-2 py-1 text-xs">
                                <span className="text-blue-800">Johny Tommy</span>
                                <button className="ml-1 text-blue-600 hover:text-blue-800">
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            <div className="col-span-1 flex justify-end">
                              <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">1-3 of 3 items</span>
                <div className="flex items-center space-x-1">
                  <button className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-1 text-sm bg-transparent text-cyan-600 border border-cyan-500 rounded hover:bg-cyan-50">1</button>
                  <button className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    <ChevronsRight className="w-4 h-4" />
                  </button>
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

export default CurriculumManagementSystem;