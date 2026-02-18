export default function PlaceholderPage() {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] text-center p-8">
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-full mb-6">
                <span className="material-symbols-outlined text-6xl text-slate-400">construction</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Módulo en Construcción</h1>
            <p className="text-slate-500 max-w-md">
                Estamos implementando esta funcionalidad. Pronto podrás utilizar el redactor inteligente y las herramientas de gestión.
            </p>
        </div>
    );
}
