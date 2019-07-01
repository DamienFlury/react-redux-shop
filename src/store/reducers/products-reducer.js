const initialState = [
  { id: 1, name: 'Water', image: 'https://danone-evian-com-prod.s3-eu-west-1.amazonaws.com/origin/testimonial.jpg' },
  { id: 2, name: 'Paper', image: 'https://www.officemax.co.nz/Images/ProductImages/500/3557618.jpg' },
  { id: 3, name: 'Yogurt', image: 'https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2017/05/1140-yogurt-plain-greek-aarp.imgcache.rev8dc2294e030d595717e954b5f741d47f.jpg' },
  { id: 4, name: 'Teddy', image: 'https://i5.walmartimages.com/asr/7617e51c-6004-42c1-ae63-006728db4ced_1.e3d0bbf4faa40c0a21af34e4f1d02546.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF' },
  { id: 5, name: 'Lego Mindstorms EV3', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6022/6022005_sd.jpg;maxHeight=640;maxWidth=550' },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return action.payload.products;
    default:
      return state;
  }
};

export default productsReducer;
