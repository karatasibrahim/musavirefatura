export default [
  {
    header: 'ONLİNE İşlemlerİ',
  },
  {
    title: 'E-Arşiv',
    route: 'apps-email',
    icon: 'UsersIcon',
    children: [
    
      {
              title: 'Fatura Oluştur',
              route: 'Fatura-Olustur',
            },
            {
              title: 'Gelen E-arsiv',
              route: 'Gelen-Earsiv',
            },
            {
              title: 'Giden E-arsiv',
              route: 'Giden-Earsiv',
            },
  ]
  },
  {
    title: 'E-Fatura',
    route: 'apps-chat',
    icon: 'BriefcaseIcon',
    children: [
      {
        title: 'Yeni Fatura Ekle',
        route: 'yeni-efatura',
      },
      {
        title: 'Fatura Listesi',
        route: 'fatura-listesi"',
      },
      {
        title: 'Düzenlenen Faturalar',
        route: 'düzenlenen-faturalar"',
      },
    ],
  },
  {
    title: 'SGK İşlemleri',
    route: 'apps-todo',
    icon: 'CommandIcon',
    children: [
    
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