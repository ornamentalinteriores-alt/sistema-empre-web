import { google } from 'googleapis';
import path from 'path';

// Configuración de la autenticación
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

// Inicializa el cliente de autenticación
// En Vercel usamos la variable de entorno, en local el archivo
const auth = new google.auth.GoogleAuth({
    credentials: process.env.GOOGLE_SERVICE_ACCOUNT_JSON ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON) : undefined,
    keyFile: !process.env.GOOGLE_SERVICE_ACCOUNT_JSON ? path.join(process.cwd(), 'credentials.json') : undefined,
    scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

export async function listFiles(folderId: string) {
    try {
        const res = await drive.files.list({
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
        const res = await drive.files.list({
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
        const res = await drive.files.list({
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
