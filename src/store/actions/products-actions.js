export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_REJECTED = 'FETCH_REJECTED';
export const FETCH_FULFILLED = 'FETCH_FULFILLED';

const products = [
  {
    id: 1, name: 'Water', popularity: 0.9, price: 1.2, image: 'https://cdn0.woolworths.media/content/wowproductimages/large/285416.jpg',
  },
  {
    id: 2, name: 'Cabbage', popularity: 0.1, price: 2.1, image: 'http://www.specialtyproduce.com/sppics/915.png',
  },
  {
    id: 3, name: 'Pens', popularity: 0.2, price: 9.90, image: 'https://www.hach.ch/media/catalog/product/cache/1/image/700x/040ec09b1e35df139433887a97daa66f/2/1/216371-1.jpg',
  },
  {
    id: 4, name: 'Teddy', popularity: 0.99, price: 29.90, image: 'https://i5.walmartimages.com/asr/7617e51c-6004-42c1-ae63-006728db4ced_1.e3d0bbf4faa40c0a21af34e4f1d02546.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
  },
  {
    id: 5, name: 'Lego Mindstorms EV3', popularity: 0.5, price: 239.90, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6022/6022005_sd.jpg;maxHeight=640;maxWidth=550',
  },
  {
    id: 6, name: 'Bread', popularity: 0.7, price: 1.95, image: 'https://www.kochtopf.me/wp-content/uploads/2009/02/Basler-Brot.jpg',
  },
  {
    id: 7, name: 'Apple', popularity: 0.4, price: 2.20, image: 'https://www.chefsculinar.de/chefsculinar/ds_img/assets_800/wk-01-apfel.jpg',
  },
  {
    id: 8, name: 'Bananas', popularity: 0.8, price: 2.45, image: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2NS8xNDkvb3JpZ2luYWwvYmFuYW5hcy5qcGc=',
  },
  {
    id: 9, name: 'Lindt Bunny', popularity: 0.2, price: 8.90, image: 'https://www.lindt.de/fileadmin/data_lindt_de/user_uploads/produkte/ostern/goldhasen-assets/67111.png',
  },
  {
    id: 10, name: 'IceTea', popularity: 0.3, price: 1.40, image: 'https://www.marlenessweetthings.ch/wp-content/uploads/2019/05/Migros-Kult-Ice-Tea12.jpg',
  },
];

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCH_PENDING });
  setTimeout(() => {
    dispatch({ type: FETCH_FULFILLED, payload: { products } });
  }, 1000);
};
