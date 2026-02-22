import React, { useState } from 'react';
import { Home, BookOpen, Calendar, FileText, Bell, User } from 'lucide-react';

export default function LearningManagementSystem() {
  const [activeMenu, setActiveMenu] = useState('แฟ้มผลงาน');
  const [activeSubMenu, setActiveSubMenu] = useState('ประวัติการศึกษา');

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
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-2 { gap: 0.5rem; }
        
        /* Header styles */
        .header { background-color: #f97316; color: white; padding: 1rem 1.5rem; }
        .text-xl { font-size: 1.25rem; }
        .text-sm { font-size: 0.875rem; }
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
        .page-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; }
        .page-title { font-size: 1.5rem; font-weight: 700; color: #1f2937; margin: 0; }
        .add-button { 
          background-color: #0ea5e9; color: white; padding: 0.5rem 1rem; 
          border-radius: 0.375rem; font-weight: 500; border: none; cursor: pointer;
          transition: background-color 0.2s; font-size: 0.875rem;
        }
        .add-button:hover { background-color: #0284c7; }
        
        /* Form styles */
        .form-container { background-color: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; }
        .form-header { margin-bottom: 1.5rem; }
        .form-title { font-size: 1.25rem; font-weight: 700; color: #1f2937; margin-bottom: 1rem; }
        .checkbox-container { margin-bottom: 1.5rem; }
        .checkbox-label { display: flex; align-items: center; font-size: 0.875rem; color: #6b7280; gap: 0.5rem; }
        
        /* CRITICAL: Form layout styles */
        .form-section { margin-top: 1.5rem; margin-bottom: 1.5rem; }
        
        /* Checkbox styles */
        .checkbox-item { display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; }
        .checkbox-input { 
          width: 1.125rem; height: 1.125rem; accent-color: #3b82f6;
          border-radius: 0.25rem;
        }
        .checkbox-text { font-size: 0.875rem; color: #374151; }
        
        /* Education form layout */
        .education-row {
          display: flex !important;
          gap: 1rem !important;
          margin-bottom: 1.5rem !important;
          flex-wrap: wrap !important;
        }
        .education-field {
          flex: 1 1 250px !important;
          min-width: 250px !important;
        }
        .education-field-small {
          flex: 0 1 150px !important;
          min-width: 150px !important;
        }
        
        /* Input styles */
        .form-label { 
          display: block; font-size: 0.875rem; font-weight: 500; 
          color: #374151; margin-bottom: 0.25rem; 
        }
        .form-label.disabled { color: #9ca3af; }
        .form-input, .form-select { 
          width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; 
          border-radius: 0.375rem; font-size: 0.875rem; 
        }
        .form-input:focus, .form-select:focus { 
          outline: none; border-color: #ea580c; 
          box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.2); 
        }
        .form-select:disabled { background-color: #f3f4f6; color: #9ca3af; }
        .form-textarea { 
          width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; 
          border-radius: 0.375rem; resize: none; font-size: 0.875rem; 
        }
        .form-textarea:focus { 
          outline: none; border-color: #ea580c; 
          box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.2); 
        }
        
        /* Date fields */
        .date-container { display: flex; gap: 0.5rem; }
        .date-select { 
          flex: 1; padding: 0.5rem 0.25rem; border: 1px solid #d1d5db; 
          border-radius: 0.375rem; font-size: 0.8125rem; 
        }
        
        /* Button styles */
        .save-container { margin-top: 2rem; display: flex; justify-content: flex-end; }
        .save-button { 
          background-color: #ea580c; color: white; padding: 0.5rem 1.5rem; 
          border-radius: 0.5rem; font-weight: 500; border: none; cursor: pointer;
          transition: background-color 0.2s;
        }
        .save-button:hover { background-color: #dc2626; }
        
        /* Floating button */
        .floating-button { 
          position: fixed; bottom: 1.5rem; right: 1.5rem; 
          background-color: #ea580c; color: white; padding: 0.75rem; 
          border-radius: 9999px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); 
          border: none; cursor: pointer; transition: background-color 0.2s;
        }
        .floating-button:hover { background-color: #dc2626; }
        
        /* Timeline styles */
        .education-timeline { 
          margin-top: 2rem;
          position: relative;
        }
        .timeline-item { 
          display: flex; 
          margin-bottom: 3rem; 
          position: relative;
          align-items: flex-start;
        }
        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 119px;
          top: 80px;
          width: 3px;
          height: calc(100% + 1rem);
          background-color: #ef4444;
          z-index: 1;
        }
        .timeline-year {
          width: 140px;
          margin-right: 2.5rem;
          position: relative;
          text-align: left;
          padding-top: 1rem;
        }
        .timeline-year::after {
          content: '';
          position: absolute;
          right: -22px;
          top: 45px;
          width: 16px;
          height: 16px;
          background-color: #ef4444;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 0 2px #ef4444;
          z-index: 2;
        }
        .year-label {
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
          font-weight: 400;
        }
        .year-number {
          font-size: 2rem;
          font-weight: 700;
          color: #ef4444;
          line-height: 1;
        }
        .timeline-content {
          flex: 1;
          max-width: calc(100% - 180px);
        }
        
        /* Education card styles */
        .education-card {
          background-color: #fef3e2;
          border: 2px solid #fed7aa;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        .education-info {
          flex: 1;
          padding-right: 1rem;
        }
        .education-level {
          display: block;
          font-weight: 600;
          font-size: 1.1rem;
          color: #1f2937;
          margin-bottom: 0.75rem;
        }
        .education-institution {
          display: block;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
        .education-details {
          display: block;
          color: #6b7280;
          font-size: 0.95rem;
        }
        .card-actions {
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .edit-btn, .delete-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .edit-btn {
          background-color: #ea580c;
          color: white;
        }
        .edit-btn:hover {
          background-color: #dc2626;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        .delete-btn {
          background-color: #ea580c;
          color: white;
        }
        .delete-btn:hover {
          background-color: #dc2626;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        /* Checkbox improvements */
        .checkbox-item { 
          display: flex; 
          align-items: center; 
          gap: 0.75rem; 
          margin-top: 0; 
          padding-top: 0.5rem;
        }
        .checkbox-input { 
          width: 1.25rem; 
          height: 1.25rem; 
          accent-color: #ea580c;
          border-radius: 0.25rem;
        }
        .checkbox-text { 
          font-size: 0.9rem; 
          color: #374151;
          font-weight: 500;
        }
        
        /* Add button improvements */
        .add-button { 
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white; 
          padding: 0.75rem 1.5rem; 
          border-radius: 0.5rem; 
          font-weight: 600; 
          border: none; 
          cursor: pointer;
          transition: all 0.2s ease; 
          font-size: 0.9rem;
          box-shadow: 0 2px 4px rgba(249, 115, 22, 0.2);
        }
        .add-button:hover { 
          background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(249, 115, 22, 0.3);
        }
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
                          className={`submenu-item ${subItem === 'ประวัติการศึกษา' ? 'active' : 'inactive'}`}
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
              <span>ประวัติการศึกษา</span>
            </nav>

            {/* Page Header */}
            <div className="page-header">
              <h1 className="page-title">ประวัติการศึกษา</h1>
              <button className="add-button">เพิ่มข้อมูล</button>
            </div>

            {/* Education Timeline */}
            <div className="education-timeline">
              {/* Education Item 1 */}
              <div className="timeline-item">
                <div className="timeline-year">
                  <div className="year-label">จบการศึกษา พ.ศ.</div>
                  <div className="year-number">2531</div>
                </div>
                <div className="timeline-content">
                  <div className="education-card">
                    <div className="card-header">
                      <div className="education-info">
                        <span className="education-level">ปริญญาตรี</span>
                        <span className="education-institution">King Mongkut's Institute of Technology Ladkrabang</span>
                        <span className="education-details">คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</span>
                      </div>
                      <div className="card-actions">
                        <button className="edit-btn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </button>
                        <button className="delete-btn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3,6 5,6 21,6"/>
                            <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="checkbox-item">
                      <input type="checkbox" id="showResume1" className="checkbox-input" defaultChecked />
                      <label htmlFor="showResume1" className="checkbox-text">แสดงบนหน้าเรซูเม่</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Item 2 */}
              <div className="timeline-item">
                <div className="timeline-year">
                  <div className="year-label">จบการศึกษา พ.ศ.</div>
                  <div className="year-number">2527</div>
                </div>
                <div className="timeline-content">
                  <div className="education-card">
                    <div className="card-header">
                      <div className="education-info">
                        <span className="education-level">ปริญญาศึกษาต่อปลาย</span>
                        <span className="education-institution">โรงเรียนราชวินิตบางแก้ว</span>
                        <span className="education-details">แผนการเรียนวิทยาศาสตร์</span>
                      </div>
                      <div className="card-actions">
                        <button className="edit-btn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </button>
                        <button className="delete-btn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3,6 5,6 21,6"/>
                            <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="checkbox-item">
                      <input type="checkbox" id="showResume2" className="checkbox-input" defaultChecked />
                      <label htmlFor="showResume2" className="checkbox-text">แสดงบนหน้าเรซูเม่</label>
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