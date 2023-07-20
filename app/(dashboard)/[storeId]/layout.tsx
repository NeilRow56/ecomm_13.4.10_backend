import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import prismadb from "@/lib/prismadb"
import Navbar from "@/components/navbar"

export default async function DashboardLayout ({
    children,
    params,

}: {
    children: React.ReactNode
    params: {storesId: string}
}) {

    const { userId } = auth()

    if(!userId) {
        redirect("/sign-in") 
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storesId,
            userId: userId,
        }
    })

    if (!store) {
        redirect("/")
    }

    return (
        <>
        <div>
            <Navbar />
        </div>
        { children}
        </>
    )
}