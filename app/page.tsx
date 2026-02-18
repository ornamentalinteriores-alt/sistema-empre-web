export default function Home() {
  return (
    <>
      {/* KPI Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-primary/50 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <span className="material-symbols-outlined">list_alt</span>
            </div>
            <span className="text-xs font-medium text-green-500 flex items-center">+5.2% <span className="material-symbols-outlined text-xs">trending_up</span></span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Proyectos Totales</p>
          <h3 className="text-3xl font-bold mt-1">128</h3>
          <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-amber-500/50 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
            <span className="text-xs font-medium text-amber-500 flex items-center">+2 <span className="material-symbols-outlined text-xs">arrow_upward</span></span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Pendientes de Aprob.</p>
          <h3 className="text-3xl font-bold mt-1">14</h3>
          <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 w-1/4 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-green-500/50 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <span className="text-xs font-medium text-green-500 flex items-center">92% <span className="material-symbols-outlined text-xs">check_circle</span></span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Licencias Aprobadas</p>
          <h3 className="text-3xl font-bold mt-1">84</h3>
          <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[92%] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Projects Table */}
        <div className="lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Proyectos Activos</h2>
            <button className="text-xs font-bold text-primary hover:underline">Ver Todos</button>
          </div>
          <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">ID Expediente</th>
                  <th className="px-6 py-4">Nombre Proyecto</th>
                  <th className="px-6 py-4">Ubicación</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">#HYO-2024-042</td>
                  <td className="px-6 py-4">
                    <div className="font-medium">Residencial Los Olivos</div>
                    <div className="text-[10px] text-slate-500">Vivienda Multifamiliar</div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Huancayo</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">En Revisión</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-primary">more_vert</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">#ETM-2024-015</td>
                  <td className="px-6 py-4">
                    <div className="font-medium">Centro Comercial El Tambo</div>
                    <div className="text-[10px] text-slate-500">Comercial / Mall</div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">El Tambo</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase">Aprobado</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-primary">more_vert</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">#CHL-2024-009</td>
                  <td className="px-6 py-4">
                    <div className="font-medium">Edificio Santa Rosa</div>
                    <div className="text-[10px] text-slate-500">Complejo de Oficinas</div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Chilca</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase">Correcciones</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-primary">more_vert</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Municipal Alerts Feed */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Alertas Municipales</h2>
            <button className="text-slate-400"><span className="material-symbols-outlined">filter_list</span></button>
          </div>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800/40 border-l-4 border-primary p-4 rounded-r-xl border-y border-r border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300">Huancayo</span>
                <span className="text-[10px] text-slate-400">Hace 14m</span>
              </div>
              <h4 className="text-sm font-semibold mb-1">Nueva Zonificación (H-12)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Cambios en retiros para zonas R-3. Aplica a nuevos expedientes.</p>
              <div className="mt-3 flex gap-2">
                <button className="text-[10px] font-bold text-primary border border-primary/20 hover:bg-primary/5 px-2 py-1 rounded uppercase">Descargar PDF</button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/40 border-l-4 border-amber-500 p-4 rounded-r-xl border-y border-r border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300">El Tambo</span>
                <span className="text-[10px] text-slate-400">Hace 2h</span>
              </div>
              <h4 className="text-sm font-semibold mb-1">Mantenimiento de Sistema</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Mesa de partes virtual estará fuera de línea hoy de 22:00 a 02:00.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
