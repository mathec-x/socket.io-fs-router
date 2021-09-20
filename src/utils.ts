export const getMethodKey = (m: string) => {
  let method = m.toLowerCase();
  return (method === "del") ? "delete" : method
}

export const getName = (name: String) => name.startsWith("index.")
? name.replace("index", "")
: name === "index"
  ? ""
  : name

  export const getEventName = (arr: any[]) => arr.filter(e => e).join(':')