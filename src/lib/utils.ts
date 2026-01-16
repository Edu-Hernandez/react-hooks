import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//esta funcion da prioridad a nuestras clases de tailwind sobre las de clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
