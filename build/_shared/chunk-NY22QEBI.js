// src/utils/meta.ts
var formatTags = (tags) => {
  return Object.entries(tags).map(([key, value]) => ({
    name: key,
    content: value
  }));
};
var formatProperties = (properties) => {
  return Object.entries(properties).map(([key, value]) => ({
    property: key,
    content: value
  }));
};

export {
  formatTags,
  formatProperties
};
//# sourceMappingURL=/build/_shared/chunk-NY22QEBI.js.map
