export default function DynamicImage({icon, click}) {
  return (
    <img
      className="DynamicImage"
      src={icon.url}
      alt={icon.name}
      onClick={click}
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