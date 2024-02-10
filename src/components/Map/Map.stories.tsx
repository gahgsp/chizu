import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Map from "./Map";

const meta = {
  title: "Core/Map",
  component: Map,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Wrapper to define a minimum size to height and width for the Map Container.
 * This way the Map component can be rendered correctly.
 * @returns The Map component wrapped in a div with a pre-defined size.
 */
const WrappedMap = () => {
  return (
    <div style={{ width: "600px", height: "600px" }}>
      <Map id="wrapped-map" />
    </div>
  );
};

export const Default: Story = {
  args: {
    id: "my-map",
  },
  render: () => <WrappedMap />,
};
