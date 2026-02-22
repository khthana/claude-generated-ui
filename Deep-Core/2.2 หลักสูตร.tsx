import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, Trash2, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react';

const UserManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('ข้อมูลหลักสูตร');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMenus, setExpandedMenus] = useState({ 'ข้อมูลหลัก': true, 'ผู้ใช้': true, 'หลักสูตร': false, 'ผลการเรียนรู้': false, 'รายวิชา': false, 'การประเมิน': false });
  const [showEditModal, setShowEditModal] = useState(false);
  const [editModalTab, setEditModalTab] = useState('ข้อมูลทั่วไป');
  const [formData, setFormData] = useState({
    faculty: 'มหาวิทยาลัยสยามนิเทศ',
    department: '',
    role: 'นักวิชาการโรคติดต่อศึกษา'
  });

  const users = [
    { id: 1, identifier: '44xxxxxxxxx4', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 2, identifier: '34xxxxxxxxx3', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 3, identifier: '39xxxxxxxxx5', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 4, identifier: '36xxxxxxxxx8', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 5, identifier: '53xxxxxxxxx7', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 6, identifier: '14xxxxxxxxx8', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 7, identifier: '38xxxxxxxxx2', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 8, identifier: '33xxxxxxxxx0', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 9, identifier: '37xxxxxxxxx1', firstName: '', lastName: '', email: '', status: 'Active' },
    { id: 10, identifier: '36xxxxxxxxx1', firstName: '', lastName: '', email: '', status: 'Active' }
  ];

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
            <span className="text-white font-medium">ธนา หงษ์สุวรรณ</span>
            <Bell className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
            <User className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
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

            {/* Modal Tabs */}
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

            {/* Modal Content */}
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
                    {/* First Name Thai */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อ-นามสกุล(ไทย)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อ(ไทย)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* Last Name Thai */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        สกุล(ไทย)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* Full Name English */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อ-นามสกุล(อังกฤษ)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* First Name English */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อ(อังกฤษ)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* Last Name English */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        สกุล(อังกฤษ)
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* Staff Position */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        หน้าที่ของประเมิน
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        อีเมล
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        โทรศัพท์
                      </label>
                      <div className="w-full h-8 bg-gray-200 rounded border"></div>
                    </div>

                    {/* Faculty Dropdown */}
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

                    {/* Department */}
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

                    {/* Role */}
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

                  {/* Warning Text */}
                  <div className="mt-6 p-3 bg-orange-50 border border-orange-200 rounded-md">
                    <p className="text-sm text-orange-700">
                      <span className="text-red-500">*</span> การแก้ไขความได้ในฟิลด์ข้างต้นหลังจาก จำเป็นต้องขอข้อมูลระบุยืนยันผิดนี้ ณ ผู้ใช้งานระบบสิ่งสาขาการดำเนินงานระบบไก่
                    </p>
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

            {/* Modal Footer */}
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
            <span className="text-sm text-gray-700">ข้อมูลหลักสูตร</span>
          </div>

          {/* Department Selector */}
          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">เลือกภาควิชา</label>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white min-w-[200px]">
                <option value="computer-engineering">วิศวกรรมคอมพิวเตอร์</option>
                <option value="electrical-engineering">วิศวกรรมไฟฟ้า</option>
                <option value="telecommunication-engineering">วิศวกรรมโทรคมนาคม</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                เลือก
              </button>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">หลักสูตร</h1>
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
                    รหัสหลักสูตร
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ชื่อหลักสูตร
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ชื่อหลักสูตร (ไทย)
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ปี
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ดำเนินการ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0501</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Computer Engineering</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">วิศวกรรมคอมพิวเตอร์</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2564</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button 
                        onClick={openEditModal}
                        className="border border-green-600 text-green-600 hover:bg-green-50 p-1.5 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="border border-red-600 text-red-600 hover:bg-red-50 p-1.5 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0502</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Computer Engineering and Cyber Security</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">วิศวกรรมคอมพิวเตอร์ และ ความปลอดภัยไซเบอร์</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2564</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button 
                        onClick={openEditModal}
                        className="border border-green-600 text-green-600 hover:bg-green-50 p-1.5 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="border border-red-600 text-red-600 hover:bg-red-50 p-1.5 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0503</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Computer Engineering (International)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">วิศวกรรมคอมพิวเตอร์ (นานาชาติ)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2564</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button 
                        onClick={openEditModal}
                        className="border border-green-600 text-green-600 hover:bg-green-50 p-1.5 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="border border-red-600 text-red-600 hover:bg-red-50 p-1.5 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-sm text-gray-500">1-3 of 3 items</span>
            <div className="flex items-center space-x-1">
              {/* First Page Button */}
              <button className="border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-600 p-2 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <ChevronsLeft className="w-4 h-4" />
              </button>
              
              {/* Previous Button */}
              <button className="border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-600 p-2 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {/* Current Page */}
              <button className="border border-cyan-500 bg-transparent hover:bg-cyan-50 text-cyan-600 px-3 py-2 rounded text-sm font-medium">
                1
              </button>
              
              {/* Next Button */}
              <button className="border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-600 p-2 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Last Page Button */}
              <button className="border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-600 p-2 rounded text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled>
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

export default UserManagementSystem;