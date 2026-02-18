import Link from 'next/link';
import { DocumentCard } from '@/app/components/DocumentCard';

// Simulamos datos que vendrían de Drive
const MOCK_FILES: Record<string, Array<{ title: string, description: string, href: string }>> = {
    'arquitectura': [
        { title: 'A.010 - Condiciones Generales', description: 'Diseño universal y requisitos generales.', href: '#' },
        { title: 'A.020 - Vivienda', description: 'Normas para edificaciones residenciales.', href: '#' },
        { title: 'A.030 - Hospedaje', description: 'Requisitos para hoteles y hostales.', href: '#' },
        { title: 'A.040 - Educación', description: 'Normas para colegios y universidades.', href: '#' },
    ],
    'estructuras': [
        { title: 'E.020 - Cargas', description: 'Cargas vivas y muertas.', href: '#' },
        { title: 'E.030 - Diseño Sismorresistente', description: 'Norma sísmica obligatoria.', href: '#' },
        { title: 'E.060 - Concreto Armado', description: 'Diseño en concreto.', href: '#' },
    ],
    'sanitarias': [
        { title: 'IS.010 - Instalaciones Sanitarias', description: 'Agua y desagüe en edificaciones.', href: '#' },
    ],
};

export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = params.category;
    const files = MOCK_FILES[category] || [];
    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <main className="flex min-h-screen flex-col p-8 md:p-24 bg-gray-50 dark:bg-zinc-900">
            <div className="mb-8">
                <Link href="/normativa/rne" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Volver a Categorías</Link>
                <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Normativa: {categoryTitle}</h1>
                <p className="text-gray-600 dark:text-gray-400">Listado de documentos vigentes.</p>
            </div>

            {files.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {files.map((file, index) => (
                        <DocumentCard
                            key={index}
                            title={file.title}
                            description={file.description}
                            href={file.href}
                            type="pdf"
                        />
                    ))}
                </div>
            ) : (
                <div className="p-8 text-center border-2 border-dashed border-gray-300 rounded-lg">
                    <p className="text-gray-500 text-xl">No se encontraron documentos en esta categoría (Simulación).</p>
                </div>
            )}
        </main>
    );
}
