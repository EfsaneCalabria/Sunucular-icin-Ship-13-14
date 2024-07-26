   const erkek = Settings.Erkek[0];
   const kadin = Settings.Women[0];
    
    const member = message.mentions.members.first() || message.guild.members.cache.filter(m => message.member.roles.cache.get(erkek) ? m.roles.cache.get(kadin) : m.roles.cache.get(erkek)).random();
           
        
    const randomYear = Math.floor(Math.random() * 10 + 2030); 
    const randomMonth = Math.floor(Math.random() * 12 + 1); 
    const randomDay = Math.floor(Math.random() * 28 + 1); 

const marriageDate = new Date(randomYear, randomMonth, randomDay);
   
const girlNames = ['Ada', 'Adal', 'Adile', 'Adriana', 'Ahu', 'Alev', 'Aliye', 'Alya', 'Alyaç', 'Alyaşa', 'Anıl', 'Arzu', 'Aslı', 'Aslıhan', 'Asya', 'Aybala', 'Aybike', 'Ayça', 'Aysel', 'Ayşe', 'Ayşen', 'Ayten', 'Ayşe Nur', 'Azra', 'Azize', 'Bahar', 'Bahtınur', 'Begüm', 'Belgin', 'Bengi', 'Bengisu', 'Beren', 'Berfin', 'Berrin', 'Betül', 'Beyza', 'Bilge', 'Bilgehan', 'Bilgenur', 'Binnur', 'Biran', 'Birsen', 'Büşra', 'Canan', 'Candan', 'Cansu', 'Ceyda', 'Ceylan', 'Cihan', 'Cihanur', 'Cemre', 'Ceren', 'Ceylan', 'Çağla', 'Çiğdem', 'Çiğdem', 'Çiçek', 'Damlanur', 'Defne', 'Deniz', 'Derya', 'Dicle', 'Didem', 'Dilan', 'Dilek', 'Dolunay', 'Duru', 'Duygu', 'Eda', 'Ebru', 'Ece', 'Ecrin', 'Edanur', 'Ediz', 'Ela', 'Elanur', 'Elif', 'Eliz', 'Elmas', 'Elvan', 'Emine', 'Emre', 'Eray', 'Esila', 'Esin', 'Eslem', 'Esma', 'Esmanur', 'Eylem', 'Eylül', 'Ezgi', 'Fadime', 'Fatoş', 'Fatma', 'Fazilet', 'Feride', 'Feride', 'Ferihan', 'Ferzane', 'Feyza', 'Figen', 'Funda', 'Gamze', 'Gaye', 'Gizem', 'Gizem', 'Gökçe', 'Gönül', 'Gözde','Ada', 'Adal', 'Adile', 'Adriana', 'Ahu', 'Alev', 'Aliye', 'Alya', 'Alyaç', 'Alyaşa', 'Anıl', 'Arzu', 'Aslı', 'Aslıhan', 'Asya', 'Aybala', 'Aybike', 'Ayça', 'Aysel', 'Ayşe', 'Ayşen', 'Ayten', 'Ayşe Nur', 'Azra', 'Azize', 'Bahar', 'Bahtınur', 'Begüm', 'Belgin', 'Bengi', 'Bengisu', 'Beren', 'Berfin', 'Berrin', 'Betül', 'Beyza', 'Bilge', 'Bilgehan', 'Bilgenur', 'Binnur', 'Biran', 'Birsen', 'Büşra', 'Canan', 'Candan', 'Cansu', 'Ceyda', 'Ceylan', 'Cihan', 'Cihanur', 'Cemre', 'Ceren', 'Ceylan', 'Çağla', 'Çiğdem', 'Çiğdem', 'Çiçek', 'Damlanur', 'Defne', 'Deniz', 'Derya', 'Dicle', 'Didem', 'Dilan', 'Dilek', 'Dolunay', 'Duru', 'Duygu', 'Eda', 'Ebru', 'Ece', 'Ecrin', 'Edanur', 'Ediz', 'Ela', 'Elanur', 'Elif', 'Eliz', 'Elmas', 'Elvan', 'Emine', 'Emre', 'Eray', 'Esila', 'Esin', 'Eslem', 'Esma', 'Esmanur', 'Eylem', 'Eylül', 'Ezgi', 'Fadime', 'Fatoş', 'Fatma', 'Fazilet', 'Feride', 'Feride', 'Ferihan', 'Ferzane', 'Feyza', 'Figen', 'Funda', 'Gamze', 'Gaye', 'Gizem', 'Gizem', 'Gökçe', 'Gönül', 'Gözde', 'Gülden', 'Gülay', 'Gülcan', 'Gülnur', 'Gülşah', 'Gülsüm', 'Güzel', 'Gülizar', 'Hacer', 'Hafize', 'Hale', 'Halime', 'Handan', 'Hanife', 'Hasret', 'Hatice', 'Hayal', 'Hayat', 'Hayriye', 'Hazal', 'Helin', 'Hilal', 'Hülya', 'Hüma', 'Hümeyra', 'Irmak', 'İdil', 'İlayda', 'İlknur', 'İpek', 'İrem', 'İrem', 'İnci', 'Jale', 'Jasmin', 'Kader', 'Kamile', 'Kardelen', 'Karolina', 'Kübra', 'Lale', 'Lalehan', 'Lara', 'Lavin', 'Leyla', 'Lina', 'Mavi', 'Maya'];

