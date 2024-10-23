interface MenuOptionsProps {
  isOpen: boolean;
}

export default function HeaderMenu({ isOpen }: MenuOptionsProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <ul className="w-64 flex flex-col absolute top-8 right-0 bg-colorBlack border border-colorGray text-colorWhite rounded-md shadow-md">
      <li className="py-2 px-4 hover:text-colorRed rounded-t-md">My Account</li>
      <li className="py-2 px-4 hover:text-colorRed ">Privacy</li>
      <li className="py-2 px-4 hover:text-colorRed rounded-b-md">Settings</li>
    </ul>
  );
}
