import { match } from 'ts-pattern'

export function decrement(counter: number): number {
  return match(counter)
    .with(0, () => 0)
    .otherwise(x => x - 1)
}
