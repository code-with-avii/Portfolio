import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks.js";
import { logout } from "../store/slices/authSlice.js";
import {
  fetchMessages,
  toggleMessageRead,
  deleteMessage,
} from "../store/slices/messageSlice.js";
import {
  LogOut,
  Inbox,
  Trash2,
  MailOpen,
  Mail,
  ArrowLeft,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { messages, loading } = useAppSelector((state) => state.messages);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Auth Protection Guard
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
    } else {
      dispatch(fetchMessages());
    }
  }, [isAuthenticated, navigate, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleToggleRead = (msg) => {
    dispatch(toggleMessageRead({ id: msg._id, isRead: !msg.isRead }));
    if (selectedMessage && selectedMessage._id === msg._id) {
      setSelectedMessage({ ...selectedMessage, isRead: !msg.isRead });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch(deleteMessage(id));
      if (selectedMessage && selectedMessage._id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const unreadCount = messages.filter((m) => !m.isRead).length;

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-background text-text font-body pb-24 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <nav className="glass-panel py-4 shadow-lg border-b border-white/5 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <button className="text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft size={18} />
            </button>
            <span className="font-heading font-bold text-base text-white flex items-center gap-2">
              <ShieldCheck className="text-cyan-400" size={18} /> Core Dashboard
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-surface/50 hover:bg-zinc-800 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white transition-all"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-10">
        {/* Dashboard Title & Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-10">
          <div className="md:col-span-1">
            <h1 className="text-2xl font-bold font-heading text-white">
              Inbound Messages
            </h1>
            <p className="text-xs text-zinc-500 font-semibold mt-1">
              Review contact inquiries left by recruiters.
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Inbox size={18} />
              </div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Total Mail
              </span>
            </div>
            <div className="text-xl font-bold font-heading text-white">
              {messages.length}
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Mail size={18} />
              </div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Unread Mail
              </span>
            </div>
            <div className="text-xl font-bold font-heading text-white">
              {unreadCount}
            </div>
          </div>
        </div>

        {/* Dashboard Inbox layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Messages list - Left */}
          <div className="lg:col-span-5 space-y-3 max-h-150 overflow-y-auto pr-2 custom-scrollbar">
            {loading && messages.length === 0 ? (
              <div className="text-center py-10">
                <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin mx-auto" />
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-12 text-zinc-500 text-sm border border-white/5 rounded-2xl bg-surface/20">
                No inquiries logged.
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedMessage?._id === msg._id
                      ? "bg-zinc-800 border-primary shadow-md"
                      : msg.isRead
                        ? "bg-surface/30 border-white/5 hover:border-white/10"
                        : "bg-surface/80 border-cyan-500/30 hover:border-cyan-500/50 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-heading font-bold text-xs text-white truncate max-w-37.5">
                      {msg.name}
                    </span>
                    <span className="text-[9px] text-zinc-500 font-code font-bold flex items-center gap-1">
                      <Clock size={10} />
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h4
                    className={`text-xs mt-2 truncate ${msg.isRead ? "text-zinc-400 font-semibold" : "text-cyan-400 font-bold"}`}
                  >
                    {msg.subject}
                  </h4>
                  <p className="text-[11px] text-zinc-500 line-clamp-2 mt-1.5 leading-relaxed font-body">
                    {msg.message}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Message view console - Right */}
          <div className="lg:col-span-7">
            {selectedMessage ? (
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between min-h-100">
                <div>
                  {/* Sender title */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                    <div>
                      <h2 className="text-lg font-heading font-bold text-white leading-snug">
                        {selectedMessage.name}
                      </h2>
                      <span className="text-xs text-cyan-400 font-code font-semibold">
                        {selectedMessage.email}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleRead(selectedMessage)}
                        className={`p-2 rounded-lg border text-zinc-400 hover:text-white transition-colors ${
                          selectedMessage.isRead
                            ? "border-zinc-800 bg-zinc-900/50"
                            : "border-cyan-500/20 bg-cyan-500/5 text-cyan-400"
                        }`}
                        title={
                          selectedMessage.isRead
                            ? "Mark as unread"
                            : "Mark as read"
                        }
                      >
                        {selectedMessage.isRead ? (
                          <MailOpen size={15} />
                        ) : (
                          <Mail size={15} />
                        )}
                      </button>

                      <button
                        onClick={() => handleDelete(selectedMessage._id)}
                        className="p-2 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 hover:text-white hover:bg-red-500/20 transition-all"
                        title="Delete Message"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Subject and Message Details */}
                  <div className="space-y-4 font-body">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">
                        Subject
                      </div>
                      <h3 className="text-sm font-bold text-white leading-normal">
                        {selectedMessage.subject}
                      </h3>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1.5">
                        Message Content
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 border border-white/5 rounded-xl p-4 font-body whitespace-pre-wrap">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-semibold font-code">
                  <span>ID: {selectedMessage._id}</span>
                  <span className="flex items-center gap-1">
                    {selectedMessage.isRead ? (
                      <>
                        <CheckCircle size={10} className="text-emerald-400" />{" "}
                        Reviewed
                      </>
                    ) : (
                      "Inbound Queue"
                    )}
                  </span>
                </div>
              </div>
            ) : (
              <div className="glass-panel p-12 rounded-2xl border border-white/5 text-center text-zinc-500 text-sm flex items-center justify-center min-h-100 font-body select-none">
                Select a message from the list to view its contents.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