const boyNames = ['Ahmet','Ali','Ayhan','Barış','Burak','Can','Cem','Cihan','Emre','Eren','Furkan','Gökhan','Hakan','Hasan','İbrahim','Kaan','Mehmet','Murat','Mustafa','Onur','Ömer','Serkan','Tuncay','Uğur','Volkan','Yasin','Yusuf','Adem','Ahmet','Akın', 'Alp', 'Arda', 'Arif', 'Armağan', 'Aslan', 'Aydın', 'Ayhan', 'Aziz', 'Barış' ,'Batuhan', 'Berk', 'Berke' ,'Bilal', 'Caner', 'Celal', 'Cemal', 'Cengiz', 'Cihan', 'Cemil','Deniz','Devrim','Doğan','Ege','Eren','Emir', 'Emrah','Enes', 'Erdem', 'Erhan', 'Erol','Faruk', 'Fatih', 'Ferhat', 'Ferit' ,'Fırat', 'Fikret' ,'Gökhan', 'Güven', 'Hakan', 'Halil', 'Hamza', 'Harun' ,'Hasan' ,'Haydar' ,'Hüseyin' ,'İbrahim', 'İdris', 'İlhan', 'İsmail', 'Kadir' ,'Kamil' ,'Kemal' ,'Kerem' ,'Levent', 'Mehmet', 'Metin', 'Mert', 'Murat' ,'Mustafa', 'Nail', 'Nihat' ,'Oğuz' ,'Onur', 'Osman', 'Ömer', 'Özgür', 'Raşit' ,'Rıza', 'Salih', 'Selim', 'Serdar', 'Serhat', 'Serkan', 'Sinan' ,'Süleyman', 'Talha', 'Tamer', 'Taner' ,'Tarık', 'Tuncay', 'Ufuk', 'Uğur' ,'Volkan' ,'Yaşar', 'Yasin', 'Yavuz', 'Yılmaz', 'Yunus', 'Yusuf' ,'Zeki','Adil', 'Aksel', 'Alper', 'Altan', 'Aras', 'Atakan', 'Atilla', 'Aybars', 'Aydemir', 'Ayhan', 'Aykut', 'Aziz', 'Baha', 'Baran', 'Berkay', 'Bora', 'Bulut', 'Cenk', 'Cevat', 'Cihan', 'Coşkun', 'Cüneyt', 'Çağan', 'Çetin', 'Demir', 'Deniz', 'Doruk', 'Efe', 'Ege', 'Egehan', 'Ercan', 'Eren', 'Ertan', 'Evren', 'Fatih', 'Ferdi', 'Fırat', 'Genco', 'Gökay', 'Gökhan', 'Görkem', 'Güçlü', 'Hakan', 'Haluk', 'Harun', 'İlker', 'İlyas', 'İsmet', 'Kaan', 'Kadir', 'Kamuran', 'Kaya', 'Kemal', 'Kerem', 'Koray', 'Kuzey', 'Levent', 'Mehmet', 'Mert', 'Murat', 'Mustafa', 'Nadir', 'Necip', 'Nihat', 'Okan', 'Orhan', 'Orkun', 'Osman', 'Ömer', 'Önder', 'Özcan', 'Özgür', 'Ramazan', 'Rıdvan', 'Sarp', 'Serkan', 'Sinan', 'Suat', 'Süleyman', 'Tahsin', 'Talat', 'Taner', 'Tarık', 'Timur', 'Tolga', 'Ufuk', 'Umut', 'Utku', 'Ümit', 'Volkan', 'Yağız', 'Yalçın', 'Yasin', 'Yavuz', 'Yiğit', 'Yunus', 'Yusuf', 'Zafer', 'Zeki'];

