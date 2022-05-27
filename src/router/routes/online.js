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
];