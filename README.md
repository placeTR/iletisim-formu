# Google Apps Script ile iletişim formu
Çalışma mantığı şu; Parametreler aracılığıyla veriler Google Apps Script koduna aktarılıyor. 
|Parametreler|Anlamları|
|--|--|
|name|İsim|
|email|E-Posta adresi|
|subject|İletişim konusu|
|body|Metin/Vücut yazısı|

## Kurmak
Kurulum için [Google Apps Script](https://script.google.com)'e gidin ve yeni bir proje oluşturun. Projeyi oluşturduğunuzda eğer dil tercihiniz **Türkçe** ise **Kod.gs** dosyası, eğer **İngilizce** ise **Code.gs** varsayılan olarak oluşturulacaktır. Bu varsayılan dosyanın içeriğine **code.gs** dosyasının içeriğini yapıştırın ve bir **index.html** dosyası oluşturup içeriğine depodaki **index.html** dosyasının içeriğini yapıştırın. Ve temelleri attınız! Şimdi bir [Google SpreadSheets](https://docs.google.com/spreadsheets)'e gidip tablo oluşturalım ki yazılan metinler kaydedilsin. Tablodaki sayfanızın adını **GeriBildirim** yapın. Son olarak **code.gs** dosyasında bir değişiklik yapacağız.

````js
(...)
	let url = "TABLO ADRESİ"; //Satır 29
(...)
````

**TABLO ADRESİ** yazan yere Google SpreadSheets tablonuzun url'sini yapıştırın.