const songNames = ['https://www.youtube.com/watch?v=QjyWPkoBSjo&list=RDQjyWPkoBSjo&start_radio=1','https://www.youtube.com/watch?v=XHwOPkFMtZg&list=RDQjyWPkoBSjo&index=2','https://www.youtube.com/watch?v=TxVrosLTcnQ&list=RDQjyWPkoBSjo&index=3','https://www.youtube.com/watch?v=WiRTQUPyQr0','https://www.youtube.com/watch?v=X_XdDVfHCI8','https://www.youtube.com/watch?v=ip5Zwly4D-U','https://www.youtube.com/watch?v=TxJUmNxi_2I','https://www.youtube.com/watch?v=BZFUyhRn9ZE','https://www.youtube.com/watch?v=wlMsNlJmIls','https://www.youtube.com/watch?v=7tOqUtSTF2w','https://www.youtube.com/watch?v=gG_dA32oH44','https://www.youtube.com/watch?v=aBc-lKqyNmE','https://www.youtube.com/watch?v=2w_cCJjnplc','https://www.youtube.com/watch?v=mIsz9wFNv8s','https://www.youtube.com/watch?v=08nfQK-9sMg&list=RDMM&start_radio=1&rv=mIsz9wFNv8s','https://www.youtube.com/watch?v=Ho3Eb07svfw&list=RDMM&index=10','https://www.youtube.com/watch?v=72r0_r1stk0&list=RDMM&index=11','https://www.youtube.com/watch?v=XMo6aye_6TA','https://www.youtube.com/watch?v=c7TSXuyB8QY','https://www.youtube.com/watch?v=2i2khp_npdE','https://www.youtube.com/watch?v=M-P4QBt-FWw','https://www.youtube.com/watch?v=BofBvlmQdbA&list=RDMM&index=7','https://www.youtube.com/watch?v=7XTabruB1BU&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&start_radio=1&rv=BofBvlmQdbA','https://www.youtube.com/watch?v=mfJhMfOPWdE&list=RDGMEMYH9CUrFO7CfLJpaD7UR85w&start_radio=1&rv=7XTabruB1BU','https://www.youtube.com/watch?v=2Qrhsh33bAI','https://www.youtube.com/watch?v=WTx6wElGHe4&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&start_radio=1&rv=2Qrhsh33bAI','https://www.youtube.com/watch?v=dKpFwjSGkDA&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&index=4','https://www.youtube.com/watch?v=quwybaIr5aA&list=RDEMRmfAcWLaxRe2weUwCulH9Q&start_radio=1&rv=dKpFwjSGkDA','https://www.youtube.com/watch?v=sLaTUgX3ebU','https://www.youtube.com/watch?v=kXBunIe_PSw','https://www.youtube.com/watch?v=ocuGTFqDlSQ','https://www.youtube.com/watch?v=Kg8KNyixj8o','https://www.youtube.com/watch?v=fK-lp3C1_-w','https://www.youtube.com/watch?v=40AQBO2JVWo','https://www.youtube.com/watch?v=7fcMUU-_DGU','https://www.youtube.com/watch?v=WJL2qW6_weQ','https://www.youtube.com/watch?v=3htpQZmUPQQ','https://www.youtube.com/watch?v=ScoYMC81Foc','https://www.youtube.com/watch?v=2XUs3lDOBlM','https://www.youtube.com/watch?v=DjSBg3WpxnQ&list=RDEM7e5L5clkisfQQAly4U_L0A&start_radio=1&rv=2XUs3lDOBlM','https://www.youtube.com/watch?v=w2BTr6qsLFc&list=RDEM7e5L5clkisfQQAly4U_L0A&index=2','https://www.youtube.com/watch?v=QEC96FAx2Zc&list=RDEM7e5L5clkisfQQAly4U_L0A&index=3','https://www.youtube.com/watch?v=6ZwnfhfG7sQ','https://www.youtube.com/watch?v=eGFp9fxE6uA&list=PL7SFP9OuRqZgcJ7yB-aipaCAFsQiLcTb6'];
//Şarkıları Spotifydan Çekebilirsiniz
const randomSong = Math.random() < 0.5 ? 'name': 'name' 
let randomMüzik;

