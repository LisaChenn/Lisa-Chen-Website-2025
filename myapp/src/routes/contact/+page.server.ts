// const SHEET_ID = 'PASTE_YOUR_SHEET_ID';
// const TAB_NAME = 'Responses';

// // Optional: simple shared secret
// const SHARED_SECRET = 'super-secret-token';

// function doPost(e) {
//   try {
//     // Basic auth (optional)
//     const auth = e.parameter.auth || (e.postData && e.postData.type === 'application/json'
//       ? JSON.parse(e.postData.contents).auth
//       : null);
//     if (SHARED_SECRET && auth !== SHARED_SECRET) {
//       return _json({ ok: false, error: 'unauthorized' }, 401);
//     }

//     // Parse data (supports JSON or form-encoded)
//     let data = {};
//     if (e.postData && e.postData.type === 'application/json') {
//       data = JSON.parse(e.postData.contents);
//     } else {
//       data = e.parameter || {};
//     }

//     const ss = SpreadsheetApp.openById(SHEET_ID);
//     const sh = ss.getSheetByName(TAB_NAME);
//     sh.appendRow([
//       new Date(),
//       data.name || '',
//       data.email || '',
//       data.subject || '',
//       data.message || '',
//       e.headers['user-agent'] || '',
//       _clientIP(e)
//     ]);

//     return _json({ ok: true });
//   } catch (err) {
//     return _json({ ok: false, error: String(err) }, 500);
//   }
// }

// function _json(obj, status = 200) {
//   return ContentService
//     .createTextOutput(JSON.stringify(obj))
//     .setMimeType(ContentService.MimeType.JSON);
// }

// function _clientIP(e) {
//   // Works when deployed as a web app; Apps Script doesn’t expose raw IP reliably,
//   // but some proxies add headers:
//   return (e.headers && (e.headers['x-forwarded-for'] || e.headers['fastly-client-ip'])) || '';
// }
