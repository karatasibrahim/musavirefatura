export default [
  {
    header: 'ONLİNE İşlemlerİ',
  },
  {
    title: 'Calendar',
    route: 'apps-calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Chat',
    route: 'apps-chat',
    icon: 'MessageSquareIcon',
  },
  {
    title: 'Mükellef İşlemleri',
    route: 'apps-email',
    icon: 'UsersIcon',
    children: [
      {
        title: 'Mükellef Ekle',
        route: 'apps-invoice-list',
      },
      {
        title: 'Mükellef Listesi',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Mükellef Özeti',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
      },       
      {
        title:'Vergi No Sorgulama',
        route:null
      },
      {
        title: 'Maliye', 
        children: [
          {
            title: 'Gayrimenkul Satış',
            route: null,
          },
          {
            title: 'Geçmiş Araçlarım',
            route: null,
          },
          {
            title: 'Gelen EArşiv Fatura',
            route: null,
          },       
          {
            title: 'Giden EArşiv Fatura',
            route: null,
          },     
          {
            title: 'Kesintiler (Stopaj)',
            route: null,
          },
          {
            title: 'Kira Ödemeleri',
            route: null,
          },
          {
            title: 'Mevcut Araçlarım',
            route: null,
          },
          {
            title: 'Vergi Levhaları',
            route: null,
          },
          {
            title: 'Yoklama Denetim',
            route: null,
          },     
                   
        ],
      },
    ],
  },
  // {
  //   title: 'Maliye İşlemleri',
  //   route: 'apps-chat',
  //   icon: 'BriefcaseIcon',
  //   // children: [
  //   //   {
  //   //     title: 'Beyannameler',
  //   //     route: 'maliye-beyannameler',
  //   //   },
  //   //   {
  //   //     title: 'Borcu Yoktur',
  //   //     route: { name: 'apps-invoice-preview', params: { id: 4987 } },
  //   //   },
  //   //   {
  //   //     title: 'Kalan Beyannameler',
  //   //     route: { name: 'apps-invoice-edit', params: { id: 4987 } },
  //   //   },
  //   //   {
  //   //     title: 'Mükellefiyet Yazısı',
  //   //     route: { name: 'apps-invoice-add' },
  //   //   },
  //   //   {
  //   //     title: 'Ödenen G-Geçici',
  //   //     route: { name: 'apps-invoice-add' },
  //   //   },
  //   //   {
  //   //     title: 'Ödenen K-Geçici',
  //   //     route: { name: 'apps-invoice-add' },
  //   //   },
  //   //   {
  //   //     title: 'Pos Sorgulama',
  //   //     route: { name: 'apps-invoice-add' },
  //   //   },
  //   //   {
  //   //     title: 'Sicil Kaydım',
  //   //     route: { name: 'apps-invoice-add' },
  //   //   },
  //   //   {
  //   //     title: 'Tebligat Sorgulama',
  //   //     route: { name: 'apps-invoice-add' },
  //   //   },
  //   // ],
  // },
  {
    title: 'SGK İşlemleri',
    route: 'apps-todo',
    icon: 'CommandIcon',
    children: [
      {
        title: 'Asgari İşçilik Hesabı',
        route: 'apps-invoice-list',
      },
      {
        title: 'Bildirgeler',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Borcu Yoktur',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
      },
      {
        title: 'İşe Giriş - Çıkış',
        route: { name: 'apps-invoice-add' },
      },
      {
        title: 'SGK Takip',
        route: { name: 'apps-invoice-add' },
      },
      {
        title: 'SGK Viziteler',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
  // {
  //   title: 'Finans İşlemleri',
  //   route: 'apps-calendar',
  //   icon: 'TrendingUpIcon',
  //   // children: [
  //   //   {
  //   //     title: 'Cari İşlemleri',
  //   //     route: 'apps-invoice-list',
  //   //   },
  //   //   {
  //   //     title: 'Gelir-Gider İşlemleri',
  //   //     route: { name: 'apps-invoice-preview', params: { id: 4987 } },
  //   //   },      
  //   //   {
  //   //     title: 'Muhasebe Ücretleri',
  //   //     route: { name: 'apps-invoice-add' },
  //   //   },
  //   // ],
  // },
  {
    title: 'E-Devlet İşlemleri',
    icon: 'MonitorIcon',
    children: [
      {
        title: 'Dava Dosyaları',
        route: 'apps-invoice-list',
      },
      {
        title: 'İcra Dosyaları',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
       
    ],
  },
   {
     title: 'Hızlı Girişler',
     icon: 'ChevronsRightIcon',
     children: [
       {
         title: 'E-Beyanname',
         route: 'apps-e-commerce-shop',
       },
       {
         title: 'E-Fatura Portal',
         route: { name: 'apps-e-commerce-product-details', params: { slug: 'apple-watch-series-5-27' } },
       },
       {
         title: 'Gelir İdaresi ',
         route: 'apps-e-commerce-wishlist',
       },
       {
         title: 'Maliye',
         route: 'apps-e-commerce-checkout',
       },
       {
        title: 'Sgk',
        route: 'apps-e-commerce-checkout',
      },
     ],
   },
  // {
  //   title: 'User',
  //   icon: 'UserIcon',
  //   children: [
  //     {
  //       title: 'List',
  //       route: 'apps-users-list',
  //     },
  //     {
  //       title: 'View',
  //       route: { name: 'apps-users-view', params: { id: 21 } },
  //     },
  //     {
  //       title: 'Edit',
  //       route: { name: 'apps-users-edit', params: { id: 21 } },
  //     },
  //   ],
  // },
  // {
  //   title: 'Pages',
  //   icon: 'FileIcon',
  //   children: [
  //     {
  //       title: 'Authentication',
  //       icon: 'CircleIcon',
  //       children: [
  //         {
  //           title: 'Login v1',
  //           route: 'auth-login-v1',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Login v2',
  //           route: 'auth-login-v2',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Register v1',
  //           route: 'auth-register-v1',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Register v2',
  //           route: 'auth-register-v2',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Forgot Password v1',
  //           route: 'auth-forgot-password-v1',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Forgot Password v2',
  //           route: 'auth-forgot-password-v2',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Reset Password v1',
  //           route: 'auth-reset-password-v1',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Reset Password v2',
  //           route: 'auth-reset-password-v2',
  //           target: '_blank',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Account Settings',
  //       route: 'pages-account-setting',
  //     },
  //     {
  //       title: 'Profile',
  //       route: 'pages-profile',
  //     },
  //     {
  //       title: 'Faq',
  //       route: 'pages-faq',
  //     },
  //     {
  //       title: 'Knowledge Base',
  //       route: 'pages-knowledge-base',
  //     },
  //     {
  //       title: 'Pricing',
  //       route: 'pages-pricing',
  //     },
  //     {
  //       title: 'Blog',
  //       children: [
  //         {
  //           title: 'List',
  //           route: 'pages-blog-list',
  //         },
  //         {
  //           title: 'Detail',
  //           route: { name: 'pages-blog-detail', params: { id: 1 } },
  //         },
  //         {
  //           title: 'Edit',
  //           route: { name: 'pages-blog-edit', params: { id: 1 } },
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Mail Templates',
  //       children: [
  //         {
  //           title: 'Welcome',
  //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
  //         },
  //         {
  //           title: 'Reset Password',
  //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
  //         },
  //         {
  //           title: 'Verify Email',
  //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
  //         },
  //         {
  //           title: 'Deactivate Account',
  //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
  //         },
  //         {
  //           title: 'Invoice',
  //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
  //         },
  //         {
  //           title: 'Promotional',
  //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Miscellaneous',
  //       icon: 'CircleIcon',
  //       children: [
  //         {
  //           title: 'Coming Soon',
  //           route: 'misc-coming-soon',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Not Authorized',
  //           route: 'misc-not-authorized',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Under Maintenance',
  //           route: 'misc-under-maintenance',
  //           target: '_blank',
  //         },
  //         {
  //           title: 'Error',
  //           route: 'misc-error',
  //           target: '_blank',
  //         },
  //       ],
  //     },
  //   ],
  // },
]
