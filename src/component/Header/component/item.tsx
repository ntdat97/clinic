export interface ItemHeaderProps {
    text: string;
    href: string;
}

export const ItemHeader = ({ text, href }: ItemHeaderProps) => {
  return (
    <li className="mr-5">
      <a className="text-gray-500 hover:text-gray-400" href={href}>
        {text}
      </a>
    </li>
  );
};
