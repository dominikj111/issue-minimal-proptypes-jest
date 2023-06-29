import React from "react";
import { render } from "@testing-library/react";
import Component from "../src/Component";

describe("Test of basic component", () => {
	it("Should render with default value", () => {
		const rendered = render( <Component />);
		expect(rendered.container.innerHTML).toBe("<div>Hello World</div>");
	});

	it("Should render with provided value", () => {
		const rendered = render( <Component name="John" />);
		expect(rendered.container.innerHTML).toBe("<div>Hello John</div>");
	});
});
