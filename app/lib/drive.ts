import { google } from 'googleapis';
import path from 'path';

// Configuración de la autenticación
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

// Inicialización Lazy (Perezosa)
// Solo autenticamos cuando realmente se necesita, evitando errores en build time
let driveClient: any = null;

function getDriveClient() {
    if (driveClient) return driveClient;

    const auth = new google.auth.GoogleAuth({
        credentials: process.env.GOOGLE_SERVICE_ACCOUNT_JSON ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON) : undefined,
        keyFile: !process.env.GOOGLE_SERVICE_ACCOUNT_JSON ? path.join(process.cwd(), 'credentials.json') : undefined,
        scopes: SCOPES,
    });

    driveClient = google.drive({ version: 'v3', auth });
    return driveClient;
}

export async function listFiles(folderId: string) {
    try {
        const res = await getDriveClient().files.list({
            pageSize: 20,
            fields: 'nextPageToken, files(id, name, mimeType, webViewLink, thumbnailLink)',
            q: `'${folderId}' in parents and trashed = false`,
            orderBy: 'folder, name'
        });
        return res.data.files || [];
    } catch (error) {
        console.error('Error al listar archivos de Drive:', error);
        return [];
    }
}

export async function searchFiles(query: string) {
    try {
        const res = await getDriveClient().files.list({
            pageSize: 20,
            fields: 'nextPageToken, files(id, name, mimeType, webViewLink)',
            q: `name contains '${query}' and trashed = false`,
        });
        return res.data.files || [];
    } catch (error) {
        console.error('Error al buscar archivos:', error);
        return [];
    }
}

export async function getFolderIdByName(folderName: string) {
    try {
        const res = await getDriveClient().files.list({
            q: `mimeType = 'application/vnd.google-apps.folder' and name = '${folderName}' and trashed = false`,
            fields: 'files(id, name)',
            pageSize: 1,
        });

        if (res.data.files && res.data.files.length > 0) {
            return res.data.files[0].id;
        }
        return null;
    } catch (error) {
        console.error(`Error buscando carpeta ${folderName}:`, error);
        return null;
    }
}
