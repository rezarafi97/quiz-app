import Image from "next/image";
import Link from "next/link";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

export default async function About() {
    const session = await getServerSession(options);

    if (!session) {
        redirect("/api/auth/signIn?callbackUrl=/about");
    }
    const photo =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMUUkDr8JtMKPdaPkWkXuZWAuRFtCSDaEsw&usqp=CAU";

    return (
        <main className="p-5 mt-2 bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded mx-auto w-7/12 ">
            <div>
                <div className="text-gray-300  text-center mb-5">
                    <h1 className="text-lg">رضا رفیع زاده</h1>
                    <h2>برنامه نویس</h2>
                </div>
                <Link href={`/about/photo`}>
                    <Image
                        alt=""
                        src={photo}
                        height={400}
                        width={400}
                        className="mx-auto rounded object-cover aspect-square"
                    />
                </Link>
            </div>
        </main>
    );
}
