import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function() {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title title="Verificar orden"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Editar orden</span>
                        <Link href="/cart" className="underline mb-5">
                            Editar articulos
                        </Link>
                        {/* Items */}
                        {
                            productsInCart.map(prod => (
                                <div key={prod.slug} className="flex mb-3 min-h-36">
                                    <Image
                                        src={`/products/${prod.images[0]}`}
                                        width={100}
                                        height={100}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                        }}
                                        alt={prod.title}
                                        className="mr-5 rounded "
                                    />
                                    <div>
                                        <p>{prod.title}</p>
                                        <p>${prod.price} x 3</p>
                                        <p className="font-bold">Subtotal: {prod.price*3}</p>
                                        <button className="underline mt-1">Remover</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Checkout */}
                    <div className="bg-white rounded-xl shadow-xl p-7">

                        <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
                        <div className="mb-10">
                            <p>Omar Villanueva</p>
                            <p>Av. Rio nilo 8111</p>
                            <p>Loma dorada secc. C</p>
                            <p>Tonalá</p>
                            <p>Jalisco</p>
                            <p>CP 45402</p>
                            <p>3322548841</p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-0.5 bg-gray-200 mb-10 rounded"/>

                        <h2 className="text-2xl mb-2">Resumen de orden</h2>
                        <div className="grid grid-cols-2">
                            <span>No. productos</span>
                            <span className="text-right">3 artículos</span>
                            <span>Subtotal</span>
                            <span className="text-right">$75</span>
                            <span>Impuestos (15%)</span>
                            <span className="text-right">$15</span>
                            <span className="mt-5 text-2xl">Total:</span>
                            <span className="mt-5 text-2xl text-right">$100</span>
                        </div>
                        <div className="mt-5 mb-2 w-full">

                            <p className="mb-5">
                                <span className="text-xs">
                                    Al seleccionar "Confirmar orden", aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
                                </span>
                            </p>

                            <Link 
                                href="/orders/123"
                                className="flex btn-primary justify-center"
                            >
                                Confirmar orden
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}