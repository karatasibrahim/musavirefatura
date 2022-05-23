export default [
  //Mükellef İşlemleri Menüsü
  {
    path: "/mükellef/mükellef-listesi",
    name: "online-mükellef-listesi",
    component: () => import("@/views/online/mükellef/mükellef-listesi"),
  },
  {
    path: "/mükellef/mükellef-ekle",
    name: "online-maliye-mükellef-ekle",
    component: () => import("@/views/online/mükellef/mükellef-ekle"),
  },
  // {
  //   path: "/mükellef/mükellef-özeti",
  //   name: "online-mükellef-özeti",
  //   component: () => import("@/views/online/mükellef/mükellef-özeti"),
  // },
  // {
  //   path: "/mükellef/mükellef-vergi-sorgula",
  //   name: "online-maliye-vergi-sorgula",
  //   component: () => import("@/views/online/mükellef/mükellef-vergi-sorgula"),
  // },
  // {
  //   path: "/mükellef/mükellef-gayrimenkul-satış",
  //   name: "online-mükellef-gayrimenkul-satış",
  //   component: () => import("@/views/online/mükellef/mükellef-gayrimenkul-satış"),
  // },
  // {
  //   path: "/mükellef/mükellef-geçmiş-araçlarım",
  //   name: "online-mükellef-geçmiş-araçlarım",
  //   component: () => import("@/views/online/mükellef/mükellef-geçmiş-araçlarım"),
  // },
  {
    path: "/mükellef/mükellef-gelen-earşiv-fatura",
    name: "online-mükellef-gelen-earşiv-fatura",
    component: () => import("@/views/online/mükellef/mükellef-gelen-earşiv-fatura"),
  },
  {
    path: "/mükellef/mükellef-giden-earşiv-fatura",
    name: "online-mükellef-giden-earşiv-fatura",
    component: () => import("@/views/online/mükellef/mükellef-giden-earşiv-fatura"),
  },
  // {
  //   path: "/mükellef/mükellef-stopaj",
  //   name: "online-mükellef-stopaj",
  //   component: () => import("@/views/online/mükellef/mükellef-stopaj"),
  // },
  // {
  //   path: "/mükellef/mükellef-kira-ödemeleri",
  //   name: "online-mükellef-kira-ödemeleri",
  //   component: () => import("@/views/online/mükellef/mükellef-kira-ödemeleri"),
  // },
  // {
  //   path: "/mükellef/mükellef-mevcut-araçlarım",
  //   name: "online-mükellef-mevcut-araçlarım",
  //   component: () => import("@/views/online/mükellef/mükellef-mevcut-araçlarım"),
  // },
  // {
  //   path: "/mükellef/mükellef-vergi-levhaları",
  //   name: "online-mükellef-vergi-levhaları",
  //   component: () => import("@/views/online/mükellef/mükellef-vergi-levhaları"),
  // },
  // {
  //   path: "/mükellef/mükellef-denetim",
  //   name: "online-mükellef-denetim",
  //   component: () => import("@/views/online/mükellef/mükellef-denetim"),
  // },

  //Maliye İşlemleri Menüsü
  {
    path: "/maliye/beyannameler",
    name: "online-maliye-beyannameler",
    component: () => import("@/views/online/maliye/beyannameler"),
  },
  // {
  //   path: "/maliye/maliye-borcu-yoktur",
  //   name: "online-maliye-borcu-yoktur",
  //   component: () => import("@/views/online/maliye/maliye-borcu-yoktur"),
  // },
   {
    path: "/maliye/maliye-kalan-beyannameler",
    name: "online-maliye-kalan-beyannameler",
    component: () => import("@/views/online/maliye/maliye-kalan-beyannameler"),
  },
  // {
  //   path: "/maliye/maliye-mükellef-yazısı",
  //   name: "online-maliye-mükellef-yazısı",
  //   component: () => import("@/views/online/maliye/maliye-mükellef-yazısı"),
  // },
  // {
  //   path: "/maliye/maliye-ödenen-ggeçici",
  //   name: "online-maliye-ödenen-ggeçici",
  //   component: () => import("@/views/online/maliye/maliye-ödenen-ggeçici"),
  // },
  // {
  //   path: "/maliye/maliye-ödenen-kgeçici",
  //   name: "online-maliye-ödenen-kgeçici",
  //   component: () => import("@/views/online/maliye/maliye-ödenen-kgeçici"),
  // },
  {
    path: "/maliye/maliye-pos-sorgulama",
    name: "online-maliye-pos-sorgulama",
    component: () => import("@/views/online/maliye/maliye-pos-sorgulama"),
  },
  // {
  //   path: "/maliye/maliye-sicil-kaydım",
  //   name: "online-maliye-sicil-kaydım",
  //   component: () => import("@/views/online/maliye/maliye-sicil-kaydım"),
  // },
  {
    path: "/maliye/maliye-tebligat-sorgulama",
    name: "online-maliye-tebligat-sorgulama",
    component: () => import("@/views/online/maliye/maliye-tebligat-sorgulama"),
  },

  // SGK İşlemleri Menüsü
  {
    path: "/sgk/sgk-işçilik-hesabı",
    name: "online-sgk-işçilik-hesabı",
    component: () => import("@/views/online/sgk/sgk-işçilik-hesabı"),
  },
  {
    path: "/sgk/sgkbildirgeler",
    name: "online-sgk-sgkbildirgeler",
    component: () => import("@/views/online/sgk/sgkbildirgeler"),
  },
  // {
  //   path: "/sgk/sgk-borcu-yoktur",
  //   name: "online-sgk-borcu-yoktur",
  //   component: () => import("@/views/online/sgk/sgk-borcu-yoktur"),
  // },
  // {
  //   path: "/sgk/sgk-işçi-giriş-çıkış",
  //   name: "online-sgk-işçi-giriş-çıkış",
  //   component: () => import("@/views/online/sgk/sgk-işçi-giriş-çıkış"),
  // },
  // {
  //   path: "/sgk/sgk-takip",
  //   name: "online-sgk-takip",
  //   component: () => import("@/views/online/sgk/sgk-takip"),
  // },
  {
    path: "/sgk/sgk-viziteler",
    name: "online-sgk-viziteler",
    component: () => import("@/views/online/sgk/sgk-viziteler"),
  },

  // Finans İşlemleri Menüsü
  // {
  //   path: "/finans/finans-cari-işlemleri",
  //   name: "online-finans-cari-işlemleri",
  //   component: () => import("@/views/online/finans/finans-cari-işlemleri"),
  // },
  // {
  //   path: "/finans/finans-gelir-gider",
  //   name: "online-finans-gelir-gider",
  //   component: () => import("@/views/online/finans/finans-gelir-gider"),
  // },
  // {
  //   path: "/finans/finans-muhasebe-ücretleri",
  //   name: "online-finans-muhasebe-ücretleri",
  //   component: () => import("@/views/online/finans/finans-muhasebe-ücretleri"),
  // },

  // // E-Devlet İşlemleri Menüsü
  // {
  //   path: "/edevlet/edevlet-dava-dosyaları",
  //   name: "online-edevlet-dava-dosyaları",
  //   component: () => import("@/views/online/edevlet/edevlet-dava-dosyaları"),
  // },
  // {
  //   path: "/edevlet/edevlet-icra-dosyaları",
  //   name: "online-edevlet-icra-dosyaları",
  //   component: () => import("@/views/online/edevlet/edevlet-icra-dosyaları"),
  // },

  // // Hızlı Giriş Menüsü
  // {
  //   path: "/hızlıgirişler/hızlıgirişler-ebeyanname",
  //   name: "online-hızlıgirişler-ebeyanname",
  //   component: () => import("@/views/online/hızlıgirişler/hızlıgirişler-ebeyanname"),
  // },
  // {
  //   path: "/hızlıgirişler/hızlıgirişler-efatura",
  //   name: "online-hızlıgirişler-efatura",
  //   component: () => import("@/views/online/hızlıgirişler/hızlıgirişler-efatura"),
  // },
  // {
  //   path: "/hızlıgirişler/hızlıgirişler-gelir-idaresi",
  //   name: "online-hızlıgirişler-gelir-idaresi",
  //   component: () => import("@/views/online/hızlıgirişler/hızlıgirişler-gelir-idaresi"),
  // },
  // {
  //   path: "/hızlıgirişler/hızlıgirişler-maliye",
  //   name: "online-hızlıgirişler-maliye",
  //   component: () => import("@/views/online/hızlıgirişler/hızlıgirişler-maliye"),
  // },
  // {
  //   path: "/hızlıgirişler/hızlıgirişler-sgk",
  //   name: "online-hızlıgirişler-sgk",
  //   component: () => import("@/views/online/hızlıgirişler/hızlıgirişler-sgk"),
  // },
];