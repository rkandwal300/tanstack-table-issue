import { ZodObject, ZodTypeAny } from "zod";

function generateEmptyValue(schema: ZodTypeAny): any {
  const type = schema._def.typeName;

  switch (type) {
    case "ZodString":
      return "";
    case "ZodNumber":
      return 0;
    case "ZodBoolean":
      return false;
    case "ZodDate":
      return new Date();
    case "ZodArray":
      return [];
    case "ZodObject":
      const emptyObject: any = {};
      for (const key in (schema as ZodObject<any>).shape) {
        emptyObject[key] = generateEmptyValue(
          (schema as ZodObject<any>).shape[key]
        );
      }
      return emptyObject;
    case "ZodUnion":
      // For unions, we can try the first type, but this might not always be correct
      return generateEmptyValue((schema as any)._def.options[0]);
    case "ZodEnum":
      // Return the first enum value as a default empty value
      return (schema as any)._def.options[0];
    default:
      return null; // Fallback for unsupported types
  }
}

export function zodCreateEmptyObject<T>(schema: ZodTypeAny): T {
  if (schema._def.typeName === "ZodObject") {
    const emptyObject: any = {};
    for (const key in (schema as ZodObject<any>).shape) {
      emptyObject[key] = generateEmptyValue(
        (schema as ZodObject<any>).shape[key]
      );
    }
    return emptyObject as T;
  } else {
    throw new Error("The provided schema is not an object schema.");
  }
}
export function ZodCreateInitialValues<T>(schema: ZodTypeAny): T {
  const dataWithNullValues = zodCreateEmptyObject(schema);
  return removeNullValues(dataWithNullValues as { [key: string]: any }) as T;
}

export function removeNullValues(obj: { [key: string]: any }) {
  // Iterate over the object's keys
  for (const key in obj) {
    // If the value of the key is null, delete the key-value pair
    if (obj[key] === null) {
      delete obj[key];
    }
  }
  // Return the modified object
  return obj;
}
