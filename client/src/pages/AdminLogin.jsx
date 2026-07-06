import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks.js';
import { loginSuccess, setAuthError, clearAuthError } from '../store/slices/authSlice.js';
import { ShieldAlert, KeyRound, User, ArrowLeft, Lock } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function AdminLogin() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 const dispatch = useAppDispatch();
 const { isAuthenticated, error } = useAppSelector((state) => state.auth);

 // If already authenticated, redirect to admin panel
 useEffect(() => {
 if (isAuthenticated) {
 navigate('/admin');
 }
 dispatch(clearAuthError());
 }, [isAuthenticated, navigate, dispatch]);

 const handleSubmit = async (e) => {
 e.preventDefault();
 if (!username || !password) {
 dispatch(setAuthError('Provide username and password.'));
 return;
 }

 setLoading(true);
 dispatch(clearAuthError());

 try {
 const response = await fetch(`${API_URL}/auth/login`, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ username, password })
 });

 const data = await response.json();

 if (!response.ok) {
 throw new Error(data.error || 'Login failed. Invalid credentials.');
 }

 dispatch(loginSuccess(data.token));
 navigate('/admin');
 } catch (err) {
 dispatch(setAuthError(err.message));
 } finally {
 setLoading(false);
 }
 };

 return (
 <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden font-body">
 {/* Background blurs */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

 {/* Back button */}
 <button
 onClick={() => navigate('/')}
 className="absolute top-8 left-8 inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-semibold"
 >
 <ArrowLeft size={16} /> Home
 </button>

 {/* Main card */}
 <div className="w-full max-w-md glass-panel p-8 rounded-2xl border border-white/5 shadow-2xl relative z-10">
 
 {/* Title */}
 <div className="text-center mb-8">
 <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-4 text-primary">
 <Lock size={20} />
 </div>
 <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">Security Gateway</h2>
 <p className="text-xs text-zinc-500 font-semibold mt-1">Admin access authorization panel</p>
 </div>

 {/* Error prompt */}
 {error && (
 <div className="mb-6 flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm p-3.5 rounded-xl">
 <ShieldAlert size={16} className="shrink-0" />
 <span>{error}</span>
 </div>
 )}

 <form onSubmit={handleSubmit} className="space-y-4">
 {/* Username */}
 <div className="space-y-1.5">
 <label htmlFor="username" className="text-xs font-semibold text-zinc-400">Username</label>
 <div className="relative">
 <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
 <User size={16} />
 </span>
 <input
 type="text"
 id="username"
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 required
 placeholder="Enter admin username"
 className="w-full pl-10 pr-4 py-3 bg-zinc-950/60 border border-white/5 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-650 focus:outline-none focus:border-primary/50 transition-all"
 />
 </div>
 </div>

 {/* Password */}
 <div className="space-y-1.5">
 <label htmlFor="password" className="text-xs font-semibold text-zinc-400">Password</label>
 <div className="relative">
 <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
 <KeyRound size={16} />
 </span>
 <input
 type="password"
 id="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 required
 placeholder="Enter admin password"
 className="w-full pl-10 pr-4 py-3 bg-zinc-950/60 border border-white/5 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-650 focus:outline-none focus:border-primary/50 transition-all"
 />
 </div>
 </div>

 {/* Submit */}
 <button
 type="submit"
 disabled={loading}
 className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-purple-cyan text-white font-semibold rounded-xl text-xs sm:text-sm hover:opacity-95 transition-all disabled:opacity-50 mt-6 shadow-glow-primary"
 >
 {loading ? (
 <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
 ) : (
 <span>Unlock Admin Panel</span>
 )}
 </button>
 </form>

 </div>
 </div>
 );
}
