import huawei1 from '../img/huawei-1.jpg'
import huawei2 from '../img/huawei-2.jpg'
import asus1 from '../img/asus-1.jpg'
import asus2 from '../img/asus-2.jpg'
import dell from '../img/dell-1.jpg'
import mack1 from '../img/mack-1.jpeg'
import mack2 from '../img/mack-2.jpg'
import hp1 from '../img/hp-1.jpeg'
import hp2 from '../img/hp-2.png'
import lenovo1 from '../img/lenovo-1.jpg'
import lenovo2 from '../img/lenovo-2.jpg'
import acer from '../img/acer-1.png'

const ValidationService = {
    products : [
        {
          name: 'Portatil huawei',
          description: 'l3 I5 8+512gb',
          img: huawei1,
          price: '3.379.900',
        },
        {
          name: 'Portatil Asus',
          description: 'x409ma-bv155t Celeron 14 4gb Db 500gb win10',
          img: asus1,
          price: '1.219.900',
        },
        {
          name: 'Portatil Dell',
          description: 'Inspiron 2493 Core I3 10th Gen 1tb 8gb Win10',
          img: dell,
          price: '1.899.900',
        },
        {
          name: 'Macbook Air 2020',
          description: 'Core I3 -8gb ram 256 Ssd - Sellada',
          img: mack1,
          price: '4.394.900',
        },
        {
          name: 'Portatil Hp 255 G7',
          description: 'Amd athlon 4gb 200gb Windows 10 home 15.6',
          img: hp1,
          price: '1.339.900',
        },
        {
          name: 'Portatil Huawei Matebook',
          description: 'I3 I5 8+512gb',
          img: huawei2,
          price: '3.379.900',
        },
        {
          name: 'Lenovo Ideadpad L340',
          description: 'I5 9300h Ram 8g Gtx 1650 portatil Gamer',
          img: lenovo1,
          price: '3.2 39.900',
        },
        {
          name: 'Portatil Asus X409ma',
          description: 'bv155t Celeron 14 4gb Dd 500gb Win10',
          img: asus2,
          price: '1.219.900',
        },
        {
          name: 'Portatil Hp',
          description: '255 G7 Amd Athlon 4gb 500gb Windows 10 home 15.6',
          img: hp2,
          price: '1.339.900',
        },
        {
          name: 'Portatil Acer',
          description: '34fr Core I3 1005gl 4gb 256ssd Win10',
          img: acer,
          price: '1.759.900',
        },
        {
          name: 'Lenovo Ideadpad',
          description: 'L340 I5 9300h Ram 8g Gtx 1650 Protatil Gamer',
          img: lenovo2,
          price: '3.339.900',
        },
        {
          name: 'Mackbook Air',
          description: '2020 - Core I3 - 8gb Ram - 256gb Ssd - Sellada',
          img: mack2,
          price: '4.339.900',
        },
      ],

    getProducts: function() {
        return this.products;
    },
    getProduct: function(id) {
        return this.products[id];
    }
};

export default ValidationService;