export function emptyDecorator(value: string) {
  return (target: any) => {
    // empty
    target = value;
    return target;
  };
}
