export default function Image({icon}) {
  return (
    <img
      className="Image"
      src={icon.url}
      alt={icon.name}
      style={{
        width: icon.width,
        height: icon.height,
        position: 'absolute',
        top: icon.top,
        left: icon.left,
      }}
    />
  );
}