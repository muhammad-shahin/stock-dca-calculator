import Link from 'next/link';

const Button = ({
  text,
  type = 'button',
  href = '/',
  iconLeft,
  iconRight,
  className,
}) => {
  return (
    <Link href={href}>
      <button
        type={type}
        className={`flex justify-center items-center gap-3 ${className}`}
      >
        {iconLeft}
        {text}
        {iconRight}
      </button>
    </Link>
  );
};

export default Button;
