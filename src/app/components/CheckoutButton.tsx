'use client'
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type CheckoutButtonType = {totalPrice: number}

export default function CheckoutButton({totalPrice}: CheckoutButtonType){
    const router = useRouter();
    const carStore = useCartStore();
    const {user} = useUser();
    const handleCheckout = async () => {
        if (!user) {
            carStore.toggleCart();
            router.push(`/sign-in?redirectUrl='/'`)
            return
        }
        carStore.setCheckout('checkout')
    }
    return (
        <div>
    <p className="text-teal-600 font-bold">Total: {formatPrice(totalPrice)}</p>
    <button onClick={handleCheckout} className='w-full rounded-md bg-teal-600 text-white py-2 mt-2'>
        Finalizar compra
    </button>
    </div>
    )
}