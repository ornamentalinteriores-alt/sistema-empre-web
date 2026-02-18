import Link from 'next/link';
import Image from 'next/image';

export function Sidebar() {
    return (
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111822] flex flex-col h-full">
            <div className="p-6 flex items-center gap-3">
                <div className="bg-primary rounded-lg p-1.5 text-white">
                    <span className="material-symbols-outlined block">architecture</span>
                </div>
                <div>
                    <h1 className="text-lg font-bold leading-none text-slate-900 dark:text-white">ArchStudio</h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Design &amp; Compliance</p>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined">dashboard</span>
                    Dashboard
                </Link>
                <Link href="/monitor" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined">notifications_active</span>
                    Monitor de Ordenanzas
                </Link>
                <div className="pt-4 pb-1">
                    <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Gestión y Redacción</p>
                </div>
                <Link href="/redactor/solicitudes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined">description</span>
                    Redactor de Solicitudes
                </Link>
                <Link href="/redactor/habilitaciones" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined">domain_add</span>
                    Redactor IA Habilitaciones
                </Link>
                <Link href="/redactor/licencias" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined">verified</span>
                    Redactor IA Licencias
                </Link>
                <Link href="/redactor/saneamiento" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined">construction</span>
                    Redactor IA Saneamiento
                </Link>
                <div className="pt-4 pb-1">
                    <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Recursos</p>
                </div>
                <Link href="/normativa/rne" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined">folder_open</span>
                    Repositorio Normativo
                </Link>
                <Link href="/configuracion" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">
                    <span className="material-symbols-outlined">settings</span>
                    Configuración
                </Link>
            </nav>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-2.5 text-sm font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">add_circle</span>
                    Nuevo Proyecto
                </button>
                <div className="flex items-center gap-3 px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                        {/* Placeholder for user image if not available */}
                        <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-xs font-bold">DR</div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold truncate text-slate-900 dark:text-white">D. Rodriguez</p>
                        <p className="text-[10px] text-slate-500">Arquitecto Líder</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-sm">settings</span>
                </div>
            </div>
        </aside>
    );
}
