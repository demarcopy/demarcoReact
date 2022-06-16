export const productos = [
    {
    id: 1,
    name: 'Remera de algodon', 
    price: 200,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. ',
    image: 'https://mensfactory.com.uy/wp-content/uploads/2020/10/REMERA-LISA-NEGRA_01.jpg',
    stock: 5
    },
    {
    id: 2,
    name: 'Black Hoodie',
    price: 200,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. ',
    image: 'https://http2.mlstatic.com/D_NQ_NP_833658-MLU49548127693_042022-O.webp',
    stock: 8
    },
    {
    id: 3,
    name: 'Baggy carpenter jean',
    price: 300,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. ',
    image: 'https://www.hallensteins.com/content/products/ab-baggy-carpenter-jean-washed-black-front-10003019.jpg?width=2058',
    stock: 1
    },
    {
    id: 4,
    name: 'Black T-Shirt Angel', 
    price: 400,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. ',
    image: 'https://ae01.alicdn.com/kf/HTB12E84bbys3KVjSZFnq6xFzpXai/Custom-Ftp-Men-Casual-T-Shirts-Man-Fashion-Cotton-Tops-Black-Size-S-3XL.jpg',
    stock: 4
    },
    {
    id: 5,
    name: 'Air Max 97 Negras',
    price: 2400,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. ',
    image: 'https://falabella.scene7.com/is/image/Falabella/7375803_1?wid=800&hei=800&qlt=70',
    stock: 6
    },
    {
    id: 6,
    name: 'VaporMax Triple Black',
    price: 2400,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. Primis netus himenaeos aliquam ac at lectus fermentum et maecenas nec urna, nostra nisi quisque torquent vehicula ridiculus vestibulum felis class ornare inceptos volutpat, purus posuere aliquet iaculis est aptent nisl nam diam condimentum.',
    image: 'https://www.thenextsole.com/storage/images/849557-006.png',
    stock: 36
    },
    {
    id: 7,
    name: 'Chaleco estilo Punk',
    price: 2400,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. ',
    image: 'https://m.media-amazon.com/images/I/51eTR23TTrL._AC_UX385_.jpg',
    stock: 4
    }
]

const item = {
    id: 8,
    name: 'Camisa polar',
    price: 400,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. ',
    image: 'https://http2.mlstatic.com/D_NQ_NP_620964-MLU49985255871_052022-O.webp',
    stock: 4
}


export const getItems = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
};
        


export const getItem = () => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
               resolve(item); 
            }, 2000);
        }
    )}                                                                          