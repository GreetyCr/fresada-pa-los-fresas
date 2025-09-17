# ADR-001: Selección de Tecnologías para Catálogo Fresada

## Estado
Aceptado

## Fecha
2025-09-17

## Contexto
Necesitamos desarrollar una aplicación web moderna para mostrar un catálogo de gorras con funcionalidades de filtrado, búsqueda y tema oscuro/claro. La aplicación debe ser responsive, rápida y fácil de mantener.

## Decisión
Hemos decidido usar el siguiente stack tecnológico:

### Frontend Framework
- **React 18 con TypeScript**: Para componentes reutilizables y tipado estático
- **Vite**: Para desarrollo rápido y build optimizado
- **Tailwind CSS**: Para estilos utilitarios y diseño responsive

### Gestión de Estado
- **React Hooks**: useState, useEffect para estado local
- **Context API**: Para tema oscuro/claro global
- **Custom Hooks**: Para lógica reutilizable (useTheme, useFilter)

### UI y UX
- **Lucide React**: Iconos consistentes y ligeros
- **CSS Animations**: Animaciones CSS nativas para mejor rendimiento
- **Mobile First**: Diseño responsive prioritizando móviles

## Consecuencias

### Positivas
- ✅ Desarrollo rápido con Vite
- ✅ Tipado estático reduce errores
- ✅ Tailwind permite desarrollo UI rápido
- ✅ Bundle pequeño y optimizado
- ✅ SEO friendly con SSR potencial
- ✅ Fácil mantenimiento y testing

### Negativas
- ❌ Curva de aprendizaje de Tailwind
- ❌ Build time adicional para TypeScript
- ❌ Complejidad inicial para proyectos pequeños

## Alternativas Consideradas

1. **Vue + Nuxt**: Descartado por preferencia del equipo por React
2. **Next.js**: Exceso de funcionalidad para una SPA simple
3. **Styled Components**: Tailwind ofrece mejor consistencia
4. **Redux**: Context API suficiente para el estado actual

## Implementación
- Estructura modular con componentes reutilizables
- Hooks personalizados para lógica compartida
- Configuración de Tailwind con tema personalizado
- TypeScript estricto para mejor desarrollo
