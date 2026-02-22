import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, Trash2, Eye } from 'lucide-react';

const StudentListSystem = () => {
  const [activeTab, setActiveTab] = useState('กิจกรรมการสอนในรายวิชา');
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
      items: ['รายชื่อนักศึกษาของรายวิชา', 'กลุ่มงานนักศึกษา', 'ผลการเรียนรู้รายวิชา', 'สัดส่วนคะแนน', 'กิจกรรมการสอนในรายวิชา', 'แผนการสอน', 'คะแนนกิจกรรมการเรียนรู้', 'การประเมินผลการเรียนรู้', 'ผลลัพธ์การเรียนรู้ระดับรายวิชา', 'ผลลัพธ์การเรียนรู้รายบุคคล', 'รายละเอียดผลการเรียนรู้', 'ความเชื่อมโยงผลการเรียนรู้และกิจกรรม']
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

  const groups = [
    {
      order: '1',
      groupName: 'กลุ่ม A',
      members: 'นายสมชาย, นางสาวสมหญิง, นายอนุชา'
    },
    {
      order: '2',
      groupName: 'กลุ่ม B', 
      members: 'นางสาวพิมพ์ใจ, นายธนกร, นายวิชัย'
    },
    {
      order: '3',
      groupName: 'กลุ่ม C',
      members: 'นางสาวนิตยา, นายประยุทธ, นายสมศักดิ์'
    },
    {
      order: '4',
      groupName: 'กลุ่ม D',
      members: 'นายอภิชาติ, นางสาวสุดา, นายปิยะ'
    },
    {
      order: '5',
      groupName: 'กลุ่ม E',
      members: 'นายชาญชัย, นางสาวมานี, นายเดชา'
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
            <span className="text-white text-sm font-medium">ธนา หงษ์สุวรรณ</span>
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
            <span className="text-sm text-gray-700">กิจกรรมการสอนในรายวิชา</span>
          </div>

          {/* Course Info Section */}
          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">Computer Networks - 1/2568</span>
            </div>
          </div>

          {/* Activity Management */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800">กิจกรรมการสอน</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">ประเภทกิจกรรม:</label>
                    <select className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white min-w-[100px]">
                      <option value="all">All</option>
                      <option value="quiz">Quiz</option>
                      <option value="assignment">Assignment</option>
                    </select>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    กิจกรรมใหม่
                  </button>
                </div>
              </div>

              {/* Quiz Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Quiz (2)</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-orange-600">10 %</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <div className="w-12 text-center py-4 text-sm font-medium text-gray-600 border-r border-gray-300">
                      1
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-cyan-600 font-medium">Quiz เลขฐาน</span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Individual</span>
                      </div>
                      <p className="text-sm text-gray-600">นักศึกษาอธิบายการแปลงเปลี่ยน และ การบวกลบเลขฐาน ...</p>
                    </div>
                    <div className="w-20 text-center py-4 border-l border-gray-300">
                      <span className="text-sm font-medium text-orange-600">5 คะแนน</span>
                    </div>
                    <div className="w-20 text-center py-4 border-l border-gray-300">
                      <div className="flex items-center justify-center space-x-3">
                        <button className="p-1 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <div className="w-12 text-center py-4 text-sm font-medium text-gray-600 border-r border-gray-300">
                      2
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-cyan-600 font-medium">Quiz วงจรรีซิสเตอร์</span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Individual</span>
                      </div>
                      <p className="text-sm text-gray-600">โจทย์วงจรรีซิสเตอร์แบบอนุกรมและขนาน วงจรแบบผสม...</p>
                    </div>
                    <div className="w-20 text-center py-4 border-l border-gray-300">
                      <span className="text-sm font-medium text-orange-600">5 คะแนน</span>
                    </div>
                    <div className="w-20 text-center py-4 border-l border-gray-300">
                      <div className="flex items-center justify-center space-x-3">
                        <button className="p-1 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assignment Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Assignment (9)</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-orange-600">50 %</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <div className="w-12 text-center py-4 text-sm font-medium text-gray-600 border-r border-gray-300">
                      1
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-cyan-600 font-medium">Assignment #8: Free RTOS #1</span>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Group</span>
                      </div>
                      <p className="text-sm text-gray-600">ให้เขียนโปรแกรม โดยใช้ FreeRTOS ส่งข้อมูลผ่าน Queue...</p>
                    </div>
                    <div className="w-20 text-center py-4 border-l border-gray-300">
                      <span className="text-sm font-medium text-orange-600">5 คะแนน</span>
                    </div>
                    <div className="w-20 text-center py-4 border-l border-gray-300">
                      <div className="flex items-center justify-center space-x-3">
                        <button className="p-1 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
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

export default StudentListSystem;