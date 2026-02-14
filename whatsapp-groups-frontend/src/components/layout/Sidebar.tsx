
"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Contact,
  FileText,
  Folder,
  Settings
} from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen p-6 flex flex-col">

      {/* Logo */}
      <h1 className="text-xl font-bold mb-10">Periskope</h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 text-sm">

        {/* Dashboard */}
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg 
                     text-slate-600 hover:bg-gray-100 hover:text-black transition"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        {/* Chats */}
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg 
                     text-slate-600 hover:bg-gray-100 hover:text-black transition"
        >
          <MessageSquare size={18} />
          Chats
        </Link>

        {/* Groups (Active) */}
        <Link
          href="/groups"
          className="flex items-center gap-3 px-3 py-2 rounded-lg 
                     bg-gray-100 text-black font-medium"
        >
          <Users size={18} />
          Groups
        </Link>

        {/* Contacts */}
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg 
                     text-slate-600 hover:bg-gray-100 hover:text-black transition"
        >
          <Contact size={18} />
          Contacts
        </Link>

        {/* Logs */}
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg 
                     text-slate-600 hover:bg-gray-100 hover:text-black transition"
        >
          <FileText size={18} />
          Logs
        </Link>

        {/* Files */}
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg 
                     text-slate-600 hover:bg-gray-100 hover:text-black transition"
        >
          <Folder size={18} />
          Files
        </Link>

        {/* Settings */}
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg 
                     text-slate-600 hover:bg-gray-100 hover:text-black transition"
        >
          <Settings size={18} />
          Settings
        </Link>

      </nav>
    </div>
  )
}

