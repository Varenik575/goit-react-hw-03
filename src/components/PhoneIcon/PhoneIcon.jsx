function PhoneIcon({ height, width, color }) {
  return (
    <svg
      width={width}
      height={height}
     
      viewBox="0 0 30 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title desc"
      fill={color}
    >
      <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
    </svg>
  );
}

export default PhoneIcon;
