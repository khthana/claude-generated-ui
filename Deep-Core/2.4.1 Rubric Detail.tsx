import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, Edit3, Trash2, Eye } from 'lucide-react';

const UserManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('ข้อมูล Rubric กลาง');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMenus, setExpandedMenus] = useState({ 
    'ข้อมูลหลัก': true, 
    'ผู้ใช้': false,
    'หลักสูตร': false, 
    'ผลการเรียนรู้': false,
    'รายวิชา': false,
    'การประเมิน': false
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [editModalTab, setEditModalTab] = useState('ข้อมูลทั่วไป');
  const [formData, setFormData] = useState({
    faculty: 'มหาวิทยาลัยสยามนิเทศ',
    department: '',
    role: 'นักวิชาการโรคติดต่อศึกษา'
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

  const toggleMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const modalTabs = [
    { id: 'ข้อมูลทั่วไป', label: 'ข้อมูลทั่วไป', icon: User },
    { id: 'สิทธิ์ของระบบ', label: 'สิทธิ์ของระบบ', icon: Settings },
    { id: 'ตั้งค่าขั้นสูง', label: 'ตั้งค่าขั้นสูง', icon: Key }
  ];

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditModalTab('ข้อมูลทั่วไป');
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-600 mb-1">
                    <span className="cursor-pointer hover:underline">ผู้ใช้งานระบบ</span>
                    <span className="text-gray-500 mx-2">/</span>
                    <span className="text-gray-700">แก้ไขผู้ใช้งานระบบ</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">แก้ไขผู้ใช้งานระบบ</h2>
                </div>
                <button onClick={closeEditModal} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="border-b border-gray-200">
              <div className="flex">
                {modalTabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setEditModalTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium border-b-2 ${
                        editModalTab === tab.id
                          ? 'border-blue-500 text-blue-600 bg-blue-50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {editModalTab === 'ข้อมูลทั่วไป' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">ข้อมูลทั่วไป</h3>
                  
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md flex items-start space-x-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      ปิดบลอกโซเชียลมีเดียการประเมิน Unicon เพื่อ Update ข้อมูล
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อ-นามสกุล(ไทย)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อ(ไทย)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        สกุล(ไทย)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        สถาบันของศึกษา
                      </label>
                      <select
                        value={formData.faculty}
                        onChange={(e) => handleInputChange('faculty', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white"
                      >
                        <option value="มหาวิทยาลัยสยามนิเทศ">มหาวิทยาลัยสยามนิเทศ</option>
                        <option value="มหาวิทยาลัยอื่น">มหาวิทยาลัยอื่น</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        คณะ
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white"
                      >
                        <option value="">เลือกคณะ</option>
                        <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                        <option value="คณะเทคโนโลยีสารสนเทศ">คณะเทคโนโลยีสารสนเทศ</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ตำแหน่งงาน
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white"
                      >
                        <option value="นักวิชาการโรคติดต่อศึกษา">นักวิชาการโรคติดต่อศึกษา</option>
                        <option value="อาจารย์">อาจารย์</option>
                        <option value="ผู้ช่วยศาสตราจารย์">ผู้ช่วยศาสตราจารย์</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {editModalTab === 'สิทธิ์ของระบบ' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">สิทธิ์ของระบบ</h3>
                  <p className="text-gray-600">เนื้อหาสำหรับการตั้งค่าสิทธิ์ของระบบ</p>
                </div>
              )}

              {editModalTab === 'ตั้งค่าขั้นสูง' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">ตั้งค่าขั้นสูง</h3>
                  <p className="text-gray-600">เนื้อหาสำหรับการตั้งค่าขั้นสูง</p>
                </div>
              )}
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-start space-x-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                บันทึก
              </button>
              <button 
                onClick={closeEditModal}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">หน้าแรก</h3>
            </div>

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

        <div className="flex-1 p-6">
          <div className="mb-4">
            <span className="text-sm text-blue-600 cursor-pointer hover:underline">ข้อมูลหลัก</span>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <span className="text-sm text-blue-600 cursor-pointer hover:underline">ข้อมูล Rubric กลาง</span>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <span className="text-sm text-gray-700">รายละเอียด</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-6">ข้อมูล Rubric กลาง</h1>

          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">เลือกหลักสูตรที่ใช้งาน</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[200px]">
                  <option value="ce-2560">วิศวกรรมคอมพิวเตอร์ - 2560</option>
                  <option value="ce-2564">วิศวกรรมคอมพิวเตอร์ - 2564</option>
                  <option value="ce-2567">วิศวกรรมคอมพิวเตอร์ - 2567</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  เลือก
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  เพิ่มข้อมูล
                </button>
              </div>
            </div>
          </div>

          {/* Communication Header */}
          <div className="mb-4 bg-blue-100 border-l-4 border-blue-300">
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-blue-800">การสื่อสาร - Communication</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">

            <div className="overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">เกณฑ์ประเมิน</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">4 – ดีเยี่ยม</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">3 – ดีมาก</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">2 – ปานกลาง</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">1 – ต้องปรับปรุง</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">เนื้อหา (Content)</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ครอบคลุมทุกประเด็น หลักฐานอ้างอิงครบถ้วน"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ครอบคลุมประเด็นหลัก อ้างอิงสำคัญครบ"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ขาดรายละเอียดในบางจุดไม่ครบถ้วน"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ไม่มีหลักฐานอ้างอิงชัดเจน"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">โครงสร้าง (Organization)</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="จัดลำดับเนื้อหาเป็นระบบ มีความลื่นไหล"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="มีลำดับชัดเจน แต่บางช่วงเชื่อมโยงอ่อนไป"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ลำดับบางส่วนสับสน ต้องใช้ความพยายามติดตาม"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ไม่มีโครงสร้างชัดเจน ฟัง/อ่านยาก"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">ความชัดเจนในการพูด/เขียน (Clarity)</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ภาษาเรียบง่าย ชัดเจน ไร้คำฟุ่มเฟือย"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ชัดเจนเป็นส่วนใหญ่ มีคำศัพท์เทคนิคเหมาะสม"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="บางช่วงไม่ชัดเจน ต้องขอให้ชี้แจง"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="คลุมเครือ ใช้คำไม่เหมาะสม สื่อความลำบาก"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">การตอบคำถาม (Q&A)</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ตอบคำถามได้อย่างมั่นใจและลึกซึ้ง"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ตอบได้ตรงประเด็นแต่ขาดความลึกบางจุด"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ตอบได้แต่คลุมเครือ ต้องอ้างอิงสไลด์"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <textarea 
                        rows="2" 
                        className="w-full p-2 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="ตอบไม่ได้หรือหลบเลี่ยงคำถาม"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-end px-6 py-4 border-t border-gray-200">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 shadow-lg">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default UserManagementSystem;