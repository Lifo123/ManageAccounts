export const getData = async () => {
   try {
      const module = await import('../../Json/Accounts.json');
      const data = module.default;  // Accede al contenido JSON
      return data
   } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
   }
}
