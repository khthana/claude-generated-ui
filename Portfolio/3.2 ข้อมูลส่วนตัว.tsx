import React, { useState } from 'react';
import { Home, BookOpen, Calendar, FileText, Bell, User, Edit } from 'lucide-react';

export default function LearningManagementSystem() {
  const [activeMenu, setActiveMenu] = useState('แฟ้มผลงาน');
  const [activeSubMenu, setActiveSubMenu] = useState('ข้อมูลส่วนตัว');

  const menuItems = [
    { name: 'หน้าหลัก', icon: Home },
    { name: 'รายวิชา', icon: BookOpen, submenu: ['ประกาศ', 'รายละเอียดรายวิชา', 'งานในชั้นเรียน', 'สื่อการเรียนการสอน', 'ผลการประเมิน'] },
    { name: 'ปฏิทิน', icon: Calendar },
    { name: 'แฟ้มผลงาน', icon: FileText, submenu: ['เกี่ยวกับฉัน', 'ข้อมูลส่วนตัว', 'ประวัติการศึกษา', 'เป้าหมายทางวิชาชีพ', 'ทักษะ', 'การฝึกงาน / สหกิจศึกษา', 'โครงงานปริญญาตรี', 'การฝึกอบรม', 'รางวัลและการแข่งขัน', 'คุณวุฒิทางวิชาชีพ', 'e-Portfolio'] }
  ];

  return (
    <>
      <style>{`
        /* Reset and base styles */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        
        /* Container styles */
        .container { min-height: 100vh; background-color: #f9fafb; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }
        .space-x-2 > * + * { margin-left: 0.5rem; }
        .space-x-3 > * + * { margin-left: 0.75rem; }
        .space-x-4 > * + * { margin-left: 1rem; }
        .space-y-1 > * + * { margin-top: 0.25rem; }
        .gap-6 { gap: 1.5rem; }
        
        /* Header styles */
        .header { background-color: #f97316; color: white; padding: 1rem 1.5rem; }
        .text-xl { font-size: 1.25rem; }
        .text-sm { font-size: 0.875rem; }
        .text-lg { font-size: 1.125rem; }
        .text-2xl { font-size: 1.5rem; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        
        /* Icon styles */
        .w-6 { width: 1.5rem; }
        .h-6 { height: 1.5rem; }
        .w-5 { width: 1.25rem; }
        .h-5 { height: 1.25rem; }
        .w-8 { width: 2rem; }
        .h-8 { height: 2rem; }
        .bg-gray-600 { background-color: #4b5563; }
        .rounded-full { border-radius: 9999px; }
        .p-1 { padding: 0.25rem; }
        
        /* Sidebar styles */
        .sidebar { width: 16rem; background-color: white; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); min-height: 100vh; }
        .sidebar-nav { padding: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .menu-item { 
          display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; 
          border-radius: 0.5rem; cursor: pointer; transition: colors 0.2s;
          font-weight: 500;
        }
        .menu-item.active { 
          background-color: #fed7aa; color: #ea580c; 
          border-right: 4px solid #ea580c; 
        }
        .menu-item.inactive { color: #374151; }
        .menu-item.inactive:hover { background-color: #f3f4f6; }
        .submenu { margin-left: 2rem; margin-top: 0.5rem; }
        .submenu-item {
          padding: 0.5rem; font-size: 0.875rem; border-radius: 0.25rem;
          cursor: pointer; transition: colors 0.2s;
        }
        .submenu-item.active { background-color: #fef3e2; color: #ea580c; font-weight: 500; }
        .submenu-item.inactive { color: #6b7280; }
        .submenu-item.inactive:hover { background-color: #f9fafb; }
        
        /* Main content styles */
        .main-content { flex: 1; padding: 1.5rem; }
        .breadcrumb { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
        .breadcrumb .active { color: #ea580c; font-weight: 500; }
        .page-title { font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 2rem; }
        
        /* Two column layout */
        .two-column-layout {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .left-column {
          flex: 0 0 auto;
          width: 350px;
        }
        
        .right-column {
          flex: 1;
          min-width: 500px;
        }
        
        /* Card styles */
        .card { 
          background-color: white; 
          border-radius: 0.5rem; 
          box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
          padding: 1.5rem; 
        }
        
        .card-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1.5rem;
        }
        
        /* Profile image section */
        .profile-image-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .profile-image svg {
          width: 120px;
          height: 120px;
          color: #6366f1;
        }
        
        .edit-image-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #ea580c;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .edit-image-button:hover {
          background-color: #dc2626;
        }
        
        /* Info display section */
        .info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .edit-info-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #ea580c;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .edit-info-button:hover {
          background-color: #dc2626;
        }
        
        .info-item {
          display: flex;
          padding: 1rem 0;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .info-item:last-child {
          border-bottom: none;
        }
        
        .info-label {
          font-weight: 600;
          color: #374151;
          min-width: 220px;
          font-size: 0.9375rem;
        }
        
        .info-value {
          color: #6b7280;
          font-size: 0.9375rem;
        }
        
        /* Floating button */
        .floating-button { 
          position: fixed; bottom: 1.5rem; right: 1.5rem; 
          background-color: #ea580c; color: white; padding: 0.75rem; 
          border-radius: 9999px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); 
          border: none; cursor: pointer; transition: background-color 0.2s;
        }
        .floating-button:hover { background-color: #dc2626; }
      `}</style>
      
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6" />
              <span className="text-xl font-semibold">DEEP-PORTFOLIO</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">ปัญณิฏฐา ปิงคำ</span>
              <Bell className="w-5 h-5" />
              <User className="w-8 h-8 bg-gray-600 rounded-full p-1" />
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className="sidebar">
            <nav className="sidebar-nav">
              {menuItems.map((item) => (
                <div key={item.name} className="mb-2">
                  <div 
                    className={`menu-item ${activeMenu === item.name ? 'active' : 'inactive'}`}
                    onClick={() => setActiveMenu(item.name)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.submenu && activeMenu === item.name && (
                    <div className="submenu space-y-1">
                      {item.submenu.map((subItem) => (
                        <div 
                          key={subItem}
                          className={`submenu-item ${subItem === 'ข้อมูลส่วนตัว' ? 'active' : 'inactive'}`}
                          onClick={() => setActiveSubMenu(subItem)}
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
          <main className="main-content">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
              <span className="active">แฟ้มผลงาน</span>
              <span> > </span>
              <span>ข้อมูลส่วนตัว</span>
            </nav>

            {/* Page Title */}
            <h1 className="page-title">ข้อมูลส่วนตัว</h1>

            {/* Two Column Layout */}
            <div className="two-column-layout">
              {/* Left Column - Profile Image */}
              <div className="left-column">
                <div className="card">
                  <h2 className="card-title">รูปภาพ</h2>
                  <div className="profile-image-container">
                    <div className="profile-image">
                      <User style={{width: '120px', height: '120px', color: '#6366f1'}} />
                    </div>
                    <button className="edit-image-button">
                      <Edit size={16} />
                      แก้ไขรูปภาพ
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Personal Information */}
              <div className="right-column">
                <div className="card">
                  <div className="info-header">
                    <h2 className="card-title" style={{marginBottom: 0}}>แก้ไขข้อมูลส่วนตัว</h2>
                    <button className="edit-info-button">
                      <Edit size={16} />
                      แก้ไขข้อมูลส่วนตัว
                    </button>
                  </div>
                  
                  <div>
                    <div className="info-item">
                      <div className="info-label">เพศ:</div>
                      <div className="info-value">ชาย</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">คำนำหน้าชื่อ (บัตรประชาชน):</div>
                      <div className="info-value">นาย</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">ชื่อ-นามสกุล (TH):</div>
                      <div className="info-value">ธนา หงษ์สุวรรณ</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">ชื่อ-นามสกุล (EN):</div>
                      <div className="info-value">Thana Hongsuwan</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">หมายเลขโทรศัพท์:</div>
                      <div className="info-value">0867899394</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">E-Mail:</div>
                      <div className="info-value"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Floating Action Button */}
        <button className="floating-button">
          <FileText size={24} />
        </button>
      </div>
    </>
  );
}