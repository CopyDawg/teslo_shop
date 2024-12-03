import { initialData } from "./seed";
import prisma from '../lib/prisma';

async function main () {

    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();


    const {categories, products} = initialData;
    const categoriesData = categories.map( category => ({
        name: category
    }));

    await prisma.category.createMany({
        data: categoriesData
    });

    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id
        return map;
    }, {} as Record<string, string>);

    products.map( async product => {
        const {images, type, ...rest} = product;
        const productDB = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type]
            }
        });
        images.map( async image => {
            await prisma.productImage.create({
                data: {
                    url: image,
                    productId: productDB.id
                }
            });
        });
    });

    console.log('Seed ejecutado correctamente');
}

(() => {
    main();
})();