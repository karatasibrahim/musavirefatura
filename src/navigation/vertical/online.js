export default [
  {
    header: 'ONLİNE İşlemlerİ',
  },
  {
    title: 'Mükellef İşlemleri',
    route: 'apps-email',
    icon: 'UsersIcon',
    children: [
      {
        title: 'Mükellef Ekle',
        route: 'online-maliye-mükellef-ekle',
      },
      {
        title: 'Mükellef Listesi',
        route: { name: 'online-mükellef-listesi', params: { id: 4987 } },
      },
      // {
      //   title: 'Mükellef Özeti',
      //   route: { name: 'online-mükellef-özeti', params: { id: 4987 } },
      // },
      // {
      //   title: 'Vergi No Sorgulama',
      //   route: 'online-maliye-vergi-sorgula',
      // },
      {
        title: 'Maliye',
        children: [
          // {
          //   title: 'Gayrimenkul Satış',
          //   route: 'online-mükellef-gayrimenkul-satış',
          // },
          // {
          //   title: 'Geçmiş Araçlarım',
          //   route: 'online-mükellef-geçmiş-araçlarım',
          // },
          {
            title: 'Gelen E-Arşiv Fatura',
            route: 'online-mükellef-gelen-earşiv-fatura',
          },
          {
            title: 'Giden E-Arşiv Fatura',
            route: 'online-mükellef-giden-earşiv-fatura',
          },
          // {
          //   title: 'Kesintiler (Stopaj)',
          //   route: 'online-mükellef-stopaj',
          // },
          // {
          //   title: 'Kira Ödemeleri',
          //   route: 'online-mükellef-kira-ödemeleri',
          // },
          // {
          //   title: 'Mevcut Araçlarım',
          //   route: 'online-mükellef-mevcut-araçlarım',
          // },
          // {
          //   title: 'Vergi Levhaları',
          //   route: 'online-mükellef-vergi-levhaları',
          // },
          // {
          //   title: 'Yoklama Denetim',
          //   route: 'online-mükellef-denetim',
          // },
        ],
      },
    ],
  },
  {
    title: 'Maliye İşlemleri',
    route: 'apps-chat',
    icon: 'BriefcaseIcon',
    children: [
      {
        title: 'Beyannameler',
        route: 'online-maliye-beyannameler',
      },
      // {
      //   title: 'Borcu Yoktur',
      //   route: { name: 'online-maliye-borcu-yoktur', params: { id: 4987 } },
      // },
      {
        title: 'Kalan Beyannameler',
        route: { name: 'online-maliye-kalan-beyannameler', params: { id: 4987 } },
      },
      // {
      //   title: 'Mükellefiyet Yazısı',
      //   route: { name: 'online-maliye-mükellef-yazısı' },
      // },
      // {
      //   title: 'Ödenen G-Geçici',
      //   route: { name: 'online-maliye-ödenen-ggeçici' },
      // },
      // {
      //   title: 'Ödenen K-Geçici',
      //   route: { name: 'online-maliye-ödenen-kgeçici' },
      // },
      {
        title: 'Pos Sorgulama',
        route: { name: 'online-maliye-pos-sorgulama' },
      },
      // {
      //   title: 'Sicil Kaydım',
      //   route: { name: 'online-maliye-sicil-kaydım' },
      // },
      {
        title: 'Tebligat Sorgulama',
        route: { name: 'online-maliye-tebligat-sorgulama' },
      },
    ],
  },
  {
    title: 'SGK İşlemleri',
    route: 'apps-todo',
    icon: 'CommandIcon',
    children: [
      {
        title: 'Asgari İşçilik Hesabı',
        route: 'online-sgk-işçilik-hesabı',
      },
      {
        title: 'Bildirgeler',
        route: { name: 'online-sgk-sgkbildirgeler', params: { id: 4987 } },
      },
      // {
      //   title: 'Borcu Yoktur',
      //   route: { name: 'online-sgk-borcu-yoktur', params: { id: 4987 } },
      // },
      // {
      //   title: 'İşe Giriş - Çıkış',
      //   route: { name: 'online-sgk-işçi-giriş-çıkış' },
      // },
      // {
      //   title: 'SGK Takip',
      //   route: { name: 'online-sgk-takip' },
      // },
      {
        title: 'SGK Viziteler',
        route: { name: 'online-sgk-viziteler' },
      },
    ],
  },
  // {
  //   title: 'Finans İşlemleri',
  //   route: 'apps-calendar',
  //   icon: 'TrendingUpIcon',
  //   children: [
  //     {
  //       title: 'Cari İşlemleri',
  //       route: 'online-finans-cari-işlemleri',
  //     },
  //     {
  //       title: 'Gelir-Gider İşlemleri',
  //       route: { name: 'online-finans-gelir-gider', params: { id: 4987 } },
  //     },
  //     {
  //       title: 'Muhasebe Ücretleri',
  //       route: { name: 'online-finans-muhasebe-ücretleri' },
  //     },
  //   ],
  // },
  // {
  //   title: 'E-Devlet İşlemleri',
  //   icon: 'MonitorIcon',
  //   children: [
  //     {
  //       title: 'Dava Dosyaları',
  //       route: 'online-edevlet-dava-dosyaları',
  //     },
  //     {
  //       title: 'İcra Dosyaları',
  //       route: { name: 'online-edevlet-icra-dosyaları', params: { id: 4987 } },
  //     },

  //   ],
  // },
  //  {
  //    title: 'Hızlı Girişler',
  //    icon: 'ChevronsRightIcon',
  //    children: [
  //      {
  //        title: 'E-Beyanname',
  //        route: 'online-hızlıgirişler-ebeyanname',
  //      },
  //      {
  //        title: 'E-Fatura Portal',
  //        route: { name: 'online-hızlıgirişler-efatura', params: { slug: 'apple-watch-series-5-27' } },
  //      },
  //      {
  //        title: 'Gelir İdaresi ',
  //        route: 'online-hızlıgirişler-gelir-idaresi',
  //      },
  //      {
  //        title: 'Maliye',
  //        route: 'online-hızlıgirişler-maliye',
  //      },
  //      {
  //       title: 'Sgk',
  //       route: 'online-hızlıgirişler-sgk',
  //     },
  //    ],
  //  },
]