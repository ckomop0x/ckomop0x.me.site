export default function DevelopmentIcon({
  title,
  width = 800,
  height = 600,
}: {
  title?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 800 600"
      aria-labelledby={title}
    >
      {title ? <title>{title}</title> : <title>Development</title>}
      <defs>
        <linearGradient
          x1="28.083%"
          y1="23.837%"
          x2="73.909%"
          y2="71.811%"
          id="prefix__a"
        >
          <stop stopColor="#270036" offset="0%" />
          <stop stopColor="#4F008B" offset="59.36%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="28.083%"
          y1="21.247%"
          x2="73.909%"
          y2="73.97%"
          id="prefix__c"
        >
          <stop stopColor="#270036" offset="0%" />
          <stop stopColor="#4F008B" offset="59.36%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="28.083%"
          y1="33.264%"
          x2="73.909%"
          y2="63.952%"
          id="prefix__d"
        >
          <stop stopColor="#270036" offset="0%" />
          <stop stopColor="#4F008B" offset="59.36%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient x1="-.001%" y1="50.016%" x2="98.687%" y2="50.016%">
          <stop stopColor="#B208AB" offset="0%" />
          <stop stopColor="#4E0D98" offset="100%" />
        </linearGradient>
        <linearGradient x1="28.083%" y1="10.427%" x2="73.909%" y2="82.99%">
          <stop stopColor="#270036" offset="0%" />
          <stop stopColor="#4F008B" offset="59.36%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient x1="28.083%" y1="41.215%" x2="73.909%" y2="57.323%">
          <stop stopColor="#270036" offset="0%" />
          <stop stopColor="#4F008B" offset="59.36%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient x1=".345%" y1="49.997%" x2="99.398%" y2="49.997%">
          <stop stopColor="#3F499C" offset="0%" />
          <stop stopColor="#C619BB" offset="100%" />
        </linearGradient>
        <linearGradient x1=".345%" y1="49.997%" x2="99.398%" y2="49.997%">
          <stop stopColor="#3F499C" offset="0%" />
          <stop stopColor="#C619BB" offset="100%" />
        </linearGradient>
        <linearGradient x1=".345%" y1="49.997%" x2="99.398%" y2="49.997%">
          <stop stopColor="#3F499C" offset="0%" />
          <stop stopColor="#C619BB" offset="100%" />
        </linearGradient>
        <linearGradient x1=".345%" y1="49.997%" x2="99.398%" y2="49.997%">
          <stop stopColor="#3F499C" offset="0%" />
          <stop stopColor="#C619BB" offset="100%" />
        </linearGradient>
        <linearGradient x1=".345%" y1="49.997%" x2="99.398%" y2="49.997%">
          <stop stopColor="#3F499C" offset="0%" />
          <stop stopColor="#C619BB" offset="100%" />
        </linearGradient>
        <linearGradient x1=".02%" y1="50.01%" x2="99.402%" y2="50.01%">
          <stop stopColor="#4D1AA6" offset="0%" />
          <stop stopColor="#E42D97" offset="100%" />
        </linearGradient>
        <linearGradient x1=".02%" y1="50.01%" x2="99.402%" y2="50.01%">
          <stop stopColor="#4D1AA6" offset="0%" />
          <stop stopColor="#E42D97" offset="100%" />
        </linearGradient>
        <linearGradient x1=".02%" y1="50.01%" x2="99.402%" y2="50.01%">
          <stop stopColor="#4D1AA6" offset="0%" />
          <stop stopColor="#E42D97" offset="100%" />
        </linearGradient>
        <linearGradient x1=".02%" y1="50.01%" x2="99.402%" y2="50.01%">
          <stop stopColor="#4D1AA6" offset="0%" />
          <stop stopColor="#E42D97" offset="100%" />
        </linearGradient>
        <linearGradient x1=".02%" y1="50.01%" x2="99.402%" y2="50.01%">
          <stop stopColor="#4D1AA6" offset="0%" />
          <stop stopColor="#E42D97" offset="100%" />
        </linearGradient>
        <linearGradient x1="1.417%" y1="50.005%" x2="99.398%" y2="50.005%">
          <stop stopColor="#B32AFF" offset="0%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient x1="1.417%" y1="50.005%" x2="99.398%" y2="50.005%">
          <stop stopColor="#B32AFF" offset="0%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient x1="1.417%" y1="50.005%" x2="99.398%" y2="50.005%">
          <stop stopColor="#B32AFF" offset="0%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient x1="1.417%" y1="50.005%" x2="99.398%" y2="50.005%">
          <stop stopColor="#B32AFF" offset="0%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient x1="1.417%" y1="50.005%" x2="99.398%" y2="50.005%">
          <stop stopColor="#B32AFF" offset="0%" />
          <stop stopColor="#4C24B1" offset="100%" />
        </linearGradient>
        <linearGradient x1="0%" y1="50%" x2="100.001%" y2="50%">
          <stop stopColor="#A1BAFF" offset="0%" />
          <stop stopColor="#FFF" offset="43.32%" />
        </linearGradient>
        <linearGradient x1="0%" y1="50%" x2="99.999%" y2="50%">
          <stop stopColor="#3133AB" offset="0%" />
          <stop stopColor="#2E38B0" offset="18.25%" />
          <stop stopColor="#2647BD" offset="40.69%" />
          <stop stopColor="#1960D4" offset="65.33%" />
          <stop stopColor="#0783F3" offset="91.37%" />
          <stop stopColor="#0090FF" offset="100%" />
        </linearGradient>
        <linearGradient x1="49.994%" y1="2.24%" x2="49.994%" y2="122.475%">
          <stop stopColor="#311341" offset="0%" />
          <stop stopColor="#3113C2" offset="22.99%" />
          <stop stopColor="#2F18C5" offset="34.79%" />
          <stop stopColor="#2927CC" offset="49.31%" />
          <stop stopColor="#1F40D8" offset="65.24%" />
          <stop stopColor="#1263E9" offset="82.19%" />
          <stop stopColor="#008FFF" offset="99.78%" />
          <stop stopColor="#0090FF" offset="100%" />
        </linearGradient>
        <linearGradient x1="0%" y1="50.001%" x2="100.002%" y2="50.001%">
          <stop stopColor="#7633FF" offset="0%" />
          <stop stopColor="#7137FF" offset="15.85%" />
          <stop stopColor="#6243FF" offset="35.35%" />
          <stop stopColor="#4957FF" offset="56.76%" />
          <stop stopColor="#2672FF" offset="79.37%" />
          <stop stopColor="#0090FF" offset="100%" />
        </linearGradient>
        <linearGradient x1=".004%" y1="50.003%" x2="100.002%" y2="50.003%">
          <stop stopColor="#A1BAFF" offset="0%" />
          <stop stopColor="#FFF" offset="43.32%" />
        </linearGradient>
        <linearGradient x1="50.005%" y1="5.222%" x2="50.005%" y2="92.197%">
          <stop stopColor="#A1BAFF" offset="0%" />
          <stop stopColor="#FFF" offset="43.32%" />
        </linearGradient>
        <linearGradient x1="49.952%" y1=".201%" x2="50.051%" y2="102.771%">
          <stop stopColor="#A1BAFF" offset="0%" />
          <stop stopColor="#FFF" offset="43.32%" />
        </linearGradient>
        <linearGradient x1="59.425%" y1="3.105%" x2="39.709%" y2="101.123%">
          <stop stopColor="#88CFDA" offset="0%" />
          <stop stopColor="#89CFD9" offset=".834%" />
          <stop stopColor="#C8D9BB" offset="47.84%" />
          <stop stopColor="#F0DFA7" offset="82.18%" />
          <stop stopColor="#FFE1A0" offset="100%" />
        </linearGradient>
        <linearGradient x1=".018%" y1="50.009%" x2="100.007%" y2="50.009%">
          <stop stopColor="#7633FF" offset="0%" />
          <stop stopColor="#7137FF" offset="15.85%" />
          <stop stopColor="#6243FF" offset="35.35%" />
          <stop stopColor="#4957FF" offset="56.76%" />
          <stop stopColor="#2672FF" offset="79.37%" />
          <stop stopColor="#0090FF" offset="100%" />
        </linearGradient>
        <linearGradient x1="-.003%" y1="49.977%" x2="99.985%" y2="49.977%">
          <stop stopColor="#7633FF" offset="0%" />
          <stop stopColor="#7137FF" offset="15.85%" />
          <stop stopColor="#6243FF" offset="35.35%" />
          <stop stopColor="#4957FF" offset="56.76%" />
          <stop stopColor="#2672FF" offset="79.37%" />
          <stop stopColor="#0090FF" offset="100%" />
        </linearGradient>
        <linearGradient x1="50.003%" y1="98.274%" x2="50.003%" y2="2.125%">
          <stop stopColor="#9311FF" offset="0%" />
          <stop stopColor="#330050" stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="50.003%" y1="98.274%" x2="50.003%" y2="2.125%">
          <stop stopColor="#9311FF" offset="0%" />
          <stop stopColor="#330050" stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.976%"
          y1="50.102%"
          x2="49.864%"
          y2="50.092%"
          id="prefix__I"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFFFFD" offset="25.52%" />
          <stop stopColor="#FFFDF5" offset="39.25%" />
          <stop stopColor="#FFFBE7" offset="50.18%" />
          <stop stopColor="#FFF7D4" offset="59.63%" />
          <stop stopColor="#FFF2BB" offset="68.14%" />
          <stop stopColor="#FFEC9C" offset="75.96%" />
          <stop stopColor="#FFE577" offset="83.26%" />
          <stop stopColor="#FFDD4C" offset="90.15%" />
          <stop stopColor="#FFD51E" offset="96.47%" />
          <stop stopColor="#FFCF00" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.974%"
          y1="49.715%"
          x2="49.862%"
          y2="49.705%"
          id="prefix__ac"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFFFFD" offset="25.52%" />
          <stop stopColor="#FFFDF5" offset="39.25%" />
          <stop stopColor="#FFFBE7" offset="50.18%" />
          <stop stopColor="#FFF7D4" offset="59.63%" />
          <stop stopColor="#FFF2BB" offset="68.14%" />
          <stop stopColor="#FFEC9C" offset="75.96%" />
          <stop stopColor="#FFE577" offset="83.26%" />
          <stop stopColor="#FFDD4C" offset="90.15%" />
          <stop stopColor="#FFD51E" offset="96.47%" />
          <stop stopColor="#FFCF00" offset="100%" />
        </linearGradient>
        <linearGradient
          x1=".002%"
          y1="49.995%"
          x2="100.002%"
          y2="49.995%"
          id="prefix__ao"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FBFDFF" offset="12.25%" />
          <stop stopColor="#EFF5FF" offset="24.76%" />
          <stop stopColor="#DAE9FF" offset="37.4%" />
          <stop stopColor="#BDD9FF" offset="50.13%" />
          <stop stopColor="#98C3FF" offset="62.95%" />
          <stop stopColor="#6BA9FF" offset="75.82%" />
          <stop stopColor="#378AFF" offset="88.49%" />
          <stop stopColor="#006AFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1=".008%"
          y1="49.994%"
          x2="100.004%"
          y2="49.994%"
          id="prefix__ap"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FBFDFF" offset="12.25%" />
          <stop stopColor="#EFF5FF" offset="24.76%" />
          <stop stopColor="#DAE9FF" offset="37.4%" />
          <stop stopColor="#BDD9FF" offset="50.13%" />
          <stop stopColor="#98C3FF" offset="62.95%" />
          <stop stopColor="#6BA9FF" offset="75.82%" />
          <stop stopColor="#378AFF" offset="88.49%" />
          <stop stopColor="#006AFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1=".007%"
          y1="50.015%"
          x2="100.011%"
          y2="50.015%"
          id="prefix__aq"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FBFDFF" offset="12.25%" />
          <stop stopColor="#EFF5FF" offset="24.76%" />
          <stop stopColor="#DAE9FF" offset="37.4%" />
          <stop stopColor="#BDD9FF" offset="50.13%" />
          <stop stopColor="#98C3FF" offset="62.95%" />
          <stop stopColor="#6BA9FF" offset="75.82%" />
          <stop stopColor="#378AFF" offset="88.49%" />
          <stop stopColor="#006AFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-.01%"
          y1="50.005%"
          x2="99.998%"
          y2="50.005%"
          id="prefix__ar"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FDFEFF" offset="26.21%" />
          <stop stopColor="#F5F9FF" offset="39.96%" />
          <stop stopColor="#E7F1FF" offset="50.81%" />
          <stop stopColor="#D4E6FF" offset="60.16%" />
          <stop stopColor="#BBD8FF" offset="68.53%" />
          <stop stopColor="#9DC6FF" offset="76.21%" />
          <stop stopColor="#78B0FF" offset="83.36%" />
          <stop stopColor="#4E98FF" offset="90.1%" />
          <stop stopColor="#207DFF" offset="96.27%" />
          <stop stopColor="#006AFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-.002%"
          y1="50.008%"
          x2="99.987%"
          y2="50.008%"
          id="prefix__as"
        >
          <stop stopColor="#311842" offset="0%" />
          <stop stopColor="#190C4B" offset="46.11%" />
          <stop stopColor="#000054" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-.008%"
          y1="50.007%"
          x2="99.986%"
          y2="50.007%"
          id="prefix__at"
        >
          <stop stopColor="#F000B5" offset="0%" />
          <stop stopColor="#EF04B8" offset="18.04%" />
          <stop stopColor="#EA10BF" offset="36.46%" />
          <stop stopColor="#E325CC" offset="55.07%" />
          <stop stopColor="#D841DE" offset="73.8%" />
          <stop stopColor="#CB66F4" offset="92.45%" />
          <stop stopColor="#C577FF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="44.816%"
          y1="117.311%"
          x2="51.047%"
          y2="-1.497%"
          id="prefix__au"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FDFEFF" offset="26.21%" />
          <stop stopColor="#F5F9FF" offset="39.96%" />
          <stop stopColor="#E7F1FF" offset="50.81%" />
          <stop stopColor="#D4E6FF" offset="60.16%" />
          <stop stopColor="#BBD8FF" offset="68.53%" />
          <stop stopColor="#9DC6FF" offset="76.21%" />
          <stop stopColor="#78B0FF" offset="83.36%" />
          <stop stopColor="#4E98FF" offset="90.1%" />
          <stop stopColor="#207DFF" offset="96.27%" />
          <stop stopColor="#006AFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-.01%"
          y1="50%"
          x2="100.013%"
          y2="50%"
          id="prefix__av"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FBFDFF" offset="12.25%" />
          <stop stopColor="#EFF5FF" offset="24.76%" />
          <stop stopColor="#DAE9FF" offset="37.4%" />
          <stop stopColor="#BDD9FF" offset="50.13%" />
          <stop stopColor="#98C3FF" offset="62.95%" />
          <stop stopColor="#6BA9FF" offset="75.82%" />
          <stop stopColor="#378AFF" offset="88.49%" />
          <stop stopColor="#006AFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-.002%"
          y1="50.007%"
          x2="100%"
          y2="50.007%"
          id="prefix__aw"
        >
          <stop stopColor="#311842" offset="0%" />
          <stop stopColor="#190C4B" offset="46.11%" />
          <stop stopColor="#000054" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="-.003%"
          y1="49.997%"
          x2="99.995%"
          y2="49.997%"
          id="prefix__ax"
        >
          <stop stopColor="#311842" offset="0%" />
          <stop stopColor="#170BA7" offset="49.37%" />
          <stop stopColor="#0603E6" offset="83.8%" />
          <stop stopColor="#00F" offset="100%" />
        </linearGradient>
        <radialGradient
          cx="50%"
          cy="49.999%"
          fx="50%"
          fy="49.999%"
          r="50%"
          id="prefix__b"
        >
          <stop stopColor="#3E82BF" offset="0%" />
          <stop stopColor="#3E82BF" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.971%"
          gradientTransform="scale(-1 -.9894) rotate(-86.445 -.611 .524)"
          id="prefix__J"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.981%"
          gradientTransform="matrix(-.062 .98726 -.99808 -.06132 1.096 .117)"
          id="prefix__K"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.906%"
          gradientTransform="scale(-1 -.9909) rotate(-86.44 -.61 .525)"
          id="prefix__L"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.977%"
          gradientTransform="scale(-1 -.98926) rotate(-86.445 -.611 .524)"
          id="prefix__M"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.948%"
          cy="49.958%"
          fx="49.948%"
          fy="49.958%"
          r="50.483%"
          gradientTransform="scale(-1 -.99073) rotate(-86.446 -.534 .53)"
          id="prefix__N"
        >
          <stop stopColor="#D6D5D5" offset="0%" />
          <stop stopColor="#B7B5B5" offset="4.3%" />
          <stop stopColor="#817E7E" offset="12.42%" />
          <stop stopColor="#575253" offset="19.97%" />
          <stop stopColor="#383334" offset="26.72%" />
          <stop stopColor="#262021" offset="32.41%" />
          <stop stopColor="#1F191A" offset="36.36%" />
          <stop offset="99.4%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.907%"
          gradientTransform="matrix(-.0621 .98897 -.99807 -.06154 1.096 .117)"
          id="prefix__O"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.98%"
          gradientTransform="matrix(-.062 .98728 -.99808 -.06133 1.096 .117)"
          id="prefix__P"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.977%"
          gradientTransform="scale(-1 -.98926) rotate(-86.445 -.611 .524)"
          id="prefix__Q"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.98%"
          gradientTransform="scale(-1 -.9892) rotate(-86.446 -.611 .524)"
          id="prefix__R"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.98%"
          gradientTransform="scale(-1 -.9892) rotate(-86.446 -.611 .524)"
          id="prefix__S"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.984%"
          gradientTransform="scale(-1 -.9891) rotate(-86.446 -.611 .524)"
          id="prefix__T"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.984%"
          gradientTransform="matrix(-.062 .9872 -.99808 -.06132 1.096 .117)"
          id="prefix__U"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="39.02%"
          gradientTransform="scale(-1 -.98907) rotate(-86.446 -.611 .524)"
          id="prefix__V"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="29.107%" />
          <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.954%"
          gradientTransform="scale(-1 -.98979) rotate(-86.443 -.611 .524)"
          id="prefix__W"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.985%"
          gradientTransform="matrix(-.06199 .98717 -.99808 -.06131 1.096 .117)"
          id="prefix__X"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.984%"
          gradientTransform="scale(-1 -.9891) rotate(-86.446 -.611 .524)"
          id="prefix__Y"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.963%"
          gradientTransform="matrix(-.06202 .98767 -.99807 -.06137 1.096 .117)"
          id="prefix__Z"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="43.046%"
          gradientTransform="scale(-1 -.98766) rotate(-86.451 -.612 .523)"
          id="prefix__aa"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.855%"
          gradientTransform="matrix(-.06218 .99016 -.99807 -.06168 1.096 .116)"
          id="prefix__ab"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.967%"
          gradientTransform="scale(-1 -.9895) rotate(-86.445 -.611 .524)"
          id="prefix__ad"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.977%"
          gradientTransform="scale(-1 -.98926) rotate(-86.445 -.611 .524)"
          id="prefix__ae"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.921%"
          gradientTransform="matrix(-.06208 .98864 -.99807 -.0615 1.096 .117)"
          id="prefix__af"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="43.039%"
          gradientTransform="matrix(-.06191 .98594 -.99808 -.06116 1.096 .118)"
          id="prefix__ag"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.914%"
          gradientTransform="scale(-1 -.99072) rotate(-86.44 -.61 .524)"
          id="prefix__ah"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.985%"
          gradientTransform="scale(-1 -.98907) rotate(-86.446 -.611 .524)"
          id="prefix__ai"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.982%"
          gradientTransform="matrix(-.062 .98724 -.99808 -.06132 1.096 .117)"
          id="prefix__aj"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.987%"
          gradientTransform="scale(-1 -.98904) rotate(-86.446 -.611 .524)"
          id="prefix__ak"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.963%"
          gradientTransform="matrix(-.06202 .98767 -.99807 -.06137 1.096 .117)"
          id="prefix__al"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="43.054%"
          gradientTransform="matrix(-.06189 .9856 -.99808 -.06112 1.096 .118)"
          id="prefix__am"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.855%"
          gradientTransform="matrix(-.06218 .99016 -.99807 -.06168 1.096 .116)"
          id="prefix__an"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="49.538%"
          cy="57.142%"
          fx="49.538%"
          fy="57.142%"
          r="42.985%"
          gradientTransform="scale(-1 -.98907) rotate(-86.446 -.611 .524)"
          id="prefix__ay"
        >
          <stop stopColor="#FF0091" offset="0%" />
          <stop stopColor="#FF17A8" offset="14.427%" />
          <stop stopColor="#B200FF" offset="23.997%" />
          <stop stopColor="#FF09A0" stopOpacity={0} offset="100%" />
        </radialGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M739.37 353.24C578.59 493.1 694.22 601.68 311.47 573.2c-179.19-13.35-267.94-149.55-288.49-274C-2.5 144.91 94.99 35.38 363.38 35.38c121.07 0 230.3-36.53 306.56 12.65 106.3 68.58 148.53 236.41 69.43 305.21z"
          fill="url(#prefix__a)"
          fillRule="nonzero"
        />
        <path
          fill="url(#prefix__b)"
          fillRule="nonzero"
          d="M150.84 130.24h413.29v413.29H150.84z"
        />
        <g fillRule="nonzero">
          <path
            d="M385.01 63.78l-49.54 28.87.72 1.24 49.54-28.87c.71-.42 1.15-1.16 1.16-1.99.01-.83-.4-1.58-1.11-2.02l-6.05-3.75a.897.897 0 01-.43-.79c.01-.32.18-.61.46-.76l18.58-10.45c.53.13 1.11.22 1.74.22 2.19 0 3.96-.9 3.96-2.02 0-1.11-1.77-2.02-3.96-2.02s-3.96.9-3.96 2.02c0 .39.23.75.6 1.06l-17.67 9.93c-.73.41-1.17 1.15-1.19 1.99-.02.83.39 1.6 1.11 2.04l6.05 3.75c.28.17.43.45.43.78 0 .32-.16.6-.44.77z"
            fill="url(#prefix__c)"
            transform="translate(160 295)"
          />
          <path
            d="M405.31 63.2c2.18 0 3.96-.9 3.96-2.02 0-1.11-1.77-2.02-3.96-2.02s-3.96.9-3.96 2.02c0 .4.24.78.64 1.1l-60.8 35.37.72 1.24L403.61 63c.52.12 1.09.2 1.7.2z"
            fill="url(#prefix__d)"
            transform="translate(160 295)"
          />
          <path
            d="M404.99 3.71L295.94 66.67l.72 1.24L406.61 4.43c.52.13 1.09.2 1.7.2 2.18 0 3.96-.9 3.96-2.02 0-1.11-1.77-2.02-3.96-2.02s-3.96.9-3.96 2.02c0 .42.24.79.64 1.1z"
            fill="url(#prefix__e)"
            transform="translate(160 295)"
          />
          <path
            d="M314.15 26.81l-43.82 25.98.73 1.23 43.82-25.98a3.57 3.57 0 001.76-3.12 3.583 3.583 0 00-1.8-3.1l-5.9-3.4a2.123 2.123 0 01-1.08-1.84 2.14 2.14 0 011.02-1.87l13.18-8.23c.49.11 1.03.17 1.6.17 2.19 0 3.96-.9 3.96-2.02 0-1.11-1.77-2.02-3.96-2.02-2.18 0-3.96.9-3.96 2.02 0 .43.28.83.73 1.16l-12.31 7.69a3.563 3.563 0 00-1.69 3.12c.02 1.28.7 2.42 1.8 3.06l5.9 3.4c.67.39 1.08 1.09 1.08 1.86 0 .79-.4 1.49-1.06 1.89z"
            fill="url(#prefix__f)"
            transform="translate(160 295)"
          />
          <path
            d="M367.1 112.48l71.14-41.07a6.337 6.337 0 016.81.31l6.51 4.6a7.72 7.72 0 008.61.23l9.99-6.3c.43.08.89.13 1.38.13 2.19 0 3.96-.9 3.96-2.02s-1.77-2.02-3.96-2.02c-2.18 0-3.96.9-3.96 2.02 0 .48.34.91.88 1.26l-9.06 5.72a6.3 6.3 0 01-7.02-.19l-6.51-4.6a7.805 7.805 0 00-8.36-.39l-71.14 41.07.73 1.25z"
            fill="url(#prefix__g)"
            transform="translate(160 295)"
          />
          <path
            d="M91.42 63.89a.891.891 0 01-.45-.77c0-.32.15-.61.43-.78l6.05-3.75a2.333 2.333 0 00-.08-4.02L79.7 44.64c.38-.31.6-.67.6-1.06 0-1.11-1.77-2.02-3.96-2.02-2.18 0-3.96.9-3.96 2.02s1.77 2.02 3.96 2.02c.63 0 1.21-.08 1.74-.21l18.58 10.44c.29.16.45.44.46.77.01.32-.15.61-.43.78l-6.05 3.75a2.338 2.338 0 00.05 4.01l49.54 28.87.72-1.24-49.53-28.88z"
            fill="url(#prefix__h)"
            transform="translate(160 295)"
          />
          <path
            d="M75.08 61.29c0-1.12-1.77-2.02-3.96-2.02s-3.96.9-3.96 2.02c0 1.11 1.77 2.02 3.96 2.02.61 0 1.18-.08 1.69-.2L134.51 99l.72-1.24L74.44 62.4c.4-.33.64-.7.64-1.11z"
            fill="url(#prefix__i)"
            transform="translate(160 295)"
          />
          <path
            d="M4.88 70.49c.49 0 .95-.05 1.38-.13l9.99 6.3a7.736 7.736 0 008.62-.23l6.51-4.6a6.337 6.337 0 016.81-.31l71.14 41.07.72-1.24-71.14-41.07a7.786 7.786 0 00-8.36.38l-6.51 4.6a6.3 6.3 0 01-7.02.18l-9.06-5.72c.54-.35.88-.78.88-1.26 0-1.11-1.77-2.02-3.96-2.02s-3.96.9-3.96 2.02c.01 1.13 1.78 2.03 3.96 2.03z"
            fill="url(#prefix__j)"
            transform="translate(160 295)"
          />
          <path
            d="M68.12 4.75c.61 0 1.19-.08 1.7-.2l109.95 63.48.72-1.24L71.44 3.83c.4-.31.63-.69.63-1.09 0-1.11-1.77-2.02-3.96-2.02s-3.96.9-3.96 2.02c.01 1.11 1.78 2.01 3.97 2.01z"
            fill="url(#prefix__k)"
            transform="translate(160 295)"
          />
          <path
            d="M161.22 25.05c0-.78.41-1.47 1.08-1.86l5.9-3.4c1.1-.64 1.78-1.78 1.8-3.06.02-1.28-.61-2.44-1.7-3.12l-12.31-7.69c.46-.33.73-.73.73-1.16 0-1.12-1.77-2.02-3.96-2.02s-3.96.9-3.96 2.02c0 1.11 1.77 2.02 3.96 2.02.57 0 1.11-.06 1.6-.17l13.18 8.23a2.165 2.165 0 01-.06 3.71l-5.9 3.4a3.583 3.583 0 00-1.8 3.1c-.01 1.29.65 2.46 1.77 3.12l43.82 25.99.73-1.24-43.82-25.99c-.67-.4-1.06-1.11-1.06-1.88z"
            fill="url(#prefix__l)"
            transform="translate(160 295)"
          />
          <path
            d="M91.42 195.3l49.54-28.86-.72-1.24-49.54 28.87a2.31 2.31 0 00-1.16 1.99c-.01.83.4 1.58 1.11 2.02l6.05 3.75c.28.17.43.46.43.78a.88.88 0 01-.46.77l-18.58 10.44c-.53-.13-1.11-.22-1.74-.22-2.18 0-3.96.9-3.96 2.02 0 1.11 1.77 2.02 3.96 2.02s3.96-.9 3.96-2.02c0-.39-.23-.75-.6-1.06l17.67-9.93c.73-.41 1.17-1.15 1.19-1.99.02-.84-.4-1.6-1.11-2.04l-6.05-3.75a.88.88 0 01-.43-.78c-.01-.33.16-.61.44-.77z"
            fill="url(#prefix__m)"
            transform="translate(160 295)"
          />
          <path
            d="M71.12 195.87c-2.19 0-3.96.9-3.96 2.02 0 1.11 1.77 2.02 3.96 2.02s3.96-.9 3.96-2.02c0-.41-.24-.78-.64-1.1l60.79-35.37-.72-1.24-61.69 35.89c-.52-.12-1.09-.2-1.7-.2z"
            fill="url(#prefix__n)"
            transform="translate(160 295)"
          />
          <path
            d="M71.44 255.36l109.05-62.96-.72-1.24-109.95 63.48c-.52-.13-1.09-.2-1.71-.2-2.19 0-3.96.9-3.96 2.02 0 1.11 1.77 2.02 3.96 2.02s3.96-.9 3.96-2.02c0-.41-.23-.79-.63-1.1z"
            fill="url(#prefix__o)"
            transform="translate(160 295)"
          />
          <path
            d="M162.28 232.26l43.82-25.99-.73-1.23-43.82 25.98a3.6 3.6 0 00-1.77 3.12c.01 1.29.68 2.45 1.8 3.1l5.9 3.4c.66.38 1.07 1.07 1.08 1.84.01.77-.37 1.47-1.02 1.87l-13.18 8.22c-.49-.11-1.03-.17-1.6-.17-2.19 0-3.96.9-3.96 2.02 0 1.11 1.77 2.02 3.96 2.02 2.18 0 3.96-.9 3.96-2.02 0-.44-.28-.84-.73-1.17l12.31-7.69a3.582 3.582 0 001.7-3.12c-.02-1.27-.7-2.42-1.8-3.06l-5.9-3.4a2.152 2.152 0 01-.02-3.72z"
            fill="url(#prefix__p)"
            transform="translate(160 295)"
          />
          <path
            d="M109.33 146.59l-71.14 41.07a6.337 6.337 0 01-6.81-.31l-6.51-4.6c-2.57-1.82-5.95-1.9-8.62-.23l-10 6.3a7.52 7.52 0 00-1.38-.13c-2.19 0-3.96.9-3.96 2.02s1.77 2.02 3.96 2.02 3.96-.9 3.96-2.02c0-.48-.34-.91-.88-1.25l9.06-5.72a6.3 6.3 0 017.02.19l6.51 4.6a7.784 7.784 0 008.36.38l71.14-41.07-.71-1.25z"
            fill="url(#prefix__q)"
            transform="translate(160 295)"
          />
          <path
            d="M409.26 197.78c0-1.11-1.77-2.02-3.96-2.02-.61 0-1.18.08-1.69.2l-61.7-35.89-.72 1.24 60.8 35.37c-.4.32-.64.69-.64 1.1 0 1.12 1.77 2.02 3.96 2.02 2.18 0 3.95-.91 3.95-2.02z"
            fill="url(#prefix__r)"
            transform="translate(160 295)"
          />
          <path
            d="M396.13 215.5c0 1.11 1.77 2.02 3.96 2.02s3.96-.9 3.96-2.02c0-1.11-1.77-2.02-3.96-2.02-.63 0-1.21.08-1.74.21l-18.58-10.44a.9.9 0 01-.46-.77.86.86 0 01.43-.78l6.05-3.75c.71-.43 1.12-1.19 1.11-2.02-.01-.83-.45-1.57-1.16-1.99l-49.54-28.87-.72 1.24 49.54 28.87c.28.16.44.44.45.77 0 .32-.15.61-.43.78l-6.05 3.75c-.71.44-1.12 1.2-1.11 2.04.02.84.46 1.58 1.19 1.99l17.67 9.93c-.38.31-.61.67-.61 1.06z"
            fill="url(#prefix__s)"
            transform="translate(160 295)"
          />
          <path
            d="M471.54 188.58c-.49 0-.95.05-1.38.13l-9.99-6.3a7.719 7.719 0 00-8.61.23l-6.51 4.6a6.337 6.337 0 01-6.81.31l-71.14-41.07-.72 1.24 71.14 41.07a7.786 7.786 0 008.36-.38l6.51-4.6a6.319 6.319 0 017.02-.19l9.06 5.72c-.54.35-.88.78-.88 1.26 0 1.11 1.77 2.02 3.96 2.02s3.96-.9 3.96-2.02c-.01-1.12-1.78-2.02-3.97-2.02z"
            fill="url(#prefix__t)"
            transform="translate(160 295)"
          />
          <path
            d="M323.66 252.3c-.57 0-1.11.06-1.6.17l-13.18-8.23a2.165 2.165 0 01.06-3.71l5.9-3.41a3.56 3.56 0 001.8-3.1c.01-1.29-.65-2.46-1.77-3.12l-43.82-25.99-.73 1.24 43.82 25.98c.67.4 1.07 1.1 1.06 1.88 0 .78-.41 1.47-1.08 1.86l-5.9 3.4c-1.1.64-1.78 1.78-1.8 3.06-.02 1.28.61 2.44 1.69 3.12l12.31 7.69c-.46.33-.73.73-.73 1.16 0 1.11 1.77 2.02 3.96 2.02s3.96-.9 3.96-2.02c0-1.1-1.77-2-3.95-2z"
            fill="url(#prefix__u)"
            transform="translate(160 295)"
          />
          <path
            d="M408.31 254.32c-.61 0-1.19.08-1.71.2l-109.95-63.48-.72 1.24 109.05 62.96c-.4.32-.63.69-.63 1.09 0 1.11 1.77 2.02 3.96 2.02 2.18 0 3.96-.9 3.96-2.02s-1.77-2.01-3.96-2.01z"
            fill="url(#prefix__v)"
            transform="translate(160 295)"
          />
        </g>
        <g fillRule="nonzero">
          <g transform="translate(85 131)">
            <path
              d="M533.94 49.85S454.25.86 288.21.11C232.87-.14 133.43 14.63 74.09 43.43 4.97 76.99 1.97 120.06 1.97 120.06l-.01 5.73c3.74 11.41 14.32 38.65 33.94 53.18 25.24 18.7 40.2 26.24 40.2 26.24l8.4-4.74L525.32 52.79l8.62-2.94z"
              fill="url(#prefix__w)"
            />
            <path
              d="M5.68 334.03s30.55-91.16 248.93-108.69c150.79-12.11 270.72 40.82 270.72 40.82V52.79S455.66 7.86 289.62 7.107C234.28 6.86 134.84 21.63 75.5 50.43 6.38 84 6.18 129.18 6.18 129.18l-.5 204.85z"
              fill="url(#prefix__x)"
            />
            <g opacity={0.3} fill="#FFF">
              <path
                opacity={0.56}
                d="M230.61 48.02v10.83l-110.8 24.04-.24-11.13zM230.61 64.7v10.83l-110.8 24.03-.24-11.11zM230.61 81.37V92.2l-110.8 24.04-.24-11.12zM230.61 98.05v10.83l-110.8 24.03-.24-11.12zM230.61 114.73v10.83l-49.67 11.19-.24-11.12zM230.61 131.4v10.83l-110.8 24.03-.24-11.11zM230.61 148.08v10.83l-110.8 24.03-.24-11.12zM230.61 164.75v10.83l-110.8 24.04-.24-11.12zM230.61 181.43v10.83l-110.8 24.03-.24-11.11z"
              />
            </g>
            <g opacity={0.7}>
              <path
                fill="#2B73B5"
                d="M434.91 198.54l41.06-23.71 41.06 23.71-41.63 23.37z"
              />
              <path
                fill="#56ABDD"
                d="M434.91 184.43l41.06-23.7 41.06 23.7-41.63 23.38z"
              />
              <path
                fill="#951AAC"
                d="M434.91 166.73l41.06-23.7 41.06 23.7-41.63 23.38z"
              />
              <path
                fill="#741AAC"
                d="M434.91 151.45l41.06-23.7 41.06 23.7-41.63 23.38z"
              />
              <path
                fill="#A91AAC"
                d="M434.91 136.18l41.06-23.71 41.06 23.71-41.63 23.37z"
              />
              <path
                fill="#00DDD2"
                d="M434.91 121.75l41.06-23.71 41.06 23.71-41.63 23.37z"
              />
              <path
                fill="#00CCBD"
                d="M434.91 107.32l41.06-23.7 41.06 23.7-41.63 23.38z"
              />
              <path
                fill="#00DDD2"
                d="M434.91 92.9l41.06-23.71 41.06 23.71-41.63 23.37z"
              />
            </g>
            <g opacity={0.6} fill="#FFF">
              <path
                opacity={0.56}
                d="M360.02 23.66v6.67l68.22 12.28.15-6.85zM360.02 33.93v6.66l68.22 12.29.15-6.85zM360.02 44.19v6.67l68.22 12.28.15-6.85zM360.02 54.46v6.67l68.22 12.28.15-6.85zM360.02 64.73v6.66l30.59 5.77.14-6.85zM360.02 74.99v6.67l68.22 12.29.15-6.85zM360.02 85.26v6.67l68.22 12.28.15-6.85zM360.02 95.53v6.66l68.22 12.29.15-6.85zM360.02 105.79v6.67l68.22 12.29.15-6.85z"
              />
            </g>
            <g opacity={0.6} fill="#FFF">
              <path
                opacity={0.56}
                d="M360.02 121.27v6.67l68.22 12.29.15-6.85zM360.02 131.54v6.67l68.22 12.28.15-6.85zM360.02 141.81v6.66l68.22 12.29.15-6.85zM360.02 152.07v6.67l68.22 12.29.15-6.85zM360.02 162.34v6.67l30.59 5.76.14-6.85zM360.02 172.61v6.66l68.22 12.29.15-6.85zM360.02 182.87v6.67l68.22 12.29.15-6.85zM360.02 193.14v6.67l68.22 12.28.15-6.85zM360.02 203.41v6.66l68.22 12.29.15-6.85z"
              />
            </g>
            <ellipse
              fill="#701AAC"
              cx={48.08}
              cy={124.17}
              rx={22.69}
              ry={38.1}
            />
            <ellipse
              fill="url(#prefix__y)"
              cx={51.51}
              cy={211.79}
              rx={22.69}
              ry={38.1}
            />
            <path
              fill="#00DDD2"
              d="M268.4 161.7l-.77 36.1 15.29-.8.78-36.07z"
            />
            <path
              fill="#00CCBD"
              d="M254.16 144.46l14.24 17.24-.77 36.1-14.88-18.47z"
            />
            <path
              fill="#00FFEC"
              d="M254.16 144.46l15.03-.89 14.51 17.36-15.3.77z"
            />
            <path
              fill="#951AAC"
              d="M300.44 128.76L298.99 196l15.29-.79 1.45-67.22z"
            />
            <path
              fill="#741AAC"
              d="M286.19 111.52l14.25 17.24-1.45 67.24-14.88-18.46z"
            />
            <path
              fill="#A91AAC"
              d="M286.19 111.52l15.04-.89 14.5 17.36-15.29.77z"
            />
            <g>
              <path
                fill="#56ABDD"
                d="M332.47 84.27l-2.4 111.81 15.3-.79 2.4-111.79z"
              />
              <path
                fill="#2B73B5"
                d="M318.23 67.03l14.24 17.24-2.4 111.81-14.88-18.47z"
              />
              <path
                fill="#009BDD"
                d="M318.23 67.03l15.03-.89 14.51 17.36-15.3.77z"
              />
            </g>
            <path
              d="M75.61 413.11l.49-207.9s-19.03-6.01-46.08-31.05c-27.05-25.04-27.55-56.6-27.55-56.6l-2 209.86s.94 23.23 22.54 54.09c12.42 17.74 33.62 28.69 44.94 33.57l7.66-1.97z"
              fill="url(#prefix__z)"
            />
            <g opacity={0.8} fill="#FFF">
              <path
                opacity={0.56}
                d="M7.24 184.14v6.66l50.66 37.21.11-6.79zM7.24 194.4v6.67l50.66 37.21.11-6.8zM7.24 204.67v6.67l50.66 37.21.11-6.8zM7.24 214.94v6.66l50.66 37.21.11-6.79zM7.24 225.2v6.67l22.71 16.94.11-6.8zM7.24 235.47v6.67l50.66 37.21.11-6.8zM7.24 245.74v6.66l50.66 37.21.11-6.79zM7.24 256v6.67l50.66 37.21.11-6.8zM7.24 266.27v6.67l50.66 37.21.11-6.8zM7.24 296.55v6.67l50.66 37.21.11-6.8zM7.24 306.82v6.66l50.66 37.21.11-6.79zM7.24 317.08v6.67l50.66 37.21.11-6.8zM7.24 327.35v6.67l50.66 37.21.11-6.8z"
              />
            </g>
            <path
              d="M2.47 117.56l-.26 27.43c9.89 21.66 31.04 52.8 73.87 67.09l.02-6.87s-19.03-6.01-46.08-31.05c-27.04-25.04-27.55-56.6-27.55-56.6z"
              fill="url(#prefix__A)"
            />
            <path
              fill="url(#prefix__B)"
              d="M76.1 205.21l-7.59 4.48v205.12l7.62-1.52z"
            />
          </g>
          <path
            fill="url(#prefix__C)"
            d="M525.32 52.79v213.37l8.62-4.53V49.85z"
            transform="translate(85 131)"
          />
        </g>
        <circle
          fill="#B3EFFF"
          fillRule="nonzero"
          cx={692.01}
          cy={172.48}
          r={5.71}
        />
        <g transform="translate(56 41)" fillRule="nonzero">
          <circle fill="#B3EFFF" cx={123.39} cy={90.38} r={5.71} />
          <path
            d="M517.48 59.8c13.65 13.71 35.81 13.77 49.53.13 13.71-13.64 13.77-35.81.13-49.52-13.64-13.71-35.81-13.77-49.52-.13-13.73 13.64-13.78 35.81-.14 49.52z"
            fill="url(#prefix__D)"
          />
          <circle fill="url(#prefix__E)" cx={211.3} cy={33.29} r={12.56} />
          <circle
            fill="url(#prefix__F)"
            opacity={0.6}
            cx={9.66}
            cy={159.91}
            r={9.42}
          />
          <circle fill="#125CAE" cx={374.56} cy={40.14} r={5.71} />
          <path
            fill="#FFF"
            d="M290.08 36.95l1.2 2.44 2.69.39-1.95 1.89.46 2.68-2.4-1.26-2.4 1.26.45-2.68-1.94-1.89 2.69-.39z"
          />
          <path
            fill="#FFF"
            opacity={0.4}
            d="M47.34 98.96l1.2 2.44 2.69.39-1.95 1.9.46 2.67-2.4-1.26-2.41 1.26.46-2.67-1.94-1.9 2.69-.39z"
          />
          <path
            fill="#FFF"
            d="M4.52 244.54l1.2 2.44 2.69.39-1.94 1.9.45 2.67-2.4-1.26-2.4 1.26.46-2.67-1.95-1.9 2.69-.39zM688.91 195.32l1.2 2.44 2.69.39-1.94 1.9.45 2.67-2.4-1.26-2.4 1.26.46-2.67-1.95-1.9 2.69-.39zM651.19 65.1l1.2 2.44 2.69.39-1.94 1.9.46 2.67-2.41-1.26-2.4 1.26.46-2.67-1.95-1.9 2.69-.39z"
          />
        </g>
        <g fillRule="nonzero">
          <path fill="#56ABDD" d="M647.85 371.11v10.41l18.22 10.73v-10.73z" />
          <path
            fill="#009BDD"
            d="M647.85 371.11l18.22-10.73L684.46 371l-18.39 10.52z"
          />
          <path fill="#2B73B5" d="M684.46 371v10.52l-18.39 10.73v-10.73z" />
          <path fill="#56ABDD" d="M620.35 387.05v10.4l18.21 10.73v-10.73z" />
          <path
            fill="#009BDD"
            d="M620.35 387.05l18.21-10.73 18.4 10.62-18.4 10.51z"
          />
          <path fill="#2B73B5" d="M656.96 386.94v10.51l-18.4 10.73v-10.73z" />
          <g>
            <path fill="#56ABDD" d="M675.41 387.05v10.4l18.21 10.73v-10.73z" />
            <path
              fill="#009BDD"
              d="M675.41 387.05l18.21-10.73 18.4 10.62-18.4 10.51z"
            />
            <path fill="#2B73B5" d="M712.02 386.94v10.51l-18.4 10.73v-10.73z" />
          </g>
          <g>
            <path fill="#56ABDD" d="M647.9 402.98v10.41l18.21 10.73v-10.73z" />
            <path
              fill="#009BDD"
              d="M647.9 402.98l18.21-10.73 18.4 10.62-18.4 10.52z"
            />
            <path fill="#2B73B5" d="M684.51 402.87v10.52l-18.4 10.73v-10.73z" />
          </g>
          <g
            fill="url(#prefix__G)"
            opacity={0.73}
            transform="translate(620 75)"
          >
            <path d="M1.35 309.14L.42.78s27.57 4.69 35.96 8.56c16.13 7.45 57.37 47.09 57.37 47.09l-.96 252.71-45.72 26.4-45.72-26.4z" />
          </g>
        </g>
        <g fillRule="nonzero">
          <path fill="#56ABDD" d="M184.5 524.66v10.41l18.21 10.73v-10.73z" />
          <path
            fill="#009BDD"
            d="M184.5 524.66l18.21-10.73 18.4 10.63-18.4 10.51z"
          />
          <path fill="#2B73B5" d="M221.11 524.56v10.51l-18.4 10.73v-10.73z" />
          <path fill="#56ABDD" d="M156.99 540.6V551l18.21 10.74V551z" />
          <path
            fill="#009BDD"
            d="M156.99 540.6l18.21-10.73 18.4 10.62L175.2 551z"
          />
          <path fill="#2B73B5" d="M193.6 540.49V551l-18.4 10.74V551z" />
          <g>
            <path fill="#56ABDD" d="M212.05 540.6V551l18.21 10.74V551z" />
            <path
              fill="#009BDD"
              d="M212.05 540.6l18.21-10.73 18.4 10.62-18.4 10.51z"
            />
            <path fill="#2B73B5" d="M248.66 540.49V551l-18.4 10.74V551z" />
          </g>
          <g>
            <path fill="#56ABDD" d="M184.54 556.53v10.41l18.21 10.73v-10.73z" />
            <path
              fill="#009BDD"
              d="M184.54 556.53l18.21-10.73 18.4 10.62-18.4 10.52z"
            />
            <path fill="#2B73B5" d="M221.15 556.42v10.52l-18.4 10.73v-10.73z" />
          </g>
        </g>
        <path
          d="M156.99 540.69l-.93-470.78s26.95-7.37 35.96-9.42c37.61-8.56 57.37-12.84 57.37-12.84l-.96 493.05-45.72 26.4-45.72-26.41z"
          fill="url(#prefix__H)"
          fillRule="nonzero"
          opacity={0.73}
        />
        <g opacity={0.5} fillRule="nonzero">
          <path
            d="M1.11 1.66z"
            transform="translate(237 521)"
            fill="url(#prefix__I)"
          />
          <path
            d="M42.24 62.18c-3.12-.2-5.48-2.91-5.28-6.04.19-3.13 2.87-5.53 5.99-5.33 3.09.2 5.45 2.92 5.26 6.04-.2 3.14-2.87 5.53-5.97 5.33z"
            fill="url(#prefix__J)"
            transform="translate(162 419)"
          />
          <path
            d="M42.96 96.57c-2.82-.18-4.95-2.63-4.78-5.47.18-2.84 2.6-5.01 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__K)"
            transform="translate(162 419)"
          />
          <path
            d="M30.98 84.63c-1.76-.11-3.11-1.64-3-3.42.11-1.79 1.63-3.14 3.4-3.03 1.76.11 3.11 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__L)"
            transform="translate(162 419)"
          />
          <path
            d="M25.5 37.94c-2.81-.18-4.96-2.63-4.78-5.47.18-2.84 2.6-5.01 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__M)"
            transform="translate(162 419)"
          />
          <path
            d="M24.22 58.49c-1.76-.11-3.1-1.64-2.99-3.42.11-1.78 1.63-3.14 3.39-3.03 1.76.11 3.11 1.65 3 3.43-.12 1.78-1.64 3.13-3.4 3.02z"
            fill="url(#prefix__N)"
            transform="translate(162 419)"
          />
          <path
            d="M3.42 34.41c-1.76-.11-3.11-1.64-3-3.43a3.211 3.211 0 013.4-3.02c1.76.11 3.11 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__O)"
            transform="translate(162 419)"
          />
          <path
            d="M14.19 10.02c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.02 1.76.11 3.11 1.65 2.99 3.43a3.197 3.197 0 01-3.39 3.02z"
            fill="url(#prefix__P)"
            transform="translate(162 419)"
          />
          <path
            d="M45.54 19.23c-2.81-.18-4.95-2.63-4.78-5.47.18-2.84 2.61-5 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__Q)"
            transform="translate(162 419)"
          />
          <path
            d="M54.36 31.38c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.03 1.76.11 3.11 1.65 3 3.43-.11 1.79-1.64 3.14-3.4 3.03z"
            fill="url(#prefix__R)"
            transform="translate(162 419)"
          />
          <path
            d="M33.56 7.3c-1.76-.11-3.11-1.65-3-3.43.11-1.79 1.64-3.14 3.4-3.03 1.76.11 3.1 1.64 2.99 3.43-.11 1.79-1.63 3.14-3.39 3.03z"
            fill="url(#prefix__S)"
            transform="translate(162 419)"
          />
          <path
            d="M52.49 131.16c-8.5-.54-14.95-7.93-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.53 8.58-7.84 15.1-16.34 14.57z"
            fill="url(#prefix__T)"
            transform="translate(162 385)"
          />
          <path
            d="M69.63 136.99c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.95 7.93 14.41 16.52-.53 8.58-7.85 15.11-16.34 14.57z"
            fill="url(#prefix__U)"
            transform="translate(162 385)"
          />
          <path
            d="M67.46 116.21c-8.49-.54-14.94-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.93 14.41 16.52-.54 8.58-7.85 15.1-16.34 14.57z"
            fill="url(#prefix__V)"
            transform="translate(162 385)"
          />
          <path
            d="M32.12 91.42c-5.36-.34-9.44-5.01-9.1-10.43.34-5.41 4.96-9.54 10.32-9.19 5.36.34 9.44 5.02 9.1 10.42-.34 5.42-4.95 9.54-10.32 9.2z"
            fill="url(#prefix__W)"
            transform="translate(162 385)"
          />
          <path
            d="M64.442 31.121c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.53 8.58-7.85 15.11-16.34 14.57z"
            fill="url(#prefix__X)"
            transform="translate(162 385)"
          />
          <path
            d="M26.7 117.47c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.54 8.58-7.85 15.1-16.34 14.57z"
            fill="url(#prefix__Y)"
            transform="translate(162 385)"
          />
          <path
            d="M40.59 36.11c-4.7-.3-8.27-4.39-7.98-9.14.3-4.74 4.35-8.35 9.05-8.06 4.69.3 8.27 4.39 7.97 9.14-.29 4.75-4.34 8.36-9.04 8.06z"
            fill="url(#prefix__Z)"
            transform="translate(162 385)"
          />
          <path
            d="M29.16 46.52c-1.77-.11-3.1-1.65-2.99-3.43.11-1.79 1.63-3.14 3.39-3.03 1.76.11 3.1 1.64 2.99 3.43-.11 1.79-1.63 3.14-3.39 3.03z"
            fill="url(#prefix__aa)"
            transform="translate(162 385)"
          />
          <path
            d="M16.09 93.82c-1.76-.11-3.1-1.64-2.99-3.42.11-1.79 1.63-3.14 3.39-3.02 1.76.11 3.11 1.64 3 3.43a3.21 3.21 0 01-3.4 3.01z"
            fill="url(#prefix__ab)"
            transform="translate(162 385)"
          />
        </g>
        <g fillRule="nonzero">
          <path
            d="M1.11 1.89z"
            transform="translate(228 417)"
            fill="url(#prefix__ac)"
          />
          <path
            d="M42.24 61.41c-3.12-.2-5.48-2.91-5.28-6.04.19-3.13 2.87-5.53 5.99-5.33 3.09.2 5.45 2.92 5.26 6.04-.2 3.13-2.87 5.52-5.97 5.33z"
            fill="url(#prefix__ad)"
            transform="translate(153 316)"
          />
          <path
            d="M42.96 95.8c-2.82-.18-4.95-2.63-4.78-5.47.18-2.84 2.6-5.01 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.84-2.6 5-5.41 4.83z"
            fill="url(#prefix__ae)"
            transform="translate(153 316)"
          />
          <path
            d="M30.98 83.86c-1.76-.11-3.11-1.64-3-3.42.11-1.79 1.63-3.14 3.4-3.03 1.76.11 3.11 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__L)"
            transform="translate(153 316)"
          />
          <path
            d="M25.5 37.16c-2.81-.18-4.96-2.63-4.78-5.47.18-2.84 2.6-5.01 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__M)"
            transform="translate(153 316)"
          />
          <path
            d="M24.22 57.71c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.02 1.76.11 3.11 1.65 3 3.43-.12 1.78-1.64 3.13-3.4 3.02z"
            fill="url(#prefix__af)"
            transform="translate(153 316)"
          />
          <path
            d="M3.42 33.63c-1.76-.11-3.11-1.64-3-3.43a3.211 3.211 0 013.4-3.02c1.76.11 3.11 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__O)"
            transform="translate(153 316)"
          />
          <path
            d="M14.19 9.24c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.03 1.76.11 3.11 1.65 2.99 3.43a3.198 3.198 0 01-3.39 3.03z"
            fill="url(#prefix__ag)"
            transform="translate(153 316)"
          />
          <path
            d="M45.54 18.46c-2.81-.18-4.95-2.63-4.78-5.47.18-2.84 2.61-5 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__Q)"
            transform="translate(153 316)"
          />
          <path
            d="M54.36 30.6c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.03 1.76.11 3.11 1.65 3 3.43-.11 1.79-1.64 3.14-3.4 3.03z"
            fill="url(#prefix__R)"
            transform="translate(153 316)"
          />
          <path
            d="M33.56 6.52c-1.76-.11-3.11-1.65-3-3.42.11-1.79 1.64-3.14 3.4-3.03 1.76.11 3.1 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__ah)"
            transform="translate(153 316)"
          />
          <path
            d="M53.49 112.38c-8.5-.54-14.95-7.93-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.53 8.58-7.84 15.11-16.34 14.57z"
            fill="url(#prefix__ai)"
            transform="translate(153 300)"
          />
          <path
            d="M70.63 118.22c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.95 7.94 14.41 16.52-.53 8.58-7.85 15.1-16.34 14.57z"
            fill="url(#prefix__aj)"
            transform="translate(153 300)"
          />
          <path
            d="M68.46 97.43c-8.49-.54-14.94-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.93 14.41 16.52-.54 8.58-7.85 15.11-16.34 14.57z"
            fill="url(#prefix__ak)"
            transform="translate(153 300)"
          />
          <path
            d="M31.91 72.64c-5.36-.34-9.44-5.01-9.1-10.43.34-5.41 4.96-9.54 10.32-9.19 5.36.34 9.44 5.02 9.1 10.42-.34 5.42-4.95 9.54-10.32 9.2z"
            fill="url(#prefix__W)"
            transform="translate(153 300)"
          />
          <path
            d="M19.442 53.121c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.53 8.58-7.85 15.11-16.34 14.57zM25.442 106.121c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.54 8.58-7.85 15.11-16.34 14.57z"
            fill="url(#prefix__X)"
            transform="translate(153 300)"
          />
          <path
            d="M40.38 17.34c-4.7-.3-8.27-4.39-7.98-9.14.3-4.74 4.35-8.35 9.05-8.06 4.69.3 8.27 4.39 7.97 9.14-.29 4.74-4.34 8.36-9.04 8.06z"
            fill="url(#prefix__al)"
            transform="translate(153 300)"
          />
          <path
            d="M28.95 27.74c-1.77-.11-3.1-1.65-2.99-3.43.11-1.79 1.63-3.14 3.39-3.03 1.76.11 3.1 1.64 2.99 3.43-.11 1.79-1.63 3.15-3.39 3.03z"
            fill="url(#prefix__am)"
            transform="translate(153 300)"
          />
          <path
            d="M17.09 75.05c-1.76-.11-3.1-1.64-2.99-3.42.11-1.79 1.63-3.14 3.39-3.02 1.76.11 3.11 1.64 3 3.43a3.217 3.217 0 01-3.4 3.01z"
            fill="url(#prefix__an)"
            transform="translate(153 300)"
          />
        </g>
        <path
          stroke="#FFF"
          strokeWidth={2.127}
          d="M186.27 483.54l37.62-49.37-36.02-45.89 30.21-60.57"
        />
        <g fillRule="nonzero">
          <path
            fill="#00DDD2"
            d="M182.52 465.19l-8.52 11.5 5.62 13.12 8.56-11.55z"
          />
          <path
            fill="#00CCBD"
            d="M202.48 479.89l-14.3-1.63-8.56 11.55 14.35 1.78z"
          />
          <path
            fill="#00FFEC"
            d="M196.75 466.7l-14.23-1.51 5.66 13.07 14.3 1.63z"
          />
        </g>
        <g fillRule="nonzero">
          <path
            fill="#00DDD2"
            d="M209.86 436.58l9.15 11.01 14.08-2.36-9.2-11.06z"
          />
          <path
            fill="#00CCBD"
            d="M228.88 420.68l-4.99 13.49 9.2 11.06 5.13-13.52z"
          />
          <path
            fill="#00FFEC"
            d="M214.7 423.11l-4.84 13.47 14.03-2.41 4.99-13.49z"
          />
        </g>
        <g fillRule="nonzero">
          <path
            fill="#FF277F"
            d="M193.38 375.15l-14.2 1.81-5.58 13.14 14.27-1.82z"
          />
          <path
            fill="#741AAC"
            d="M196.58 399.73l-8.71-11.45-14.27 1.82 8.65 11.58z"
          />
          <path
            fill="#C71AAC"
            d="M202.14 386.47l-8.76-11.32-5.51 13.13 8.71 11.45z"
          />
        </g>
        <g fillRule="nonzero">
          <path
            fill="#009BDD"
            d="M223.59 314.58l-14.2 1.81-5.58 13.14 14.27-1.82z"
          />
          <path
            fill="#2B73B5"
            d="M226.79 339.17l-8.71-11.46-14.27 1.82 8.65 11.59z"
          />
          <path
            fill="#56ABDD"
            d="M232.35 325.9l-8.76-11.32-5.51 13.13 8.71 11.46z"
          />
        </g>
        <path
          d="M291.91 268.88c0 7.71-6.25 13.96-13.96 13.96-7.71 0-13.96-6.25-13.96-13.96 0-7.71 6.25-13.96 13.96-13.96 7.71 0 13.96 6.25 13.96 13.96z"
          fill="#FFF"
          fillRule="nonzero"
          opacity={0.2}
        />
        <path
          d="M287.63 268.88c0 5.34-4.33 9.68-9.68 9.68-5.34 0-9.68-4.33-9.68-9.68 0-5.34 4.33-9.68 9.68-9.68 5.34 0 9.68 4.34 9.68 9.68z"
          fill="#FFF"
          fillRule="nonzero"
          opacity={0.3}
        />
        <g fillRule="nonzero">
          <path
            d="M179.56 179.05s33.3 24.74 42.18 28.23c8.88 3.49 12.05 2.85 23.15 5.71 11.1 2.85 34.57 6.34 47.57 10.78 13 4.44 23.15 10.15 23.15 10.15s-5.39-9.2-4.44-13c.95-3.8.95-6.03.95-6.03s-6.03-.63-14.27-6.03c-8.25-5.39-23.47-18.08-41.86-21.88-18.39-3.81-25.69-2.54-25.69-2.54l-37.1-36.79-13.64 31.4z"
            fill="url(#prefix__ao)"
            transform="translate(278 190)"
          />
          <path
            d="M590.12 404.88l7.19-2.85s5.5-3.38 10.78.85c5.29 4.23 9.09 13.32 11.21 15.43 2.11 2.11 8.24 3.38 11.63 11.21 3.38 7.82 1.69 15.65-.42 19.87-2.11 4.23-5.07 4.86-6.34 4.44-1.27-.42-13.53-15.86-17.13-18.82-3.59-2.96-13.43-11.1-13.43-11.1s-5.81-8.14-4.44-13c1.38-4.86.95-6.03.95-6.03z"
            fill="#A91AAC"
          />
          <path
            d="M619.3 418.31c-2.11-2.11-5.92-11.21-11.21-15.43-5.29-4.23-10.78-.85-10.78-.85l-1.12.45c-1.18 1.55-2.65 4.15-2.26 7.16.63 4.86 4.86 9.73 9.73 14.38 4.86 4.65 10.99 10.78 13.11 14.59 1.34 2.41 3.95 9.13 6.27 14.23.55.57.95.93 1.13.99 1.27.42 4.23-.21 6.34-4.44 2.11-4.23 3.81-12.05.42-19.87-3.38-7.83-9.51-9.1-11.63-11.21z"
            fill="#000"
          />
          <path
            d="M180.62 182.22l15.22 23.47s19.66 33.41 19.45 37c-.21 3.59-7.61 13.32-14.38 9.94-6.77-3.38-11.42-10.36-16.07-15.22-4.65-4.86-35.94-34.46-35.94-34.46l31.72-20.73z"
            fill="url(#prefix__ap)"
            transform="translate(278 190)"
          />
          <path
            d="M501.54 357.42s-4.02-5.97-4.81-7.4c-.79-1.43-4.28-9.04.79-13.16 5.07-4.12 11.89-3.01 16.65-2.38 4.76.63 6.66 2.7 8.09 1.9 1.43-.79 3.81-4.76 8.25-5.39 4.44-.63 15.06 1.11 20.93 5.87 5.87 4.76-.95 10.62-9.36 12.37-8.4 1.74-16.02 7.45-19.35 9.83a93.387 93.387 0 01-6.61 4.28s-1.32-5.71-4.97-6.82c-3.64-1.11-9.61.9-9.61.9z"
            fill="#A91AAC"
          />
          <path
            d="M551.43 336.86c-5.87-4.76-16.49-6.5-20.93-5.87-4.44.63-6.82 4.6-8.25 5.39-1.43.79-3.33-1.27-8.09-1.9-4.76-.63-11.58-1.74-16.65 2.38-5.07 4.12-1.59 11.73-.79 13.16.08.14.19.33.32.55 2.57.53 7.46 1.37 11.25 1.04 5.39-.48 8.56-3.17 14.91-2.85 5.85.29 24.53-.1 30.36-7.38.27-1.52-.34-3.07-2.13-4.52z"
            fill="#000"
          />
          <path
            d="M37.7 49.88s.56 5.94 1.73 8.53c1.18 2.59 4.92 6.88 7.1 9.79 2.18 2.91 2.09 5.32 5.41 3.93 3.32-1.39 10.53-6.64 10.53-6.64L37.7 49.88z"
            fill="url(#prefix__aq)"
            transform="translate(278 190)"
          />
          <path
            d="M88.41 76.63s-4.61 22.07-7.47 31.64c-2.87 9.57-7.62 18.76-10.9 18.99-3.27.22-10.94-.27-20.86-8.65s-21.54-15.07-24.17-15.66c-2.63-.59-8.46-.53-11.13-4.34-2.67-3.81-7.33-9.45-6.83-11.11.5-1.66 6.88-5.12 8.77-4.75 1.89.37 9.84 3.95 12.2 7.46 2.36 3.51 4.16 6.86 10.16 10.26 6 3.4 11.85 3.95 18.23 6.06l6.38 2.11s4.33-25.16 7.29-29.69c2.96-4.53 6.34-9.13 12.82-7.99 6.46 1.15 5.51 5.67 5.51 5.67z"
            fill="url(#prefix__ar)"
            transform="translate(278 190)"
          />
          <path
            d="M113.6 152.41s2.22 11.42 8.88 24.1c6.66 12.69 10.15 21.25 12.37 25.37 2.22 4.12 5.71 3.49 12.37 1.9 6.66-1.59 7.61-3.49 12.37-5.07 4.76-1.59 16.81-5.71 19.98-13.64 3.17-7.93 2.54-12.05 6.03-14.91 3.49-2.85 6.34-8.56 7.61-15.86 1.27-7.29 2.54-14.27 1.9-19.03-.63-4.76-5.07-8.56-5.07-8.56s-6.03 1.59-15.86-3.81c-9.83-5.39-15.86-5.07-23.15-6.34-7.29-1.27-14.59-1.27-14.59-1.27"
            fill="url(#prefix__as)"
            transform="translate(278 190)"
          />
          <path
            d="M67.51 77.35s-3.59 16.7-2.11 22.41c1.48 5.71 4.23 17.34 9.94 19.03 5.71 1.69 11.63.21 11.63.21s12.47 12.9 17.76 20.93c5.29 8.03 8.88 12.47 8.88 12.47s6.98 1.9 13.95-9.09c6.98-10.99 11.21-27.7 7.4-30.87-3.81-3.17-5.07-3.17-7.19-5.29-2.11-2.11-34.04-27.27-34.04-27.27l-26.22-2.53z"
            fill="url(#prefix__at)"
            transform="translate(278 190)"
          />
          <path
            d="M78.91 85.85s24 6.34 34.36 10.04c10.35 3.7 20.19 9.46 20.25 13.08.06 3.61-.93 12.02-10.72 22.44-9.79 10.42-17.81 22.82-18.61 25.68-.8 2.86-1.07 9.27-5.41 11.99-4.34 2.71-10.99 4.38-12.79 3.74-1.79-.64-5.05-4.72-4.53-6.78.51-2.06 4.91-10.59 8.91-12.98 4-2.39 7.78-4.18 11.86-10.58 4.08-6.4 5.02-12.8 7.71-19.7l2.69-6.9s-27.42-6.21-32.22-9.72c-4.81-3.51-9.67-7.5-8.05-14.55 1.63-7.07 6.55-5.76 6.55-5.76z"
            fill="url(#prefix__au)"
            transform="translate(278 190)"
          />
          <path
            d="M199.65 251.99s-8.46-12.05-7.82-24.74c.63-12.69 2.11-20.3 6.13-26.22 4.02-5.92 14.17-15.22 19.66-23.04 5.5-7.82 5.92-10.57 5.92-10.57s7.19-2.33 10.99 0c3.81 2.33 3.59 5.92 3.59 5.92s-15.01 35.31-18.18 45.88-3.6 20.93-4.65 24.31c-1.05 3.38-6.34 13.11-15.64 8.46z"
            fill="url(#prefix__av)"
            transform="translate(278 190)"
          />
          <path
            d="M306.4 293.78s-3.39-.84-6.34-1.27c-2.95-.43-5.29-1.27-7.4-2.11-2.11-.85-3.38 4.65-5.07 5.07-1.69.42-1.27-3.59-.85-5.07.42-1.48 3.81-5.29 5.92-8.25s-1.06-5.92-1.06-5.92-11.42-5.07-12.47-7.19c-1.06-2.11 1.9-1.9 8.88.63 6.98 2.54 11.84 5.07 11.84 5.07s4.31 2.25 6.17 5.46"
            fill="#FFF"
          />
          <path
            d="M38 6.61S50.53-5.28 69.74 3.03C85.83 9.99 86.01 19.94 96 26.88c6.88 4.78 27.38 15.78 48.38 11.45 21-4.32 41.76 2.59 57.2 22.12 15.43 19.53 20.21 30.69 20.21 30.69S196.47 88.1 179.43 102c-17.05 13.89-54.86 13.55-75.94 5.54-21.08-8.01-34.64-22.96-38.55-29.52-3.91-6.56-6.7-12.44-13.47-15.25-6.76-2.81-24.83-17.18-24.32-30.33.5-13.13 3.12-19.29 10.85-25.83z"
            fill="url(#prefix__aw)"
            transform="translate(278 190)"
          />
          <path
            d="M144.38 38.34c-21 4.32-41.5-6.68-48.38-11.45C86 19.95 85.82 10 69.74 3.04 50.66-5.21 38.18 6.45 38.01 6.61c19.23-7 28.01-.59 37.5 11.26 15.98 19.98 31.95 39.19 55.37 37.68 17.7-1.14 38.25-5.71 52.52 4 14.27 9.7 19.41 17.7 19.41 17.7S182.26 66.4 160 67.55c-22.26 1.14-43.38-1.71-58.23-10.85-14.84-9.13-24.55-23.98-24.55-23.98s6.43 40.58 59.37 41.67c55.37 1.14 50.23 5.14 64.12 18 11.41-2.4 21.09-1.24 21.09-1.24s-4.78-11.16-20.21-30.69c-15.45-19.53-36.21-26.45-57.21-22.12z"
            fill="url(#prefix__ax)"
            opacity={0.3}
            transform="translate(278 190)"
          />
        </g>
        <g opacity={0.5} fillRule="nonzero">
          <path
            d="M1.11 1.66z"
            transform="translate(702 372)"
            fill="url(#prefix__I)"
          />
          <path
            d="M42.24 62.18c-3.12-.2-5.48-2.91-5.28-6.04.19-3.13 2.87-5.53 5.99-5.33 3.09.2 5.45 2.92 5.26 6.04-.2 3.14-2.87 5.53-5.97 5.33z"
            fill="url(#prefix__J)"
            transform="translate(627 270)"
          />
          <path
            d="M42.96 96.57c-2.82-.18-4.95-2.63-4.78-5.47.18-2.84 2.6-5.01 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__K)"
            transform="translate(627 270)"
          />
          <path
            d="M30.98 84.63c-1.76-.11-3.11-1.64-3-3.42.11-1.79 1.63-3.14 3.4-3.03 1.76.11 3.11 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__L)"
            transform="translate(627 270)"
          />
          <path
            d="M25.5 37.94c-2.81-.18-4.96-2.63-4.78-5.47.18-2.84 2.6-5.01 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__M)"
            transform="translate(627 270)"
          />
          <path
            d="M24.22 58.49c-1.76-.11-3.1-1.64-2.99-3.42.11-1.78 1.63-3.14 3.39-3.03 1.76.11 3.11 1.65 3 3.43-.12 1.78-1.64 3.13-3.4 3.02z"
            fill="url(#prefix__N)"
            transform="translate(627 270)"
          />
          <path
            d="M3.42 34.41c-1.76-.11-3.11-1.64-3-3.43a3.211 3.211 0 013.4-3.02c1.76.11 3.11 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__O)"
            transform="translate(627 270)"
          />
          <path
            d="M14.19 10.02c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.02 1.76.11 3.11 1.65 2.99 3.43a3.197 3.197 0 01-3.39 3.02z"
            fill="url(#prefix__P)"
            transform="translate(627 270)"
          />
          <path
            d="M45.54 19.23c-2.81-.18-4.95-2.63-4.78-5.47.18-2.84 2.61-5 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__Q)"
            transform="translate(627 270)"
          />
          <path
            d="M54.36 31.38c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.03 1.76.11 3.11 1.65 3 3.43-.11 1.79-1.64 3.14-3.4 3.03z"
            fill="url(#prefix__R)"
            transform="translate(627 270)"
          />
          <path
            d="M33.56 7.3c-1.76-.11-3.11-1.65-3-3.43.11-1.79 1.64-3.14 3.4-3.03 1.76.11 3.1 1.64 2.99 3.43-.11 1.79-1.63 3.14-3.39 3.03z"
            fill="url(#prefix__S)"
            transform="translate(627 270)"
          />
          <path
            d="M52.49 131.16c-8.5-.54-14.95-7.93-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.53 8.58-7.84 15.1-16.34 14.57z"
            fill="url(#prefix__T)"
            transform="translate(627 236)"
          />
          <path
            d="M69.63 136.99c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.95 7.93 14.41 16.52-.53 8.58-7.85 15.11-16.34 14.57z"
            fill="url(#prefix__U)"
            transform="translate(627 236)"
          />
          <path
            d="M67.46 116.21c-8.49-.54-14.94-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.93 14.41 16.52-.54 8.58-7.85 15.1-16.34 14.57z"
            fill="url(#prefix__ay)"
            transform="translate(627 236)"
          />
          <path
            d="M32.12 91.42c-5.36-.34-9.44-5.01-9.1-10.43.34-5.41 4.96-9.54 10.32-9.19 5.36.34 9.44 5.02 9.1 10.42-.34 5.42-4.95 9.54-10.32 9.2z"
            fill="url(#prefix__W)"
            transform="translate(627 236)"
          />
          <path
            d="M64.442 31.121c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.53 8.58-7.85 15.11-16.34 14.57z"
            fill="url(#prefix__X)"
            transform="translate(627 236)"
          />
          <path
            d="M26.7 117.47c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.54 8.58-7.85 15.1-16.34 14.57z"
            fill="url(#prefix__Y)"
            transform="translate(627 236)"
          />
          <path
            d="M40.59 36.11c-4.7-.3-8.27-4.39-7.98-9.14.3-4.74 4.35-8.35 9.05-8.06 4.69.3 8.27 4.39 7.97 9.14-.29 4.75-4.34 8.36-9.04 8.06z"
            fill="url(#prefix__Z)"
            transform="translate(627 236)"
          />
          <path
            d="M29.16 46.52c-1.77-.11-3.1-1.65-2.99-3.43.11-1.79 1.63-3.14 3.39-3.03 1.76.11 3.1 1.64 2.99 3.43-.11 1.79-1.63 3.14-3.39 3.03z"
            fill="url(#prefix__aa)"
            transform="translate(627 236)"
          />
          <path
            d="M16.09 93.82c-1.76-.11-3.1-1.64-2.99-3.42.11-1.79 1.63-3.14 3.39-3.02 1.76.11 3.11 1.64 3 3.43a3.21 3.21 0 01-3.4 3.01z"
            fill="url(#prefix__ab)"
            transform="translate(627 236)"
          />
        </g>
        <g fillRule="nonzero">
          <path
            d="M1.11 1.89z"
            transform="translate(694 262)"
            fill="url(#prefix__ac)"
          />
          <path
            d="M42.24 61.41c-3.12-.2-5.48-2.91-5.28-6.04.19-3.13 2.87-5.53 5.99-5.33 3.09.2 5.45 2.92 5.26 6.04-.2 3.13-2.87 5.52-5.97 5.33z"
            fill="url(#prefix__ad)"
            transform="translate(619 161)"
          />
          <path
            d="M42.96 95.8c-2.82-.18-4.95-2.63-4.78-5.47.18-2.84 2.6-5.01 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.84-2.6 5-5.41 4.83z"
            fill="url(#prefix__ae)"
            transform="translate(619 161)"
          />
          <path
            d="M30.98 83.86c-1.76-.11-3.11-1.64-3-3.42.11-1.79 1.63-3.14 3.4-3.03 1.76.11 3.11 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__L)"
            transform="translate(619 161)"
          />
          <path
            d="M25.5 37.16c-2.81-.18-4.96-2.63-4.78-5.47.18-2.84 2.6-5.01 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__M)"
            transform="translate(619 161)"
          />
          <path
            d="M24.22 57.71c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.02 1.76.11 3.11 1.65 3 3.43-.12 1.78-1.64 3.13-3.4 3.02z"
            fill="url(#prefix__af)"
            transform="translate(619 161)"
          />
          <path
            d="M3.42 33.63c-1.76-.11-3.11-1.64-3-3.43a3.211 3.211 0 013.4-3.02c1.76.11 3.11 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__O)"
            transform="translate(619 161)"
          />
          <path
            d="M14.19 9.24c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.03 1.76.11 3.11 1.65 2.99 3.43a3.198 3.198 0 01-3.39 3.03z"
            fill="url(#prefix__ag)"
            transform="translate(619 161)"
          />
          <path
            d="M45.54 18.46c-2.81-.18-4.95-2.63-4.78-5.47.18-2.84 2.61-5 5.42-4.83 2.81.18 4.94 2.63 4.77 5.47-.18 2.85-2.6 5.01-5.41 4.83z"
            fill="url(#prefix__Q)"
            transform="translate(619 161)"
          />
          <path
            d="M54.36 30.6c-1.76-.11-3.1-1.64-2.99-3.43.11-1.78 1.63-3.14 3.39-3.03 1.76.11 3.11 1.65 3 3.43-.11 1.79-1.64 3.14-3.4 3.03z"
            fill="url(#prefix__R)"
            transform="translate(619 161)"
          />
          <path
            d="M33.56 6.52c-1.76-.11-3.11-1.65-3-3.42.11-1.79 1.64-3.14 3.4-3.03 1.76.11 3.1 1.64 2.99 3.43-.11 1.78-1.63 3.13-3.39 3.02z"
            fill="url(#prefix__ah)"
            transform="translate(619 161)"
          />
          <path
            d="M53.49 112.38c-8.5-.54-14.95-7.93-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.53 8.58-7.84 15.11-16.34 14.57z"
            fill="url(#prefix__ai)"
            transform="translate(619 145)"
          />
          <path
            d="M70.63 118.22c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.95 7.94 14.41 16.52-.53 8.58-7.85 15.1-16.34 14.57z"
            fill="url(#prefix__aj)"
            transform="translate(619 145)"
          />
          <path
            d="M68.46 97.43c-8.49-.54-14.94-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.93 14.41 16.52-.54 8.58-7.85 15.11-16.34 14.57z"
            fill="url(#prefix__ak)"
            transform="translate(619 145)"
          />
          <path
            d="M31.91 72.64c-5.36-.34-9.44-5.01-9.1-10.43.34-5.41 4.96-9.54 10.32-9.19 5.36.34 9.44 5.02 9.1 10.42-.34 5.42-4.95 9.54-10.32 9.2z"
            fill="url(#prefix__W)"
            transform="translate(619 145)"
          />
          <path
            d="M19.442 53.121c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.53 8.58-7.85 15.11-16.34 14.57zM25.442 106.121c-8.49-.54-14.95-7.94-14.41-16.52.53-8.58 7.85-15.11 16.34-14.57 8.49.54 14.94 7.94 14.41 16.52-.54 8.58-7.85 15.11-16.34 14.57z"
            fill="url(#prefix__X)"
            transform="translate(619 145)"
          />
          <path
            d="M40.38 17.34c-4.7-.3-8.27-4.39-7.98-9.14.3-4.74 4.35-8.35 9.05-8.06 4.69.3 8.27 4.39 7.97 9.14-.29 4.74-4.34 8.36-9.04 8.06z"
            fill="url(#prefix__al)"
            transform="translate(619 145)"
          />
          <path
            d="M28.95 27.74c-1.77-.11-3.1-1.65-2.99-3.43.11-1.79 1.63-3.14 3.39-3.03 1.76.11 3.1 1.64 2.99 3.43-.11 1.79-1.63 3.15-3.39 3.03z"
            fill="url(#prefix__am)"
            transform="translate(619 145)"
          />
          <path
            d="M17.09 75.05c-1.76-.11-3.1-1.64-2.99-3.42.11-1.79 1.63-3.14 3.39-3.02 1.76.11 3.11 1.64 3 3.43a3.217 3.217 0 01-3.4 3.01z"
            fill="url(#prefix__an)"
            transform="translate(619 145)"
          />
        </g>
        <g>
          <path
            stroke="#FFF"
            strokeWidth={2.127}
            d="M647.63 329.99l37.62-49.37-36.02-45.89 30.21-60.57"
          />
          <g fillRule="nonzero">
            <path
              fill="#00DDD2"
              d="M643.88 311.64l-8.53 11.5 5.63 13.12 8.56-11.56z"
            />
            <path
              fill="#00CCBD"
              d="M663.83 326.34l-14.29-1.64-8.56 11.56 14.35 1.77z"
            />
            <path
              fill="#00FFEC"
              d="M658.11 313.15l-14.23-1.51 5.66 13.06 14.29 1.64z"
            />
          </g>
          <g fillRule="nonzero">
            <path
              fill="#00DDD2"
              d="M671.22 283.03l9.15 11.01 14.08-2.36-9.2-11.06z"
            />
            <path
              fill="#00CCBD"
              d="M690.24 267.13l-4.99 13.49 9.2 11.06 5.13-13.52z"
            />
            <path
              fill="#00FFEC"
              d="M676.06 269.56l-4.84 13.47 14.03-2.41 4.99-13.49z"
            />
          </g>
          <g fillRule="nonzero">
            <path
              fill="#D9007F"
              d="M654.74 221.6l-14.2 1.81-5.58 13.14 14.27-1.82z"
            />
            <path
              fill="#AC006B"
              d="M657.94 246.18l-8.71-11.45-14.27 1.82 8.65 11.58z"
            />
            <path
              fill="#FF00A6"
              d="M663.5 232.92l-8.76-11.32-5.51 13.13 8.71 11.45z"
            />
          </g>
          <g fillRule="nonzero">
            <path
              fill="#009BDD"
              d="M684.95 161.03l-14.2 1.81-5.58 13.14 14.27-1.82z"
            />
            <path
              fill="#2B73B5"
              d="M688.15 185.61l-8.71-11.45-14.27 1.82 8.65 11.59z"
            />
            <path
              fill="#56ABDD"
              d="M693.71 172.35l-8.76-11.32-5.51 13.13 8.71 11.45z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
