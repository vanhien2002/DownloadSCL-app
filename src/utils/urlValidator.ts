function isEmpty(url) {
  return !url || typeof url != "string" || url.trim() == "";
}
function isValid(url) {
  const soundCloudRegex =
    /^(https?:\/\/)?(www\.)?(soundcloud\.com|on\.soundcloud\.com)(\/.*)?$/i;


  return soundCloudRegex.test(url.trim());
}

const urlValidator = () => ({
  isEmpty: (url) => isEmpty(url),
  isValid: (url) => isValid(url),
});

export default urlValidator;
