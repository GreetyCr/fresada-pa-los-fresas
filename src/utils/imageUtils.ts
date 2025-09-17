/**
 * Utilidades para manejo de imágenes
 */

// Imagen placeholder por defecto
export const PLACEHOLDER_IMAGE = '/images/assets/placeholder.svg';

/**
 * Obtiene la URL de imagen con fallback
 * @param imagePath - Ruta de la imagen
 * @returns URL de imagen con fallback
 */
export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return PLACEHOLDER_IMAGE;
  return imagePath;
};

/**
 * Maneja el error de carga de imagen
 * @param event - Evento de error de imagen
 */
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (img.src !== PLACEHOLDER_IMAGE) {
    img.src = PLACEHOLDER_IMAGE;
  }
};
