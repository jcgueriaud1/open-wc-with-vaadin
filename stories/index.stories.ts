import { html, TemplateResult } from 'lit-html';
import '../xaadin-details.js';

export default {
  title: 'XaadinDetails',
  component: 'xaadin-details',
  argTypes: {
    opened: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  opened?: boolean;
  disabled?: boolean;
  slot: TemplateResult
}

const Template: Story<ArgTypes> = ({
  opened = true,
  disabled = false,
  slot,
}: ArgTypes) => html`
  <xaadin-details
    ?opened="${opened}"
    ?disabled="${disabled}"
  >
    ${slot}
  </xaadin-details>
`;

export const CustomOpened = Template.bind({});
CustomOpened.args = {
  opened: false,
  slot: html`
  <div slot="summary">Title</div>
  Example`,
};
CustomOpened.argTypes = {
  slot: { table: { disable: true } },
};

export const CustomDisable = Template.bind({});

CustomDisable.args = {
  disabled: false,
  slot: html`<div slot="summary">Title</div>
  Example`,
};
CustomDisable.argTypes = {
  slot: { table: { disable: true } },
};
export const Regular = Template.bind({});