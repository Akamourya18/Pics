import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID q2H6y0Hk6anVijGCDPiG2eGq2HGF1K2XuzlOCfkL4GE',
  },
});
