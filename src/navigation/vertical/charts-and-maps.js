export default [
  {
    header: 'E-posta İşlemlerİ',
  },
  {
    title: 'E-posta',
    icon: 'MailIcon',
    tag: '3',
    tagVariant: 'light-danger',
    children: [
      {
        title: 'Gelen E-posta',
        route: 'charts-apex-chart',
      },
      {
        title: 'Giden E-posta',
        route: 'charts-chartjs',
      },
      {
        title: 'E-posta Ayarları',
        route: 'charts-echart',
      },
    ],
  },
  // {
  //   title: 'Leaflet',
  //   route: 'maps-leaflet',
  //   icon: 'MapIcon',
  // },
]
