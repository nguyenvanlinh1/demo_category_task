type Props = {
    func: (...args: any[]) => void;
    wait: number;
  };
  
  export function debounce({ func, wait }: Props) {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
  