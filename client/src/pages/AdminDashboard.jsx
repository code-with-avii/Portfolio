import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
  Camera,
  Image,
  Save,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { messages, loading } = useAppSelector((state) => state.messages);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const [adminPic, setAdminPic] = useState(() => {
    return (
      localStorage.getItem("admin_profile_pic") ||
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
    );
  });
  const [picInput, setPicInput] = useState(adminPic);
  const [picSavedStatus, setPicSavedStatus] = useState("");

  const handleSaveProfilePic = (newPic) => {
    const val = newPic || picInput;
    localStorage.setItem("admin_profile_pic", val);
    setAdminPic(val);
    window.dispatchEvent(new Event("profilePicUpdated"));
    setPicSavedStatus("Profile picture updated!");
    setTimeout(() => setPicSavedStatus(""), 3000);
  };

  const handleAdminFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicInput(reader.result);
        handleSaveProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      <Helmet>
        <title>Admin Dashboard — Core</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {/* Background radial spotlight */}
      <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <nav className="glass-panel py-4 shadow-lg border-b border-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <button className="text-mutedText hover:text-text transition-colors">
              <ArrowLeft size={18} />
            </button>
            <span className="font-heading font-bold text-base text-text flex items-center gap-2">
              <ShieldCheck className="text-cyan-400" size={18} /> Core Dashboard
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border-hover bg-surface/50 hover:bg-surface-hover rounded-lg text-xs font-semibold text-mutedText hover:text-text transition-all"
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
            <h1 className="text-2xl font-bold font-heading text-text">
              Inbound Messages
            </h1>
            <p className="text-xs text-mutedText font-semibold mt-1">
              Review contact inquiries left by recruiters.
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Inbox size={18} />
              </div>
              <span className="text-xs font-semibold text-mutedText uppercase tracking-wider">
                Total Mail
              </span>
            </div>
            <div className="text-xl font-bold font-heading text-text">
              {messages.length}
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Mail size={18} />
              </div>
              <span className="text-xs font-semibold text-mutedText uppercase tracking-wider">
                Unread Mail
              </span>
            </div>
            <div className="text-xl font-bold font-heading text-text">
              {unreadCount}
            </div>
          </div>
        </div>

        {/* Admin Profile Picture Control */}
        <div className="glass-panel p-6 rounded-2xl border border-border mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative group shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary flex items-center justify-center bg-surface shadow-md">
                  {adminPic ? (
                    <img
                      src={adminPic}
                      alt="Admin Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ShieldCheck size={28} className="text-primary" />
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-base font-bold font-heading text-text flex items-center gap-2">
                  <Image size={18} className="text-primary" /> Profile Picture Control
                </h2>
                <p className="text-xs text-mutedText mt-0.5 font-medium">
                  Update the Navbar profile avatar visible across the portfolio.
                </p>
              </div>
            </div>

            <div className="flex-1 max-w-xl w-full flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                value={picInput}
                onChange={(e) => setPicInput(e.target.value)}
                placeholder="Paste image URL..."
                className="flex-1 w-full bg-surface/80 border border-border rounded-xl px-3.5 py-2 text-xs text-text placeholder-zinc-500 focus:outline-none focus:border-primary font-code"
              />
              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <label className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-border hover:border-border-hover bg-surface hover:bg-surface-hover rounded-xl text-xs font-semibold text-text cursor-pointer transition-all">
                  <Camera size={14} /> Upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAdminFileUpload}
                    className="hidden"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => handleSaveProfilePic()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
                >
                  <Save size={14} /> Save
                </button>
              </div>
            </div>
          </div>
          {picSavedStatus && (
            <p className="text-xs font-semibold text-emerald-500 mt-3 flex items-center gap-1">
              <CheckCircle size={14} /> {picSavedStatus}
            </p>
          )}
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
              <div className="text-center py-12 text-mutedText text-sm border border-border rounded-2xl bg-surface/20">
                No inquiries logged.
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedMessage?._id === msg._id
                      ? "bg-surface-hover border-primary shadow-md"
                      : msg.isRead
                        ? "bg-surface/30 border-border hover:border-border-hover"
                        : "bg-surface/80 border-cyan-500/30 hover:border-cyan-500/50 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-heading font-bold text-xs text-text truncate max-w-37.5">
                      {msg.name}
                    </span>
                    <span className="text-[9px] text-mutedText font-code font-bold flex items-center gap-1">
                      <Clock size={10} />
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h4
                    className={`text-xs mt-2 truncate ${msg.isRead ? "text-mutedText font-semibold" : "text-cyan-400 font-bold"}`}
                  >
                    {msg.subject}
                  </h4>
                  <p className="text-[11px] text-mutedText line-clamp-2 mt-1.5 leading-relaxed font-body">
                    {msg.message}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Message view console - Right */}
          <div className="lg:col-span-7">
            {selectedMessage ? (
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-border flex flex-col justify-between min-h-100">
                <div>
                  {/* Sender title */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-6">
                    <div>
                      <h2 className="text-lg font-heading font-bold text-text leading-snug">
                        {selectedMessage.name}
                      </h2>
                      <span className="text-xs text-cyan-400 font-code font-semibold">
                        {selectedMessage.email}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleRead(selectedMessage)}
                        className={`p-2 rounded-lg border text-mutedText hover:text-text transition-colors ${
                          selectedMessage.isRead
                            ? "border-zinc-800 bg-surface/50"
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
                        className="p-2 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 hover:text-text hover:bg-red-500/20 transition-all"
                        title="Delete Message"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Subject and Message Details */}
                  <div className="space-y-4 font-body">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-mutedText mb-1">
                        Subject
                      </div>
                      <h3 className="text-sm font-bold text-text leading-normal">
                        {selectedMessage.subject}
                      </h3>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase font-bold text-mutedText mb-1.5">
                        Message Content
                      </div>
                      <p className="text-xs sm:text-sm text-mutedText leading-relaxed bg-surface/60 border border-border rounded-xl p-4 font-body whitespace-pre-wrap">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-[10px] text-mutedText font-semibold font-code">
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
              <div className="glass-panel p-12 rounded-2xl border border-border text-center text-mutedText text-sm flex items-center justify-center min-h-100 font-body select-none">
                Select a message from the list to view its contents.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