if (randomSong === 'name') {
  randomMüzik = songNames[Math.floor(Math.random() * songNames.length)];
  randomMüzik += " Şarkısını Size Layık Gördüm 💞";
} else {
  randomMüzik = songNames[Math.floor(Math.random() * songNames.length)];
  randomMüzik += " Şarkısını Size Layık Gördüm 💞";
}

    
const Cinsiyet = Math.random() < 0.5 ? 'Kız' : 'Erkek';

let randomName;

if (Cinsiyet === 'Kız') {
  randomName = girlNames[Math.floor(Math.random() * girlNames.length)];
  randomName += " ismini veriyorum çünkü siz en çok kız çocuğu istiyorsunuz 👉 👈";
} else {
  randomName = boyNames[Math.floor(Math.random() * boyNames.length)];
  randomName += " ismini veriyorum çünkü siz en çok erkek çocuğu istiyorsunuz 👉 👈";
}
        
        let AşkOranı = [
            '%5',     '%3  ',
            '%10',    '%14',
            '%17',    '%20',
            '%22',    '%25',
            '%24',    '%27',
            '%32',    '%36',
            '%34',    '%39',
            '%42',    '%45',
            '%47',    '%51',
            '%54',    '%56',
            '%59',    '%58',
            '%60',    '%63',
            '%65',    '%64',
            '%68',    '%70',
            '%74',    '%78',
            '%79',    '%80',
            '%83',    '%86',
            '%84',    '%89',
            '%91',    '%93',
            '%95',    '%97',
            '%98',    '%99',
            'Birbiriniz İçin Yaratılmışsınız 👉 👈',   'Birbiriniz İçin Yaratılmışsınız 👉 👈'
        ]
        
        let Oran = Math.floor((Math.random()*AşkOranı.length))
        let love = AşkOranı[Oran]
        let Icon;
        if(Oran <= 44 && Oran >= 23) {
           Icon = ('KENDİ EMOJİLERİNİZİ KOYABİLİRSİNİZ'); 
        } else if(Oran < 23 && Oran >= 12) {
            Icon = ('KENDİ EMOJİLERİNİZİ KOYABİLİRSİNİZ'); 
        } else if(Oran < 11) {
            Icon = ('KENDİ EMOJİLERİNİZİ KOYABİLİRSİNİZ'); 
        }
        const canvas = Canvas.createCanvas(384, 128);
        const ctx = canvas.getContext('2d');
        const emotes = await Canvas.loadImage(Icon);
        const avatar1 = await Canvas.loadImage(message.member.displayAvatarURL({ format: "png" }));
        const avatar2 = await Canvas.loadImage(member.displayAvatarURL({ format: "png" }));
        ctx.beginPath();
        ctx.moveTo(0 + Number(10), 0);
        ctx.lineTo(0 + 384 - Number(10), 0);
        ctx.quadraticCurveTo(0 + 384, 0, 0 + 384, 0 + Number(10));
        ctx.lineTo(0 + 384, 0 + 128 - Number(10));
        ctx.quadraticCurveTo(
        0 + 384,
        0 + 128,
        0 + 384 - Number(10),
        0 + 128
        );
        ctx.lineTo(0 + Number(10), 0 + 128);
        ctx.quadraticCurveTo(0, 0 + 128, 0, 0 + 128 - Number(10));
        ctx.lineTo(0, 0 + Number(10));
        ctx.quadraticCurveTo(0, 0, 0 + Number(10), 0);
        ctx.closePath();
        ctx.clip();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 384, 128);
       
