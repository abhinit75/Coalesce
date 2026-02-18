"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/app-sidebar";
import Header from "@/components/layouts/header";
import KBar from "@/components/kbar";

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <KBar>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </KBar>
  );
}
