/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<0a2f29f637e210ccdba80fe00b3c5afb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type withProvidedVariablesTest3Fragment$fragmentType: FragmentType;
export type withProvidedVariablesTest3Fragment$ref = withProvidedVariablesTest3Fragment$fragmentType;
export type withProvidedVariablesTest3Fragment$data = {|
  +name?: ?string,
  +friends: ?{|
    +count: ?number,
  |},
  +$fragmentType: withProvidedVariablesTest3Fragment$fragmentType,
|};
export type withProvidedVariablesTest3Fragment = withProvidedVariablesTest3Fragment$data;
export type withProvidedVariablesTest3Fragment$key = {
  +$data?: withProvidedVariablesTest3Fragment$data,
  +$fragmentSpreads: withProvidedVariablesTest3Fragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "__pv__provideIncludeUserNames"
    },
    {
      "kind": "RootArgument",
      "name": "__pv__provideNumberOfFriends"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "withProvidedVariablesTest3Fragment",
  "selections": [
    {
      "condition": "__pv__provideIncludeUserNames",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ]
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "__pv__provideNumberOfFriends"
        }
      ],
      "concreteType": "FriendsConnection",
      "kind": "LinkedField",
      "name": "friends",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "0aeab9b09822f587624b901c7564e55c";
}

module.exports = ((node/*: any*/)/*: Fragment<
  withProvidedVariablesTest3Fragment$fragmentType,
  withProvidedVariablesTest3Fragment$data,
>*/);
