const GalleryIconEyes = ({ color = '#E83324' }) => {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(1 1)" stroke={color} fill="none" fillRule="evenodd">
        <circle cx="4.05" cy="4.05" r="4.05" />
        <circle cx="13.95" cy="4.05" r="4.05" />
        <circle fill={color} cx="13.95" cy="4.05" r="1" />
        <circle fill={color} cx="4.05" cy="4.05" r="1" />
        <path d="M9.9 3.788c2.987-1.235 5.687-1.235 8.1 0M0 3.788c2.987-1.235 5.687-1.235 8.1 0" />
      </g>
    </svg>

  )
}

export default GalleryIconEyes;
