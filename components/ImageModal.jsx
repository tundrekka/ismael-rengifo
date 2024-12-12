import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const CertificateModal = ({ children, link, credlyLink, title, imgUrl }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          style={{ transform: "translate(-50%, -50%)" }}
          className="fixed w-[95vw] max-w-[800px] top-[50%] left-[50%] flex items-center justify-center"
        >
          <div className="bg-black/90 p-2 rounded">
            <Dialog.Title>{title}</Dialog.Title>
            {/* <Dialog.Description>Descripcion</Dialog.Description> */}
            <Dialog.Close asChild>
              <button className="absolute top-2 right-2">
                <IoMdClose size={24} />
              </button>
            </Dialog.Close>
            <div className="bg-white p-4 rounded-lg shadow-lg w-full relative">
              <Image
                src={imgUrl || "/assets/education/google-cyber.png"}
                alt={title}
                width={750}
                height={500}
              />
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-accent text-lg mt-4 block text-center"
              >
                See Certificate
              </a>
            )}

            {credlyLink && (
              <a
                href={credlyLink}
                target="_blank"
                rel="noreferrer"
                className="text-accent/50 underline mt-4 block text-center"
              >
                See Credly Badge
              </a>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CertificateModal;
