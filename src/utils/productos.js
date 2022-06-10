export const productos = [
    {
    id: 1,
    name: 'Producto 1',
    price: 200,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. Primis netus himenaeos aliquam ac at lectus fermentum et maecenas nec urna, nostra nisi quisque torquent vehicula ridiculus vestibulum felis class ornare inceptos volutpat, purus posuere aliquet iaculis est aptent nisl nam diam condimentum.',
    image: 'https://picsum.photos/200/500',
    stock: 5
    },
    {
    id: 2,
    name: 'Producto 2',
    price: 200,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. Primis netus himenaeos aliquam ac at lectus fermentum et maecenas nec urna, nostra nisi quisque torquent vehicula ridiculus vestibulum felis class ornare inceptos volutpat, purus posuere aliquet iaculis est aptent nisl nam diam condimentum.',
    image: 'https://picsum.photos/200/360',
    stock: 8
    },
    {
    id: 3,
    name: 'Producto 3',
    price: 300,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. Primis netus himenaeos aliquam ac at lectus fermentum et maecenas nec urna, nostra nisi quisque torquent vehicula ridiculus vestibulum felis class ornare inceptos volutpat, purus posuere aliquet iaculis est aptent nisl nam diam condimentum.',
    image: 'https://picsum.photos/200/120',
    stock: 1
    },
    {
    id: 4,
    name: 'Producto 4',
    price: 400,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, eget curabitur taciti duis lacus rhoncus parturient tincidunt, augue nascetur auctor nibh metus mus. Primis netus himenaeos aliquam ac at lectus fermentum et maecenas nec urna, nostra nisi quisque torquent vehicula ridiculus vestibulum felis class ornare inceptos volutpat, purus posuere aliquet iaculis est aptent nisl nam diam condimentum.',
    image: 'https://picsum.photos/200/030',
    stock: 4
    }
]



export const traerProductos = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
};
        