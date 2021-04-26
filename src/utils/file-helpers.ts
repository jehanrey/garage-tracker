export const getBase64 = async (file: File) : Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result!.toString())
  reader.onerror = error => reject(error)
})