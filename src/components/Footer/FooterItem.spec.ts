import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FooterItem from "./FooterItem.vue";

describe("Footer", () => {
  it("should renders 'More of my projects on :' ", () => {
    const wrapper = mount(FooterItem);
    expect(wrapper.find("div").text()).toContain("More of my projects on :");
  });
});
