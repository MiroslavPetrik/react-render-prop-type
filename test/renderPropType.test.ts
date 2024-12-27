import type { RenderProp, RP } from '../src';

export type ExpectWorksWithoutParams = RenderProp;

export type ExpectHasChildrenRenderPropByDefault = RenderProp['children'];

export type ExpectWorksWithCustomProps = RenderProp<{ name: string }>;

export type ExpectWorksWithCustomName = RenderProp<
  { name: string },
  'myRenderProp'
>['myRenderProp'];

type ExpectWorksWithUnion = RenderProp<{ icon: string }, 'before' | 'after'>;
export type BeforeRenderProp = ExpectWorksWithUnion['before'];
export type AfterRenderProp = ExpectWorksWithUnion['after'];

export type ExpectWorksShortNoParams = RP;
