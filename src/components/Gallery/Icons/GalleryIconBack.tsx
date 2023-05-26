const GalleryIconBack = ({ color = '#E83324' }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(1 1)" stroke={color} fill="none" fillRule="evenodd">
        <rect width="14" height="14" rx="2" />
        <path strokeLinecap="round" d="m1.43 5.522 3.964-3.964M12.445 8.539l-3.964 3.964M1.394 9.151l7.394-7.499M12.481 4.91l-7.394 7.499M2.188 11.813 12.394 1.558" />
      </g>
    </svg>

  )
};

export default GalleryIconBack;
