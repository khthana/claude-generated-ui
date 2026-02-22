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
                <h1 className="text-xl font-bold text-gray-800">พฤติกรรมที่วัดผลได้ของ CLO</h1>
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
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-48">กิจกรรมการเรียนรู้</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">พฤติกรรม</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-32">ระดับ</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-32">ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">1.</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="ข้อสอบ" selected>ข้อสอบ</option>
                          <option value="Quiz">Quiz</option>
                          <option value="แบบฝึกหัด/การบ้าน">แบบฝึกหัด/การบ้าน</option>
                          <option value="งานที่มอบหมาย (Assignment)">งานที่มอบหมาย (Assignment)</option>
                          <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <div className="space-y-2">
                          <div>1) สามารถระบุและอธิบายความหมายของแต่ละสถานะในแบบจำลอง 5 สถานะ (New, Ready, Running, Waiting/Blocked, Terminated) ได้อย่างถูกต้อง</div>
                          <div>2) สามารถจับคู่เหตุการณ์ (เช่น Timer interrupt, I/O request, I/O completion) กับการเปลี่ยนสถานะที่ถูกต้องได้</div>
                          <div>3) สามารถเปรียบเทียบความแตกต่างที่สำคัญระหว่างสถานะ <span className="font-bold">Ready</span> และ <span className="font-bold">Waiting/Blocked</span> ได้</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="เข้าใจ" selected>เข้าใจ</option>
                          <option value="ความจำ">ความจำ</option>
                          <option value="ประยุกต์">ประยุกต์</option>
                          <option value="วิเคราะห์">วิเคราะห์</option>
                          <option value="ประเมินค่า">ประเมินค่า</option>
                          <option value="ออกแบบ/สร้างสรรค์">ออกแบบ/สร้างสรรค์</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-3">
                          <button 
                            className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded-md text-xs font-medium flex items-center justify-center"
                            title="แก้ไข"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded-md text-xs font-medium flex items-center justify-center"
                            title="ลบข้อมูล"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">2.</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="แบบฝึกหัด/การบ้าน" selected>แบบฝึกหัด/การบ้าน</option>
                          <option value="Quiz">Quiz</option>
                          <option value="ข้อสอบ">ข้อสอบ</option>
                          <option value="งานที่มอบหมาย (Assignment)">งานที่มอบหมาย (Assignment)</option>
                          <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <div className="space-y-2">
                          <div>1) สามารถวาดแผนภาพแบบจำลองสถานะของโปรเซส (Process State Diagram) พร้อมทั้งระบุชื่อสถานะและทิศทางการเปลี่ยนสถานะได้อย่างสมบูรณ์</div>
                          <div>2) สามารถเติมชื่อสถานะและชื่อการเปลี่ยนสถานะ (เช่น Dispatch, Timeout, Exit) ลงในแผนภาพที่เว้นช่องว่างไว้ได้</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="ประยุกต์" selected>ประยุกต์</option>
                          <option value="ความจำ">ความจำ</option>
                          <option value="เข้าใจ">เข้าใจ</option>
                          <option value="วิเคราะห์">วิเคราะห์</option>
                          <option value="ประเมินค่า">ประเมินค่า</option>
                          <option value="ออกแบบ/สร้างสรรค์">ออกแบบ/สร้างสรรค์</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-3">
                          <button 
                            className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded-md text-xs font-medium flex items-center justify-center"
                            title="แก้ไข"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded-md text-xs font-medium flex items-center justify-center"
                            title="ลบข้อมูล"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">3.</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="งานที่มอบหมาย (Assignment)" selected>งานที่มอบหมาย (Assignment)</option>
                          <option value="Quiz">Quiz</option>
                          <option value="ข้อสอบ">ข้อสอบ</option>
                          <option value="แบบฝึกหัด/การบ้าน">แบบฝึกหัด/การบ้าน</option>
                          <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <div className="space-y-2">
                          <div>1) เมื่อได้รับสถานการณ์ที่มีหลายโปรเซส (เช่น "โปรเซส A กำลังทำงาน แต่เกิด Timer Interrupt และพบว่าโปรเซส B ที่อยู่ในสถานะ Ready มี Priority สูงกว่า"), สามารถวิเคราะห์และอธิบายการเปลี่ยนแปลงสถานะของโปรเซสที่เกี่ยวข้องทั้งหมดได้ (ทั้ง A และ B)</div>
                          <div>2) สามารถตอบคำถามเชิงวิเคราะห์ เช่น "จะเกิดอะไรขึ้นกับประสิทธิภาพของระบบ ถ้า OS ไม่มีสถานะ Ready และโปรเซสที่ไม่ได้ทำงานจะอยู่ในสถานะ Waiting ทั้งหมด" โดยอ้างอิงหลักการของแบบจำลองสถานะเพื่อสนับสนุนคำตอบ</div>
                          <div>3) สามารถสร้างแผนภาพเวลา (Timing Diagram) ที่แสดงสถานะของโปรเซส 2-3 ตัวในแกนเวลา ตามคำอธิบายสถานการณ์ที่ซับซ้อนซึ่งมีทั้งการทำงานปกติ, การรอ I/O, และการถูกขัดจังหวะ (Preemption)</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white">
                          <option value="วิเคราะห์" selected>วิเคราะห์</option>
                          <option value="ความจำ">ความจำ</option>
                          <option value="เข้าใจ">เข้าใจ</option>
                          <option value="ประยุกต์">ประยุกต์</option>
                          <option value="ประเมินค่า">ประเมินค่า</option>
                          <option value="ออกแบบ/สร้างสรรค์">ออกแบบ/สร้างสรรค์</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-3">
                          <button 
                            className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded-md text-xs font-medium flex items-center justify-center"
                            title="แก้ไข"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded-md text-xs font-medium flex items-center justify-center"
                            title="ลบข้อมูล"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
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