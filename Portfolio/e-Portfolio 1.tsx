import React, { useState } from 'react';
import { Home, BookOpen, Calendar, FileText, Bell, User } from 'lucide-react';

export default function LearningManagementSystem() {
  const [activeMenu, setActiveMenu] = useState('แฟ้มผลงาน');
  const [activeSubMenu, setActiveSubMenu] = useState('e-Portfolio');

  const menuItems = [
    { name: 'หน้าหลัก', icon: Home },
    { name: 'รายวิชา', icon: BookOpen, submenu: ['ประกาศ', 'รายละเอียดรายวิชา', 'งานในชั้นเรียน', 'สื่อการเรียนการสอน', 'ผลการประเมิน'] },
    { name: 'ปฏิทิน', icon: Calendar },
    { name: 'แฟ้มผลงาน', icon: FileText, submenu: ['เกี่ยวกับฉัน', 'ข้อมูลส่วนตัว', 'ประวัติการศึกษา', 'เป้าหมายทางวิชาชีพ', 'ทักษะ', 'การฝึกงาน / สหกิจศึกษา', 'โครงงานปริญญาตรี', 'การฝึกอบรม', 'รางวัลและการแข่งขัน', 'คุณวุฒิทางวิชาชีพ', 'e-Portfolio'] }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#f97316', color: 'white', padding: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={24} />
            <span style={{ fontSize: '20px', fontWeight: '600' }}>DEEP-PORTFOLIO</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '14px' }}>ปัญณิฏฐา ปิงคำ</span>
            <Bell size={20} />
            <div style={{ width: '32px', height: '32px', backgroundColor: '#4b5563', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={20} />
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ width: '256px', backgroundColor: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', minHeight: 'calc(100vh - 72px)' }}>
          <nav style={{ padding: '16px' }}>
            {menuItems.map((item) => (
              <div key={item.name} style={{ marginBottom: '8px' }}>
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: activeMenu === item.name ? '#fed7aa' : 'transparent',
                    color: activeMenu === item.name ? '#ea580c' : '#374151',
                    borderRight: activeMenu === item.name ? '4px solid #f97316' : 'none',
                    transition: 'all 0.2s'
                  }}
                  onClick={() => setActiveMenu(item.name)}
                  onMouseEnter={(e) => {
                    if (activeMenu !== item.name) {
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeMenu !== item.name) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <item.icon size={20} />
                  <span style={{ fontWeight: '500' }}>{item.name}</span>
                </div>
                {item.submenu && activeMenu === item.name && (
                  <div style={{ marginLeft: '32px', marginTop: '8px' }}>
                    {item.submenu.map((subItem) => (
                      <div 
                        key={subItem}
                        style={{
                          padding: '8px',
                          fontSize: '14px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          backgroundColor: subItem === activeSubMenu ? '#fef3e2' : 'transparent',
                          color: subItem === activeSubMenu ? '#ea580c' : '#6b7280',
                          fontWeight: subItem === activeSubMenu ? '500' : 'normal',
                          transition: 'all 0.2s',
                          marginBottom: '4px'
                        }}
                        onClick={() => setActiveSubMenu(subItem)}
                        onMouseEnter={(e) => {
                          if (subItem !== activeSubMenu) {
                            e.currentTarget.style.backgroundColor = '#f9fafb';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (subItem !== activeSubMenu) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
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
        <main style={{ flex: '1', padding: '24px' }}>
          {/* Breadcrumb */}
          <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
            <span style={{ color: '#f97316', fontWeight: '500' }}>แฟ้มผลงาน</span>
            <span style={{ margin: '0 8px' }}>></span>
            <span style={{ color: '#3b82f6' }}>e-Portfolio</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '32px' }}>e-Portfolio</h1>

          {/* ตารางแสดงข้อมูลโครงงาน */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937' }}>Portfolio</h3>
              <button style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}>
                + เพิ่ม
              </button>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f97316', color: 'white' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '600', fontSize: '14px', width: '100px' }}>ลำดับที่</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>ชื่อ Portfolio</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '600', fontSize: '14px', width: '120px' }}>Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px', color: '#374151' }}>1</td>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: '#374151' }}>สำหรับสมัครงาน Software Engineer</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <button style={{
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          padding: '6px 20px',
                          borderRadius: '6px',
                          border: 'none',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#bfdbfe'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#dbeafe'}>
                          ดู Portfolio
                        </button>
                        <button style={{
                          backgroundColor: '#fed7aa',
                          color: '#ea580c',
                          padding: '6px 16px',
                          borderRadius: '6px',
                          border: 'none',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#fdba74'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#fed7aa'}>
                          รายละเอียด
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px', color: '#374151' }}>2</td>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: '#374151' }}>สำหรับสมัครงาน DevOps Engineer</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <button style={{
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          padding: '6px 20px',
                          borderRadius: '6px',
                          border: 'none',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#bfdbfe'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#dbeafe'}>
                          ดู Portfolio
                        </button>
                        <button style={{
                          backgroundColor: '#fed7aa',
                          color: '#ea580c',
                          padding: '6px 16px',
                          borderRadius: '6px',
                          border: 'none',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#fdba74'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#fed7aa'}>
                          รายละเอียด
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Save Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}>
              บันทึก
            </button>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px' }}>
        <button style={{
          backgroundColor: '#f97316',
          color: 'white',
          padding: '12px',
          borderRadius: '50%',
          border: 'none',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}>
          <FileText size={24} />
        </button>
      </div>
    </div>
  );
}