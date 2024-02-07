export const formatTags = (tags: Record<string, string>) => {
  return Object.entries(tags).map(([key, value]) => ({
    name: key,
    content: value,
  }));
};

export const formatProperties = (properties: Record<string, string>) => {
  return Object.entries(properties).map(([key, value]) => ({
    property: key,
    content: value,
  }));
};
