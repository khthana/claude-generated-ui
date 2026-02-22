import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, ChevronsLeft, ChevronLeft, ChevronsRight } from 'lucide-react';

const CourseManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('คะแนนกิจกรรมการเรียนรู้');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('การออกแบบ IP Address');
  const [expandedMenus, setExpandedMenus] = useState({ 
    'ข้อมูลหลัก': false,
    'ผู้ใช้': false,
    'หลักสูตร': false,
    'ผลการเรียนรู้': false,
    'รายวิชา': true,
    'การประเมิน': false,
    'รายงาน': false
  });
  const [cloScoreToggle, setCloScoreToggle] = useState(false);

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

  const activities = [
    'การออกแบบ IP Address',
    'การวิเคราะห์ Network Topology',
    'การทดสอบ Protocol',
    'การแก้ไขปัญหา Network',
    'การนำเสนอโครงการ'
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
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">ธนา หงษ์สุวรรณ</span>
              <Bell className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
            </div>
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
            <span className="text-sm text-gray-700">คะแนนกิจกรรมการเรียนรู้</span>
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

          {/* Course Learning Outcome */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold text-gray-800">คะแนนกิจกรรมการเรียนรู้</h1>
                <div className="flex items-center space-x-3">
                  <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    แนบหลักฐาน
                  </button>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    กิจกรรมกลุ่ม
                  </button>
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    นำเข้าข้อมูล
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    บันทึก
                  </button>
                </div>
              </div>

              {/* Activity Dropdown */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">กิจกรรมการเรียนรู้</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-700">คะแนนแยกตาม CLO</span>
                    <button 
                      onClick={() => setCloScoreToggle(!cloScoreToggle)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cloScoreToggle ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cloScoreToggle ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <select 
                  value={selectedActivity}
                  onChange={(e) => setSelectedActivity(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md text-sm bg-white min-w-[300px]"
                >
                  {activities.map((activity, index) => (
                    <option key={index} value={activity}>{activity}</option>
                  ))}
                </select>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-32">รหัสนักศึกษา</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">ชื่อ-นามสกุล</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-24">Score-1</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-24">Score-2</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">67010234</td>
                      <td className="px-4 py-4 text-sm text-gray-900">นายธนากร สุขสวัสดิ์</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="85" />
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="78" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">67010567</td>
                      <td className="px-4 py-4 text-sm text-gray-900">นางสาวปิยะดา วรรณสิริ</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="92" />
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="88" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">67010823</td>
                      <td className="px-4 py-4 text-sm text-gray-900">นายกิตติชัย มั่นคงทรัพย์</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="76" />
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="82" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">67010945</td>
                      <td className="px-4 py-4 text-sm text-gray-900">นางสาวสิริพร ใจดีมาก</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="89" />
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="91" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">67010156</td>
                      <td className="px-4 py-4 text-sm text-gray-900">นายอนุชา รักเรียน</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="73" />
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <input type="number" className="w-16 p-1 border border-gray-300 rounded text-center" defaultValue="79" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  1-3 of 3 items
                </div>
                <div className="flex items-center space-x-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded">
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-2 text-cyan-600 bg-transparent border border-cyan-500 hover:bg-cyan-50 rounded">
                    1
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded">
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Save Button */}
              <div className="mt-6 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium">
                  บันทึก
                </button>
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