# Guía de Personalización del Wizard (Tu Ciudad)

Esta guía explica **cómo personalizar los pasos del wizard**, **vincular Servicios Generales por categoría y subcategoría**, y **expandir categorías** sin romper la UI ni la funcionalidad.

---

## 1) Estructura general (conceptos clave)

* **`WIZARD_STEPS`**: arreglo que define los pasos en orden. Cada paso tiene `key`, `label`, `render()`, `validate()`, `save()`, `onEnter()`.
* **`TEMPLATES`**: funciones que devuelven el HTML (como string) del contenido de cada paso.
* **`BUSINESS_CATEGORIES`**: configuración de categorías y subcategorías. Aquí defines **qué Servicios Generales** se muestran por defecto para una categoría y posibles **sobrescrituras por subcategoría**.
* **`GENERAL_SERVICES_CATALOG`**: catálogo maestro de servicios disponibles (id → etiqueta + icono).

> Todo se renderiza dinámicamente. No hay que tocar el HTML del modal: los indicadores, la barra de progreso y los contenedores se generan a partir de `WIZARD_STEPS`.

---

## 2) Cómo **agregar un paso nuevo**

1. **Duplica** uno de los objetos dentro de `WIZARD_STEPS`.
2. Ajusta:

   * `key`: identificador interno único (sin espacios).
   * `label`: nombre visible del paso.
   * `render`: apunta a una función en `TEMPLATES` o crea una nueva.
   * (Opcional) `validate`: retorna `true` si se puede avanzar; `false` con un `alert()` si falta algo.
   * (Opcional) `save`: copia valores del DOM al objeto `wizardData`.
   * (Opcional) `onEnter`: lógica que se ejecuta al entrar al paso (p. ej. poblar datos).

**Ejemplo básico:**

```js
WIZARD_STEPS.push({
  key: "promociones",
  label: "Promociones",
  render: TEMPLATES.promociones, // crea este template
  validate: () => true,
  save: () => {
    wizardData.promos = collectPromosFromUI();
  },
  onEnter: () => initPromoUI(),
});
```

**Nuevo template minimal:**

```js
TEMPLATES.promociones = () => `
  <h4 class="text-xl font-bold text-gray-800 mb-6">Promociones</h4>
  <div class="space-y-4">
    <input id="promo-desc" class="w-full px-4 py-2 border rounded-lg" placeholder="Descripción"/>
    <input id="promo-vig" class="w-full px-4 py-2 border rounded-lg" placeholder="Vigencia"/>
  </div>
`;
```

---

## 3) Cómo **reordenar** pasos

* Simplemente cambia el orden de los objetos dentro de `WIZARD_STEPS`.
* Los **indicadores** y el **botón Siguiente/Registrar** se ajustan solos.

**Ejemplo:** mover "Confirmación" al último índice del arreglo.

---

## 4) Hacer que **Servicios Generales** sea un paso dedicado

Actualmente, los Servicios Generales aparecen integrados en el paso **“Giro y Servicios”**. Para separarlo:

1. Crea un template dedicado:

```js
TEMPLATES.generalServices = () => `
  <h4 class="text-xl font-bold text-gray-800 mb-6">Servicios Generales</h4>
  <div id="general-services-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"></div>
`;
```

2. Agrega el paso en `WIZARD_STEPS` **después** del paso de selección de categoría:

```js
{
  key: "servicios",
  label: "Servicios Generales",
  render: TEMPLATES.generalServices,
  validate: () => true,
  onEnter: () => {
    const cat = BUSINESS_CATEGORIES[wizardData.categoria];
    const sub = cat?.subcategories?.find(s => s.id === wizardData.giro);
    const keys = sub?.generalServices?.length ? sub.generalServices : (cat?.generalServices || []);
    renderGeneralServices(keys);
  }
}
```

3. Asegúrate de **no duplicar** el render de servicios en el paso de “Giro”. Quita/oculta el bloque de servicios allí.

---

## 5) Vincular **Servicios Generales** por **categoría** y **subcategoría**

* Define servicios por **categoría** en `BUSINESS_CATEGORIES[catId].generalServices = ["domicilio","whatsapp",...]`.
* Sobrescribe servicios por **subcategoría** con `sub.generalServices = ["efectivo","tarjetas",...]`.
* El sistema ya aplica la prioridad: **subcategoría** > **categoría**.

**Ejemplo:**

```js
const BUSINESS_CATEGORIES = {
  alimentos: {
    id: "alimentos",
    name: "Alimentos y Bebidas",
    generalServices: ["domicilio","whatsapp","efectivo","tarjetas"],
    subcategories: [
      { id: "restaurante", name: "Restaurante" },
      { id: "servicar", name: "Servicar", generalServices: ["domicilio","efectivo","tarjetas","aire"] },
      { id: "comida_ambulante", name: "Comida ambulante", generalServices: ["efectivo","whatsapp"] },
    ],
  },
};
```

> Si una subcategoría **no** define `generalServices`, se usan los de su categoría.

---

## 6) Agregar/editar ítems del **catálogo de servicios**

* Cada servicio se define en `GENERAL_SERVICES_CATALOG` con **id**, **label** e **icon** (clase Font Awesome):

```js
const GENERAL_SERVICES_CATALOG = {
  domicilio:   { label: "Servicio a domicilio", icon: "fas fa-truck" },
  tarjetas:    { label: "Acepta tarjetas", icon: "fas fa-credit-card" },
  // agrega más...
};
```

* Para **mostrar** un servicio, usa su `id` dentro de `generalServices` de la categoría/subcategoría.

---

## 7) Crear nuevas **categorías** y **subcategorías**

