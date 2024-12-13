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
          className="fixed left-[50%] top-[50%] flex w-[95vw] max-w-[800px] items-center justify-center"
        >
          <div className="rounded bg-black/90 p-2">
            <Dialog.Title>{title}</Dialog.Title>
            {/* <Dialog.Description>Descripcion</Dialog.Description> */}
            <Dialog.Close asChild>
              <button className="absolute right-2 top-2">
                <IoMdClose size={24} />
              </button>
            </Dialog.Close>
            <div className="relative w-full rounded-lg bg-white p-4 shadow-lg">
              <Image src={imgUrl || "/assets/education/google-cyber.png"} alt={title} width={750} height={500} />
            </div>
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="mt-4 block text-center text-lg text-accent">
                See Certificate
              </a>
            )}

            {credlyLink && (
              <a href={credlyLink} target="_blank" rel="noreferrer" className="mt-4 block text-center text-accent/50 underline">
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
