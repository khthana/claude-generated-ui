import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react';

const CurriculumManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('ข้อมูลนักศึกษา');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMenus, setExpandedMenus] = useState({ 
    'ข้อมูลหลัก': true, 
    'ผู้ใช้': true, 
    'หลักสูตร': false, 
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
            <span className="text-sm text-blue-600 cursor-pointer hover:underline">ข้อมูลหลัก</span>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <span className="text-sm text-gray-700">ข้อมูลนักศึกษา</span>
          </div>

          {/* Department and Search Section */}
          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">เลือกภาควิชา</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[200px]">
                  <option value="computer-engineering">วิศวกรรมคอมพิวเตอร์</option>
                  <option value="electrical-engineering">วิศวกรรมไฟฟ้า</option>
                  <option value="telecommunication-engineering">วิศวกรรมโทรคมนาคม</option>
                </select>
                <label className="text-sm font-medium text-gray-700">เลือกสาขาวิชา</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[200px]">
                  <option value="computer-engineering">วิศวกรรมคอมพิวเตอร์</option>
                  <option value="electrical-engineering">วิศวกรรมไฟฟ้า</option>
                  <option value="telecommunication-engineering">วิศวกรรมโทรคมนาคม</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">รุ่นปีรับเข้าศึกษา</label>
                  <input 
                    type="text" 
                    placeholder="รุ่นปีรับเข้าศึกษา"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[150px]"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  เลือก
                </button>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">ข้อมูลนักศึกษา</h1>
            <div className="flex space-x-2">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                นำเข้าข้อมูล
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                เพิ่มข้อมูล
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    รหัสนักศึกษา
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ชื่อนักศึกษา
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ดำเนินการ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.studentId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.nameTh}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button className="border border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 hover:text-green-700 p-2 rounded text-xs font-medium transition-colors duration-200">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="border border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700 hover:text-red-700 p-2 rounded text-xs font-medium transition-colors duration-200">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">1-3 of 3 items</span>
            <div className="flex items-center space-x-1">
              <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 p-2 rounded text-sm transition-colors duration-200">
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 p-2 rounded text-sm transition-colors duration-200">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-3 py-2 rounded text-sm font-medium transition-colors duration-200">
                1
              </button>
              <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 p-2 rounded text-sm transition-colors duration-200">
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 p-2 rounded text-sm transition-colors duration-200">
                <ChevronsRight className="w-4 h-4" />
              </button>
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