/**
 * Paste this into the NO on Z spreadsheet:
 * Extensions → Apps Script → replace Code.gs → Deploy → New deployment → Web app
 *
 * Execute as: Me
 * Who has access: Anyone  (required so the website can POST; the secret still blocks strangers)
 *
 * Copy the web app URL into .env.local as FORM_ENDPOINT.
 * Set Script property WEBHOOK_SECRET to the same value as SHEETS_WEBHOOK_SECRET.
 * Posts without that secret are rejected — the sheet is not an open inbox.
 */

const SHEET_ID = "1vcbMUWawVc0qiUez2-dlygAjvCXvjkPSPfkzifJNb3I";
const TAB_NAME = "Sheet1";
const SECRET = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET") || "";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (!SECRET || data.secret !== SECRET) {
      return json_({ ok: false, error: "unauthorized" });
    }

    const sheet =
      SpreadsheetApp.openById(SHEET_ID).getSheetByName(TAB_NAME) ||
      SpreadsheetApp.openById(SHEET_ID).getSheets()[0];

    const now = new Date();
    const tz = "America/Los_Angeles";
    const iWantTo = Array.isArray(data.iWantTo)
      ? data.iWantTo.join(", ")
      : String(data.iWantTo || "");

    sheet.appendRow([
      Utilities.formatDate(now, tz, "yyyy-MM-dd"),
      Utilities.formatDate(now, tz, "h:mm a"),
      iWantTo,
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.zip || "",
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: false });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
