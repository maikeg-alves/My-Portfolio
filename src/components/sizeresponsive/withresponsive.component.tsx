import { useMediaQuery } from '../windowssize/useMediaQuery';

export default function withResponsive(minSize: string, maxSize: string) {
  const area = (value: boolean) => {
    return value ? minSize : maxSize;
  };

  return area(useMediaQuery(960));
}
