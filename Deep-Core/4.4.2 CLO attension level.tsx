import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, Trash2, Eye } from 'lucide-react';

const CourseManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('ผลการเรียนรู้รายวิชา');
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
            <span className="text-sm text-gray-700">ผลการเรียนรู้รายวิชา</span>
          </div>

          {/* Course Info Section */}
          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-6">
              <div>
                <span className="text-2xl font-bold text-gray-800">Operating Systems</span>
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
                <h1 className="text-xl font-bold text-gray-800">ระดับการบรรลุผลพฤติกรรม</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  เพิ่มข้อมูล
                </button>
              </div>

              {/* CLO Description */}
              <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <div className="text-sm text-blue-800">
                  <span className="font-semibold">CLO :</span> สามารถอธิบายและใช้ <span className="font-bold">แบบจำลองสถานะของโปรเซส</span> เพื่อวิเคราะห์การเปลี่ยนแปลงสถานะที่เกิดจากการทำงานของระบบปฏิบัติการได้
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-20 whitespace-nowrap">No.</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-32">ระดับการบรรลุผล</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-64">เกณฑ์การประเมิน</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">คำอธิบายเกณฑ์การประเมิน</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">1.</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="ดีเยี่ยม">ดีเยี่ยม</option>
                          <option value="ดี">ดี</option>
                          <option value="พอใช้">พอใช้</option>
                          <option value="ต้องปรับปรุง">ต้องปรับปรุง</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white resize-none" rows="6" value="(Excellent / High Achievement)
(อธิบายได้ครบถ้วน และ วิเคราะห์เชิงลึกได้)" readOnly></textarea>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white resize-none" rows="6" value="- สามารถอธิบายองค์ประกอบของแบบจำลองสถานะ (ทุกสถานะและการเปลี่ยนสถานะ) ได้อย่างครบถ้วน ถูกต้อง และบอกความสัมพันธ์เชิงสาเหตุได้
- สามารถนำแบบจำลองไป วิเคราะห์สถานการณ์ที่ซับซ้อน (เช่น มีหลายโปรเซส หรือมีเงื่อนไขเรื่อง Priority) ได้อย่างเป็นขั้นตอนและสมเหตุสมผล
- สามารถคาดการณ์และอธิบายลำดับการเปลี่ยนแปลงสถานะของทุกโปรเซสที่เกี่ยวข้องได้อย่างแม่นยำ ใช้ศัพท์เทคนิคได้ถูกต้องและชัดเจน" readOnly></textarea>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">2.</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="ดี">ดี</option>
                          <option value="ดีเยี่ยม">ดีเยี่ยม</option>
                          <option value="พอใช้">พอใช้</option>
                          <option value="ต้องปรับปรุง">ต้องปรับปรุง</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white resize-none" rows="6" value="(Acceptable / Achieved)
(อธิบายหลักการได้ และ วิเคราะห์สถานการณ์พื้นฐานได้)" readOnly></textarea>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white resize-none" rows="6" value="- สามารถอธิบายองค์ประกอบหลักๆ ของแบบจำลองสถานะได้ถูกต้อง แต่อาจมีรายละเอียดผิดพลาดเล็กน้อย หรืออธิบายความสัมพันธ์เชิงสาเหตุได้ไม่ลึกซึ้ง
- สามารถนำแบบจำลองไป วิเคราะห์สถานการณ์พื้นฐาน (เช่น มีโปรเซสเดียว) ได้ถูกต้อง
- เมื่อเจอสถานการณ์ที่ซับซ้อน อาจวิเคราะห์ได้ไม่ครบทุกแง่มุม หรือมีข้อผิดพลาดบางส่วน แต่ยังคงแนวคิดหลักที่ถูกต้อง" readOnly></textarea>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">3.</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="ต้องปรับปรุง">ต้องปรับปรุง</option>
                          <option value="ดีเยี่ยม">ดีเยี่ยม</option>
                          <option value="ดี">ดี</option>
                          <option value="พอใช้">พอใช้</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white resize-none" rows="6" value="(Needs Improvement / Not Yet Achieved)
(มีความเข้าใจคลาดเคลื่อน หรือ ไม่สามารถวิเคราะห์ได้)" readOnly></textarea>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white resize-none" rows="6" value="- ไม่สามารถอธิบายองค์ประกอบหลักของแบบจำลองสถานะได้ หรืออธิบายผิดพลาดในสาระสำคัญ (เช่น สับสนระหว่างสถานะ Ready และ Waiting)
- ไม่สามารถนำแบบจำลองไปใช้ในการวิเคราะห์สถานการณ์ได้ หรือวิเคราะห์ผิดพลาดอย่างสิ้นเชิง
- คำตอบขาดความสมบูรณ์และมีข้อผิดพลาดในสาระสำคัญหลายจุด" readOnly></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
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