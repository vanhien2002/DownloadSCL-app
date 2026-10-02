function isEmpty(url?: string): boolean {
  return !url || typeof url !== "string" || url.trim() === "";
}
function isValid(url: string): boolean {
  const soundCloudRegex =
    /^(https?:\/\/)?(www\.)?(soundcloud\.com|on\.soundcloud\.com)(\/.*)?$/i;


  return soundCloudRegex.test(url.trim());
}

const urlValidator = () => ({
  isEmpty: (url?: string) => isEmpty(url),
  isValid: (url: string) => isValid(url),
});

export default urlValidator;
