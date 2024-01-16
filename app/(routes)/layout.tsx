import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex   h-full dark:bg-[#0e0e0e]" suppressHydrationWarning>
      <main className="flex-1 flex-col h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
