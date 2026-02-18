import Link from 'next/link';
import { getFolderIdByName, listFiles } from '@/app/lib/drive';

export const dynamic = 'force-dynamic';

export default async function RNEPage({ searchParams }: { searchParams: { folderId?: string } }) {
    let rootFolderId: string | null | undefined = searchParams.folderId || null;

    if (!rootFolderId) {
        rootFolderId = await getFolderIdByName('WEB_NORMATIVA');
    }

    let files: any[] = [];
    let error = null;

    if (rootFolderId) {
        try {
            files = await listFiles(rootFolderId);
        } catch (e) {
            error = "Error al leer archivos de la carpeta. Es posible que el ID sea incorrecto o no tengas permisos.";
        }
    } else {
        // Si no encuentra la carpeta, intentamos listar el root para ver si hay algo compartido
        // A veces 'WEB_NORMATIVA' no se encuentra por nombre si es "Shared with me" sin haber sido aceptada
        // Pero asumiremos que si está compartida, debería aparecer.
        error = "No se encontró la carpeta 'WEB_NORMATIVA'. Asegúrate de haberla compartido con el correo de servicio.";
    }

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
            {/* Breadcrumbs & View Toggle */}
            <div className="flex items-center justify-between mb-8 px-1">
                <nav className="flex items-center gap-2 text-sm">
                    <Link href="/normativa/rne" className="text-slate-400 hover:text-primary transition-colors">Repositorio</Link>
                    <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
                    <span className="text-slate-900 dark:text-white font-semibold">
                        {rootFolderId ? "RNE - Reglamento Nacional" : "Cargando..."}
                    </span>
                </nav>
                <div className="flex bg-slate-100 dark:bg-[#233248] p-1 rounded-lg">
                    <button className="p-1.5 rounded-md bg-white dark:bg-[#111822] shadow-sm text-primary">
                        <span className="material-symbols-outlined text-lg block">grid_view</span>
                    </button>
                    <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined text-lg block">format_list_bulleted</span>
                    </button>
                </div>
            </div>

            {error ? (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
                    <p className="font-bold">Estado de Conexión:</p>
                    <p>{error}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {files.map((file) => (
                        <Link
                            key={file.id}
                            href={file.mimeType === 'application/vnd.google-apps.folder' ? `/normativa/rne?folderId=${file.id}` : (file.webViewLink || '#')}
                            target={file.mimeType === 'application/vnd.google-apps.folder' ? '_self' : '_blank'}
                            className="group bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-primary/5 overflow-hidden hover:border-primary dark:hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="aspect-[4/3] bg-slate-100 dark:bg-[#111822] relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 group-hover:scale-110 transition-transform">
                                    {file.mimeType === 'application/vnd.google-apps.folder' ? 'folder' : 'picture_as_pdf'}
                                </span>
                                {file.mimeType !== 'application/vnd.google-apps.folder' && (
                                    <div className="absolute top-2 right-2 px-2 py-1 rounded bg-red-500 text-[10px] font-bold text-white uppercase tracking-tight">PDF</div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                                    {file.name}
                                </h3>
                                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                        Actualizado
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-1.5 rounded bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors">
                                        {file.mimeType === 'application/vnd.google-apps.folder' ? 'Abrir' : 'Ver'}
                                    </button>
                                    <button className="p-1.5 rounded bg-slate-100 dark:bg-primary/5 hover:bg-slate-200 dark:hover:bg-primary/10 text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-lg block">download</span>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {files.length === 0 && (
                        <div className="col-span-full p-8 text-center border-2 border-dashed border-slate-300 rounded-lg">
                            <p className="text-slate-500 text-xl">Carpeta vacía.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
