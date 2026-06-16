export const getFakeViews = (params: { launchDate: Date }) => {
  const days = Math.floor(
    (Date.now() - params.launchDate.getTime()) / 86400000,
  );

  return 1000 + days * 37;
};
