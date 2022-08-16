import { FunctionComponent } from 'react';

export type RenderProp<
  Props = {},
  PropName extends string = 'children'
> = Record<PropName, FunctionComponent<Props>>;
