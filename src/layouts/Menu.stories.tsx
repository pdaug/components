import type { Meta, StoryObj } from "@storybook/react";

import { Vertical } from "../components/aligns/Align";

const meta: Meta = {
  title: "Layout/Menu",
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <Vertical internal={1}>
        <div>e</div>
        <div>e</div>
      </Vertical>
    );
  },
};
