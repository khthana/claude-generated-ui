import React, { useState } from 'react';
import { MessageSquare, User, Bell, ChevronDown, ChevronRight } from 'lucide-react';

const CourseManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('ความเชื่อมโยงผลการเรียนรู้และกิจกรรม');
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

  // Sample data for CLO-Activity mapping
  const cloData = [
    { id: 'clo1', name: 'CLO-1: Network Fundamentals', description: 'เข้าใจหลักการพื้นฐานของเครือข่ายคอมพิวเตอร์', color: '#3b82f6' },
    { id: 'clo2', name: 'CLO-2: Protocol Analysis', description: 'วิเคราะห์โปรโตคอลเครือข่าย', color: '#8b5cf6' },
    { id: 'clo3', name: 'CLO-3: Network Design', description: 'ออกแบบระบบเครือข่าย', color: '#10b981' },
    { id: 'clo4', name: 'CLO-4: Security Concepts', description: 'เข้าใจหลักการรักษาความปลอดภัยเครือข่าย', color: '#f59e0b' },
    { id: 'clo5', name: 'CLO-5: Troubleshooting', description: 'แก้ไขปัญหาเครือข่าย', color: '#ef4444' }
  ];

  const activityData = [
    { id: 'lab1', name: 'Lab 1: IP Addressing', type: 'Lab', weight: 15, color: '#6366f1' },
    { id: 'quiz1', name: 'Quiz 1: OSI Model', type: 'Quiz', weight: 10, color: '#8b5cf6' },
    { id: 'project1', name: 'Project: Network Topology Design', type: 'Project', weight: 25, color: '#10b981' },
    { id: 'assignment1', name: 'Assignment: Protocol Analysis', type: 'Assignment', weight: 15, color: '#f59e0b' },
    { id: 'lab2', name: 'Lab 2: Router Configuration', type: 'Lab', weight: 15, color: '#6366f1' },
    { id: 'exam1', name: 'Midterm Exam', type: 'Exam', weight: 20, color: '#ef4444' }
  ];

  // Mapping relationships with weights
  const mappingData = [
    { clo: 'clo1', activity: 'lab1', weight: 40 },
    { clo: 'clo1', activity: 'quiz1', weight: 35 },
    { clo: 'clo1', activity: 'exam1', weight: 25 },
    
    { clo: 'clo2', activity: 'assignment1', weight: 45 },
    { clo: 'clo2', activity: 'quiz1', weight: 25 },
    { clo: 'clo2', activity: 'exam1', weight: 30 },
    
    { clo: 'clo3', activity: 'project1', weight: 50 },
    { clo: 'clo3', activity: 'lab2', weight: 35 },
    { clo: 'clo3', activity: 'exam1', weight: 15 },
    
    { clo: 'clo4', activity: 'project1', weight: 30 },
    { clo: 'clo4', activity: 'lab2', weight: 40 },
    { clo: 'clo4', activity: 'exam1', weight: 30 },
    
    { clo: 'clo5', activity: 'lab2', weight: 50 },
    { clo: 'clo5', activity: 'assignment1', weight: 25 },
    { clo: 'clo5', activity: 'exam1', weight: 25 }
  ];

  // SVG dimensions and layout
  const svgWidth = 800;
  const svgHeight = 500;
  const cloX = 50;
  const activityX = 650;
  const cloSpacing = svgHeight / (cloData.length + 1);
  const activitySpacing = svgHeight / (activityData.length + 1);

  // Calculate positions
  const cloPositions = cloData.map((clo, index) => ({
    ...clo,
    x: cloX,
    y: (index + 1) * cloSpacing,
    height: 40
  }));

  const activityPositions = activityData.map((activity, index) => ({
    ...activity,
    x: activityX,
    y: (index + 1) * activitySpacing,
    height: 30
  }));

  // Generate SVG paths for connections
  const generatePath = (startX, startY, endX, endY, weight) => {
    const midX = (startX + endX) / 2;
    const strokeWidth = Math.max(2, weight / 5);
    
    return {
      path: `M ${startX},${startY} C ${midX},${startY} ${midX},${endY} ${endX},${endY}`,
      strokeWidth
    };
  };

  const toggleMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  // Calculate summary statistics
  const totalMappings = mappingData.length;
  const avgConnectionsPerCLO = totalMappings / cloData.length;
  const maxConnectedCLO = cloData.reduce((max, clo) => {
    const connections = mappingData.filter(m => m.clo === clo.id).length;
    return connections > max.connections ? { ...clo, connections } : max;
  }, { connections: 0 });

  return (
    <div className="min-h-screen bg-gray-50">
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
            <span className="text-white text-sm font-medium">ธนา หงษ์สุวรรณ</span>
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
            <span className="text-sm text-gray-700">ความเชื่อมโยงผลการเรียนรู้และกิจกรรม</span>
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

          {/* CLO-Activity Relationship */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="mb-6">
                <h1 className="text-xl font-bold text-gray-800">ความเชื่อมโยงผลการเรียนรู้และกิจกรรม</h1>
              </div>

              {/* Summary Statistics */}
              <div className="mb-6 grid grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{cloData.length}</div>
                  <div className="text-sm text-gray-600">จำนวน CLO</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{activityData.length}</div>
                  <div className="text-sm text-gray-600">จำนวนกิจกรรม</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">{totalMappings}</div>
                  <div className="text-sm text-gray-600">ความสัมพันธ์ทั้งหมด</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">{avgConnectionsPerCLO.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">เฉลี่ยต่อ CLO</div>
                </div>
              </div>

              {/* Sankey Diagram */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-center">Sankey Diagram: CLO → กิจกรรมการสอน</h3>
                
                <div className="flex justify-center">
                  <svg width={svgWidth} height={svgHeight} className="border border-gray-200 bg-white rounded">
                    {/* Background grid */}
                    <defs>
                      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width={svgWidth} height={svgHeight} fill="url(#grid)" />

                    {/* Connection lines */}
                    {mappingData.map((mapping, index) => {
                      const clo = cloPositions.find(c => c.id === mapping.clo);
                      const activity = activityPositions.find(a => a.id === mapping.activity);
                      
                      if (!clo || !activity) return null;
                      
                      const path = generatePath(
                        clo.x + 200, 
                        clo.y + clo.height / 2,
                        activity.x, 
                        activity.y + activity.height / 2,
                        mapping.weight
                      );
                      
                      return (
                        <g key={index}>
                          <path
                            d={path.path}
                            fill="none"
                            stroke={clo.color}
                            strokeWidth={path.strokeWidth}
                            opacity={0.6}
                            className="hover:opacity-80 cursor-pointer"
                          />
                          {/* Weight label on hover */}
                          <title>{`${clo.name} → ${activity.name}: ${mapping.weight}%`}</title>
                        </g>
                      );
                    })}

                    {/* CLO nodes */}
                    {cloPositions.map((clo) => (
                      <g key={clo.id}>
                        <rect
                          x={clo.x}
                          y={clo.y}
                          width="200"
                          height={clo.height}
                          fill={clo.color}
                          rx="6"
                          className="cursor-pointer hover:opacity-80"
                        />
                        <text
                          x={clo.x + 10}
                          y={clo.y + 15}
                          fill="white"
                          fontSize="12"
                          fontWeight="bold"
                        >
                          {clo.name.split(':')[0]}
                        </text>
                        <text
                          x={clo.x + 10}
                          y={clo.y + 30}
                          fill="white"
                          fontSize="10"
                        >
                          {clo.name.split(':')[1]?.substring(0, 25)}...
                        </text>
                      </g>
                    ))}

                    {/* Activity nodes */}
                    {activityPositions.map((activity) => (
                      <g key={activity.id}>
                        <rect
                          x={activity.x}
                          y={activity.y}
                          width="140"
                          height={activity.height}
                          fill={activity.color}
                          rx="4"
                          className="cursor-pointer hover:opacity-80"
                        />
                        <text
                          x={activity.x + 8}
                          y={activity.y + 12}
                          fill="white"
                          fontSize="10"
                          fontWeight="bold"
                        >
                          {activity.name.length > 18 ? activity.name.substring(0, 18) + '...' : activity.name}
                        </text>
                        <text
                          x={activity.x + 8}
                          y={activity.y + 24}
                          fill="white"
                          fontSize="8"
                        >
                          {activity.type} ({activity.weight}%)
                        </text>
                      </g>
                    ))}

                    {/* Labels */}
                    <text x={cloX + 100} y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#374151">
                      Course Learning Outcomes (CLOs)
                    </text>
                    <text x={activityX + 70} y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#374151">
                      กิจกรรมการสอน
                    </text>
                  </svg>
                </div>
              </div>

              {/* Legend */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-3">คำอธิบาย</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Course Learning Outcomes (CLOs)</h5>
                    <div className="space-y-1 text-sm">
                      {cloData.map((clo) => (
                        <div key={clo.id} className="flex items-center space-x-2">
                          <div 
                            className="w-4 h-4 rounded" 
                            style={{backgroundColor: clo.color}}
                          ></div>
                          <span>{clo.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">ประเภทกิจกรรม</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded bg-indigo-500"></div>
                        <span>Lab (ปฏิบัติการ)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded bg-purple-500"></div>
                        <span>Quiz (แบบทดสอบ)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded bg-green-500"></div>
                        <span>Project (โครงงาน)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded bg-yellow-500"></div>
                        <span>Assignment (การบ้าน)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded bg-red-500"></div>
                        <span>Exam (การสอบ)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <strong>หมายเหตุ:</strong> ความหนาของเส้นแสดงถึงน้ำหนักของความสัมพันธ์ระหว่าง CLO และกิจกรรม
                </div>
              </div>

              {/* Detailed Mapping Table */}
              <div className="overflow-x-auto">
                <h4 className="font-semibold mb-3">ตารางแสดงความสัมพันธ์โดยละเอียด</h4>
                <table className="w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left border-r border-gray-200">CLO</th>
                      <th className="px-4 py-2 text-left border-r border-gray-200">กิจกรรม</th>
                      <th className="px-4 py-2 text-center border-r border-gray-200">น้ำหนัก (%)</th>
                      <th className="px-4 py-2 text-center">ประเภท</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mappingData.map((mapping, index) => {
                      const clo = cloData.find(c => c.id === mapping.clo);
                      const activity = activityData.find(a => a.id === mapping.activity);
                      return (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border-r border-gray-200">
                            <div className="flex items-center space-x-2">
                              <div 
                                className="w-3 h-3 rounded" 
                                style={{backgroundColor: clo?.color}}
                              ></div>
                              <span>{clo?.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-2 border-r border-gray-200">{activity?.name}</td>
                          <td className="px-4 py-2 text-center border-r border-gray-200 font-medium">{mapping.weight}%</td>
                          <td className="px-4 py-2 text-center">
                            <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                              {activity?.type}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
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