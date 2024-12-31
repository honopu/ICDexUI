export const isSigner = (): boolean => {
  const priList = JSON.parse(localStorage.getItem('priList')) || {};
  const principal = localStorage.getItem('principal');
  const type = priList[principal];
  return type === 'SignerNFID' || type === 'SignerPlug';
};
