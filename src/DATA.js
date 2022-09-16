import { nanoid } from 'nanoid'

function id() {
    return nanoid();
}

export const DATA = [
    {
        id: id(),
        img: 'https://www.yeezypop.com/wp-content/uploads/2019/07/by9612_3.png',
        sex: 'male',
        name: 'Blazer Mid Suede',
        brand: 'Nike',
        price: 12999
    },
    {
        id: id(),
        img: 'https://cdn.shopify.com/s/files/1/0609/3016/2861/products/eds-store-sneakersDunk_Low_Laser_Orange-DD1503-800-1_2000x.png?v=1643631628',
        sex: 'male',
        name: 'Air Max 270',
        brand: 'Nike',
        price: 12999
    },
    {
        id: id(),
        img: 'https://i.pinimg.com/originals/71/08/8c/71088c1a101e6f2ac0845545446bee60.png',
        sex: 'male',
        name: 'Yeezy 350',
        brand: 'Adidas',
        price: 12999
    },
    {
        id: id(),
        img: 'https://i.pinimg.com/564x/4a/1f/9a/4a1f9af983c79c96ef36352b96442c1f.jpg',
        sex: 'female',
        name: 'Govnuma 228',
        brand: 'Puma',
        price: 12999
    },
    {
        id: id(),
        img: 'https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-retro-high-off-white-chicago-the-ten-563040_5000x.png?v=1638812979',
        sex: 'male',
        name: 'Air Jordan 11',
        brand: 'Jordan',
        price: 12999
    },
    {
        id: id(),
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yyYe0nv2Z0dsjwC6xYblY21XCOLEZtlUf6Y4Rmb_HLN61QqBb-o2zlf0X1r7PYmSSIc&usqp=CAU',
        sex: 'male',
        name: 'Air force 1',
        brand: 'Nike',
        price: 8900
    }

]