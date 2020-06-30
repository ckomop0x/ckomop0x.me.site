const getSrcSet = (imageUrl: string) => {
  const imageSrc320 = `${imageUrl}?tr=w-480,h-480,fo-top 640w`;
  const imageSrc640 = `${imageUrl}?tr=w-660,h-660,fo-top 768w`;
  const imageSrc768 = `${imageUrl}?tr=w-900,h-900,fo-top 993w`;
  const imageSrc993 = `${imageUrl}?tr=w-993,h-993,fo-top 1920w`;

  return `${imageSrc320}, ${imageSrc640}, ${imageSrc768}, ${imageSrc993}`;
};

export default getSrcSet;
