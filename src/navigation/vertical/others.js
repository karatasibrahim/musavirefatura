export default [
  {
    header: 'Yönetİcİ İşlemlerİ',
  },
  {
    title: 'Kullanıcı İşlemleri',
    icon: 'MenuIcon',
    children: [
      {
        title: 'Kullanıcı Ekle',
        route: null,
      },
      {
        title: 'Kullanıcı Listesi',
        route:null,
        // children: [
        //   {
        //     title: 'Menu Level 3.1',
        //     route: null,
        //   },
        //   {
        //     title: 'Menu Level 3.2',
        //     route: null,
        //   },
        // ],
      },
    ],
  },
  {
    title: 'Rol Yönetimi',
    route: 'access-control',
    icon: 'ShieldIcon',
    // acl: {
    action: 'read',
    resource: 'ACL',
    // },
  },
  
  {
    title: 'Lisans İşlemleri',
    route: null,
    //icon: 'EyeOffIcon',
    // disabled: true,
  },
  {
    title: 'Sistem Ayarları',
    href: 'https://pixinvent.ticksy.com/',
    icon: 'LifeBuoyIcon',
  },
  {
    title: 'Veritabanı Yedek',
    href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
    icon: 'FileTextIcon',
  },
]
