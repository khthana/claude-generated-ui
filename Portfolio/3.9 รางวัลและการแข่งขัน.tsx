import React, { useState } from 'react';
import { Home, BookOpen, Calendar, FileText, Bell, User } from 'lucide-react';

export default function LearningManagementSystem() {
  const [activeMenu, setActiveMenu] = useState('แฟ้มผลงาน');
  const [activeSubMenu, setActiveSubMenu] = useState('รางวัลและการแข่งขัน');

  const menuItems = [
    { name: 'หน้าหลัก', icon: Home },
    { name: 'รายวิชา', icon: BookOpen, submenu: ['ประกาศ', 'รายละเอียดรายวิชา', 'งานในชั้นเรียน', 'สื่อการเรียนการสอน', 'ผลการประเมิน'] },
    { name: 'ปฏิทิน', icon: Calendar },
    { name: 'แฟ้มผลงาน', icon: FileText, submenu: ['เกี่ยวกับฉัน', 'ข้อมูลส่วนตัว', 'ประวัติการศึกษา', 'เป้าหมายทางวิชาชีพ', 'ทักษะ', 'การฝึกงาน / สหกิจศึกษา', 'โครงงานปริญญาตรี', 'การฝึกอบรม', 'รางวัลและการแข่งขัน', 'คุณวุฒิทางวิชาชีพ', 'e-Portfolio'] }
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        
        .container { min-height: 100vh; background-color: #f9fafb; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .space-x-2 > * + * { margin-left: 0.5rem; }
        .space-x-4 > * + * { margin-left: 1rem; }
        .space-y-1 > * + * { margin-top: 0.25rem; }
        
        .header { background-color: #f97316; color: white; padding: 1rem 1.5rem; }
        .text-xl { font-size: 1.25rem; }
        .text-sm { font-size: 0.875rem; }
        .font-semibold { font-weight: 600; }
        .font-medium { font-weight: 500; }
        
        .w-6 { width: 1.5rem; }
        .h-6 { height: 1.5rem; }
        .w-5 { width: 1.25rem; }
        .h-5 { height: 1.25rem; }
        .w-8 { width: 2rem; }
        .h-8 { height: 2rem; }
        .bg-gray-600 { background-color: #4b5563; }
        .rounded-full { border-radius: 9999px; }
        .p-1 { padding: 0.25rem; }
        
        .sidebar { width: 16rem; background-color: white; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); min-height: 100vh; }
        .sidebar-nav { padding: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .menu-item { 
          display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; 
          border-radius: 0.5rem; cursor: pointer; transition: colors 0.2s; font-weight: 500;
        }
        .menu-item.active { 
          background-color: #fed7aa; color: #ea580c; border-right: 4px solid #ea580c; 
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
        
        .main-content { flex: 1; padding: 1.5rem; }
        .breadcrumb { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
        .breadcrumb .active { color: #ea580c; font-weight: 500; }
        .page-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; }
        .page-title { font-size: 1.5rem; font-weight: 700; color: #1f2937; margin: 0; }
        .add-button { 
          background-color: #ea580c; color: white; padding: 0.5rem 1rem; 
          border-radius: 0.375rem; font-weight: 500; border: none; cursor: pointer;
          transition: background-color 0.2s; font-size: 0.875rem;
        }
        .add-button:hover { background-color: #dc2626; }
        
        .form-container { background-color: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; }
        .form-section { margin-top: 1.5rem; margin-bottom: 1.5rem; }
        
        .checkbox-item { display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; }
        .checkbox-input { 
          width: 1.125rem; height: 1.125rem; accent-color: #3b82f6; border-radius: 0.25rem;
        }
        .checkbox-text { font-size: 0.875rem; color: #374151; }
        
        .education-row {
          display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;
        }
        .education-field {
          flex: 1 1 250px; min-width: 250px;
        }
        
        .form-label { 
          display: block; font-size: 0.875rem; font-weight: 500; 
          color: #374151; margin-bottom: 0.25rem; 
        }
        .form-input, .form-select { 
          width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; 
          border-radius: 0.375rem; font-size: 0.875rem; 
        }
        .form-input:focus, .form-select:focus { 
          outline: none; border-color: #ea580c; 
          box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.2); 
        }
        
        .save-container { margin-top: 2rem; display: flex; justify-content: flex-end; }
        .save-button { 
          background-color: #ea580c; color: white; padding: 0.5rem 1.5rem; 
          border-radius: 0.5rem; font-weight: 500; border: none; cursor: pointer;
          transition: background-color 0.2s;
        }
        .save-button:hover { background-color: #dc2626; }
        
        .floating-button { 
          position: fixed; bottom: 1.5rem; right: 1.5rem; 
          background-color: #ea580c; color: white; padding: 0.75rem; 
          border-radius: 9999px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); 
          border: none; cursor: pointer; transition: background-color 0.2s;
        }
        .floating-button:hover { background-color: #dc2626; }
      `}</style>
      
      <div className="container">
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
                          className={`submenu-item ${activeSubMenu === subItem ? 'active' : 'inactive'}`}
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

          <main className="main-content">
            <nav className="breadcrumb">
              <span className="active">แฟ้มผลงาน</span>
              <span> &gt; </span>
              <span>รางวัลและการแข่งขัน</span>
            </nav>

            <div className="page-header">
              <h1 className="page-title">รางวัลและการแข่งขัน</h1>
              <button className="add-button">เพิ่มข้อมูล</button>
            </div>

            <div className="form-container">
              <div className="form-section">
                <div className="education-row">
                  <div className="education-field">
                    <label className="form-label">รายการที่แข่งขัน</label>
                    <input type="text" className="form-input" />
                  </div>
                </div>

                <div className="education-row">
                  <div className="education-field">
                    <label className="form-label">หน่วยงานที่จัด</label>
                    <input type="text" className="form-input" />
                  </div>
                </div>

                <div className="education-row">
                  <div className="education-field">
                    <label className="form-label">รางวัลที่ได้</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="education-field">
                    <label className="form-label">วันที่ได้รางวัล</label>
                    <input type="date" className="form-input" />
                  </div>
                </div>

                <div className="education-row">
                  <div className="education-field">
                    <label className="form-label">รูปรางวัลหรือใบประกาศ</label>
                    <input type="file" className="form-input" accept="image/*,.pdf" />
                  </div>
                </div>

                <div className="education-row">
                  <div className="education-field">
                    <label className="form-label">รูปที่ได้รับรางวัล</label>
                    <input type="file" className="form-input" accept="image/*" />
                  </div>
                </div>

                <div className="checkbox-item">
                  <input type="checkbox" id="showResume" className="checkbox-input" defaultChecked />
                  <label htmlFor="showResume" className="checkbox-text">เปิดเผย</label>
                </div>
              </div>

              <div className="save-container">
                <button className="save-button">บันทึก</button>
              </div>
            </div>
          </main>
        </div>

        <button className="floating-button">
          <FileText size={24} />
        </button>
      </div>
    </>
  );
}