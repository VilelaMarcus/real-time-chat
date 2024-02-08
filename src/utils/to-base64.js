export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', error => reject(error));
  });

/**
 * 
 * usage
 * 
 * in your function // somewhere
    const sumFunc = async() => {
        const result = await toBase64(file);
    }
*
*
 */