1. Añade un bloque nuevo dentro de `BUSINESS_CATEGORIES` con: `id`, `name`, `icon`, `color`, `generalServices`, `subcategories`.
2. Agrega subcategorías como arreglos de objetos `{ id, name, description?, generalServices? }`.
3. (Opcional) En la UI de selección de categorías, algunas pueden mostrarse **“Próximamente”** si decides deshabilitarlas; controla esto con tu lógica (p. ej., `const disabled = c.id !== "alimentos"`).

**Ejemplo de categoría nueva:**

```js
servicios: {
  id: "servicios",
  name: "Servicios",
  icon: "fas fa-tools",
  color: "bg-blue-500",
  generalServices: ["garantia","reparacion","mantenimiento","whatsapp","transferencia"],
  subcategories: [
    { id: "plomeria", name: "Plomería", generalServices: ["cotizacion","whatsapp","efectivo"] },
    { id: "electricidad", name: "Electricidad" },
  ],
}
```

> Asegúrate de que **cada `id` sea único**.

---

## 8) Captura de datos: `save()` y `wizardData`

* Usa `save()` para leer inputs del DOM y guardarlos en `wizardData`.
* Ejemplo en paso General:

```js
save: () => {
  wizardData.nombre = document.getElementById("business-name")?.value?.trim();
  wizardData.propietario = document.getElementById("business-owner")?.value?.trim();
  // ...
}
```

* En pasos posteriores (p. ej., Confirmación), sólo **lees** `wizardData` para renderizar un resumen.

---

## 9) Validación: `validate()`

* Retorna `true` para permitir avanzar.
* Si falta un campo, muestra `alert()` y retorna `false`.
* Ejemplo:

```js
validate: () => {
  const required = ["business-name","business-owner","business-phone","business-address"];
  for (const id of required) {
    const el = document.getElementById(id);
    if (!el || !el.value?.trim()) { alert("Completa los campos obligatorios."); return false; }
  }
  return true;
}
```

---

## 10) Hooks de ciclo de vida: `onEnter()`

* Se ejecuta **cada vez que entras** a un paso.
* Útil para: poblar listas, inicializar selects, cargar servicios generales con `renderGeneralServices(keys)`.

---

## 11) Mantener la **UI intacta**

* No edites el HTML del modal.
* **Sólo** agrega/edita items en:

  * `WIZARD_STEPS` (flujo)
  * `TEMPLATES` (contenido)
  * `BUSINESS_CATEGORIES` y `GENERAL_SERVICES_CATALOG` (datos)
* La navegación, indicadores y botones ya se ajustan automáticamente.

---

## 12) Ejemplos de **escenarios comunes**

### A) Hacer “Servicios Generales” el **Paso 4** y “Confirmación” el **Paso 5**

1. Crea `TEMPLATES.generalServices` (sección 4).
2. Inserta el paso `{ key: "servicios", ... }` **antes** del de `confirmacion`.
3. Mueve la lógica de render de servicios desde "Giro y Servicios" a `onEnter` del nuevo paso.

### B) Añadir un paso “Redes Sociales”

* Template con inputs (Facebook, Instagram, WhatsApp) y `save()` → `wizardData.redes = { fb, ig, wa }`.

### C) Habilitar una nueva categoría “Comercio y Ventas” con subcategorías

* Agrega la categoría en `BUSINESS_CATEGORIES` con `generalServices` base, y sobrescrituras por subcategoría si aplica.

---

## 13) Utilidades ya listas

* `renderGeneralServices(keys)` → Pinta las checkboxes de servicios según ids.
* `updateGeneralServices()` → Actualiza `wizardData.serviciosGenerales` con lo seleccionado.
* `populateSpecificDetails()` y `populateConfirmation()` → Ejemplos de cómo poblar secciones.

---

## 14) Troubleshooting

* **No aparece un nuevo paso**: revisa que `render:` apunte a un `TEMPLATES.*` existente y que el objeto esté **dentro** de `WIZARD_STEPS`.
* **Servicios no cambian al seleccionar subcategoría**: confirma que el `id` de la subcategoría en `BUSINESS_CATEGORIES` **coincide** con el que pasas a `selectSubcategory()`.
* **Validación bloquea sin razón**: inspecciona los `id` de inputs requeridos; deben coincidir con los que revisa `validate()`.
* **Iconos no se ven**: confirma que la clase Font Awesome exista y el CDN esté cargado.

---

## 15) Checklist de personalización rápida

* [ ] Agregué/edité el **paso** en `WIZARD_STEPS` (key/label/render/validate/save/onEnter)
* [ ] Creé/edité el **template** en `TEMPLATES`
* [ ] Definí/actualicé **Servicios Generales** en `BUSINESS_CATEGORIES` y (opcional) por subcategoría
* [ ] Probé validaciones y guardado en `wizardData`
* [ ] Verifiqué que la **UI se mantenga** sin cambios de estilo

---

## 16) Referencia rápida (snippets)

**Agregar servicio nuevo al catálogo:**

```js
GENERAL_SERVICES_CATALOG.delivery24h = { label: "Entrega 24h", icon: "fas fa-shipping-fast" };
```

**Asignarlo a una categoría:**

```js
BUSINESS_CATEGORIES.alimentos.generalServices.push("delivery24h");
```

**Sobrescribir en una subcategoría:**

```js
const sc = BUSINESS_CATEGORIES.alimentos.subcategories.find(s=>s.id==="food_truck");
sc.generalServices = ["efectivo","tarjetas","delivery24h"];
```

---

### Nota final

La clave es mantener **datos y UI desacoplados**: todo lo que cambies en `WIZARD_STEPS`, `TEMPLATES`, `BUSINESS_CATEGORIES` y `GENERAL_SERVICES_CATALOG` **no altera** el layout visual existente, pero te da flexibilidad total para escalar el wizard.
