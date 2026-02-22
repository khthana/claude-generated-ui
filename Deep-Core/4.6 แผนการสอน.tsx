import React, { useState } from 'react';
import { Search, Plus, Edit, MoreHorizontal, RefreshCw, MessageSquare, User, Bell, ChevronDown, ChevronRight, X, Settings, Key, Trash2 } from 'lucide-react';

const CourseManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('แผนการสอน');
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
            <span className="text-white font-medium">ธนา หงษ์สุวรรณ</span>
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
            <span className="text-sm text-gray-700">แผนการสอน</span>
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
                <h1 className="text-xl font-bold text-gray-800">แผนการสอน</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  เพิ่มข้อมูล
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-24">สัปดาห์ที่</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">หัวข้อ</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-32">หมายเหตุ</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 w-32">ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">1</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Introduction to Computer Networks</strong><br />
                        Overview of network architectures, network types (LAN, WAN, MAN), and network topologies. Introduction to the OSI model and TCP/IP protocol stack.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 1</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">2</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Physical Layer</strong><br />
                        Transmission media, data transmission concepts, encoding and modulation techniques, multiplexing, and switching methods.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 2</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">3</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Data Link Layer</strong><br />
                        Error detection and correction, flow control, framing, and Medium Access Control (MAC) protocols including CSMA/CD and CSMA/CA.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 3</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">4</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Network Layer</strong><br />
                        IP addressing, subnetting, routing algorithms, and Internet Protocol (IPv4 and IPv6). Introduction to routing protocols (RIP, OSPF, BGP).
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 4</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">5</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Transport Layer</strong><br />
                        TCP and UDP protocols, connection establishment and termination, flow control, congestion control, and reliability mechanisms.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 5</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">6</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Application Layer</strong><br />
                        HTTP/HTTPS, DNS, FTP, SMTP, POP3, IMAP protocols. Web services and client-server architecture.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 6</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">7</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Midterm Examination</strong><br />
                        Comprehensive examination covering topics from weeks 1-6. Review of fundamental networking concepts and protocols.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">สอบกลางภาค</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">8</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Network Security</strong><br />
                        Cryptography basics, symmetric and asymmetric encryption, digital signatures, certificates, and SSL/TLS protocols.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 8</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">9</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Wireless Networks</strong><br />
                        Wireless communication principles, Wi-Fi standards (802.11), cellular networks, and mobile communication technologies.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 9</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">10</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Network Management</strong><br />
                        Network monitoring, SNMP protocol, network performance metrics, troubleshooting techniques, and network administration tools.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 10</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">11</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Emerging Technologies</strong><br />
                        Cloud computing, Software-Defined Networking (SDN), Internet of Things (IoT), and 5G networks. Future trends in networking.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Chapter 11</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900 text-center">12</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        <strong>Final Project Presentation</strong><br />
                        Student presentations of network design projects. Course review and preparation for final examination.
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Project</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="border border-green-600 text-green-600 hover:bg-green-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Edit className="w-3 h-3" />
                          </button>
                          <button className="border border-red-600 text-red-600 hover:bg-red-50 p-2 rounded text-xs font-medium flex items-center justify-center w-8 h-8">
                            <Trash2 className="w-3 h-3" />
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