import { RenderProp } from '../src';

export type ExpectWorksWithoutParams = RenderProp;

export type ExpectHasChildrenRenderPropByDefault = RenderProp['children'];

export type ExpectWorksWithCustomProps = RenderProp<{ name: string }>;

export type ExpectWorksWithCustomName = RenderProp<
  { name: string },
  'myRenderProp'
>['myRenderProp'];

type ExpectWorksWithEnum = RenderProp<{ icon: string }, 'before' | 'after'>;
export type BeforeRenderProp = ExpectWorksWithEnum['before'];
export type AfterRenderProp = ExpectWorksWithEnum['after'];
