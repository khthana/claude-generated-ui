import React, { useState } from 'react';
import { MessageSquare, User, Bell, ChevronDown, ChevronRight } from 'lucide-react';

const CourseManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('รายละเอียดผลการเรียนรู้');
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

  const studentData = [
    { id: '67010234', name: 'นายธนากร สุขสวัสดิ์', clo1: 4.2, clo2: 3.8, clo3: 4.5, clo4: 3.6, clo5: 4.0 },
    { id: '67010567', name: 'นางสาวปิยะดา วรรณสิริ', clo1: 4.8, clo2: 4.5, clo3: 4.7, clo4: 4.3, clo5: 4.6 },
    { id: '67010823', name: 'นายกิตติชัย มั่นคงทรัพย์', clo1: 3.2, clo2: 3.0, clo3: 3.8, clo4: 2.9, clo5: 3.5 },
    { id: '67010945', name: 'นางสาวสิริพร ใจดีมาก', clo1: 4.5, clo2: 4.2, clo3: 4.8, clo4: 4.1, clo5: 4.4 },
    { id: '67010156', name: 'นายอนุชา รักเรียน', clo1: 3.5, clo2: 3.7, clo3: 4.1, clo4: 3.4, clo5: 3.8 }
  ];

  const getHeatmapColor = (score) => {
    if (score >= 4.5) return '#22c55e';
    if (score >= 4.0) return '#84cc16';
    if (score >= 3.5) return '#eab308';
    if (score >= 3.0) return '#f97316';
    return '#ef4444';
  };

  const clo1Avg = studentData.reduce((sum, student) => sum + student.clo1, 0) / studentData.length;
  const clo2Avg = studentData.reduce((sum, student) => sum + student.clo2, 0) / studentData.length;
  const clo3Avg = studentData.reduce((sum, student) => sum + student.clo3, 0) / studentData.length;
  const clo4Avg = studentData.reduce((sum, student) => sum + student.clo4, 0) / studentData.length;
  const clo5Avg = studentData.reduce((sum, student) => sum + student.clo5, 0) / studentData.length;

  const overallAverage = (clo1Avg + clo2Avg + clo3Avg + clo4Avg + clo5Avg) / 5;

  const passedCount = studentData.filter(student => {
    const avg = (student.clo1 + student.clo2 + student.clo3 + student.clo4 + student.clo5) / 5;
    return avg >= 3.0;
  }).length;
  const passRate = ((passedCount / studentData.length) * 100).toFixed(1);

  const toggleMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

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
            <span className="text-sm text-gray-700">รายละเอียดผลการเรียนรู้</span>
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

          {/* Course Level Learning Outcome */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="mb-6">
                <h1 className="text-xl font-bold text-gray-800">รายละเอียดผลการเรียนรู้ระดับรายวิชา (Heatmap)</h1>
              </div>

              {/* Course Statistics */}
              <div className="mb-6 grid grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{studentData.length}</div>
                  <div className="text-sm text-gray-600">นักศึกษาทั้งหมด</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{overallAverage.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">คะแนนเฉลี่ยรวม</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">{passRate}%</div>
                  <div className="text-sm text-gray-600">อัตราผ่านเกณฑ์</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">CLO-4</div>
                  <div className="text-sm text-gray-600">CLO ที่ต้องปรับปรุง</div>
                </div>
              </div>

              {/* Color Legend */}
              <div className="mb-4 flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded bg-red-500"></div>
                  <span className="text-xs text-gray-600">&lt; 3.0</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded bg-orange-500"></div>
                  <span className="text-xs text-gray-600">3.0-3.4</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded bg-yellow-500"></div>
                  <span className="text-xs text-gray-600">3.5-3.9</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded bg-lime-500"></div>
                  <span className="text-xs text-gray-600">4.0-4.4</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded bg-green-500"></div>
                  <span className="text-xs text-gray-600">&ge; 4.5</span>
                </div>
              </div>

              {/* Heatmap */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 w-16">
                        ลำดับที่
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-r border-gray-200 min-w-[200px]">
                        นักศึกษา
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 w-20">
                        CLO-1
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 w-20">
                        CLO-2
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 w-20">
                        CLO-3
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 w-20">
                        CLO-4
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 w-20">
                        CLO-5
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 w-20">
                        เฉลี่ย
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map((student, index) => {
                      const average = (student.clo1 + student.clo2 + student.clo3 + student.clo4 + student.clo5) / 5;
                      return (
                        <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200">
                            {index + 1}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">
                            <div>
                              <div className="font-medium">{student.name}</div>
                              <div className="text-xs text-gray-500">{student.id}</div>
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center border-r border-gray-200">
                            <div 
                              className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-medium"
                              style={{backgroundColor: getHeatmapColor(student.clo1)}}
                            >
                              {student.clo1.toFixed(1)}
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center border-r border-gray-200">
                            <div 
                              className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-medium"
                              style={{backgroundColor: getHeatmapColor(student.clo2)}}
                            >
                              {student.clo2.toFixed(1)}
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center border-r border-gray-200">
                            <div 
                              className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-medium"
                              style={{backgroundColor: getHeatmapColor(student.clo3)}}
                            >
                              {student.clo3.toFixed(1)}
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center border-r border-gray-200">
                            <div 
                              className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-medium"
                              style={{backgroundColor: getHeatmapColor(student.clo4)}}
                            >
                              {student.clo4.toFixed(1)}
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center border-r border-gray-200">
                            <div 
                              className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-medium"
                              style={{backgroundColor: getHeatmapColor(student.clo5)}}
                            >
                              {student.clo5.toFixed(1)}
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center">
                            <div 
                              className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-bold"
                              style={{backgroundColor: getHeatmapColor(average)}}
                            >
                              {average.toFixed(1)}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-100 font-medium">
                      <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200 font-bold">
                        ค่าเฉลี่ยรายวิชา
                      </td>
                      <td className="px-2 py-3 text-center border-r border-gray-200">
                        <div 
                          className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-bold"
                          style={{backgroundColor: getHeatmapColor(clo1Avg)}}
                        >
                          {clo1Avg.toFixed(1)}
                        </div>
                      </td>
                      <td className="px-2 py-3 text-center border-r border-gray-200">
                        <div 
                          className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-bold"
                          style={{backgroundColor: getHeatmapColor(clo2Avg)}}
                        >
                          {clo2Avg.toFixed(1)}
                        </div>
                      </td>
                      <td className="px-2 py-3 text-center border-r border-gray-200">
                        <div 
                          className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-bold"
                          style={{backgroundColor: getHeatmapColor(clo3Avg)}}
                        >
                          {clo3Avg.toFixed(1)}
                        </div>
                      </td>
                      <td className="px-2 py-3 text-center border-r border-gray-200">
                        <div 
                          className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-bold"
                          style={{backgroundColor: getHeatmapColor(clo4Avg)}}
                        >
                          {clo4Avg.toFixed(1)}
                        </div>
                      </td>
                      <td className="px-2 py-3 text-center border-r border-gray-200">
                        <div 
                          className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-bold"
                          style={{backgroundColor: getHeatmapColor(clo5Avg)}}
                        >
                          {clo5Avg.toFixed(1)}
                        </div>
                      </td>
                      <td className="px-2 py-3 text-center">
                        <div 
                          className="w-full h-8 rounded flex items-center justify-center text-white text-sm font-bold"
                          style={{backgroundColor: getHeatmapColor(overallAverage)}}
                        >
                          {overallAverage.toFixed(1)}
                        </div>
                      </td>
                    </tr>
                  </tfoot>
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