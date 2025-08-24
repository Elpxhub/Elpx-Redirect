import { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const mainContentVariants = {
    expanded: { 
      marginLeft: "280px"
    },
    collapsed: { 
      marginLeft: "80px"
    },
    mobile: {
      marginLeft: "0px"
    }
  };

  const getMainContentVariant = () => {
    if (isMobile) return "mobile";
    return sidebarCollapsed ? "collapsed" : "expanded";
  };

  return (
    <div className="flex h-screen bg-gray-50/50">
      <AppSidebar collapsed={sidebarCollapsed} onToggle={handleSidebarToggle} />
      
      {/* Mobile overlay */}
      {isMobile && !sidebarCollapsed && (
        <motion.div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleSidebarToggle}
        />
      )}

      <motion.div 
        className="flex-1 flex flex-col overflow-hidden min-h-screen"
        variants={mainContentVariants}
        animate={getMainContentVariant()}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <DashboardHeader 
          onMenuClick={handleSidebarToggle}
          sidebarCollapsed={sidebarCollapsed}
        />
        <main className="flex-1 overflow-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
};

export default DashboardLayout;