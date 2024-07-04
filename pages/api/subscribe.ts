import { NextApiRequest, NextApiResponse } from 'next';
import { JWT, OAuth2Client } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
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
  const sheetsAPI = await accessSpreadsheet();

  const response = await sheetsAPI.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'UsersInfo!A:B', // Intervalo onde os dados serão inseridos
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[name, email]],
    }
  });

  console.log('Resposta da API do Google Sheets:', response.data);

  // await doc.loadInfo();
//   const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
// console.log(sheet.title);
// console.log(sheet.rowCount);
}
