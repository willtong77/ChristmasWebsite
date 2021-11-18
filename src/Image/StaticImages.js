import Image from "./Image";
export default function StaticImages() {
  let merry_christmas=
  {
    name: 'Merry Christmas',
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-hii7479o%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F14247%2F33044%2Fmerry_christmas_banner__32157.1579723037.png%3Fc%3D2&f=1&nofb=1',
    width: 700,
    height: 200,
    top: '0%',
    left: '27.5%'
  }
  let santa_claus=
  {
    name: 'Santa Claus',
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-EpBsrI58yRk%2FWFlHh6XmTmI%2FAAAAAAAADxA%2F5oFOsi3UmxMgF5gw6Yjk_M-w_K7ICGL_gCLcB%2Fs1600%2Fsanta_claus_png_clipart_image.png&f=1&nofb=1',
    width: 200,
    height: 250,
    top: '65%',
    left: '0%'
  }
  let rudolph=
  {
    name: 'Rudolph',
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F11%2FRudolph-Transparent-Background.png&f=1&nofb=1',
    width: 150,
    height: 225,
    top: '65%',
    left: '88%'
  }
  return (
    <div>
      <Image icon={merry_christmas} />
      <Image icon={santa_claus} />
      <Image icon={rudolph} />
    </div>
  )
}