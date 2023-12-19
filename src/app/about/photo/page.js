import Frame from "@/src/components/modal/Frame";

export default function PhotoPage() {
    const photo =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMUUkDr8JtMKPdaPkWkXuZWAuRFtCSDaEsw&usqp=CAU";

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Frame photo={photo} />
            </div>
        </div>
    );
}
