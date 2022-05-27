export default [
  {
    path: "/efatura/yenifatura",
    name: "yeni-efatura",
    component: () => import("@/views/online/efatura/yeniefatura.vue"),
  },
  {
    path: "/efatura/DüzenlenenFaturalar",
    name: "düzenlenen-faturalar",
    component: () => import("@/views/online/efatura/DüzenlenenFaturalar.vue"),
  },
  {
    path: "/efatura/faturaListesi",
    name: "fatura-listesi",
    component: () => import("@/views/online/efatura/faturaListesi.vue"),
  },
  {
    path: "/efatura/TaslakFatura",
    name: "Taslak-Fatura",
    component: () => import("@/views/online/efatura/TaslakFatura.vue"),
  },
  {
    path: "/efatura/İptal_itiraz",
    name: "İptal-itiraz",
    component: () => import("@/views/online/efatura/İptal_itiraz.vue"),
  },
  {
    path: "/earsiv/FaturaOlustur",
    name: "Fatura-Olustur",
    component: () => import("@/views/online/earsiv/FaturaOlustur.vue"),
  },
  {
    path: "/earsiv/GelenEarsiv",
    name: "Gelen-Earsiv",
    component: () => import("@/views/online/earsiv/GelenEarsiv.vue"),
  },
  {
    path: "/earsiv/GidenEarsiv",
    name: "Giden-Earsiv",
    component: () => import("@/views/online/earsiv/GidenEarsiv.vue"),
  },
  {
    path: "/BaBs",
    name: "BaBs",
    component: () => import("@/views/online/BaBs.vue"),
  },
  {
    path: "/Cari",
    name: "Cari",
    component: () => import("@/views/online/Cari.vue"),
  },
  {
    path: "/Raporlar",
    name: "Raporlar",
    component: () => import("@/views/online/Raporlar.vue"),
  },
  {
    path: "/Stok",
    name: "Stok",
    component: () => import("@/views/online/Stok.vue"),
  },
];