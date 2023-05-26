const GalleryIconFlair = ({ color = '#E83324' }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(1 1)" stroke={color} fill="none" fillRule="evenodd">
        <circle cx="6" cy="6" r="6" />
        <path fill={color} d="m6 7.5-1.763.927.336-1.963-1.426-1.391 1.971-.287L6 3l.882 1.786 1.971.287-1.426 1.39.336 1.964z" />
      </g>
    </svg>
  )
}

export default GalleryIconFlair;
