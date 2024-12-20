import { expect, it } from "vitest";
import Radio from "../../components/Radio/Radio";
import { renderWithProvider } from "../../testHelpers";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Radio name="radio" value="1" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      appearance: none;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      display: inline-block;
      height: 32px;
      width: 32px;
      vertical-align: middle;
      transition: background-color 0.2s ease-in-out;
      border: 0;
      border-radius: 50%;
      background-color: #0d0c0c;
      box-shadow: var(--shadows-inset);
      margin: 0;
    }

    .c0:after {
      border-radius: 50%;
      content: "";
      height: 20px;
      left: 6px;
      position: absolute;
      top: 6px;
      width: 20px;
    }

    .c0:hover:not(:disabled):not(:checked) {
      box-shadow: var(--shadows-focus);
    }

    .c0:focus {
      outline: none;
      box-shadow: var(--shadows-focus);
    }

    .c0:checked {
      border: 0;
      background-color: #0d0c0c;
    }

    .c0:checked:after {
      background-color: #0d0c0c;
    }

    .c0:disabled {
      border: 0;
      cursor: default;
      opacity: 0.6;
    }

    <input
        class="c0"
        name="radio"
        scale="md"
        type="radio"
        value="1"
      />
    </DocumentFragment>
  `);
});
