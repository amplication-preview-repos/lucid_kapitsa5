import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";

export const ArticleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
