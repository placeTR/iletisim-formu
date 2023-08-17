const admin = Session.getActiveUser().getEmail();
const code = Math.random();

function doGet(e) {
  const email = JSON.stringify(e.parameter.email).replace('"', '').replace('"', '');
  const name = JSON.stringify(e.parameter.name).replace('"', '').replace('"', '');
  const sub = JSON.stringify(e.parameter.subject).replace('"', '').replace('"', '');
  const body = JSON.stringify(e.parameter.body).replace('"', '').replace('"', '');
  doSheets(name, email, sub, body);
  doMail(name, email, sub, body);
  const output = HtmlService.createHtmlOutputFromFile("index.html");
  output
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
  return output;
}

function doMail(name, email, sub, body) {
  let m = MailApp.sendEmail({
    to: email,
    subject: "Geri bildiriminiz için teşekkür ederiz.",
    htmlBody: "Değerli " + name + ", bize '" + sub + "' konusu hakkında geri bildirimde bulunduğunuz için teşekkür ederiz. Gerekirse bu e-posta adresi üzerinden sizinle iletişime geçebiliriz."
  })
  m;
}

function doSheets(name, email, sub, body) {
  let url = "https://docs.google.com/spreadsheets/d/1xnINy6Rc9vAjxHRTkvrMX-l7NfkRKPgszEoaVnN5mKY/edit#gid=0";
  let ss = SpreadsheetApp.openByUrl(url);
  let s = ss.getSheetByName("GeriBildirimler");
  s.appendRow([String(name), String(email), String(sub), String(body)]);
}
