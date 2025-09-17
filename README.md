# 🌹 Fresada pa' los fresas - Catálogo de Gorras

Una aplicación web moderna para mostrar un catálogo de gorras premium con funcionalidades avanzadas de filtrado y búsqueda.

## ✨ Características

- **🎨 Modo Oscuro/Claro**: Toggle entre temas con persistencia en localStorage
- **📱 Mobile First**: Diseño completamente responsive
- **🔍 Búsqueda Avanzada**: Filtros por marca, color y búsqueda de texto
- **⚡ Rendimiento**: Construido con React + Vite + TypeScript
- **🎯 UX Moderna**: Animaciones suaves y efectos hover
- **♿ Accesibilidad**: Componentes accesibles y semánticamente correctos

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Estado**: React Hooks + Context API
- **Tipado**: TypeScript estricto

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd fresada-pa-los-fresas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta ESLint para encontrar errores

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx          # Encabezado con logo y toggle de tema
│   ├── FilterSidebar.tsx   # Panel de filtros lateral/móvil
│   ├── ProductCard.tsx     # Tarjeta de producto individual
│   ├── ProductGrid.tsx     # Grilla de productos
│   ├── Footer.tsx          # Pie de página
│   ├── ThemeContext.tsx    # Contexto para manejo de tema
│   └── ThemeToggle.tsx     # Botón para cambiar tema
├── hooks/
│   ├── useTheme.ts         # Hook para manejo de tema
│   └── useFilter.ts        # Hook para filtros y búsqueda
├── data/
│   └── gorras.ts           # Datos del catálogo
├── types/
│   └── index.ts            # Tipos TypeScript
├── App.tsx                 # Componente principal
├── main.tsx               # Punto de entrada
├── index.css              # Estilos base Tailwind
└── App.css                # Animaciones personalizadas
```

## 🎨 Marcas Disponibles

- **Clemont**: Gorras premium con bordados elegantes
- **Fe**: Diseños minimalistas y modernos
- **Amiri**: Estilo urbano de lujo
- **Hugo Boss**: Elegancia clásica alemana
- **Puma**: Deportivo y funcional

## 🎯 Funcionalidades Principales

### Filtros Inteligentes
- Filtrado por marca y color
- Búsqueda de texto en tiempo real
- Contador de resultados
- Limpieza rápida de filtros

### Responsive Design
- **Móvil**: 1 columna, sidebar deslizable
- **Tablet**: 2-3 columnas
- **Desktop**: 3-4 columnas, sidebar fijo

### Indicadores de Stock
- Alerta visual para pocas unidades (≤2)
- Contador de disponibilidad
- Estados diferenciados por color

## 🚀 Deploy

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar build command: `npm run build`
3. Output directory: `dist`
4. Deploy automático

### Netlify
1. Conectar repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Build Manual
```bash
npm run build
# Los archivos se generarán en la carpeta 'dist'
```

## 🎨 Personalización

### Colores del Tema
Editar `tailwind.config.js`:
```javascript
colors: {
  brand: {
    red: '#dc2626',    // Color principal
    dark: '#0f0f0f',   // Fondo oscuro
  }
}
```

### Datos del Catálogo
Modificar `src/data/gorras.ts` para agregar o editar productos.

## 📱 Compatibilidad

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Dispositivos móviles iOS y Android

## 🤝 Contribuir

1. Fork el proyecto
2. Crear branch para feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

**Fresada pa' los fresas** - Donde el estilo encuentra la calidad 🌹

## 🚀 Enlaces Importantes

- **🌐 Repositorio GitHub**: https://github.com/GreetyCr/fresada-pa-los-fresas
- **📱 Demo en Vivo**: [Deploy en Vercel](https://fresada-pa-los-fresas.vercel.app)
- **💻 Desarrollo Local**: `http://localhost:5173`

## ⚡ Deploy Rápido

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GreetyCr/fresada-pa-los-fresas)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/GreetyCr/fresada-pa-los-fresas)