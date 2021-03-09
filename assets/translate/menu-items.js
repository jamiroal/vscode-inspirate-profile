const menuItems = Object.freeze({
  options: [
    {
      folderIcon: 'icon-folder',
      folderUrl: '',
    },
    {
      folderIcon: 'icon-git',
      folderUrl: '',
    },
    {
      folderIcon: 'icon-profile',
      folderUrl: '',
    },
    {
      folderIcon: 'icon-search',
      folderUrl: '',
    },
    {
      folderIcon: 'icon-settings',
      folderUrl: '',
    },
  ],
  content: [
    {
      name: 'Technology',
      data: [
        {
          name: 'HTML',
          article: [{ name: 'HTML5' }, { name: 'HTML Semántico' }],
        },
        {
          name: 'CSS',
          article: [{ name: 'CSS3' }, { name: 'SCSS' }, { name: 'SASS' }],
        },
        {
          name: 'JAVASCRIPT',
          article: [
            { name: 'NodeJS' },
            { name: 'Angular' },
            { name: 'React JS' },
          ],
        },
      ],
    },
    {
      name: 'Bussiness & Product',
      data: [
        {
          name: 'Ecommerce',
          article: [{ name: 'Shopify' }, { name: 'Woocommerce' }],
        },
      ],
    },
    {
      name: 'Life',
      data: [
        { name: 'Nba', article: [{ name: 'AllStar' }, { name: 'Finals' }] },
        {
          name: 'Videojuegos',
          article: [{ name: 'Hitman 3' }, { name: 'Resident Evil Village' }],
        },
      ],
    },
  ],
});

export { menuItems };
