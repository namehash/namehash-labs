export const getEnsAvatarSrc = (addressOrEnsName: string): string => {
  return `https://metadata.ens.domains/mainnet/avatar/${addressOrEnsName}`;
};
