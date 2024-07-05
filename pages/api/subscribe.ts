import { NextApiRequest, NextApiResponse } from 'next';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function accessSpreadsheet() {
  try {
    await serviceAccountAuth.authorize();

    const sheets = google.sheets({ version: 'v4', auth: serviceAccountAuth });
    return sheets.spreadsheets.values;
  } catch (error: any) {
    throw new Error(`Erro ao acessar planilha: ${error.message}`);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }
  const { name, email } = req.body;

  try {
    const sheetsAPI = await accessSpreadsheet();

    const response = await sheetsAPI.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'UsersInfo!A:B',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        majorDimension: "ROWS",
        values: [[name, email]],
      }
    });

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ success: false });
  }
}
