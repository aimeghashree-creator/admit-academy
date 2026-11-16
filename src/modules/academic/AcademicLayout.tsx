import { useEffect, useState } from 'react';
import { Link, Navigate, Outlet } from '@tanstack/react-router';
import { TrainerProvider, useTrainer } from './context/TrainerContext';
import { Header } from './components/layout/Header';
import { ToastContainer } from './components/common/Toast';
const pages = [['', 'Dashboard'], ['schedule', 'Schedule'], ['syllabus', 'Syllabus'], ['notes', 'Notes'], ['attendance', 'Attendance'], ['history', 'History'], ['notifications', 'Notifications'], ['examinations', 'Examinations'], ['profile', 'Profile']] as const;
function Portal() {
 const { toasts, removeToast } = useTrainer();
 return <><Header /><nav aria-label="Academic pages" className="flex flex-wrap gap-2 border-b border-slate-200 bg-white p-3">{pages.map(([path, label]) => <Link key={path} to={path ? `/academic/${path}` : '/academic/'} activeOptions={{ exact: !path }} activeProps={{ className: 'bg-indigo-100 text-indigo-800 font-bold', 'aria-current': 'page' }} className="rounded-lg px-3 py-2 text-sm">{label}</Link>)}</nav><main className="p-4 sm:p-6 max-w-7xl mx-auto"><Outlet /></main><ToastContainer toasts={toasts} onDismiss={removeToast} /></>;
}
export function AcademicLayout() {
 const [hydrated, setHydrated] = useState(false);
 useEffect(() => setHydrated(true), []);
 return <div className="academic-module">{hydrated ? <TrainerProvider><Portal /></TrainerProvider> : <p role="status" className="p-6">Loading academic portal…</p>}</div>;
}
export function AcademicNotFound() { return <Navigate to="/academic/" replace />; }
