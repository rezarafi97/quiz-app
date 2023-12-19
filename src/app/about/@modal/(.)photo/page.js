import Frame from "@/src/components/modal/Frame";
import Modal from "@/src/components/modal/Modal";

export default function PhotoModal() {
    const photo =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMUUkDr8JtMKPdaPkWkXuZWAuRFtCSDaEsw&usqp=CAU";

    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    );
}
