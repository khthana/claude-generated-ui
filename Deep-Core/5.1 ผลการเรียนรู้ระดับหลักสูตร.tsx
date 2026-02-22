import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key } from 'lucide-react';

const UserManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('ผลการเรียนรู้ระดับหลักสูตร ตามรุ่นปีรับเข้า');
  const [expandedMenus, setExpandedMenus] = useState({ 'ข้อมูลหลัก': true, 'ผู้ใช้': true, 'หลักสูตร': false, 'ผลการเรียนรู้': true, 'รายวิชา': false, 'การประเมิน': true });

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
    }
  ];

  const plos = [
    {
      name: 'PLO 1: อธิบายและประยุกต์ใช้ความรู้เชิงทฤษฎีจากวิทยาศาสตร์และคณิตศาสตร์ในสาขาวิชาวิศวกรรมคอมพิวเตอร์ได้อย่างเป็นระบบ',
      score: '3.57',
      subjects: [
        { name: '01076006 Digital System Fundamental', rowSpan: 1 },
        { name: '01076142 Linear Algebra', rowSpan: 2 },
        { name: '01076253 Probability and Statistics', rowSpan: 3 }
      ],
      rows: [
        { subjectIndex: 0, clo: '', score: '-' },
        { subjectIndex: 1, clo: 'CLO-1: อธิบายแนวคิดพื้นฐานของพีชคณิตเชิงเส้น เช่น เวกเตอร์ เมทริกซ์ การดำเนินการกับเมทริกซ์ และระบบสมการเชิงเส้นได้อย่างถูกต้อง', score: '3.8' },
        { subjectIndex: 1, clo: 'CLO-2: ประยุกต์ใช้เมทริกซ์และเวกเตอร์ในการแก้ปัญหาทางวิศวกรรม เช่น การแก้ระบบสมการเชิงเส้น และการแทนข้อมูลในคอมพิวเตอร์', score: '3.4' },
        { subjectIndex: 2, clo: 'CLO-1: อธิบายแนวคิดพื้นฐานของความน่าจะเป็น การแจกแจงความน่าจะเป็น และสถิติเชิงพรรณนาได้อย่างถูกต้อง', score: '3.7' },
        { subjectIndex: 2, clo: 'CLO-2: คำนวณและวิเคราะห์ข้อมูลโดยใช้เครื่องมือทางสถิติ เช่น ค่าเฉลี่ย ส่วนเบี่ยงเบนมาตรฐาน ความแปรปรวน การแจกแจงแบบปกติ และการแจกแจงแบบไม่ต่อเนื่อง', score: '3.5' },
        { subjectIndex: 2, clo: 'CLO-3: ประยุกต์ใช้หลักการความน่าจะเป็นและสถิติในการแก้ปัญหาทางวิศวกรรมคอมพิวเตอร์ เช่น การวิเคราะห์ประสิทธิภาพระบบ หรือการประมวลผลข้อมูล', score: '3.5' }
      ]
    },
    {
      name: 'PLO 2: อธิบายและประยุกต์ใช้หลักการและทฤษฎีพื้นฐานทางวิศวกรรมคอมพิวเตอร์ รวมถึงการเลือกใช้เทคโนโลยี เครื่องมือ และวิธีการปฏิบัติงานที่ทันสมัย เพื่อวิเคราะห์และแก้ไขปัญหาทางวิศวกรรมได้อย่างเป็นระบบ',
      score: '4.12',
      subjects: [
        { name: '01076003 Circuits and Electronics', rowSpan: 1 },
        { name: '01076033 Fundamental of Communication Systems', rowSpan: 1 },
        { name: '01076121 Theory of Computation', rowSpan: 1 }
      ],
      rows: [
        { subjectIndex: 0, clo: '', score: '-' },
        { subjectIndex: 1, clo: '', score: '-' },
        { subjectIndex: 2, clo: '', score: '-' }
      ]
    }
  ];

  const subMenuItems = [
    { name: 'รายงาน', active: false }
  ];

  const subjects = [
    '01076002 Programming Fundamental'
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
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">KE</span>
            </div>
            <span className="text-lg font-semibold text-white">K-Engineering QA</span>
          </div>
          <div className="flex items-center justify-center flex-1">
            <select className="p-2 border border-gray-300 rounded-md text-sm bg-white">
              <option>ผู้ดูแลระดับภาควิชา</option>
              <option>ผู้ดูแลระดับคณะ</option>
              <option>ผู้ดูแลระดับมหาวิทยาลัย</option>
              <option>อาจารย์</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-white font-medium">ธนา หงษ์สุวรรณ</span>
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
            <span className="text-sm text-blue-600 cursor-pointer hover:underline">ผลการเรียนรู้</span>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <span className="text-sm text-gray-700">ผลการเรียนรู้ระดับหลักสูตร ตามรุ่นปีรับเข้า</span>
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">ผลการเรียนรู้ระดับหลักสูตร ตามรุ่นปีรับเข้า</h1>

          {/* Curriculum Selector */}
          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">เลือกหลักสูตร</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[200px]">
                  <option value="ce-2560">วิศวกรรมคอมพิวเตอร์ - 2560</option>
                  <option value="ce-2564">วิศวกรรมคอมพิวเตอร์ - 2564</option>
                  <option value="ce-2567">วิศวกรรมคอมพิวเตอร์ - 2567</option>
                </select>
                <label className="text-sm font-medium text-gray-700">รุ่นปีรับเข้า</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[120px]">
                  <option value="2564">ปี 2564</option>
                  <option value="2565">ปี 2565</option>
                  <option value="2566">ปี 2566</option>
                  <option value="2567">ปี 2567</option>
                  <option value="2568">ปี 2568</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  เลือก
                </button>
              </div>
              <div>
                <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  แสดง Chart ผลการเรียนรู้
                </button>
              </div>
            </div>
          </div>

          {/* Mapping Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-80 sticky left-0 bg-gray-50">
                      ผลการเรียนรู้
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">
                      รายวิชา
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500 w-48">
                      CLO
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500 w-32">
                      ระดับคะแนน
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* PLO Rows */}
                  {plos.map((plo, ploIndex) => {
                    let subjectRowsRendered = new Array(plo.subjects.length).fill(false);
                    
                    return plo.rows.map((row, rowIndex) => (
                      <tr key={`${ploIndex}-${rowIndex}`} className="hover:bg-gray-50">
                        {rowIndex === 0 && (
                          <td 
                            rowSpan={plo.rows.length} 
                            className="px-4 py-3 text-sm text-gray-900 sticky left-0 bg-white border-r border-gray-200 font-medium align-top"
                          >
                            <div className="text-xs text-gray-700 p-2 bg-gray-50 rounded border-l-4 border-blue-400">
                              {plo.name}
                            </div>
                            <div className="mt-3 p-2 bg-green-50 rounded border border-green-200">
                              <div className="text-xs font-medium text-green-800">
                                คะแนน: {plo.score}
                              </div>
                            </div>
                          </td>
                        )}
                        {!subjectRowsRendered[row.subjectIndex] && (
                          <td 
                            rowSpan={plo.subjects[row.subjectIndex].rowSpan}
                            className="px-4 py-3 border-r border-gray-200 align-top"
                          >
                            <div className="text-sm text-gray-900 font-medium">
                              {plo.subjects[row.subjectIndex].name}
                            </div>
                            <div className="text-xs text-blue-500 mt-1">
                              วิชาบังคับ
                            </div>
                          </td>
                        )}
                        <td className="px-4 py-3 border-r border-gray-200">
                          <div className="text-xs text-gray-700 p-2">
                            {row.clo && (
                              <div dangerouslySetInnerHTML={{ 
                                __html: row.clo.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                              }} />
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 border-r border-gray-200">
                          <div className="flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-900">
                              {row.score}
                            </span>
                          </div>
                        </td>
                        {(subjectRowsRendered[row.subjectIndex] = true) && null}
                      </tr>
                    ));
                  })}
                </tbody>
              </table>
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

export default UserManagementSystem;