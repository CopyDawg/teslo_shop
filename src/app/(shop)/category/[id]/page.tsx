import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: Category;
    }
}
const products = initialData.products;

export default function({params} : Props) {
    const {id} = params;
    // if(id === "kids") {
    //     notFound();
    // }

    const myProducts = products.filter( prod => id === prod.gender)
    if (myProducts.length === 0) {
        notFound();
    }

    const labels: Record<Category, string> = {
        'men': 'Hombres',
        'women': 'Mujeres',
        'kid': 'Niños',
        'unisex': 'Todos',
    }

    return (
        <>
            <Title title={`Artículos para ${labels[id]}`} subtitle={`${myProducts.length} productos`} classname="mb-2"/>
            <ProductGrid products={myProducts}/>
        </>
    );
}