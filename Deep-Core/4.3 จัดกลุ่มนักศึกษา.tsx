import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, Trash2, History, ChevronsLeft, ChevronLeft, ChevronsRight, Eye } from 'lucide-react';

const GroupManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('กลุ่มงานนักศึกษา');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMenus, setExpandedMenus] = useState({ 
    'รายวิชา': true, 
    'ข้อมูลหลัก': false, 
    'ผู้ใช้': false,
    'หลักสูตร': false,
    'ผลการเรียนรู้': false,
    'การประเมิน': false,
    'รายงาน': false 
  });
  const [editingGroup, setEditingGroup] = useState(null);
  const [tempMembers, setTempMembers] = useState([]);

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
      members: ['64010389', '64010203', '61011085']
    },
    {
      order: '2',
      groupName: 'กลุ่ม B', 
      members: ['64010001', '64010002', '64010009']
    },
    {
      order: '3',
      groupName: 'กลุ่ม C',
      members: ['64010017', '64010019', '64010084']
    },
    {
      order: '4',
      groupName: 'กลุ่ม D',
      members: ['64010051']
    },
    {
      order: '5',
      groupName: 'กลุ่ม E',
      members: []
    }
  ];

  const toggleMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const handleEditMembers = (groupIndex, members) => {
    setEditingGroup(groupIndex);
    setTempMembers([...members]);
  };

  const handleAddMember = () => {
    setTempMembers([...tempMembers, '']);
  };

  const handleRemoveMember = (memberIndex) => {
    const newMembers = tempMembers.filter((_, index) => index !== memberIndex);
    setTempMembers(newMembers);
  };

  const handleMemberChange = (memberIndex, value) => {
    const newMembers = [...tempMembers];
    newMembers[memberIndex] = value;
    setTempMembers(newMembers);
  };

  const handleSaveMembers = () => {
    // Save logic here
    setEditingGroup(null);
    setTempMembers([]);
  };

  const handleCancelEdit = () => {
    setEditingGroup(null);
    setTempMembers([]);
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
            <span className="text-sm text-gray-700">กลุ่มงานนักศึกษา</span>
          </div>

          {/* Course Info Section */}
          <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">01076054 Computer Networks - 1/2568</span>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">กลุ่มงานนักศึกษา</h1>
            <div className="flex space-x-2">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium">
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
                    ลำดับที่
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ชื่อกลุ่ม
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    สมาชิก
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ดำเนินการ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {groups.map((group, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {group.order}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {group.groupName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {editingGroup === index ? (
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-2">
                            {tempMembers.map((member, memberIndex) => (
                              <div key={memberIndex} className="flex items-center bg-gray-100 border border-gray-300 rounded px-2 py-1">
                                <input
                                  type="text"
                                  value={member}
                                  onChange={(e) => handleMemberChange(memberIndex, e.target.value)}
                                  className="bg-transparent border-none outline-none text-xs w-20"
                                  placeholder="รหัสนักศึกษา"
                                />
                                <button
                                  onClick={() => handleRemoveMember(memberIndex)}
                                  className="ml-1 text-gray-500 hover:text-red-500"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={handleAddMember}
                              className="flex items-center bg-blue-100 border border-blue-300 rounded px-2 py-1 text-xs text-blue-600 hover:bg-blue-200"
                            >
                              <Plus className="w-3 h-3 mr-1" />
                              Add Student
                            </button>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={handleSaveMembers}
                              className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                            >
                              บันทึก
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs"
                            >
                              ยกเลิก
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {group.members.map((member, memberIndex) => (
                            <div key={memberIndex} className="flex items-center bg-gray-100 border border-gray-300 rounded px-2 py-1">
                              <span className="text-xs text-gray-800">{member}</span>
                              <button className="ml-1 text-gray-400">
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                          {group.members.length === 0 && (
                            <span className="text-xs text-gray-400 italic">ไม่มีสมาชิก</span>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 p-2 rounded text-xs font-medium flex items-center justify-center">
                          <Eye className="w-4 h-4" />
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
            <span className="text-sm text-gray-500">1-5 of 5 items</span>
            <div className="flex items-center space-x-1">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 bg-transparent text-cyan-600 border border-cyan-500 rounded hover:bg-cyan-50">
                1
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
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

export default GroupManagementSystem;