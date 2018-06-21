// @flow
type Conversion = [number, string]

const lookup: Conversion[] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

export const convert = (arabic: number): string => {
  if (arabic === 0) return ''

  const [num, roman] = lookup.find(([a]) => a <= arabic) || []
  return roman + convert(arabic - num)
}
