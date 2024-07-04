import { NextApiRequest, NextApiResponse } from 'next';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';
import sgMail from '@sendgrid/mail';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

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

  const msg = {
    to: email,
    from: 'daviteremattos@gmail.com',
    subject: 'Acesse seu E-book grátis "LIBIDO SEM PAUSA"',
    text: `<p>Olá ${name}, aqui está seu e-book!</p><p><a href="https://drive.google.com/file/d/1h6PQ0MPr_1SYmnDZqYxzVMdbepJdFzvZ/view?usp=drive_link">Clique aqui para baixar agora.</a></p>`,
    html: `<p>Olá ${name}, aqui está seu e-book!</p><p><a href="https://drive.google.com/file/d/1h6PQ0MPr_1SYmnDZqYxzVMdbepJdFzvZ/view?usp=drive_link">Clique aqui para baixar agora.</a></p>`,
  };

  try {
    await sgMail.send(msg);

    const sheetsAPI = await accessSpreadsheet();

    const response = await sheetsAPI.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'UsersInfo!A:B',
      valueInputOption: 'USER_ENTERED',
      // insertDataOption: 'INSERT_ROWS',
      requestBody: {
        majorDimension: "ROWS",
        values: [[name, email]],
      }
    });

    // var resource = {
    //   "majorDimension": "ROWS",
    //   "values": [[name, email]]
    // }
    // var range = 'UsersInfo!A:B'
    // var optionalArgs = {valueInputOption: "USER_ENTERED"};
    // const response = await sheetsAPI.append(resource, SPREADSHEET_ID, range, optionalArgs);

    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false });
  }
}
