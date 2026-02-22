import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key } from 'lucide-react';

const UserManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('เชื่อมโยงผลการเรียนรู้ระดับหลักสูตรกับรายวิชา');
  const [expandedMenus, setExpandedMenus] = useState({ 'ข้อมูลหลัก': true, 'ผู้ใช้': false, 'หลักสูตร': false, 'ผลการเรียนรู้': true, 'รายวิชา': false, 'การประเมิน': false });

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

  const subjectPLOs = {
    '01076002 Programming Fundamental': [
      'PLO 2: อธิบายและประยุกต์ใช้หลักการและทฤษฎีพื้นฐานทางวิศวกรรมคอมพิวเตอร์ รวมถึงการเลือกใช้เทคโนโลยี เครื่องมือ และวิธีการปฏิบัติงานที่ทันสมัย เพื่อวิเคราะห์และแก้ไขปัญหาทางวิศวกรรมได้อย่างเป็นระบบ',
      'PLO 4: วิเคราะห์ปัญหา ออกแบบอัลกอริทึมและโครงสร้างข้อมูลที่มีประสิทธิภาพ เพื่อแก้ไขปัญหาทางคอมพิวเตอร์',
      'PLO 9: แสดงออกถึงการคิดเชิงวิเคราะห์และเชิงสร้างสรรค์ โดยแยกปัญหาที่ซับซ้อนออกเป็นส่วนย่อย มีทักษะในการสืบค้นข้อมูลและองค์ความรู้ทางวิศวกรรมโดยใช้ความคิดเชิงวิพากษ์ในการวิเคราะห์และประเมินข้อมูล และพัฒนาวิธีใหม่ในการแก้ปัญหา'
    ],
    '01076011 Operating Systems': [
      'PLO 2: อธิบายและประยุกต์ใช้หลักการและทฤษฎีพื้นฐานทางวิศวกรรมคอมพิวเตอร์ รวมถึงการเลือกใช้เทคโนโลยี เครื่องมือ และวิธีการปฏิบัติงานที่ทันสมัย เพื่อวิเคราะห์และแก้ไขปัญหาทางวิศวกรรมได้อย่างเป็นระบบ',
      'PLO 6: ประยุกต์และบูรณาการความรู้ด้านฮาร์ดแวร์และซอฟต์แวร์คอมพิวเตอร์ รวมถึงระบบเครือข่ายและความมั่นคงปลอดภัยทางไซเบอร์ เพื่อพัฒนาระบบคอมพิวเตอร์ที่ตอบสนองความต้องการของผู้ใช้'
    ],
    '01076263 Database Systems': [
      'PLO 2: อธิบายและประยุกต์ใช้หลักการและทฤษฎีพื้นฐานทางวิศวกรรมคอมพิวเตอร์ รวมถึงการเลือกใช้เทคโนโลยี เครื่องมือ และวิธีการปฏิบัติงานที่ทันสมัย เพื่อวิเคราะห์และแก้ไขปัญหาทางวิศวกรรมได้อย่างเป็นระบบ',
      'PLO 5: วิเคราะห์ความต้องการของผู้ใช้ ออกแบบ พัฒนา ทดสอบ และบำรุงรักษาซอฟต์แวร์แอปพลิเคชัน โดยคำนึงถึงคุณค่าที่ผู้ใช้รับรู้ได้'
    ],
    '01076263 Software Design': [
      'PLO 2: อธิบายและประยุกต์ใช้หลักการและทฤษฎีพื้นฐานทางวิศวกรรมคอมพิวเตอร์ รวมถึงการเลือกใช้เทคโนโลยี เครื่องมือ และวิธีการปฏิบัติงานที่ทันสมัย เพื่อวิเคราะห์และแก้ไขปัญหาทางวิศวกรรมได้อย่างเป็นระบบ',
      'PLO 5: วิเคราะห์ความต้องการของผู้ใช้ ออกแบบ พัฒนา ทดสอบ และบำรุงรักษาซอฟต์แวร์แอปพลิเคชัน โดยคำนึงถึงคุณค่าที่ผู้ใช้รับรู้ได้',
      'PLO 8: ทำงานร่วมกับผู้อื่นในฐานะสมาชิกทีมหรือผู้นำ และสื่อสารได้อย่างมีประสิทธิผลในกิจกรรมทางวิศวกรรมคอมพิวเตอร์ กับชุมชนวิศวกรรมและสังคมโดยรวม ทั้งการเขียนรายงานทางเทคนิคและการนำเสนอผลงาน',
      'PLO 9: แสดงออกถึงการคิดเชิงวิเคราะห์และเชิงสร้างสรรค์ โดยแยกปัญหาที่ซับซ้อนออกเป็นส่วนย่อย มีทักษะในการสืบค้นข้อมูลและองค์ความรู้ทางวิศวกรรมโดยใช้ความคิดเชิงวิพากษ์ในการวิเคราะห์และประเมินข้อมูล และพัฒนาวิธีใหม่ในการแก้ปัญหา',
      'PLO 11: ตระหนักและยึดมั่นในหลักการและจรรยาบรรณวิชาชีพวิศวกรรม ปฏิบัติตนด้วยความรับผิดชอบ และแสดงความซื่อสัตย์ทางวิชาการ'
    ],
    '01076054 Computer Networks': [
      'PLO 2: อธิบายและประยุกต์ใช้หลักการและทฤษฎีพื้นฐานทางวิศวกรรมคอมพิวเตอร์ รวมถึงการเลือกใช้เทคโนโลยี เครื่องมือ และวิธีการปฏิบัติงานที่ทันสมัย เพื่อวิเคราะห์และแก้ไขปัญหาทางวิศวกรรมได้อย่างเป็นระบบ',
      'PLO 6: ประยุกต์และบูรณาการความรู้ด้านฮาร์ดแวร์และซอฟต์แวร์คอมพิวเตอร์ รวมถึงระบบเครือข่ายและความมั่นคงปลอดภัยทางไซเบอร์ เพื่อพัฒนาระบบคอมพิวเตอร์ที่ตอบสนองความต้องการของผู้ใช้'
    ]
  };

  const subMenuItems = [
    { name: 'รายงาน', active: false }
  ];

  const subjects = [
    '01076002 Programming Fundamental',
    '01076011 Operating Systems',
    '01076263 Database Systems',
    '01076263 Software Design',
    '01076054 Computer Networks'
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
              <span className="text-white text-xs font-bold">CE</span>
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
            <span className="text-sm text-gray-700">เชื่อมโยงผลการเรียนรู้ระดับหลักสูตรกับรายวิชา</span>
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">เชื่อมโยงผลการเรียนรู้ระดับหลักสูตรกับรายวิชา</h1>

          {/* Curriculum Selector */}
          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">เลือกหลักสูตร</label>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[200px]">
                <option value="ce-2560">วิศวกรรมคอมพิวเตอร์ - 2560</option>
                <option value="ce-2564">วิศวกรรมคอมพิวเตอร์ - 2564</option>
                <option value="ce-2567">วิศวกรรมคอมพิวเตอร์ - 2567</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                เลือก
              </button>
            </div>
          </div>

          {/* Mapping Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-80 sticky left-0 bg-gray-50">
                      รายวิชา
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">
                      ผลการเรียนรู้
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500 w-48">
                      ระดับความเกี่ยวข้อง
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Subject Rows */}
                  {subjects.map((subject, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 sticky left-0 bg-white border-r border-gray-200 font-medium">
                        {subject}
                      </td>
                      <td className="px-4 py-3">
                        <div className="space-y-2">
                          {subjectPLOs[subject]?.map((plo, ploIndex) => (
                            <div key={ploIndex} className="text-xs text-gray-700 p-2 bg-gray-50 rounded border-l-4 border-blue-400">
                              {plo}
                            </div>
                          ))}
                          <div className="mt-3">
                            <textarea 
                              className="w-full p-2 border border-gray-300 rounded text-xs"
                              rows="1"
                              placeholder="ป้อน PLO"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <div className="space-y-2">
                          {subjectPLOs[subject]?.map((plo, ploIndex) => (
                            <div key={ploIndex} className="flex items-center justify-center h-12">
                              <select className="border border-gray-300 rounded px-2 py-1 text-xs bg-white">
                                <option value="">เลือกระดับ</option>
                                <option value="I">I - Introduced</option>
                                <option value="D">D - Developed</option>
                                <option value="P">P - Practiced</option>
                                <option value="A">A - Assessed</option>
                              </select>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-end">
              <div className="flex space-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  บันทึกการแมป
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  รายงานกระจายผลการเรียนรู้สู่รายวิชา
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

export default UserManagementSystem;