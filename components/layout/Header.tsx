"use client";

import React from "react";
import type { User } from "@/types";

interface HeaderProps {
  user?: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-secondary-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-secondary-900">
            SP Home
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="text-right">
              <p className="text-sm font-medium text-secondary-900">
                {user?.name || "Employee"}
              </p>
              <p className="text-xs text-secondary-500">
                {user?.email || "employee@company.com"}
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-700 font-semibold text-sm">
                {user?.name?.charAt(0).toUpperCase() || "E"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

