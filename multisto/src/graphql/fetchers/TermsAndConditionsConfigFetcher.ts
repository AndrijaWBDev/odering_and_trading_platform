import type { FieldOptions, DirectiveArgs } from "graphql-ts-client-api";
import type { ObjectFetcher } from "graphql-ts-client-api";
import { createFetcher, createFetchableType } from "graphql-ts-client-api";
import type { WithTypeName, ImplementationType } from "../CommonTypes";

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 *
 * So any instance of this interface is reuseable.
 */
export interface TermsAndConditionsConfigFetcher<
  T extends object,
  TVariables extends object
> extends ObjectFetcher<"TermsAndConditionsConfig", T, TVariables> {
  on<
    XName extends ImplementationType<"TermsAndConditionsConfig">,
    X extends object,
    XVariables extends object
  >(
    child: ObjectFetcher<XName, X, XVariables>,
    fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
  ): TermsAndConditionsConfigFetcher<
    XName extends "TermsAndConditionsConfig"
      ? T & X
      : WithTypeName<T, ImplementationType<"TermsAndConditionsConfig">> &
          (
            | WithTypeName<X, ImplementationType<XName>>
            | {
                __typename: Exclude<
                  ImplementationType<"TermsAndConditionsConfig">,
                  ImplementationType<XName>
                >;
              }
          ),
    TVariables & XVariables
  >;

  directive(
    name: string,
    args?: DirectiveArgs
  ): TermsAndConditionsConfigFetcher<T, TVariables>;

  readonly __typename: TermsAndConditionsConfigFetcher<
    T & { __typename: ImplementationType<"TermsAndConditionsConfig"> },
    TVariables
  >;

  readonly link: TermsAndConditionsConfigFetcher<
    T & { readonly link: string },
    TVariables
  >;

  "link+"<
    XAlias extends string = "link",
    XDirectives extends { readonly [key: string]: DirectiveArgs } = {},
    XDirectiveVariables extends object = {}
  >(
    optionsConfigurer: (
      options: FieldOptions<"link", {}, {}>
    ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
  ): TermsAndConditionsConfigFetcher<
    T &
      (XDirectives extends { readonly include: any } | { readonly skip: any }
        ? { readonly [key in XAlias]?: string }
        : { readonly [key in XAlias]: string }),
    TVariables & XDirectiveVariables
  >;

  readonly "~link": TermsAndConditionsConfigFetcher<
    Omit<T, "link">,
    TVariables
  >;

  readonly text: TermsAndConditionsConfigFetcher<
    T & { readonly text: string },
    TVariables
  >;

  "text+"<
    XAlias extends string = "text",
    XDirectives extends { readonly [key: string]: DirectiveArgs } = {},
    XDirectiveVariables extends object = {}
  >(
    optionsConfigurer: (
      options: FieldOptions<"text", {}, {}>
    ) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
  ): TermsAndConditionsConfigFetcher<
    T &
      (XDirectives extends { readonly include: any } | { readonly skip: any }
        ? { readonly [key in XAlias]?: string }
        : { readonly [key in XAlias]: string }),
    TVariables & XDirectiveVariables
  >;

  readonly "~text": TermsAndConditionsConfigFetcher<
    Omit<T, "text">,
    TVariables
  >;
}

export const termsAndConditionsConfig$: TermsAndConditionsConfigFetcher<
  {},
  {}
> = createFetcher(
  createFetchableType(
    "TermsAndConditionsConfig",
    "EMBEDDED",
    [],
    ["link", "text"]
  ),
  undefined
);

export const termsAndConditionsConfig$$ = termsAndConditionsConfig$.link.text;
