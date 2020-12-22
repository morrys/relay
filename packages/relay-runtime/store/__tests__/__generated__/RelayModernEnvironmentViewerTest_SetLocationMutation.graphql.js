/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<f969924e7d3de3c2afbad3a9749df094>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LocationInput = {|
  longitude?: ?number,
  latitude?: ?number,
|};
export type RelayModernEnvironmentViewerTest_SetLocationMutationVariables = {|
  input: LocationInput
|};
export type RelayModernEnvironmentViewerTest_SetLocationMutationResponse = {|
  +setLocation: ?{|
    +viewer: ?{|
      +marketplace_settings: ?{|
        +location: ?{|
          +latitude: ?number,
          +longitude: ?number,
        |}
      |}
    |}
  |}
|};
export type RelayModernEnvironmentViewerTest_SetLocationMutation = {|
  variables: RelayModernEnvironmentViewerTest_SetLocationMutationVariables,
  response: RelayModernEnvironmentViewerTest_SetLocationMutationResponse,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "setLocationResponsePayload",
    "kind": "LinkedField",
    "name": "setLocation",
    "selections": [
      {
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "selections": [
          {
            "concreteType": "MarketPlaceSettings",
            "kind": "LinkedField",
            "name": "marketplace_settings",
            "selections": [
              {
                "concreteType": "MarketPlaceSellLocation",
                "kind": "LinkedField",
                "name": "location",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "name": "latitude",
                  },
                  {
                    "kind": "ScalarField",
                    "name": "longitude",
                  }
                ],
              }
            ],
          }
        ],
      }
    ],
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "name": "RelayModernEnvironmentViewerTest_SetLocationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayModernEnvironmentViewerTest_SetLocationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9914988669278d6412b22158ffc20501",
    "metadata": {},
    "name": "RelayModernEnvironmentViewerTest_SetLocationMutation",
    "operationKind": "mutation",
    "text": "mutation RelayModernEnvironmentViewerTest_SetLocationMutation(\n  $input: LocationInput!\n) {\n  setLocation(input: $input) {\n    viewer {\n      marketplace_settings {\n        location {\n          latitude\n          longitude\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "eb0479436163e3d7e09b56e7a65fe412";
}

module.exports = node;
