import React, { useState } from 'react';
import { Home, BookOpen, Calendar, FileText, Bell, User } from 'lucide-react';

export default function LearningManagementSystem() {
  const [activeMenu, setActiveMenu] = useState('แฟ้มผลงาน');
  const [activeSubMenu, setActiveSubMenu] = useState('เป้าหมายทางวิชาชีพ');

  const menuItems = [
    { name: 'หน้าหลัก', icon: Home },
    { name: 'รายวิชา', icon: BookOpen, submenu: ['ประกาศ', 'รายละเอียดรายวิชา', 'งานในชั้นเรียน', 'สื่อการเรียนการสอน', 'ผลการประเมิน'] },
    { name: 'ปฏิทิน', icon: Calendar },
    { name: 'แฟ้มผลงาน', icon: FileText, submenu: ['เกี่ยวกับฉัน', 'ข้อมูลส่วนตัว', 'ประวัติการศึกษา', 'เป้าหมายทางวิชาชีพ', 'ทักษะ', 'การฝึกงาน / สหกิจศึกษา', 'โครงงานปริญญาตรี', 'การฝึกอบรม', 'รางวัลและการแข่งขัน', 'คุณวุฒิทางวิชาชีพ', 'e-Portfolio'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6" />
            <span className="text-xl font-semibold">DEEP-PORTFOLIO</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">ปัญณิฏฐา ปิงคำ</span>
            <Bell className="w-5 h-5" />
            <User className="w-8 h-8 bg-gray-600 rounded-full p-1" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-4">
            {menuItems.map((item) => (
              <div key={item.name} className="mb-2">
                <div 
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    activeMenu === item.name ? 'bg-orange-100 text-orange-600 border-r-4 border-orange-500' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveMenu(item.name)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </div>
                {item.submenu && activeMenu === item.name && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <div 
                        key={subItem}
                        className={`p-2 text-sm rounded cursor-pointer transition-colors ${
                          subItem === activeSubMenu ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveSubMenu(subItem)}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <span className="text-orange-500 font-medium">แฟ้มผลงาน</span>
            <span className="mx-2">></span>
            <span>เป้าหมายทางวิชาชีพ</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-8">เป้าหมายทางวิชาชีพ</h1>

          {/* Text Editor */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Title Bar */}
            <div className="bg-gray-100 px-4 py-2 border-b">
            </div>

            {/* Toolbar 1 - File operations */}
            <div className="bg-gray-50 px-4 py-2 border-b flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-200 rounded" title="เปิด">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5L12 5H5a2 2 0 00-2 2z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="บันทึก">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="พิมพ์">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-1 hover:bg-gray-200 rounded" title="ค้นหา">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="ตัด">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1M7.05 4.05L4.222 6.878A2.83 2.83 0 004.222 10.95L12 18.728l7.778-7.778a2.83 2.83 0 000-4.071L16.95 4.05a2.83 2.83 0 00-4.071 0z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="คัดลอก">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="วาง">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
            </div>

            {/* Toolbar 2 - Text formatting */}
            <div className="bg-gray-50 px-4 py-2 border-b flex items-center space-x-2">
              <button className="px-2 py-1 font-bold hover:bg-gray-200 rounded text-sm" title="ตัวหนา">B</button>
              <button className="px-2 py-1 italic hover:bg-gray-200 rounded text-sm" title="ตัวเอียง">I</button>
              <button className="px-2 py-1 underline hover:bg-gray-200 rounded text-sm" title="ขีดเส้นใต้">U</button>
              <button className="px-2 py-1 line-through hover:bg-gray-200 rounded text-sm" title="ขีดฆ่า">S</button>
              <button className="px-2 py-1 hover:bg-gray-200 rounded text-xs" title="ตัวห้อย">x₂</button>
              <button className="px-2 py-1 hover:bg-gray-200 rounded text-xs" title="ตัวยก">x²</button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-1 hover:bg-gray-200 rounded" title="รายการจุด">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="รายการหมายเลข">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-1 hover:bg-gray-200 rounded" title="จัดชิดซ้าย">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="จัดกึ่งกลาง">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M8 12h8M6 18h12" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="จัดชิดขวา">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M8 12h16M4 18h16" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="จัดเต็มบรรทัด">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <button className="p-1 hover:bg-gray-200 rounded" title="แทรกรูปภาพ">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded" title="แทรกตาราง">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V10z" />
                </svg>
              </button>
            </div>

            {/* Toolbar 3 - Font and styling */}
            <div className="bg-gray-50 px-4 py-2 border-b flex items-center space-x-4">
              <select className="px-3 py-1 border rounded text-sm bg-white" defaultValue="ลักษณะ">
                <option>ลักษณะ</option>
                <option>TH SarabunPSK</option>
                <option>Tahoma</option>
                <option>Arial</option>
              </select>
              <select className="px-3 py-1 border rounded text-sm bg-white" defaultValue="รูปแบบ">
                <option>รูปแบบ</option>
                <option>ปกติ</option>
                <option>หัวข้อ</option>
              </select>
              <select className="px-3 py-1 border rounded text-sm bg-white" defaultValue="แบบอักษร">
                <option>แบบอักษร</option>
                <option>ปกติ</option>
                <option>หนา</option>
              </select>
              <select className="px-3 py-1 border rounded text-sm bg-white" defaultValue="ขนาด">
                <option>ขนาด</option>
                <option>12</option>
                <option>14</option>
                <option>16</option>
                <option>18</option>
              </select>
              <select className="px-3 py-1 border rounded text-sm bg-white" defaultValue="Line Height">
                <option>Line Height</option>
                <option>1.0</option>
                <option>1.5</option>
                <option>2.0</option>
              </select>
              <div className="flex items-center space-x-1">
                <button className="w-8 h-8 bg-black border rounded" title="สีตัวอักษร"></button>
                <button className="w-8 h-8 bg-yellow-300 border rounded" title="สีพื้นหลัง"></button>
              </div>
            </div>

            {/* Writing Area */}
            <div className="p-6 min-h-96 bg-white">
              <div className="w-full h-full border-none outline-none resize-none bg-transparent">
                <div className="text-gray-400 italic">
                  เริ่มเขียนเกี่ยวกับเป้าหมายทางวิชาชีพของคุณที่นี่...
                </div>
              </div>
            </div>
            
            {/* Save Button */}
            <div className="p-4 bg-gray-50 border-t flex justify-end">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                บันทึก
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-colors">
          <FileText className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}