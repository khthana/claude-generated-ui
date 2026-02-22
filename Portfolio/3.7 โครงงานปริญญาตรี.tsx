import React, { useState } from 'react';
import { Home, BookOpen, Calendar, FileText, Bell, User } from 'lucide-react';

export default function LearningManagementSystem() {
  const [activeMenu, setActiveMenu] = useState('แฟ้มผลงาน');
  const [activeSubMenu, setActiveSubMenu] = useState('โครงงานปริญญาตรี');

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
            <span style={{ color: '#3b82f6' }}>โครงงานปริญญาตรี</span>
          </nav>

          {/* Page Title */}
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '32px' }}>โครงงานปริญญาตรี</h1>

          {/* Work Form */}
          <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', padding: '24px', marginBottom: '24px' }}>
            {/* ชื่อโครงงาน (ไทย) */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>ชื่อโครงงาน (ไทย)</label>
              <input
                type="text"
                placeholder="กรอกชื่อโครงงานภาษาไทย"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* ชื่อโครงงาน (อังกฤษ) */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>ชื่อโครงงาน (อังกฤษ)</label>
              <input
                type="text"
                placeholder="Enter project name in English"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* ตารางแสดงข้อมูลโครงงาน */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937', marginBottom: '16px' }}>ข้อมูลโครงงาน</h3>
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f97316', color: 'white' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '600', fontSize: '14px', width: '100px' }}>ลำดับที่</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>ชื่อข้อมูล</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '600', fontSize: '14px', width: '120px' }}>Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px', color: '#374151' }}>1</td>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: '#374151' }}>ปริญญานิพนธ์</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <button style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}>
                        เพิ่มข้อมูล
                      </button>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px', color: '#374151' }}>2</td>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: '#374151' }}>ไฟล์นำเสนอโครงงาน</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <button style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}>
                        เพิ่มข้อมูล
                      </button>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px', color: '#374151' }}>3</td>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: '#374151' }}>วิดีโอสาธิตโครงงาน</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <button style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}>
                        เพิ่มข้อมูล
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px', color: '#374151' }}>4</td>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: '#374151' }}>โปสเตอร์โครงงาน</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <button style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}>
                        เพิ่มข้อมูล
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Repository Section */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Repository ของโครงงาน</label>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="กรอก URL ของ Repository"
                style={{
                  flex: '1',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button style={{
                backgroundColor: '#f97316',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}>
                บันทึก
              </button>
            </div>
          </div>

          {/* บทบาทและการทำงานในโครงงาน Section */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <label style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937' }}>บทบาทและการทำงานในโครงงาน</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input type="checkbox" id="public1" style={{ width: '16px', height: '16px' }} />
                <label htmlFor="public1" style={{ fontSize: '14px', color: '#374151' }}>เปิดเผย</label>
              </div>
            </div>
            
            {/* Simple Rich Text Editor */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              {/* Simplified Toolbar */}
              <div style={{ backgroundColor: '#f9fafb', padding: '8px 16px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button style={{ padding: '4px 8px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>B</button>
                <button style={{ padding: '4px 8px', fontStyle: 'italic', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>I</button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6-6m6 6l-6 6" />
                  </svg>
                </button>
                <div style={{ width: '1px', height: '16px', backgroundColor: '#d1d5db', margin: '0 4px' }}></div>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m0-14h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m0-14v14" />
                  </svg>
                </button>
              </div>

              {/* Text Area */}
              <div style={{ padding: '16px' }}>
                <textarea
                  style={{
                    width: '100%',
                    height: '128px',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    fontSize: '14px',
                    fontFamily: 'inherit'
                  }}
                  placeholder="อธิบายงานที่ได้รับมอบหมาย ความรู้ที่ได้นำไปใช้ ความสำเร็จของงาน ได้ทำอะไรบ้าง"
                ></textarea>
              </div>
            </div>
          </div>

          {/* ความคาดหวังเริ่มแรกเมื่อจะทำโครงงาน Section */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <label style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937' }}>ความคาดหวังเริ่มแรกเมื่อจะทำโครงงาน</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input type="checkbox" id="public2" style={{ width: '16px', height: '16px' }} />
                <label htmlFor="public2" style={{ fontSize: '14px', color: '#374151' }}>เปิดเผย</label>
              </div>
            </div>
            
            {/* Simple Rich Text Editor */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              {/* Simplified Toolbar */}
              <div style={{ backgroundColor: '#f9fafb', padding: '8px 16px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button style={{ padding: '4px 8px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>B</button>
                <button style={{ padding: '4px 8px', fontStyle: 'italic', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>I</button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6-6m6 6l-6 6" />
                  </svg>
                </button>
                <div style={{ width: '1px', height: '16px', backgroundColor: '#d1d5db', margin: '0 4px' }}></div>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m0-14h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m0-14v14" />
                  </svg>
                </button>
              </div>

              {/* Text Area */}
              <div style={{ padding: '16px' }}>
                <textarea
                  style={{
                    width: '100%',
                    height: '128px',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    fontSize: '14px',
                    fontFamily: 'inherit'
                  }}
                  placeholder="ให้บอกความคาดหวังเริ่มแรกเมื่อจะทำโครงงาน"
                ></textarea>
              </div>
            </div>
          </div>

          {/* สิ่งที่ได้จากการทำโครงงาน Section */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <label style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937' }}>สิ่งที่ได้จากการทำโครงงาน</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input type="checkbox" id="public2_5" style={{ width: '16px', height: '16px' }} />
                <label htmlFor="public2_5" style={{ fontSize: '14px', color: '#374151' }}>เปิดเผย</label>
              </div>
            </div>
            
            {/* Simple Rich Text Editor */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              {/* Simplified Toolbar */}
              <div style={{ backgroundColor: '#f9fafb', padding: '8px 16px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button style={{ padding: '4px 8px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>B</button>
                <button style={{ padding: '4px 8px', fontStyle: 'italic', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>I</button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6-6m6 6l-6 6" />
                  </svg>
                </button>
                <div style={{ width: '1px', height: '16px', backgroundColor: '#d1d5db', margin: '0 4px' }}></div>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m0-14h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m0-14v14" />
                  </svg>
                </button>
              </div>

              {/* Text Area */}
              <div style={{ padding: '16px' }}>
                <textarea
                  style={{
                    width: '100%',
                    height: '128px',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    fontSize: '14px',
                    fontFamily: 'inherit'
                  }}
                  placeholder="ให้บอกสิ่งที่ได้จากการทำโครงงาน เช่น 
• ประยุกต์ใช้ความรู้ด้าน___กับปัญหาจริง
• พัฒนา Solution สำหรับแก้ปัญหา
• ออกแบบ ... สำหรับ ...
• ทดลอง...
• นำเสนอ
• จัดทำเอกสาร...
• เรียนรู้การทำงานร่วมกับผู้อื่น
• ตระหนักถึงประเด็นอื่นๆ เช่น จริยธรรม ความปลอดภัย
• มีความเข้าใจที่ลึกซึ้งขึ้น ว่า Engineering มีผลกระทบกับสังคมและสิ่งแวดล้อมอย่างไร
• มีแรงบันดาลใจในการเรียน มากกว่าเรียนเพื่อให้ได้เกรด หรือ เพื่อให้สำเร็จการศึกษา"
                ></textarea>
              </div>
            </div>
          </div>

          {/* สิ่งที่สะท้อนคิดจากการทำโครงงาน Section */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <label style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937' }}>สิ่งที่สะท้อนคิดจากการทำโครงงาน</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input type="checkbox" id="public3" style={{ width: '16px', height: '16px' }} />
                <label htmlFor="public3" style={{ fontSize: '14px', color: '#374151' }}>เปิดเผย</label>
              </div>
            </div>
            
            {/* Simple Rich Text Editor */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              {/* Simplified Toolbar */}
              <div style={{ backgroundColor: '#f9fafb', padding: '8px 16px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button style={{ padding: '4px 8px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>B</button>
                <button style={{ padding: '4px 8px', fontStyle: 'italic', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>I</button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6-6m6 6l-6 6" />
                  </svg>
                </button>
                <div style={{ width: '1px', height: '16px', backgroundColor: '#d1d5db', margin: '0 4px' }}></div>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
                <button style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m0-14h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m0-14v14" />
                  </svg>
                </button>
              </div>

              {/* Text Area */}
              <div style={{ padding: '16px' }}>
                <textarea
                  style={{
                    width: '100%',
                    height: '128px',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    fontSize: '14px',
                    fontFamily: 'inherit'
                  }}
                  placeholder="ให้สะท้อนต่อสิ่งที่ได้เรียนรู้จากการทำโครงงาน ว่ามีผลอย่างไรต่อตนเอง มีการเปลี่ยนแปลงของความคิด วิธีคิด ความเชื่อ หรือไม่ และทำให้ตนเองมีความเปลี่ยนแปลงอะไรหรือไม่"
                ></textarea>
              </div>
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