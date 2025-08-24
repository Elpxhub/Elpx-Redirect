import { useState } from "react";
import {
  Home,
  BarChart3,
  Heart,
  LogOut,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ElpxLogo from "@/assets/ElpxLoogo.svg";

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function AppSidebar({ collapsed, onToggle }: AppSidebarProps) {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    {
      name: "Campaigns",
      href: "/campaigns",
      icon: BarChart3,
      children: ["/create-campaign", "/preview"],
    },
    { name: "Donations", href: "/donations", icon: Heart },
  ];

  const bottomNavigation = [
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Logout", href: "/logout", icon: LogOut },
  ];

  const isActive = (item: { href: string; children?: string[] }) => {
    const currentPath = location.pathname;
    if (currentPath.startsWith(item.href)) return true;
    if (item.children) {
      return item.children.some((child) => currentPath.startsWith(child));
    }
    return false;
  };

  const sidebarVariants = {
    expanded: {
      width: "280px",
    },
    collapsed: {
      width: "80px",
    },
  };

  const contentVariants = {
    expanded: {
      opacity: 1,
      x: 0,
    },
    collapsed: {
      opacity: 0,
      x: -20,
    },
  };

  return (
    <motion.div
      className="flex h-full flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      variants={sidebarVariants}
      animate={collapsed ? "collapsed" : "expanded"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ position: "fixed", height: "100vh", zIndex: 40 }}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b">
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              className="flex items-center gap-2"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <div>
                <img className="h-10" src={ElpxLogo} alt="Elpx Logo" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-9 w-9 shrink-0"
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);

          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                collapsed ? "justify-center" : "justify-start",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="truncate"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t space-y-1">
        {bottomNavigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);

          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                collapsed ? "justify-center" : "justify-start",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="truncate"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </div>
    </motion.div>
  );
}
