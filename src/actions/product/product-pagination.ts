'use server';

import prisma from "@/lib/prisma";

interface PaginationOptions {
    page?: number;
    take?: number;
}

export const getPaginatedProductsWithImages = async ({
    page = 1,
    take = 12
}: PaginationOptions) => {
    if(isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;
    try {
        // 1. Obtener los productos
        const products = await prisma.product.findMany({
            take: take,
            skip: (page - 1) * take,
            include: {
                ProductImages: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        });
        // 2. Obtener el total de páginas
        const totalCount = await prisma.product.count({});

        return {
            currentPage: page,
            totalPages: Math.ceil(totalCount / take),
            products: products.map( product => ({
                ...product,
                images: product.ProductImages.map( image => image.url)
            }))
        }
    } catch (error) {
        console.log(error);
        throw new Error("No se pudo cargar los productos");
        
    }

}