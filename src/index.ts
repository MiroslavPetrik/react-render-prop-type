import type { FunctionComponent } from 'react';

export type RP<P = unknown, N extends string = 'children'> = RenderProp<P, N>;

export type RenderProp<
  Props = unknown,
  PropName extends string = 'children'
> = Record<PropName, FunctionComponent<Props>>;
