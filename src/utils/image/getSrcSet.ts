const getSrcSet = (imageUrl: string): string => {
  const imageSrcXS = `${imageUrl}?tr=w-480,h-480,fo-top 640w`;
  const imageSrcSM = `${imageUrl}?tr=w-660,h-660,fo-top 768w`;
  const imageSrcM = `${imageUrl}?tr=w-900,h-900,fo-top 993w`;
  const imageSrcL = `${imageUrl}?tr=w-993,h-993,fo-top 1920w`;

  return `${imageSrcXS}, ${imageSrcSM}, ${imageSrcM}, ${imageSrcL}`;
};

export default getSrcSet;
