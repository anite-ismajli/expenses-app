import ExpensesAppLogo from "@/assets/img/ExpensesAppLogo1.svg";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

const AppSidebar = () => {
  return (
    <Sidebar className="bg-[#0b1220] text-slate-200 border-slate-800">

      {/* HEADER WITH LOGO & TITLE */}
      <SidebarHeader>
        <div className="flex items-center gap-1 px-4 py-4">
          <img
            src={ExpensesAppLogo}
            alt="App Logo"
            className="w-20 h-20"
          />
          <span className="text-slate-300 text-lg font-semibold">
            Applications
          </span>
        </div>
      </SidebarHeader>

      {/* MENU SECTIONS */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-[#1a2335] text-slate-200"
                  >
                    <a href={item.url}>
                      <item.icon className="text-slate-300" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  );
};

export default AppSidebar;