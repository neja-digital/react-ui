export const keyToCssVariable = (str: string) => {
  return `--${str}`
}

export const mapStringListToOptions = (list: string[]) => {
  return list.map(s => <option key={s} value={s}>{s}</option>)
}