const backgroundURL = client.guilds.cache.get(Settings.SunucuID)?.bannerURL({ dynamic: true, format: "png" });

if (!backgroundURL) {
return message.channel.send({ content: "**Üzgünüm, sunucuda bir BackGround bulunmadığından dolayı Ship atamıyorum. Lütfen sunucu BackGround ekleyiniz.**" });
} // burada uyarı verdirtiyoruz sunucuda background olmazsa siz isterseniz background yerine bir resim girebilirsiniz

const background = await Canvas.loadImage(backgroundURL + `?size=4096`);
ctx.drawImage(background, 0, 0, 384, 129);
       
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      //ctx.fillRect(50, 30, 980, 350);
        
    ctx.fillStyle = "#000000";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(55, 5, 275, 115);
    ctx.globalAlpha = 1;
        
        ctx.drawImage(avatar1, 70, 12, 110, 110);
        ctx.drawImage(avatar2, 215, 12, 110, 110);
        ctx.drawImage(emotes, 150, 20, 90, 90);
      
      const img = new AttachmentBuilder(canvas.toBuffer(), 'ship.png')
      let Row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setLabel('Mesajı Sil')
            .setCustomId("Delete")
            .setEmoji("1065600543172591616")
            .setStyle(ButtonStyle.Secondary),
             new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel('Kullanıcıyı Görüntüle')
            .setEmoji('1086334689058504734')
            .setCustomId('user')
        )
        
         let Rows = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setLabel('Mesajı Sil')
            .setCustomId("Delete")
            .setEmoji("1065600543172591616")
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel('İkinizin Şarkısı ')
            .setEmoji('1110580985369739397')
            .setCustomId('song'),
             new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel('Kullanıcıyı Görüntüle')
            .setEmoji('1086334689058504734')
            .setCustomId('user')
        )
     
  if (love >= '%60') {
  message.reply({
    components: [Rows],
    content: `${member}`,
    content: `
${emoji} [ **${member.displayName}** ∞ **${message.member.displayName}** ]
**Aşk Oranınız; ${love}**
**Evlenme Tarihiniz;** <t:${Math.floor(marriageDate.getTime() / 1000)}:D> [__<t:${Math.floor(marriageDate.getTime() / 1000)}:R>__]
**Gelecekteki Çocuğunuzun Adı;** **${randomName}**`,
    files: [img]
  }).then(async (msg) => {
    var filter = (i) => i.user.id == message.member.id;
    let collector = msg.createMessageComponentCollector({ filter: filter, time: 25000 });
    collector.on('collect', async (interaction) => {
      if (interaction.customId === "Delete") {
        interaction.message.delete();
        message.delete();
      }
      if(interaction.customId === "user") {
Rows.components[2].setDisabled(true)
msg.edit({ components: [Rows] })
interaction.reply({ content: `> ${member}`, ephemeral: true})
  }
 if(interaction.customId === "song") {
Rows.components[1].setDisabled(true)
msg.edit({ components: [Rows] })
interaction.reply({ content: `> ${randomMüzik}`, ephemeral: true})
  }
    })
     collector.on("end", async (_, reason) => {
      if (reason === "time") {
        Rows.components[0].setDisabled(true);
        Rows.components[1].setDisabled(true);
        Rows.components[2].setDisabled(true);

        if (msg) msg.edit({ components: [Rows] });
      }
    });
  })
} else {
  message.reply({
    components: [Row],
    content: `${member}`,
    content: `
${emoji} [ **${member.displayName}** ∞ **${message.member.displayName}** ]
**Aşk Oranınız; ${love}**
**Evlenmek İçin Uygun Değilsiniz :(**`,
    files: [img]
  }).then(async (msg) => {
    var filter = (i) => i.user.id == message.member.id;
    let collector = msg.createMessageComponentCollector({ filter: filter, time: 25000 });
    collector.on('collect', async (interaction) => {
      if (interaction.customId === "Delete") {
        interaction.message.delete();
        message.delete();
      }
if(interaction.customId === "user") {
Row.components[1].setDisabled(true)
msg.edit({ components: [Row] })

interaction.reply({ content: `> ${member}`, ephemeral: true})
          }
    });
