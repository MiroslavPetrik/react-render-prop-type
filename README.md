# react-render-prop-type

Handy helper for components which need to have render prop.

## Installation

`yarn add react-render-prop-type`

## Description

By default the renderProp will extend your props with a `children` render prop:

```tsx
type ColumnProps = {
  rowId: string;
};

const Column = ({
  rowId,
  attr,
  children /* <- default name */,
}: ColumnProps &
  RenderProp<{
    data: string;
  } /* <- props to be passed to the render function */>) => {
  const row = useFakeTable(rowId);

  return (
    <td>
      {children(
        { data: row[attr] } /* <- props to be passed to the render function */
      )}
    </td>
  );
};

const PhoneColumn = (props: ColumnProps) => (
  <Column {...columnProps} attr="phone">
    {({ data }) => <a href={`tel:${data}`}>{data}</a>}
  </Column>
);

const AvatarColumn = (props: ColumnProps) => (
  <Column {...columnProps} attr="imageUrl">
    {({ data }) => <Avatar img={data} />}
  </Column>
);
```

Optionally, you can specify custom prop name, e.g. when you can't use the default children prop.

```tsx
type ColumnProps = {
  rowId: string;
};

const Column = ({
  rowId,
  attr,
  render, // <- custom name
}: ColumnProps &
  RenderProp<{ data: string }, 'render' /* <- custom name */>) => {
  const row = useFakeTable(rowId); // mock example

  return <td>{render({ data: row[attr] })}</td>;
};

const PhoneColumn = (props: ColumnProps) => (
  <Column
    {...columnProps}
    attr="phone"
    render={({ data }) => <a href={`tel:${data}`}>{data}</a>}
  />
);

const AvatarColumn = (props: ColumnProps) => (
  <Column
    {...columnProps}
    attr="imageUrl"
    render={({ data }) => <Avatar img={data} />}
  />
);
```

### Advanced Example

Let's assume we are developing library component `FormField` which renders input and we want to enable our library users to decorate the input with `before` and `after` props. Both of these props receive current input value, so the before/after nodes can be styled accordingly:

```tsx
import { RenderProp } from 'react-render-prop-type';

type Props = { name: string } & RenderProp<
  { value: string },
  'before' | 'after'
>;

const FormField = ({ before, after }: Props) => {
  const { value, ...control } = useFakeFormField({ name }); // mock example

  return (
    <>
      {before({ value })}
      <input value={value} {...control} />
      {after({ value })}
    </>
  );
};

const IconForm = () => (
  <FormField
    name="amount"
    before={({ value }) => (value ? <SuccessIcon /> : <EmptyIcon />)}
    after={({ value }) => (value ? <SuccessIcon /> : <EmptyIcon />)}
  />
);
```
