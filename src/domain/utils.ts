// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toPlainObject = (
    objectWithFunctions: Record<string, any>
): Record<string, any> => {
    return JSON.parse(JSON.stringify(objectWithFunctions))
}
