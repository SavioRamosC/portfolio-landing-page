interface MenuOptionsProps {
  isOpen: boolean;
}

export default function HeaderMenu({ isOpen }: MenuOptionsProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <ul className="w-64 flex flex-col absolute top-8 right-0 bg-colorRed border border-colorGray rounded-md shadow-md">
      <li className="py-2 px-4 hover:bg-colorWhite rounded-t-md">My Account</li>
      <li className="py-2 px-4 hover:bg-colorWhite ">Privacy</li>
      <li className="py-2 px-4 hover:bg-colorWhite rounded-b-md">Settings</li>
    </ul>
  );
}
