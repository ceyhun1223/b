const Discord = require("discord.js");
 
exports.run = async (client, message, bot) => {
 
  // Film önerme örneği:
  // "**Filmin adı:** \n Adı \n\n **Filmin Türü:** \n Türü \n\n **Filmin Süresi** \n Süre \n \n **Filmin konusu:** \n Konu \n\n **IMDB:** \n IMDB \n\n **Yayın Tarihi:** \n Tarihi \n\n **Yönetmen:**\n Yönetmeni",
  const filmler = ["**Filmin adı:** \n Logan \n \n **Filmin Türü** \n Aksiyon/Bilim Kurgu \n\n **Filmin Süresi**: \n 2 saat 21 dakika \n \n **Filmin konusu:** \n Wolverine, James Mangold tarafından yönetilen ve Marvel Comics'in kurgusal karakteri Wolverine'den uyarlanan 2017 yapımı Amerikan süper kahraman filmi. X-Men film serisinin onuncu ve Wolverine karakterinin üçüncü ve son filmi olarak tasarlandı. \n\n **IMDB:** \n 8.1/10 \n\n **Yayın Tarihi:** \n 1 Mart 2017 (Fransa) \n\n **Yönetmen:**\n James Mangold",
                   "**Filmin adı:** \n Alien (Yaratık) \n\n **Filmin Türü:** \n Korku/Bilim Kurgu \n\n **Filmin Süresi:**\n 1 saat 57 dakika \n \n **Filmin konusu:** \n Yaratık, yönetmenliğini Ridley Scott'ın yaptığı 1979 yapımı bilimkurgu filmi. Yaratık'ın tasarımını İsviçreli tasarımcı H.R. Giger yapmıştır. Yaratık filmi gişelerde büyük başarı yakalayınca, günümüze dek toplam 4 devam film daha çekildi. 5. film ile ilgili çalışmalar halen sürmekte. \n\n **IMDB:** \n 8.4/10 \n\n **Yayın Tarihi:** \n 1979 \n\n **Yönetmen:**\n Ridley Scott",
                   "**Filmin adı:** \n Resident Evil (Ölümcül Deney) \n \n **Filmin Türü:** \n Korku/Aksiyon \n \n **Filmin Süresi** \n 1 saat 40 dakika \n \n **Filmin konusu:** \n Ölümcül Deney, 2002 yapımı bilimkurgu türünde bir gerilim filmi. Resident Evil film serisinin ilk filmidir. Yönetmenliğini Paul W. S. Anderson'ın yaptığı film, Capcom'un Resident Evil adlı ünlü video oyunu serisinden uyarlanmıştır. Oyundan filme çevrilse de, hikâye bakımından oyunuyla bir bağlantısı yoktur. \n\n **IMDB:** \n 6.7/10 \n\n **Yayın Tarihi:** \n 20 Eylül 2002 \n\n **Yönetmen:**\n Paul W. S. Anderson",
                   "**Filmin adı:** \n Inception (Başlangıç) \n \n **Filmin Türü:** \n Gerilim/Bilim Kurgu \n \n **Filmin Süresi** \n 2 saat 28 dakika \n \n **Filmin konusu:** \n Başlangıç, Christopher Nolan tarafından yazılan ve yönetilen bilimkurgu türündeki ABD filmidir. 8 Temmuz 2010 tarihinde İngiltere galası yapılmıştır. Film yayınlanmasından kısa bir süre sonra son 25 yılın en iyi filmleri arasında gösterilmiştir. \n\n **IMDB:** \n 8.8/10 \n\n **Yayın Tarihi:** \n 30 Temmuz 2010 (Türkiye) \n\n **Yönetmen:**\n Christopher Nolan",
                   "**Filmin adı:** \n Labirent: Ölümcül Kaçış \n \n **Filmin Türü:** \n Bilim Kurgu/Aksiyon \n \n **Filmin Süresi** \n 1 saat 53 dakika \n \n **Filmin konusu:** \n Labirent: Ölümcül Kaçış, Wes Ball tarafından yönetilen ve James Dashner'ın 2009'da yayımlanan aynı adlı romanından uyarlanan bilim kurgu, distopik, aksiyon ve gerilim türlerindeki 2014 yapımı ABD filmi. \n\n **IMDB:** \n 6.8/10 \n\n **Yayın Tarihi:** \n 11 Eylül 2014 (Meksika) \n\n **Yönetmen:**\n Wes Ball",
                   "**Filmin adı:** \n Açlık Oyunları \n \n **Filmin Türü:** \n Bilim Kurgu/Aksiyon \n \n **Filmin Süresi** \n 2 saat 22 dakika \n \n **Filmin konusu:** \n Açlık Oyunları Suzanne Collins'in aynı adlı romanından uyarlanan Gary Ross'un yönettiği bilimkurgu, aksiyon, dram tarzındaki film. Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth ve Woody Harrelson'nın yer aldığı film, 23 Mart 2012'de gösterime girmiştir. \n\n **IMDB:** \n 7,2/10 \n\n **Yayın Tarihi:** \n 23 Mart 2012 \n\n **Yönetmen:**\n Gary Ross",
                   "**Filmin adı:** \n Hızlı ve Öfkeli \n \n **Filmin Türü:** \n Aksiyon/Komedi \n \n **Filmin Süresi** \n Film serisi \n \n **Filmin konusu:** \n Hızlı ve Öfkeli bir Amerikalı yasadışı sokak yarışı ve silahlı soygun merkezli, aksiyon filmleri ve diğer çeşitli medya filmlerinden oluşan bir seridir. Universal Pictures tarafından dağıtılan ve ilk filmi 2001'de çıkan seri dünya çapında büyük hasılat elde etmiş ve izleyicilerin beğenisini toplamıştır. \n\n **IMDB:** \n Film serisi \n\n **Yayın Tarihi:** \n 2001 \n\n **Yönetmen:**\n Rob Cohen",
                   "**Filmin adı:** \n Annabelle \n \n **Filmin Türü:** \n Korku/Gerilim \n \n **Filmin Süresi** \n 1 saat 39 dakika \n \n **Filmin konusu:** \n Annabelle, yönetmenliğini John R. Leonetti, yapımcılığını James Wan'in yaptığı ve senaryosunu Gary Dauberman'in yazdığı 2014 yapımı ABD korku filmidir. Korku Seansı filminin yan ürünü olan film, Ed ve Lorraine Warren tarafından anlatılan Annabelle adlı oyuncak bebeğin hikâyesinden uyarlanmıştır. \n\n **IMDB:** \n 5,4/10 \n\n **Yayın Tarihi:** \n 26 Eylül 2014 (Rusya) \n\n **Yönetmen:**\n John R. Leonetti",
                   "**Filmin adı:** \n Eli \n \n **Filmin Türü:** \n Korku \n \n **Filmin Süresi** \n 1 saat 38 dakika \n \n **Filmin konusu:** \n İngilizceden çevrilmiştir-Eli, 2019 Charchirillo, Ian Goldberg ve Richard Naing'in senaryosundan Ciarán Foy tarafından yönetilen bir 2019 Amerikan korku filmi. Kelly Reilly, Sadie Sink, Lili Taylor, Max Martini ve Charlie Shotwell'i canlandırıyor. \n\n **IMDB:** \n 5,8/10 \n\n **Yayın Tarihi:** \n 18 Ekim 2019 \n\n **Yönetmen:**\n Ciarán Foy",
                   "**Filmin adı:** \n Yerçekimi \n \n **Filmin Türü:** \n Bilim Kurgu/Gerilim \n \n **Filmin Süresi** \n 1 saat 31 dakika \n \n **Filmin konusu:** \n Yerçekimi, yönetmenliğini Alfonso Cuarón'un yaptığı, bilimkurgu gerilim ve dram türündeki, 2013 ABD-Birleşik Krallık ortak yapımı üç boyutlu film. Senaryosunu Alfonso Cuarón ve oğlu Jonás Cuarón'un yazdığı filmin başrollerini Sandra Bullock ve George Clooney paylaşmaktadır. \n\n **IMDB:** \n 7,4/10 \n\n **Yayın Tarihi:** \n 11 Ekim 2013 (Türkiye) \n\n **Yönetmen:**\n Alfonso Cuarón",
                   "**Filmin adı:** \n Yıldızlararası \n \n **Filmin Türü:** \n Bilim Kurgu/Macera \n \n **Filmin Süresi** \n 2 saat 49 dakika \n \n **Filmin konusu:** \n Yıldızlararası, Christopher Nolan tarafından yönetilen epik bilimkurgu türündeki 2014 yapımı ABD filmi. Başrollerinde Matthew McConaughey, Anne Hathaway, Jessica Chastain ve Michael Caine yer almaktadır. \n\n **IMDB:** \n 8,6/10 \n\n **Yayın Tarihi:** \n 7 Kasım 2014 (Türkiye) \n\n **Yönetmen:**\n Christopher Nolan",
                   "**Filmin adı:** \n Yaratık: Covenant \n \n **Filmin Türü:** \n Bilim Kurgu/Korku \n \n **Filmin Süresi** \n 2 saat 3 dakika \n \n **Filmin konusu:** \n İngilizceden çevrilmiştir-Alien: Covenant, Michael Green ve Jack Paglen'in hikayesinden Ridley Scott tarafından yönetilen ve John Logan ve Dante Harper tarafından yazılan 2017 bilim kurgu korku filmi. \n\n **IMDB:** \n 6,4/10 \n\n **Yayın Tarihi:** \n 4 Mayıs 2017 (Londra) \n\n **Yönetmen:**\n Ridley Scott",
                   "**Filmin adı:** \n Star Wars: Skywalker'ın Yükselişi \n \n **Filmin Türü:** \n Bilim Kurgu/Macera \n \n **Filmin Süresi** \n 2 saat 22 dakika \n \n **Filmin konusu:** \n Star Wars: The Rise of Skywalker, J. J. Abrams tarafından yönetilen 2019 yapımı ABD uzay operası filmi. Yıldız Savaşları devam üçlemesinin üçüncü ve genelde serinin son filmidir. \n\n **IMDB:** \n 6,8/10 \n\n **Yayın Tarihi:** \n 20 Aralık 2019 (Türkiye) \n\n **Yönetmen:**\n J. J. Abrams",
                   "**Filmin adı:** \n Arrival (Geliş) \n \n **Filmin Türü:** \n Bilim Kurgu/Gerilim \n \n **Filmin Süresi** \n 1 saat 58 dakika \n \n **Filmin konusu:** \n Geliş, Denis Villeneuve tarafından yönetilen ve senaryosu yazar Ted Chiang'in Story of Your Life adlı kısa hikâyesinden Eric Heisserer tarafından uyarlanan 2016 yapımı Amerikan bilimkurgu-dram filmi. Filmin kadrosunda Amy Adams, Jeremy Renner ve Forest Whitaker yer almaktadır \n\n **IMDB:** \n 7,6/10 \n\n **Yayın Tarihi:** \n 2 Eylül 2016 (ABD) \n\n **Yönetmen:**\n Denis Villeneuve",
                   "**Filmin adı:** \n Yarının Sınırında \n \n **Filmin Türü:** \n Bilim Kurgu/Aksiyon \n \n **Filmin Süresi** \n 1 saat 53 dakika \n \n **Filmin konusu:** \n Yarının Sınırında, Doug Liman tarafından yönetilen ve senaryosu Hiroshi Sakurazaka'nın 2004'te yayınlanan All You Need Is Kill adlı Japon light novelinden uyarlanan 2014 Amerika yapımı bilimkurgu, aksiyon filmi. Filmin başrollerini Tom Cruise ve Emily Blunt paylaşmaktadır. \n\n **IMDB:** \n 7,9/10 \n\n **Yayın Tarihi:** \n 28 Mayıs 2014 (Endonezya) \n\n **Yönetmen:**\n Doug Liman",
                   "**Filmin adı:** \n Çizgili Pijamalı Çocuk \n \n **Filmin Türü:** \n Savaş Filmi/Dram \n \n **Filmin Süresi** \n 1 saat 34 dakika \n \n **Filmin konusu:** \n Çizgili Pijamalı Çocuk, II. Dünya Savaşı sırasında bir Alman askerinin 8 yaşındaki çocuğu ile toplama kampı Auschwitz'deki bir Yahudi çocuğun arkadaşlığını ele alan filmdir. \n\n **IMDB:** \n 7,8/10 \n\n **Yayın Tarihi:** \n 12 Eylül 2008 (Birleşik Krallık) \n\n **Yönetmen:**\n Mark Herman",
                   "**Filmin adı:** \n Contact (Mesaj) \n \n **Filmin Türü:** \n Bilim Kurgu/Bilim Kurgu \n \n **Filmin Süresi** \n 2 saat 30 dakika \n \n **Filmin konusu:** \n Mesaj, Carl Sagan'ın aynı adlı romanından beyaz perdeye uyarlanan 1997 yapımı bir bilimkurgu filmidir. Yönetmenliğini Robert Zemeckis yapmış ve başrollerini Dr. Eleanor Ann 'Ellie' Arroway rolüyle Jodie Foster, Palmer Joss rolüyle Matthew McConaughey, Ulusal Güvenlik Müşaviri Michael Kitz rolüyle James Woods ve Dr. \n\n **IMDB:** \n IMDB yaz \n\n **Yayın Tarihi:** \n 31 Ekim 1997 (Türkiye) \n\n **Yönetmen:**\n Robert Zemeckis",
                   "**Filmin adı:** \n Piyanist \n \n **Filmin Türü:** \n Savaş Filmi/Dram \n \n **Filmin Süresi** \n 2 saat 30 dakika \n \n **Filmin konusu:** \n Piyanist; 2002 yılında çekilmiş, yönetmenliğini Roman Polanski'nin yaptığı, senaryosunu Ronald Harwood'ın, Wladyslaw Szpilman'ın hayatını anlattığı kitabın üzerine kurduğu Almanya-Birleşik Krallık-Fransa-Polonya ortak yapımı dramatik filmdir. Filmin müziklerinin çoğu Chopin'in nocturne'lerinden oluşur. \n\n **IMDB:** \n 8,5/10 \n\n **Yayın Tarihi:** \n 28 Şubat 2003 (Türkiye) \n\n **Yönetmen:**\n Roman Polanski",
                   "**Filmin adı:** \n Agora \n \n **Filmin Türü:** \n Dram/Romantik \n \n **Filmin Süresi** \n 2 saat 21 dakika \n \n **Filmin konusu:** \n Agora, Alejandro Amenábar'ın yönettiği ve Amenábar ve Mateo Gil tarafından yazılan, 2009 yılında yayınlanan İspanyol-İngiliz yapımı tarihi drama filmi. \n\n **IMDB:** \n 7,2/10 \n\n **Yayın Tarihi:** \n  9 Ekim 2009 (İspanya) \n\n **Yönetmen:**\n Alejandro Amenábar",
                   "**Filmin adı:** \n 3 Aptal (3 Idiots) \n \n **Filmin Türü:** \n  Komedi/Dram \n \n **Filmin Süresi** \n 2 saat 50 dakika \n \n **Filmin konusu:** \n 3 Idiots, 2009 yapımı bir Bollywood filmidir. Film Hindistan'ın en iyi mühendislik okulundaki üç arkadaşın dostluklarını ve hayatını anlatırken eğitim sistemini eleştirmektedir. Hindistan'da tüm zamanların en yüksek gişe rekoru ve hasılatını yapan filmidir. \n\n **IMDB:** \n 8,4/10 \n\n **Yayın Tarihi:** \n 23 Aralık 2009 (ABD) \n\n **Yönetmen:**\n Rajkumar Hirani",
                   "**Filmin adı:** \n PK \n \n **Filmin Türü:** \n Komedi/Fantastik \n \n **Filmin Süresi** \n 2 saat 33 dakika \n \n **Filmin konusu:** \n PK, 2014 yapımı bilim kurgu ve komedi filmidir. Yönetmenliği Rajkumar Hirani, yapımı Hirani ve Vidhu Vinod Chopra, yazarlığı ise Hirani ve Abhijat Joshi tarafından yapılan bir Hint filmidir. \n\n **IMDB:** \n 8,1/10 \n\n **Yayın Tarihi:** \n 18 Aralık 2014 (Kuveyt) \n\n **Yönetmen:**\n Rajkumar Hirani",
                   "**Filmin adı:** \n Prestij \n \n **Filmin Türü:** \n Gerilim/Gizem \n \n **Filmin Süresi** \n 2 saat 10 dakika \n \n **Filmin konusu:** \n Prestij, yönetmenliğini Christopher Nolan'nın yaptığı 2006 yılı ABD, Birleşik Krallık ortak yapımı film. Yazar Christopher Priest'in aynı adlı romanından sinemaya uyarlanan filmin özgün adı The Prestige'dir. \n\n **IMDB:** \n 8,5/10 \n\n **Yayın Tarihi:** \n 22 Aralık 2006 (Türkiye) \n\n **Yönetmen:**\n Christopher Nolan",
                   "**Filmin adı:** \n Pi'nin Yaşamı \n \n **Filmin Türü:** \n Macera Filmi/Dram \n \n **Filmin Süresi** \n 2 saat 7 dakika \n \n **Filmin konusu:** \n Pi'nin Yaşamı, 2012 ABD macera-drama filmidir. 2001 yılında Yann Martel'in yazdığı aynı isimli romandan uyarlamadır. Yönetmenliğini Ang Lee, uyarlama senaryosunu David Magee, baş rollerini ise Suraj Sharma, Irrfan Khan, Gérard Depardieu, Tabu ve Adil Hussain bulunmaktadır. \n\n **IMDB:** \n 7,9/10 \n\n **Yayın Tarihi:** \n 28 Aralık 2012 (Türkiye) \n\n **Yönetmen:**\n Ang Lee",
                   "**Filmin adı:** \n Akıl Oyunları \n \n **Filmin Türü:** \n Dram/Dönem İşi \n \n **Filmin Süresi** \n 2 saat 20 dakika \n \n **Filmin konusu:** \n Akıl Oyunları, Nobel ödüllü Amerikalı matematikçi John Nash'in hayat hikâyesini anlatan, yönetmenliğini Ron Howard'ın yaptığı 2001 yapımı biyografik dram filmi. \n\n **IMDB:** \n 8,2/10 \n\n **Yayın Tarihi:** \n 8 Mart 2002 (Türkiye) \n\n **Yönetmen:**\n Ron Howard",
                   "**Filmin adı:** \n The Revenant (Diriliş) \n \n **Filmin Türü:** \n Western/Macera Filmi \n \n **Filmin Süresi** \n  2 saat 36 dakika \n \n **Filmin konusu:** \n Diriliş, Alejandro G. Iñárritu'nun yönettiği, 2016 yılında gösterime giren biyografik western gerilim filmi. Senaryo Michael Punke'nin 2002'de yayınlanan aynı adlı romanından uyarlanarak Iñárritu ve Mark L. Smith tarafından yazıldı. Filmde sınır sakini Hugh Glass'ın hayatından esinlenildi. \n\n **IMDB:** \n 8,0/10 \n\n **Yayın Tarihi:** \n 6 Ocak 2016 (ABD) \n\n **Yönetmen:**\n Alejandro González Iñárritu",
                   "**Filmin adı:** \n Devrim Arabaları \n \n **Filmin Türü:** \n Drama \n \n **Filmin Süresi** \n 1 saat 55 dakika \n \n **Filmin konusu:** \n Devrim Arabaları, Tolga Örnek'in yazıp yönettiği dram türündeki Türk filmi. 1961 yılında yapılan Devrim adlı otomobilin üretimini ve bu esnada projede çalışanların yaşadıklarını konu almaktadır. \n\n **IMDB:** \n 8,0/10 \n\n **Yayın Tarihi:** \n 24 Ekim 2008 \n\n **Yönetmen:**\n Tolga Örnek, Mehmet Ada Öztekin",
                   "**Filmin adı:** \n Titanik \n \n **Filmin Türü:** \n Romantik/Dram \n \n **Filmin Süresi** \n 3 saat 15 dakika \n \n **Filmin konusu:** \n Titanik, James Cameron'ın yönetmenlik, senaristlik, ortak yapımcılık ve ortak kurgu yönetmenliğini yaptığı, 1997 yılı Amerikan yapımı, epik-romantik filmdir. \n\n **IMDB:** \n 7,8/10 \n\n **Yayın Tarihi:** \n 8,0/10 \n\n **Yönetmen:**\n James Cameron",
                   "**Filmin adı:** \n Yüzüklerin Efendisi: Yüzük Kardeşliği \n \n **Filmin Türü:** \n Fantastik/Macera Filmi \n \n **Filmin Süresi** \n 3 saat 28 dakika \n \n **Filmin konusu:** \n Yüzüklerin Efendisi: Yüzük Kardeşliği, Peter Jackson'ın yönettiği Yüzüklerin Efendisi üçlemesinin birinci filmidir ve 2001 yılında gösterime girmiştir. J. R. R. \n\n **IMDB:** \n 8,8/10 \n\n **Yayın Tarihi:** \n 21 Aralık 2001 (Türkiye) \n\n **Yönetmen:**\n Peter Jackson",
                   "**Filmin adı:** \n Yüzüklerin Efendisi: İki Kule \n \n **Filmin Türü:** \n Fantastik/Macera Filmi \n \n **Filmin Süresi** \n 3 saat 43 dakika \n \n **Filmin konusu:** \n Yüzüklerin Efendisi: İki Kule, J. R. R. Tolkien'nin İki Kule adlı kitabından uyarlanmış ve Peter Jackson tarafından yönetilmiş 2002 yılında gösterime giren fantezi filmidir. \n\n **IMDB:** \n 8,7/10 \n\n **Yayın Tarihi:** \n 20 Aralık 2002 (Türkiye) \n\n **Yönetmen:**\n Peter Jackson",
                   "**Filmin adı:** \n Yüzüklerin Efendisi: Kralın Dönüşü \n \n **Filmin Türü:** \n  Fantastik/Macera Filmi \n \n **Filmin Süresi** \n  4 saat 11 dakika \n \n **Filmin konusu:** \n Yüzüklerin Efendisi: Kralın Dönüşü, Peter Jackson'ın yönetmenliğini yaptığı, J. R. R. Tolkien'in Yüzüklerin Efendisi kitaplarının ikinci ve üçüncü bölümlerinden uyarlanan 2003 yılında gösterime giren fantezi filmidir. Yüzüklerin Efendisi film serisinin Yüzük Kardeşliği ve İki Kule'den sonra üçüncü filmidir. \n\n **IMDB:** \n 8,9/10 \n\n **Yayın Tarihi:** \n 19 Aralık 2003 (Türkiye) \n\n **Yönetmen:**\n Peter Jackson",
                   "**Filmin adı:** \n Esaretin Bedeli \n \n **Filmin Türü:** \n Dram/Polisiye \n \n **Filmin Süresi** \n 2 saat 22 dakika \n \n **Filmin konusu:** \n Esaretin Bedeli, Frank Darabont'un senaryosunu yazdığı ve yönettiği, başrollerinde Tim Robbins ve Morgan Freeman'ın yer aldığı 1994 yapımı Amerikan dram filmidir. \n\n **IMDB:** \n 9,3/10 \n\n **Yayın Tarihi:** \n 10 Mart 1995 (Türkiye) \n\n **Yönetmen:**\n Frank Darabont",
                   "**Filmin adı:** \n Kitap Hırsızı \n \n **Filmin Türü:** \n  Savaş Filmi/Dram \n \n **Filmin Süresi** \n Süre \n \n **Filmin konusu:** \n Kitap Hırsızı 2013 Almanya-ABD ortak yapımı, Markus Zusak'ın aynı adlı romanından sinemaya aktarılan ve müzikleri ile Oskar'a aday olmuş savaş dram filmidir. \n\n **IMDB:** \n 7,6/10 \n\n **Yayın Tarihi:** \n 7 Şubat 2014 (Türkiye) \n\n **Yönetmen:**\n Brian Percival",
                   "**Filmin adı:** \n Milyoner \n \n **Filmin Türü:** \n Romantik/Suç \n \n **Filmin Süresi** \n 2 saat 3 dakika \n \n **Filmin konusu:** \n Milyoner, Danny Boyle'un yönetip Simon Beaufoy'un yazdığı 2008 Büyük Britanya yapımı Akademi ödüllü filmdir. Hint yazar ve diplomat Vikas Swarup'un Boeke Ödülü sahibi ve Commonwealth Yazarları Ödülü adayı Q and A adlı kitabından uyarlanan filmin başrollerinde Dev Patel, Anil Kapoor ve Saurabh Shukla yer alır. \n\n **IMDB:** \n 8,0/10 \n\n **Yayın Tarihi:** \n 27 Şubat 2009 (Türkiye) \n\n **Yönetmen:**\n Danny Boyle",
                   "**Filmin adı:** \n Karayip Korsanları: Siyah İnci'nin Laneti \n \n **Filmin Türü:** \n Macera Filmi/Fantastik \n \n **Filmin Süresi** \n 2 saat 23 dakika \n \n **Filmin konusu:** \n Karayip Korsanları: Siyah İnci'nin Laneti, Johnny Depp, Orlando Bloom ve de Keira Knightley'in başrollerini paylaştığı Walt Disney yapımı macera filmi. Ocak 2004 itibarı ile film ABD'de 305.413.918 $, uluslararası olarak 348.850.097 $ hasılat ile toplam kazancı 654.264.015 $'a ulaşmıştır. \n\n **IMDB:** \n 8,0/10 \n\n **Yayın Tarihi:** \n 29 Ekim 2003 (Türkiye) \n\n **Yönetmen:**\n Gore Verbinski",
                   "**Filmin adı:** \n Karayip Korsanları: Ölü Adamın Sandığı \n \n **Filmin Türü:** \n Macera Filmi/Fantastik \n \n **Filmin Süresi** \n 2 saat 31 dakika \n \n **Filmin konusu:** \n Karayip Korsanları: Ölü Adamın Sandığı, 2006 yapımı film. 2003 yapımı Karayip Korsanları: Siyah İnci'nin Laneti filminin devamıdır. Aralık 2006 itibarı ile Karayip Korsanları: Ölü Adamın Sandığı ABD'de 423.315.812 $, uluslararası olarak 642.884.839 $ hasılat ile toplam kazancı 1.066.200.651 $'a ulaşmıştır. \n\n **IMDB:** \n 7,3/10 \n\n **Yayın Tarihi:** \n 14 Temmuz 2006 (Türkiye) \n\n **Yönetmen:**\n Gore Verbinski",
                   "**Filmin adı:** \n Karayip Korsanları: Dünyanın Sonu \n \n **Filmin Türü:** \n Macera Filmi/Fantastik \n \n **Filmin Süresi** \n 2 saat 49 dakika \n \n **Filmin konusu:** \n Karayip Korsanları: Dünyanın Sonu Karayip Korsanları serisinin üçüncü bölümüdür. Filmin çıkışından 18 gün sonrası itibarı ile ABD'de 255,610,936 $, uluslararası olarak 493,000,000 $ hasılat ile toplam kazancı 748,610,936 $'a ulaşmıştır.  \n\n **IMDB:** \n IMDB \n\n **Yayın Tarihi:** \n 25 Mayıs 2007 (Türkiye) \n\n **Yönetmen:**\n Gore Verbinski",
                   "**Filmin adı:** \n Cesur Yürek \n \n **Filmin Türü:** \n Savaş Filmi/Dram \n \n **Filmin Süresi** \n 3 saat 2 dakika \n \n **Filmin konusu:** \n Cesur Yürek; Mel Gibson'in yönettiği ve başrolünü oynadığı tarihî, yarı kurgusal film. William Wallace'ın hayatını anlatır. \n\n **IMDB:** \n 8,3/10 \n\n **Yayın Tarihi:** \n 22 Eylül 1995 (Türkiye) \n\n **Yönetmen:**\n Mel Gibson",
                   "**Filmin adı:** \n Batman: Kara Şovalye \n \n **Filmin Türü:** \n Aksiyon/Macera Filmi \n \n **Filmin Süresi** \n Süre \n \n **Filmin konusu:** \n Kara Şövalye, Christopher Nolan'ın yönettiği bir süper kahraman filmidir. DC Comics'in kurgusal karakteri Batman'den uyarlanan 2005 tarihli Batman Başlıyor filminin devamıdır. Kara Şövalye'nin senaryosunu Christopher ve kardeşi Jonathan Nolan yazmıştır. Hikâyeyi ise David S. Goyer oluşturmuştur. \n\n **IMDB:** \n 9/10 \n\n **Yayın Tarihi:** \n 25 Temmuz 2008 (Türkiye) \n\n **Yönetmen:**\n Christopher Nolan",
                   "**Filmin adı:** \n The Thirteenth Floor (13. Kat) \n \n **Filmin Türü:** \n Bilim Kurgu/Gerilim \n \n **Filmin Süresi** \n 1 saat 40 dakika \n \n **Filmin konusu:** \n The Thirteenth Floor, Almanya ve ABD sinemalarında gösterime girmiş, Josef Rusnak'ın yönettiği ve 1999 yapımı olan bir filmdir. Yapımcıları arasında Roland Emmerich'in de bulunduğu film, Daniel F. \n\n **IMDB:** \n 7,1/10 \n\n **Yayın Tarihi:** \n 16 Nisan 1999 (Danimarka) \n\n **Yönetmen:**\n Josef Rusnak",
                   "**Filmin adı:** \n Maymunlar Cehennemi: Savaş \n \n **Filmin Türü:** \n Bilim Kurgu/Bilim Kurgu \n \n **Filmin Süresi** \n 2 saat 20 dakika \n \n **Filmin konusu:** \n Matt Reeves'in yönettiği ve Mark Bomback ve Reeves tarafından yazılmış olan bir Amerikan bilimkurgu filmidir. 2014 yapımı olan Maymunlar Cehennemi Şafak Vakti filminin devamı ve serisinin üçüncü filmidir. ve Film'de yer alan oyuncular; Andy Serkis, Woody Harrelson, Steve Zahn, Amiah Miller, Karin Konoval ve Terry Notary'i yer alıyor. Çekimler 14 Ekim 2015'te Vancouver'da başladı. \n\n **IMDB:** \n 7,4/10 \n\n **Yayın Tarihi:** \n 10 Temmuz 2017 (New York) \n\n **Yönetmen:**\n Matt Reeves",
                   "**Filmin adı:** \n Avengers (Yenilmezler) - 1 \n \n **Filmin Türü:** \n Aksiyon/Bilim Kurgu \n \n **Filmin Süresi** \n 2 saat 23 dakika \n \n **Filmin konusu:** \n Yenilmezler, bazı ülkelerde Avengers Assemble olarak da bilinmektedir. Marvel Studios tarafından üretilen ve Marvel Comics'in süper kahraman ekibidir. Dağıtımını Wss Whedon yazıp yönetmiştir. Ayrıca altıncı Marvel Sinematik Evreni filmi olup 1. Evre'nin kapanış filmidir. \n\n **IMDB:** \n 8/10 \n\n **Yayın Tarihi:** \n 4 Mayıs 2012 (Türkiye) \n\n **Yönetmen:**\n Joss Whedon",
                   "**Filmin adı:** \n Avengers (Yenilmezler) - 2 \n \n **Filmin Türü:** \n Aksiyon/Bilim Kurgu \n \n **Filmin Süresi** \n 2 saat 22 dakika \n \n **Filmin konusu:** \n Yenilmezler: Ultron Çağı, Marvel Comics'in aynı adlı çizgi roman serisinden uyarlanan ve Mayıs 2015'te vizyona giren on birinci Marvel Sinematik Evreni süper kahraman filmi. \n\n **IMDB:** \n 7,3/10 \n\n **Yayın Tarihi:** \n 1 Mayıs 2015 (Türkiye) \n\n **Yönetmen:**\n Joss Whedon",
                   "**Filmin adı:** \n Avengers (Yenilmezler): Sonsuzluk Savaşı \n \n **Filmin Türü:** \n Aksiyon/Macera Filmi \n \n **Filmin Süresi** \n 2 saat 40 dakika \n \n **Filmin konusu:** \n Yenilmezler: Sonsuzluk Savaşı Marvel Comics' in aynı adlı çizgi roman serisinden uyarlanmış, on dokuzuncu Marvel Sinematik Evreni süper kahraman filmidir. Marvel'ın en karizmatik süper kahramanları yeni maceralarında bir kez daha bir araya geliyor. Güçlü ekip bu kez korkunç titan Thanos'a karşı savaşacaklar. \n\n **IMDB:** \n 8,5/10 \n\n **Yayın Tarihi:** \n 27 Nisan 2018 (Türkiye) \n\n **Yönetmen:**\n Joe Russo, Anthony Russo",
                   "**Filmin adı:** \n Avengers: Endgame \n \n **Filmin Türü:** \n Aksiyon/Bilim Kurgu \n \n **Filmin Süresi** \n 3 saat 2 dakika \n \n **Filmin konusu:** \n Avengers: Endgame, Marvel Comics'in İntikamcılar adlı süper kahraman grubundan uyarlanan ve Marvel Studios tarafından yapımı üstlenilen ABD süper kahraman filmi. 2018 yapımı Avengers: Sonsuzluk Savaşı filminin devamı niteliğinde olup yirmi ikinci Marvel Sinematik Evreni filmidir. \n\n **IMDB:** \n 8,4/10 \n\n **Yayın Tarihi:** \n 22 Nisan 2019 (Los Angeles) \n\n **Yönetmen:**\n Joe Russo, Anthony Russo",
                   "**Filmin adı:** \n Blade Runner \n \n **Filmin Türü:** \n Bilim Kurgu/Gerilim \n \n **Filmin Süresi** \n Bilim Kurgu/Gerilim \n \n **Filmin konusu:** \n Bıçak Sırtı, Ridley Scott tarafından yönetilen 1982 tarihli ABD yapımı bilimkurgu filmidir. Başrollerde Harrison Ford, Rutger Hauer, ve Sean Young yer almıştır. Philip K. Dick'in Android'ler Elektrikli Koyun Düşler mi? adlı romanını temel alan senaryoyu Hampton Fancher ve David Peoples yazmıştır. \n\n **IMDB:** \n 8,1/10 \n\n **Yayın Tarihi:** \n 1982 (Kanada) \n\n **Yönetmen:**\n Ridley Scott",
                   "**Filmin adı:** \n Geleceğe Dönüş \n \n **Filmin Türü:** \n Bilim Kurgu/Komedi  \n \n **Filmin Süresi** \n  1 saat 56 dakika \n \n **Filmin konusu:** \n Geleceğe Dönüş, Robert Zemeckis'in yönetmenlik, Bob Gale'ın yardımcı senaristlik, Steven Spielberg'in yürütücü yapımcılık yaptığı, 1985 yapımı bilimkurgu, macera ve komedi türündeki filmdir. Başrollerinde Michael J. \n\n **IMDB:** \n 8,5/10 \n\n **Yayın Tarihi:** \n Şubat 1987 (Türkiye) \n\n **Yönetmen:**\n Robert Zemeckis",
                   "**Filmin adı:** \n Matrix \n \n **Filmin Türü:** \n Bilim Kurgu/Aksiyon \n \n **Filmin Süresi** \n 2 saat 30 dakika \n \n **Filmin konusu:** \n Matrix, Larry ve Andy Wachowski kardeşlerin yazıp-yönettiği bir bilimkurgu film. 1999 yılında gösterime girdi. Filmde Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss ve Hugo Weaving gibi yıldızlar yer almaktadır. \n\n **IMDB:** \n 8,7/10 \n\n **Yayın Tarihi:** \n 3 Eylül 1999 (Türkiye) \n\n **Yönetmen:**\n Lana Wachowski, Lilly Wachowski",
                   "**Filmin adı:** \n G.O.R.A. \n \n **Filmin Türü:** \n Komedi/Bilim Kurgu \n \n **Filmin Süresi** \n 2 saat 7 dakika \n \n **Filmin konusu:** \n G.O.R.A., senaryosunu Cem Yılmaz'ın yazdığı, yönetmenliğini Ömer Faruk Sorak'ın yaptığı, bilimkurgu ve komedi türlerindeki 2004 çıkışlı Türk filmidir. Çekimleri 2002 yılında başlayan film, Türkiye'de 12 Kasım 2004 tarihinde gösterime girdi. Türk sinemasında en pahalı yapımlardan biri olan filmi 4 milyon kişi izledi. \n\n **IMDB:** \n 8/10 \n\n **Yayın Tarihi:** \n 12 Kasım 2004 (Türkiye) \n\n **Yönetmen:**\n Ömer Faruk Sorak",
                   "**Filmin adı:** \n A.R.O.G \n \n **Filmin Türü:** \n Komedi/Fantezi \n \n **Filmin Süresi** \n 2 saat 8 dakika \n \n **Filmin konusu:** \n A.R.O.G Cem Yılmaz'ın yazıp Ali Taner Baltacı ile birlikte yönettiği 2008 yapımı bilimkurgu ve fantastik komedi filmidir. Film, G.O.R.A. filminin ana karakteri Arif'in Yontma Taş Devri'nde geçen yeni macerasını konu almaktadır. 5 Aralık 2008 tarihinde Türkiye'deki sinemalarda gösterime girmiştir.  \n\n **IMDB:** \n 7,3/10 \n\n **Yayın Tarihi:** \n 5 Aralık 2008 (Türkiye) \n\n **Yönetmen:**\n Cem Yılmaz, Ali Taner Baltacı",
                   "**Filmin adı:** \n Bird Box \n \n **Filmin Türü:** \n  Korku/Bilim Kurgu \n \n **Filmin Süresi** \n 2 saat 4 dakika \n \n **Filmin konusu:** \n Bird Box, 2018 ABD yapımı kıyamet sonrası korku-gerilim filmidir. Yönetmenliğini Susanne Bier'ın üstlendiği yapımın olay örgüsü Josh Malerman'in 2014 tarihli romanına dayanmaktadır. Malorie adlı bir kadın ile iki çocuğun doğaüstü yaratıklara karşı verdiği yaşam savaşımını konu almaktadır. \n\n **IMDB:** \n 6,6/10 \n\n **Yayın Tarihi:** \n 14 Aralık 2018 (ABD) \n\n **Yönetmen:**\n Susanne Bier",
                   "**Filmin adı:** \n Testere \n \n **Filmin Türü:** \n Korku/Gerilim \n \n **Filmin Süresi** \n 1 saat 43 dakika \n \n **Filmin konusu:** \n Testere, 2004 yılı yapımı bir psikolojik gerilim filmidir. James Wan tarafından yönetilmiş, James Wan ve Leigh Whannell tarafından yazılmıştır. İlk olarak, Sundance Film Festivali'nde, Ocak 2004'te gösterildi, 29 Ekim 2004'te vizyona girdi. \n\n **IMDB:** \n 7,6/10 \n\n **Yayın Tarihi:** \n 29 Ekim 2004 (Türkiye) \n\n **Yönetmen:**\n James Wan",
                   "**Filmin adı:** \n Deney \n \n **Filmin Türü:** \n Bilim Kurgu/Korku \n \n **Filmin Süresi** \n 1 saat 47 dakika \n \n **Filmin konusu:** \n Splice, Vincenzo Natali tarafından yönetilen 2009 yapımı bilimkurgu-korku filmi. Filmin senaryo yazarlığını Vincenzo Natali, Doug Taylor ve Antoinette Terry Bryant üstlenmiştir. Filmde genç bilim insanları olarak başrolleri Adrien Brody ile Sarah Polley paylaşmıştır. \n\n **IMDB:** \n 5,7/10 \n\n **Yayın Tarihi:** \n 23 Temmuz 2010 (Türkiye) \n\n **Yönetmen:**\n Vincenzo Natali",
                   "**Filmin adı:** \n Sarmaşık \n \n **Filmin Türü:** \n Dram/Fantastik \n \n **Filmin Süresi** \n 1 saat 44 dakika \n \n **Filmin konusu:** \n Sarmaşık, Tolga Karaçelik'ın yönetmenliğini ve senaristliğini üstlendiği 2015 yapımı Türk filmidir. \n\n **IMDB:** \n 8,0/10 \n\n **Yayın Tarihi:** \n 26 Ocak 2015 \n\n **Yönetmen:**\n Tolga Karaçelik",
                   "**Filmin adı:** \n Küçük Prens \n \n **Filmin Türü:** \n Animasyon/Aile \n \n **Filmin Süresi** \n 1 saat 50 dakika \n \n **Filmin konusu:** \n İngilizceden çevrilmiştir-Küçük Prens, Mark Osborne tarafından yönetilen ve Antoine de Saint-Exupéry tarafından aynı adlı 1943 romanına dayanan 2015 İngilizce-Fransızca-İtalyanca 3D animasyon fantastik macera aile drama filmi. \n\n **IMDB:** \n 7,7/10 \n\n **Yayın Tarihi:** \n 25 Eylül 2015 (Türkiye) \n\n **Yönetmen:**\n Mark Osborne",
                   "**Filmin adı:** \n Kuzuların Sessizliği \n \n **Filmin Türü:** \n Gerilim/Korku \n \n **Filmin Süresi** \n 2 saat 18 dakika \n \n **Filmin konusu:** \n Kuzuların Sessizliği, yazar Thomas Harris'in aynı adlı romanından beyaz perdeye aktarılan, yönetmenliğini Jonathan Demme'nin yaptığı, 1991 yapımı psikolojik gerilim türünde bir film. Thomas J. \n\n **IMDB:** \n 8,6/10 \n\n **Yayın Tarihi:** \n 11 Ekim 1991 (Türkiye) \n\n **Yönetmen:**\n Jonathan Demme",
                   "**Filmin adı:** \n John Wick \n \n **Filmin Türü:** \n Aksiyon/Gerilim \n \n **Filmin Süresi** \n 1 saat 47 dakika \n \n **Filmin konusu:** \n John Wick, 2014 yılında yayınlanan Amerikan aksiyon filmidir. Chad Stahelski ve David Leitch tarafından yönetilmiş, baş rolünü Keanu Reeves'in canlandırmıştır. \n\n **IMDB:** \n 7,4/10 \n\n **Yayın Tarihi:** \n 28 Kasım 2014 (Türkiye) \n\n **Yönetmen:**\n Chad Stahelski",
                   "**Filmin adı:** \n Terminatör \n \n **Filmin Türü:** \n Bilim Kurgu/Aksiyon \n \n **Filmin Süresi** \n 1 saat 48 dakika \n \n **Filmin konusu:** \n Terminatör, James Cameron'un yönetmen koltuğunda oturduğu, 1984 yılı yapımı bilimkurgu filmi. Başrollerinde Arnold Schwarzenegger, Linda Hamilton ve Michael Biehn bulunmaktadır. \n\n **IMDB:** \n 8/10 \n\n **Yayın Tarihi:** \n Ocak 1988 (Türkiye) \n\n **Yönetmen:**\n James Cameron",
                   "**Filmin adı:** \n Joker \n \n **Filmin Türü:** \n Suç/Dram \n \n **Filmin Süresi** \n 2 saat 2 dakika \n \n **Filmin konusu:** \n Joker, aynı isimdeki DC Comics karakterine dayanan, Todd Phillips'in yönettiği, başrollerini Joaquin Phoenix, Robert De Niro, Frances Conroy, Brett Cullen ve Zazie Beetz'ın paylaştığı Amerikan psikolojik gerilim filmidir. 76. Venedik Uluslararası Film Festivali'nde Altın Aslan ödülünü kazanmıştır. \n\n **IMDB:** \n 8,5/10 \n\n **Yayın Tarihi:** \n 31 Ağustos 2019 (İtalya) \n\n **Yönetmen:**\n Todd Phillips",
                   "**Filmin adı:** \n Ejderhanı Nasıl Eğitirsin \n \n **Filmin Türü:** \n Animasyon/Aile \n \n **Filmin Süresi** \n 1 saat 38 dakika \n \n **Filmin konusu:** \n Ejderhanı Nasıl Eğitirsin, aynı adı taşıyan 2003'te yayınlanan kitabından DreamWorks Animation tarafından uyarlanan 2010 yılı 3D animasyon fantastik film. Filmde seslendirme yapan bazı isimler Jay Baruchel, Gerard Butler, Craig Ferguson, America Ferrera, Jonah Hill, T.J. \n\n **IMDB:** \n 8,1/10 \n\n **Yayın Tarihi:** \n 23 Nisan 2010 (Türkiye) \n\n **Yönetmen:**\n Dean DeBlois, Chris Sanders",
                   "**Filmin adı:** \n Zootropolis \n \n **Filmin Türü:** \n Animasyon/Komedi \n \n **Filmin Süresi** \n 1 saat 50 dakika \n \n **Filmin konusu:** \n Zootropolis: Hayvanlar Şehri, Walt Disney Pictures tarafından yayınlanan ve yapımcılığı Walt Disney Animation Studios tarafından yapılan 2016 yapımı üç boyutlu, bilgisayar animasyonu, gizem, suç, komedi filmi. Disney'in 55. uzun metraj filmidir.  \n\n **IMDB:** \n 8/10 \n\n **Yayın Tarihi:** \n 10 Şubat 2016 (Belçika) \n\n **Yönetmen:**\n Byron Howard, Rich Moore",
                   "**Filmin adı:** \n Karlar Ülkesi \n \n **Filmin Türü:** \n Müzikal film/Aile \n \n **Filmin Süresi** \n 1 saat 49 dakika \n \n **Filmin konusu:** \n Karlar Ülkesi, Walt Disney Animation Studios tarafından üretilen ve Walt Disney Pictures tarafından dağıtımı yapılan, 19 Kasım 2013 tarihinde El Capitan Theatre'da gösterime girmiş ABD yapımı 3D bilgisayar animasyonu müzikal-fantezi filmidir. 27 Kasım 2013'te ise diğer tiyatrolar ve sinemalarda gösterime girmiştir. \n\n **IMDB:** \n 7,5/10 \n\n **Yayın Tarihi:** \n 17 Ocak 2014 (Türkiye) \n\n **Yönetmen:**\n Jennifer Lee, Chris Buck",
                   "**Filmin adı:** \n Karlar Ülkesi 2 \n \n **Filmin Türü:** \n Animasyon/Müzikal film  \n \n **Filmin Süresi** \n 1 saat 43 dakika \n \n **Filmin konusu:** \n Karlar Ülkesi 2, Walt Disney Animation Studios tarafından üretilen Amerikan animasyonlu bir müzikal fantezi filmi. \n\n **IMDB:** \n 7,0/10 \n\n **Yayın Tarihi:** \n 20 Kasım 2019 (Türkiye) \n\n **Yönetmen:**\n Jennifer Lee, Chris Buck",
                   "**Filmin adı:** \n Ters Yüz \n \n **Filmin Türü:** \n Aile/Animasyon \n \n **Filmin Süresi** \n 1 saat 42 dakika \n \n **Filmin konusu:** \n Ters Yüz, yönetmenliğini Pete Docter'ın yaptığı 2015 yapımı Pixar Animasyon Stüdyoları tarafından üretilmiş 3 boyutlu bilgisayar animasyonu komedi-drama filmi. Eleştirmenler tarafından da beğenilen film 73. Altın Küre Ödülleri'nde En İyi Animasyon Film ödülünü aldı. Ayrıca 88. \n\n **IMDB:** \n 8,2/10 \n\n **Yayın Tarihi:** \n 19 Haziran 2015 (Türkiye) \n\n **Yönetmen:**\n Pete Docter",
                   "**Filmin adı:** \n Yukarı Bak \n \n **Filmin Türü:** \n  Animasyon/Aile \n \n **Filmin Süresi** \n 1 saat 36 dakika \n \n **Filmin konusu:** \n Yukarı Bak, 2009 çıkışlı ABD yapımı 3 boyutlu komedi-drama macera türlerindeki animasyon filmi. Film Pixar Animation Studios tarafından yapılmış ve Walt Disney Pictures tarafından dağıtılmıştır. Film Cannes Film Festivali'nde yer aldı ve Kuzey Amerika galası 29 Mayıs 2009 tarihinde gerçekleşti.  \n\n **IMDB:** \n 8,2/10 \n\n **Yayın Tarihi:** \n 16 Ekim 2009 (Türkiye) \n\n **Yönetmen:**\n Pete Docter",
                   "**Filmin adı:** \n Wall-E (VOL-İ) \n \n **Filmin Türü:** \n Animasyon/Bilim Kurgu \n \n **Filmin Süresi** \n 1 saat 43 dakika \n \n **Filmin konusu:** \n VOL•İ, 2008 yapımı 3D animasyon filmi Pixar Animation Studios tarafından yapılmıştır. Dağıtımı ise Walt Disney Pictures tarafından üstlenilmiştir. Film ilk kez 27 Haziran 2008'de ABD'de gösterime girmiştir. Yönetmenliğini daha önce Finding Nemo filmini de yönetmiş olan Andrew Stanton yapmıştır. \n\n **IMDB:** \n 8,4/10 \n\n **Yayın Tarihi:** \n 21 Haziran 2008 (Los Angeles) \n\n **Yönetmen:**\n Andrew Stanton",
                   "**Filmin adı:** \n Ateşböceklerinin Mezarı \n \n **Filmin Türü:** \n Savaş Filmi/Animasyon \n \n **Filmin Süresi** \n 1 saat 33 dakika \n \n **Filmin konusu:** \n Ateşböceklerinin Mezarı, Isao Takahata'nın yazıp yönettiği 1988 yapımı animasyon filmdir. Animasyonun yapımı için Studio Ghibli ile anlaşan Shinchosha'nın ilk film projesidir. Film Akiyuki Nosaka'nın, II.  \n\n **IMDB:** \n 8,5/10 \n\n **Yayın Tarihi:** \n 16 Nisan 1988 (Japonya) \n\n **Yönetmen:**\n Isao Takahata",
                   "**Filmin adı:** \n 300 Spartalı \n \n **Filmin Türü:** \n Savaş Filmi/Aksiyon \n \n **Filmin Süresi** \n 1 saat 57 dakika \n \n **Filmin konusu:** \n 300 Spartalı, özgün adı 300 olan, Frank Miller'ın Termopylae Muharebesi hakkındaki grafik romanından uyarlanan ve 2007 yılında gösterime giren film. Film, Frank Miller'in danışmanlığında Zack Snyder tarafından yönetilmiştir. Çekimler genel olarak mavi ekran önünde yapılmıştır. \n\n **IMDB:** \n 7,6/10 \n\n **Yayın Tarihi:** \n 9 Mart 2007 (ABD) \n\n **Yönetmen:**\n Zack Snyder",
                   "**Filmin adı:** \n Hobbit: Beklenmedik Yolculuk \n \n **Filmin Türü:** \n Macera Filmi/Fantastik \n \n **Filmin Süresi** \n 3 saat 2 dakika \n \n **Filmin konusu:** \n Hobbit: Beklenmedik Yolculuk. John Ronald Reuel Tolkien'in, Yüzüklerin Efendisi üçlemesinin öncül kitabı olarak da görülen Hobbit kitabı, ilk başta Guillermo del Toro tarafından sinemaya uyarlanacaktı. \n\n **IMDB:** \n 7,8/10 \n\n **Yayın Tarihi:** \n 14 Aralık 2012 (Türkiye) \n\n **Yönetmen:**\n Peter Jackson",
                   "**Filmin adı:** \n X-Men \n \n **Filmin Türü:** \n Aksiyon/Bilim Kurgu \n \n **Filmin Süresi** \n 1 saat 44 dakika \n \n **Filmin konusu:** \n X-Men, Marvel Comics'in süper kahraman çizgi romanlarından sinemaya uyarlanan 2000 yılı ABD yapımı X-Men serisinin ilk filmidir. Olağan Şüpheliler ile adını duyuran Bryan Singer'ın imzasını taşıyan filmin senaryosunu David Hayter yazmıştır.  \n\n **IMDB:** \n 7,4/10 \n\n **Yayın Tarihi:** \n 13 Temmuz 2000 (Avustralya) \n\n **Yönetmen:**\n Bryan Singer",
                   "**Filmin adı:** \n Harry Potter ve Felsefe Taşı \n \n **Filmin Türü:** \n Fantastik/Macera Filmi  \n \n **Filmin Süresi** \n 2 saat 39 dakika \n \n **Filmin konusu:** \n Harry Potter ve Felsefe Taşı, Chris Columbus tarafından yönetilen ve Warner Bros. Pictures tarafından dağıtılan 2001 yapımı fantezi filmidir. J. K. Rowling'in 1997 tarihli aynı adlı romanından uyarlanan filmin senaryosu Steve Kloves tarafından yazılırken yapımcılığı David Heyman tarafından üstlenildi.  \n\n **IMDB:** \n 7,6/10 \n\n **Yayın Tarihi:** \n 1 Şubat 2002 (Türkiye) \n\n **Yönetmen:**\n Chris Columbus",
                   
                   
                   
                   
                   ];
  var yanıt = filmler[Math.floor(Math.random() * filmler.length)];
  const embed = new Discord.MessageEmbed()
    .setFooter(`${message.author.tag}, senin için önerebileceğim en güzel film bu olabilir :)`, message.author.avatarURL())
    .setColor("#ffc163")
 
    .setDescription(
      `${yanıt}`
    )
    ;
 
  message.channel.send(embed).then(msg => msg.delete(30 *1000));
message.delete();
  }
 
exports.conf = {
  aliases: ["film-öner","filmöner","film-öneri","filmöneri","film-iste","filmiste"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
exports.help = {
  name: "film-öner",
  category: "kullanıcı",
  description: "Tüm bilgileriyle rastgele film atar.",
  usage: "film-öner"
};