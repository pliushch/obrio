export const getId = (url: string) => {
  const idRegExp = /\/([0-9]*)\/$/;
  const id: RegExpMatchArray | null = url.match(idRegExp);
  return id ? id[1] : null;
};
