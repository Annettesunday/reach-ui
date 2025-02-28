/**
 * Accessible combobox (autocomplete or autosuggest) component for React.
 *
 * A combobox is the combination of an `<input type="text"/>` and a list. The
 * list is designed to help the user arrive at a value, but the value does not
 * necessarily have to come from that list. Don't think of it like a
 * `<select/>`, but more of an `<input type="text"/>` with some suggestions. You
 * can, however, validate that the value comes from the list, that's up to your
 * app.
 *
 * @see Docs     https://reacttraining.com/reach-ui/combobox
 * @see Source   https://github.com/reach/reach-ui/tree/master/packages/combobox
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#combobox
 */

import * as React from "react";

/**
 * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-props
 */
export type ComboboxProps = {
  /**
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-children
   */
  children?: React.ReactNode;
  /**
   * Called with the selection value when the user makes a selection from the
   * list.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-onselect
   */
  onSelect?: (value: string) => void;
  /**
   * If true, the popover opens when focus is on the text box.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-openonfocus
   */
  openOnFocus?: boolean;
  /**
   * React component or HTML element to render as. Defaults to `div`.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#combobox-as
   */
  as?: string;
} & Omit<React.HTMLProps<HTMLElement>, "onSelect">;

/**
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-props
 */
export type ComboboxInputProps = {
  /**
   * If true, when the user clicks inside the text box the current value will
   * be selected. Use this if the user is likely to delete all the text anyway
   * (like the URL bar in browsers).
   *
   * However, if the user is likely to want to tweak the value, leave this
   * false, like a google search--the user is likely wanting to edit their
   * search, not replace it completely.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-selectonclick
   */
  selectOnClick?: boolean;
  /**
   * Determines if the value in the input changes or not as the user navigates
   * with the keyboard. If true, the value changes, if false the value doesn't
   * change.
   *
   * Set this to false when you don't really need the value from the input but
   * want to populate some other state (like the recipient selector in Gmail).
   * But if your input is more like a normal `<input type="text"/>`, then leave
   * the `true` default.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-autocomplete
   */
  autocomplete?: boolean;
  /**
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-value
   */
  value?: string;
  /**
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput-as
   */
  as?: string;
} & React.HTMLProps<HTMLElement>;

/**
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxpopover-props
 */
export type ComboboxPopoverProps = {
  /**
   * If you pass `<ComboboxPopover portal={false} />` the popover will not
   * render inside of a portal, but in the same order as the React tree. This
   * is mostly useful for styling the entire component together, like the pink
   * focus outline in the example earlier in this page.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxpopover-portal
   */
  portal?: boolean;
} & React.HTMLProps<HTMLElement>;

/**
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxlist-props
 */
export type ComboboxListProps = {
  /**
   * Defaults to false. When true and the list is opened, if an option's value
   * matches the value in the input, it will automatically be highlighted and
   * be the starting point for any keyboard navigation of the list.
   *
   * This allows you to treat a Combobox more like a `<select>` than an
   * `<input/>`, but be mindful that the user is still able to put any
   * arbitrary value into the input, so if the only valid values for the input
   * are from the list, your app will need to do that validation on blur or
   * submit of the form.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxlist-persistselection
   */
  persistSelection?: boolean;
  /**
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxlist-as
   */
  as?: string;
} & React.HTMLProps<HTMLElement>;

/**
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoption-props
 */
export type ComboboxOptionProps = {
  /**
   * Optional. If omitted, the `value` will be used as the children like as:
   * `<ComboboxOption value="Seattle, Tacoma, Washington" />`. But if you need
   * to control a bit more, you can put whatever children you want, but make
   * sure to render a `ComboboxOptionText` as well, so the value is still
   * displayed with the text highlighting on the matched portions.
   *
   * @example
   *   <ComboboxOption value="Apple" />
   *     🍎 <ComboboxOptionText />
   *   </ComboboxOption>
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoption-children
   */
  children?: React.ReactNode;
  /**
   * The value to match against when suggesting.
   *
   * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoption-value
   */
  value: string;
} & React.HTMLProps<HTMLElement>;

/**
 * Accessible combobox (autocomplete or autosuggest) component for React.
 *
 * A combobox is the combination of an `<input type="text"/>` and a list. The
 * list is designed to help the user arrive at a value, but the value does not
 * necessarily have to come from that list. Don't think of it like a
 * `<select/>`, but more of an `<input type="text"/>` with some suggestions.
 * You can, however, validate that the value comes from the list, that's up to
 * your app.
 *
 * @see Docs https://reacttraining.com/reach-ui/combobox#combobox
 */
declare const Combobox: React.FunctionComponent<ComboboxProps>;

/**
 * Wraps an `<input/>` with a couple extra props that work with the combobox.
 *
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxinput
 */
declare const ComboboxInput: React.FunctionComponent<ComboboxInputProps>;

/**
 * Contains the popup that renders the list. Because some UI needs to render
 * more than the list in the popup, you need to render one of these around the
 * list. For example, maybe you want to render the number of results suggested.
 *
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxpopover
 */
declare const ComboboxPopover: React.FunctionComponent<ComboboxPopoverProps>;

/**
 * Contains the `ComboboxOption` elements and sets up the proper aria
 * attributes for the list.
 *
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxlist
 */
declare const ComboboxList: React.FunctionComponent<ComboboxListProps>;

/**
 * An option that is suggested to the user as they interact with the combobox.
 *
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoption
 */
declare const ComboboxOption: React.FunctionComponent<ComboboxOptionProps>;

/**
 * Renders the value of a `ComboboxOption` as text but with spans wrapping the
 * matching and non-matching segments of text.
 *
 * @example
 *   <ComboboxOption value="Seattle">
 *     🌧 <ComboboxOptionText />
 *   </ComboboxOption>
 *
 * @see Docs https://reacttraining.com/reach-ui/combobox#comboboxoptiontext
 */
declare const ComboboxOptionText: React.FunctionComponent;
